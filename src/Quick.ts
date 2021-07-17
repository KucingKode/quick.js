import Sketch from "./Sketch"
import theme from "./util/theme"

import Core from './core/core'

let colors

declare global {
    interface Window {
        Quick: any
    }
}

interface options {
    sketches: Sketch[]
    theme: any
}



let current, repeat = false, perform = null
const libraries: {
    libs: {name: string, version: string}[]
} = {
    libs: []
}

class Quick {
    /**
     * @description Quick.js sketches
     * @type {any}
     * @private
     */
    private _sketches = {}

    /**
     * @description Quick.js Version
     * @type {string}
     * @private
     */
    private _version: string = '2.0.0-beta'

    /**
     * @description Quick.js Core Version
     * @type {string}
     * @private
     */
    private _core_version: string = '1b'

    /**
     * @description store all intervals that have been set
     * and animation frame that have been requested
     * 
     * @type {number[]}
     * @private
     */
    private _ref: {
        interval: number[],
        animFr: number[],
        terminated: boolean
        initialized: boolean
        p1?: number
        pendingLibLinks: any[]
        content: string
    } = {
        interval: [],
        animFr: [],
        terminated: true,
        initialized: false,
        pendingLibLinks: [],
        content: ''
    }

    constructor() {
        const _setInterval: (handler: TimerHandler, timeout?: number, ...args: any[]) => any = window.setInterval
        window.setInterval = (handler: TimerHandler, timeout?: number, ...args: any[]) => {
            if(this._ref.terminated) return

            const newInterval = _setInterval(handler, timeout, ...args)
            this._ref.interval.push(newInterval)
            return newInterval
        }

        const _requestAnimationFrame = window.requestAnimationFrame
        window.requestAnimationFrame = (callback: FrameRequestCallback) => {
            if(this._ref.terminated) return

            const newAnimFr = _requestAnimationFrame(callback)
            this._ref.animFr.push(newAnimFr)
            return newAnimFr
        }
    }

    /**
     * @description Link quick.js library
     * @param {any} lib Quick.js library
     */
    link(lib: any) {
        this._ref.pendingLibLinks.push(lib)
    }

    // Main Operations
    /**
     * @description Run Quick.js
     * 
     * @param {?{theme?: string}} [options={}] options
     */
    run(options: {theme?: string} = {}) {
        if(!this._ref.initialized) {
            this._ref.initialized = true

            const browserScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ?
                'dark' : 'light'
            if(options.theme && (theme[options.theme] || theme[`${browserScheme}-${options.theme}`])) {
                colors = theme[`${browserScheme}-${options.theme}`]
                colors = colors ? colors : theme[options.theme]
            } else {
                colors = theme[`${browserScheme}-default`]
            }
    
            console.log(
                `\n` +
                `Hi!, This sketch was created with\n` +
                `Quick.js version ${this._version}😍\n` +
                `\n` +
                `%c\n` +
                `For more information, just type\n` +
                `\'Quick.help\' on console😁\n`

                , colors.highlight
            )

            this._ref.pendingLibLinks.forEach(lib => lib.link(this, colors))
            this._ref.content = document.querySelector('body')?.innerHTML || ''
        }

        perform = null
        this._ref.terminated = false
        document.querySelector('body').innerHTML = this._ref.content


        const sketches: Sketch[] = Object.values(this._sketches)
        if(sketches.length > 0) {
            let sketch = sketches[0]

            if(window.sessionStorage.getItem('QQ-default')) {
                sketch = this._sketches[window.sessionStorage.getItem('QQ-default')]
            } else {
                window.sessionStorage.removeItem('QQ-default')
            }

            current = sketch

            this._ref.p1 = performance.now()
            current.start(this.Core)
        }
    }
    
    /**
     * @description Switch to another quick.js project
     * @param {string} title Title of the sketch
     */
    switch(title: string) {
        if(this._sketches[title]) {
            const temp = repeat
            repeat = false
            this.terminate(() => {})
            repeat = temp

            this._ref.terminated = false
            document.querySelector('body').innerHTML = ''

            perform = null
            this._ref.p1 = performance.now()

            current = this._sketches[title]

            current.start(this.Core)
            return
        }
        console.log(`%cSketch with title "${title}" not found!`, colors.err)
        throw new Error('Sketch not found!')
    }

    /**
     * @description Reset current sketch
     */
    restart() {
        this.switch(current.title)
    }

    /**
     * @description Add library to Quick.js
     * @param {{name: string, version: string}} lib Library to be added
     */
    addLib(lib: {name: string, version: string}) {
        libraries.libs.push(lib)
    }

    /**
     * @description terminate Quick.js
     * 
     * @param {() => void} callback function to executed at
     * Quick program terminated
     */
    terminate(callback: () => void = () => console.log('Bye Bye 😭')) {
        perform = performance.now() - this._ref.p1
        this._ref.terminated = true
        
        this._ref.animFr.forEach(cancelAnimationFrame)
        this._ref.animFr = []
        this._ref.interval.forEach(clearInterval)
        this._ref.interval = []
        
        callback()
        if(repeat) {
            setTimeout(() => {
                this.switch(current.title)
            }, 750)
        }
    }

    /**
     * @description Add new sketch to quick js
     * @param {{title: string,note?: string}} options Sketch options
     * @param {(quick: typeof Core) => void} sketch Sketch
     */
    createSketch(options: {
        title: string,
        note?: string
    }, sketch: (quick: typeof Core) => void) {
        this._sketches[options.title] = (new Sketch(options, sketch))
    }

    /**
     * @description Quick.js Core library
     */
    Core = Core


    // Properties
    /**
     * @description Quick.js Version
     * @type {string}
     */
    get VERSION(): string {
        return this._version
    }
    /**
     * @description Quick.js Core Version
     * @type {string}
     */
    get CORE_VERSION(): string {
        return this._core_version
    }

    /**
     * @description Screen
     * @type {[width: number, height: number]}
     */
    get screenSize(): [width: number, height: number] {
        return [window.screen.width, window.screen.height]
    }

    /**
     * @description Quick.js sketches
     * @type {any}
     */
    get sketches(): any {
        return this._sketches
    }

    /**
     * @description Quick.js sketch
     * @param {(lib: typeof Core) => void} sketch new sketch
     */
    set sketch(sketch: (lib: typeof Core) => void) {
        this._sketches = { sketch: new Sketch({title: 'sketch'}, sketch) }
    }
}

const Q = new Quick()

window.Quick = new class {
    get help() {
        // basic
        const commands = [
            '%c Quick.help %c : log some usefull information for Quick console',
            '%c Quick.clear %c : clear console',
            '%c %c',
            '%c Quick.current %c : get current sketch title',
            '%c Quick.sketches %c : get sketches title',
            '%c Quick.switch( sketch_title ) %c : switch to another sketch',
            '%c Quick.default( sketch_title ) %c : set default sketch',
            '%c Quick.unsetDefault %c : remove default sketch option data',
            '%c %c',
            '%c Quick.terminate %c : terminate current sketch',
            '%c Quick.restart %c : restart current sketch',
            '%c Quick.repeat %c : repeat current sketch',
            '%c Quick.noRepeat %c : stop repeat current sketch',
            '%c %c',
            '%c Quick.version %c : get Quick.js version',
            '%c Quick.coreVersion %c : get Quick.js core version',
            '%c Quick.libs %c : get all library that linked with Quick.js'
        ]

        let styles = []
        commands.forEach(cmd => styles.push(
            colors.highlight,
            ''
        ))

        console.log(
            `\nAvailable commands:\n\n${commands.join('\n')}\n\n`,
            ...styles
        )

        return
    }
    get clear() {
        console.clear()
        return
    }

    // Sketch control
    get current() {
        console.log(`%c${current.title}`, colors.highlight)
        return
    }
    get sketches() {
        let sketches = []
        let styles = []
        Object.keys(Q.sketches).forEach(title => {
            sketches.push(`%c- %c${title}`)
            styles.push('', colors.highlight)
        })
        console.log(
            '\n' +
            'Sketches:\n' +
            '\n' +
            `${sketches.join('\n')}\n`,
            ...styles
        )
        return
    }
    default(title: string) {
        const sketches = Q.sketches
        if(sketches[title]) {
            window.sessionStorage.setItem('QQ-default', title)
            Q.terminate(() => {})
            Q.run()
        } else {
            console.log(`%cSketch with title "${title}" not found!`, colors.err)
            this.sketches
        }
        return
    }
    get unsetDefault() {
        window.sessionStorage.removeItem('QQ-default')
        Q.terminate(() => {})
        Q.run()
        return
    }
    get note() {
        console.log(current.note)
        return
    }


    // Runtime control
    get reset() {
        Q.restart()
        return
    }
    switch(title: string) {
        try {
            Q.switch(title)
        } catch(err) {
            this.sketches
        }
    }
    get terminate() {
        Q.terminate()
        return
    }
    get repeat() {
        repeat = true
        Q.restart()
        return
    }
    get noRepeat() {
        repeat = false
        return
    }
    get execTime() {
        if(!perform) {
            console.log('%cSketch not terminated yet...', colors.secondary)
            return
        }
        console.log(`%c${Math.floor(perform)} ms`, colors.warn)
        return
    }

    // Kits
    get version() {
        console.log('%c' + Q.VERSION, colors.highlight)
        return
    }
    get coreVersion() {
        console.log('%c' + Q.CORE_VERSION, colors.highlight)
        return
    }
    get libs() {
        let libs = []
        let styles = []
        libraries.libs.forEach(lib => {
            libs.push(`- %c${lib.name}%c@${lib.version}`)
            styles.push('', colors.highlight)
        })
        console.log(
            '\n' +
            'Libs:\n' +
            '' +
            `${libs.join('\n\t\t\t')}\n`,
            ...styles
        )
        return
    }
}()

export default Q as Quick
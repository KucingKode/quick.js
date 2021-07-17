import Kit2D from './Kit2D'

class Canvas2D {
    /**
     * @description HTML Canvas element for drawing
     * @private
     */
    private _canvas: HTMLCanvasElement = undefined
    /**
     * @description HTML Canvas context 2D
     * @private
     */
    private _c: CanvasRenderingContext2D = undefined
    /**
     * @description HTML Canvas context 2D
     * @private
     */
    private _kit: Kit2D = undefined
    /**
     * @description State of resize
     * @private
     */
    private _resized: boolean = true

    /**
     * 
     * @param {string} width width of new canvas
     * @param {string} height height of new canvas
     * @param {HTMLElement | string} parent parent element of the new canvas
     * @returns {Canvas2D}
     */
    constructor(width: string, height: string, parent: HTMLElement | string) {
        if(!parent) {
            throw new Error(`Parent must be a string or an element`)
        }

        this._canvas = document.createElement('canvas')
        let parentEl: HTMLElement

        this._canvas.style.width = width
        this._canvas.style.height = height

        if(typeof parent == 'string') {
            parentEl = document.querySelector(parent)
        } else {
            parentEl = parent
        }

        parentEl.appendChild(this._canvas)
        this.resize()

        window.addEventListener('resize', () => {
            this.resize()
        })
    }

    // Generator
    /**
     * 
     * @param {HTMLCanvasElement} canvas canvas HTML element
     */
    static fromCanvas(canvas: HTMLCanvasElement): Canvas2D {
        if(!canvas) {
            throw new Error(`canvas can't be null`)
        }
        const c = new Canvas2D('0px','0px', 'body')
        c._canvas.remove()

        c._canvas = canvas
        c.resize()

        return c
    }

    // Operations
    /**
     * @description Resize the canvas
     */
    resize(): void {
        this._canvas.width = +getComputedStyle(this._canvas).width.replace('px', '')
        this._canvas.height = +getComputedStyle(this._canvas).height.replace('px', '')
        this._resized = true
    }

    /**
     * @description Set canvas background color
     * @param {string} color color
     */
    background(color: string) {
        this._canvas.style.backgroundColor = color
    }


    // Properties
    /**
     * @description Width of canvas element
     * @type {number}
     */
    get width(): number {
        return this._canvas.width
    }
    set width(width: number) {
        this._canvas.width = width
        this.resize()
    }

    /**
     * @description Height of canvas element
     * @type {number}
     */
    get height(): number {
        return this._canvas.height
    }
    set height(height: number) {
        this._canvas.height = height
        this.resize()
    }

    // Getters
    /**
     * @description Context 2d of Canvas element
     * @type {CanvasRenderingContext2D}
     */
    get ctx(): CanvasRenderingContext2D {
        if(this._resized || !this._c) {
            this._c = this._canvas.getContext('2d')
        }
        return this._c
    }

    /**
     * @description Kit 2D of canvas, Kit 2D is object contain
     * improved canvas drawing functions
     * 
     * @type {Kit2D}
     */
    get kit(): Kit2D {
        if(!this._kit) {
            this._kit = new Kit2D(this)
        }
        return this._kit
    }

    /**
     * @description Style of Canvas element
     * @type {CSSStyleDeclaration}
     */
    get style(): CSSStyleDeclaration {
        return this._canvas.style
    }

    /**
     * @description Computed style of Canvas element
     * @type {CSSStyleDeclaration}
     */
    get computedStyle(): CSSStyleDeclaration {
        return getComputedStyle(this._canvas)
    }

    /**
     * @description HTML element of Canvas2D
     * @type {HTMLCanvasElement}
     */
    get element(): HTMLCanvasElement {
        return this._canvas
    }

    /**
     * @description canvas position
     * @type {{x: number, y: number}}
     */
    get pos(): {x: number, y: number} {
        const bounding = this._canvas.getBoundingClientRect()
        return {x: bounding.top, y: bounding.left}
    }
}

export default Canvas2D
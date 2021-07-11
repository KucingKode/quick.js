import Quick from '../../Quick'
import $Core from './core'

import Canvas2D from './lib/Canvas2D'
import Artisan from './lib/Artisan'

let colors = {
    ok: '',
    err: '',
    warn: '',
    secondary: '',
    highlight: ''
}

class Canvas {
    /**
     * @description Library version
     * @private
     */
    private version: string = '1.0.0'

    /**
     * @description Quick.js supported core version
     * @private
     */
    private _supported_versions: string[] = [
        '1a'
    ]


    /**
     * @description Link library with Quick.js
     * 
     * @param quick Quick.js
     * @returns {void}
     */
    link(quick: typeof Quick, quickColors: any) {
        if($Core.Core) return
        
        if(!new Set(this.SUPPORTED_VERSION).has(quick.CORE_VERSION)) {
            this.err(quick.VERSION, quick.CORE_VERSION)
        }
        
        quick.addLib({name: 'Qanvas', version: this.version})
        $Core.VERSION = quick.CORE_VERSION
        $Core.Core = quick.Core

        colors = quickColors
        
        console.log(
            '\n' +
            'Qanvas Library Linked🎉\n' +
            'Happy Drawing🎨\n' +
            '\n' +
            '%c' +
            `Version: ${this.version}\n` +
            `Core: ${$Core.VERSION}\n`,
            colors.ok
        )
    }

    /**
     * @description Generate error message
     * @param VERSION Quick.js version
     * @param CORE_VERSION Quick.js Core Version
     * 
     * @private
     */
    private err(VERSION, CORE_VERSION) {
        const err =
        `\n` +
        `%c\n` +
        `Quick with verion %c${VERSION}%c and\n` +
        `with core version %c${CORE_VERSION}%c,\n` +
        `is unsupported by Qanvas Library 😢\n` +
        `\n\n` +
        `%c\n` +
        `🤔 Supported Core Version:\n` +
        `${this.SUPPORTED_VERSION.join(' , ')}\n`

        console.log(err,
            '',
            colors.err,
            '',
            colors.err,
            '',
            colors.ok
        )
        throw ': Quick.js Core Version Unsupported!'
    }

    /**
     * @description Qanvas supported Quick.js core versions
     * @type {string[]}
     */
    get SUPPORTED_VERSION(): string[] {
        return this._supported_versions
    }

    /**
     * @description Qanvas library
     */
    get lib() {
        if(!$Core.Core) {
            const err =
            `\n` +
            `Qanvas %cLibrary was not linked!%c\n` +
            `To use this library, please link\n` +
            `this library with Quick.js\n` +
            `%c\n` +
            `🤔 Quick.js supported core version:\n` +
            `${this.SUPPORTED_VERSION.join(' or ')}\n`
            
            console.log(err,
                colors.err,
                '',
                colors.ok
            )
            throw ': Qanvas Not Linked!'
        }
        return {
            Artisan,
            Canvas2D
        }
    }
}


export default (new Canvas)
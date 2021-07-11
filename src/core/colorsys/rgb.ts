import util from '../std/utility'

class RGB {
    /**
     * @description RGB components
     * @type {number[]}
     * @private
     */
    private _comp: number[] = [0, 0, 0]

    /**
     * 
     * @param {number} r Red
     * @param {number} g Green
     * @param {number} b Blue
     * @param {number} a Alpha
     */
    constructor(r: number, g: number, b: number, a?: number) {
        this._comp = a ? [r, g, b, a] : [r, g, b]
    }

    // Generator
    /**
     * @description Create RGB color from hex code
     * @param {string} code Hex Code
     * @returns {RGB}
     */
    static fromHex(code: string): RGB {
        if(code.startsWith('#')) {
            code = code.substr(1)
        } else if(code.startsWith('0x')) {
            code = code.substr(2)
        }

        let r = '0', g = '0', b = '0', a = undefined

        if(code.length == 3) {
            r = '0x' + code[0] + code[0]
            g = '0x' + code[1] + code[1]
            b = '0x' + code[2] + code[2]
            
        }
        if(code.length == 4) {
            r = '0x' + code[0] + code[0]
            g = '0x' + code[1] + code[1]
            b = '0x' + code[2] + code[2]
            a = '0x' + code[3] + code[3]
            
            a = +(+a / 255).toFixed(3)
        }
        if(code.length == 6) {
            r = '0x' + code[0] + code[1]
            g = '0x' + code[2] + code[3]
            b = '0x' + code[4] + code[5]
            
        }
        if(code.length == 8) {
            r = '0x' + code[0] + code[1]
            g = '0x' + code[2] + code[3]
            b = '0x' + code[4] + code[5]
            a = '0x' + code[6] + code[7]
            
            a = +(+a / 255).toFixed(3)
        }

        return new RGB(+r, +g, +b, a)
    }

    /**
     * @description Create RGB color from HSL color
     * @param {number[]} components HSL components
     * @returns {RGB}
     */
    static fromHSL(components: number[]) {
        let h = components[0], s = components[1], l = components[2], a = components[3] || undefined
        let r = 0, g = 0, b = 0

        s /= 100
        l /= 100

        let c = (1 - Math.abs(2 * l - 1)) * s
        let x = c * (1 - Math.abs((h / 60) % 2 - 1))
        let m = l - c/2

        if (0 <= h && h < 60) {
            r = c
            g = x
            b = 0
        } else if (60 <= h && h < 120) {
            r = x
            g = c
            b = 0
        } else if (120 <= h && h < 180) {
            r = 0
            g = c
            b = x
        } else if (180 <= h && h < 240) {
            r = 0
            g = x
            b = c
        } else if (240 <= h && h < 300) {
            r = x
            g = 0
            b = c
        } else if (300 <= h && h < 360) {
            r = c
            g = 0
            b = x
        }

        r = util.round((r + m) * 255)
        g = util.round((g + m) * 255)
        b = util.round((b + m) * 255)

        return new RGB(r, g, b, a)
    }

    /**
     * @description Return string representation
     * of this RGB color
     * 
     * @returns {string}
     */
    toString() {
        return this._comp.length == 4 ?
            `rgba(${this._comp[0]},${this._comp[1]},${this._comp[2]},${this._comp[3]})` :
            `rgb(${this._comp[0]},${this._comp[1]},${this._comp[2]})`
    }

    /**
     * @description Return hex code representation
     * of this RGB color
     * 
     * @returns {string}
     */
    toHex() {
        let r = `${ (this._comp[0]).toString(16) }`
        let g = `${ (this._comp[1]).toString(16) }`
        let b = `${ (this._comp[2]).toString(16) }`
        let a = this._comp[3] ? `${ util.round(this._comp[3] * 255).toString(16) }` : ''

        r.length == 1 ? r = `0${r}` : ''
        g.length == 1 ? g = `0${g}` : ''
        b.length == 1 ? b = `0${b}` : ''
        a.length == 1 ? a = `0${a}` : ''

        return `0x${r}${g}${b}${a}`
    }

    // Properties

    /**
     * @description RGB components
     * @type {number[]}
     */
    get comp() {
        return Object.assign([], this._comp)
    }
    set comp(comp: number[]) {
        this._comp = comp
    }

    /**
     * @description Red value of this color
     * @type {number}
     */
    get r() {
        return this._comp[0]
    }
    set r(r: number) {
        this._comp[0] = r
    }

    /**
     * @description Green value of this color
     * @type {number}
     */
    get g() {
        return this._comp[1]
    }
    set g(g: number) {
        this._comp[1] = g
    }

    /**
     * @description Blue value of this color
     * @type {number}
     */
    get b() {
        return this._comp[2]
    }
    set b(b: number) {
        this._comp[2] = b
    }

    /**
     * @description Alpha value of this color
     * @type {number}
     */
    get a() {
        return this._comp[3]
    }
    set a(a: number) {
        this._comp[3] = a
    }
}

export default RGB
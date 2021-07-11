import util from '../std/utility'
import RGB from './rgb'

class HSL {
    /**
     * @description HSL components
     * @type {number[]}
     * @private
     */
    private _comp: number[] = [0, 0, 0]
    
    /**
     * 
     * @param {number} h Hue
     * @param {number} s Saturation
     * @param {number} l Lightness
     * @param {number} a Alpha
     */
    constructor(h: number, s: number, l: number, a?: number) {
        this._comp = a ? [h, s, l, a] : [h, s, l]
    }

    // Generator
    /**
     * @description Create HSL color from hex code
     * @param {string} code Hex Code
     * @returns {HSL}
     */
    static fromHex(code: string): HSL {
        const rgb = RGB.fromHex(code)
        return HSL.fromRGB(rgb.comp)
    }

    /**
     * @description Create HSL color from RGB color
     * @param {number[]} components RGB components
     * @returns {HSL}
     */
    static fromRGB(components: number[]): HSL {
        let r = components[0] / 255, g = components[1] / 255, b = components[2] / 255, a = components[3] || undefined
        let h = 0, s = 0, l = 0

        const cmin = util.min([r, g, b])
        const cmax = util.max([r, g, b])
        const delta = cmax - cmin


        // Calculate hue
        if(delta == 0) h = 0
        else if(cmax == r ) h = ((g - b) / delta) % 6
        else if(cmax == g ) h = ((b - r) / delta) + 2
        else if(cmax == b ) h = ((r - g) / delta) + 4


        h = Math.round(h * 60)
        h < 0 ? h += 360 : ''

        // calculate lightness
        l = (cmax + cmin) / 2

        // Calculate Saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs((2 * l) - 1))


        l = +(l * 100).toFixed(1)
        s = +(s * 100).toFixed(1)
        return new HSL(h, s, l, a)
    }

    /**
     * @description Return string representation
     * of this HSL color
     * 
     * @returns {string}
     */
    toString(): string {
        return this._comp.length == 4 ?
            `hsla(${this._comp[0]},${this._comp[1]}%,${this._comp[2]}%,${this._comp[3]})` :
            `hsl(${this._comp[0]},${this._comp[1]}%,${this._comp[2]}%)`
    }

    /**
     * @description Return hex code representation
     * of this HSL color
     * 
     * @returns {string}
     */
    toHex(): string {
        const rgb = RGB.fromHSL(this.comp)
        return rgb.toHex()
    }

    // Properties
    /**
     * @description HSL components
     * @type {number[]}
     */
    get comp() {
        return Object.assign([], this._comp)
    }
    set comp(components: number[]) {
        this._comp = components
    }

    /**
     * @description Hue of this color
     * @type {number}
     */
    get h() {
        return this._comp[0]
    }
    set h(h: number) {
        this._comp[0] = h
    }

    /**
     * @description Saturation of this color
     * @type {number}
     */
    get s() {
        return this._comp[1]
    }
    set s(s: number) {
        this._comp[1] = s
    }

    /**
     * @description Lightness of this color
     * @type {number}
     */
    get l() {
        return this._comp[2]
    }
    set l(l: number) {
        this._comp[2] = l
    }

    /**
     * @description Alpha of this color
     * @type {number}
     */
    get a() {
        return this._comp[3]
    }
    set a(a: number) {
        this._comp[3] = a
    }
}

export default HSL
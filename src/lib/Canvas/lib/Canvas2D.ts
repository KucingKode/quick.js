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
     * @description State of resize
     * @private
     */
    private _resized: boolean = true

    /**
     * 
     * @param {HTMLCanvasElement} canvas canvas HTML element
     */
    constructor(canvas: HTMLCanvasElement) {
        if(!canvas) {
            throw new Error(`canvas can't be null`)
        }
        this._canvas = canvas
        
        window.addEventListener('resize', () => {
            this.resize()
        })

        this.resize()
    }

    // Generator

    /**
     * @description Create a new Canvas element
     * 
     * @param {string} width width of new canvas
     * @param {string} height height of new canvas
     * @param {HTMLElement | string} parent parent element of the new canvas
     * @returns {Canvas2D}
     */
    static create(width: string, height: string, parent: HTMLElement | string): Canvas2D {
        if(!parent) {
            throw new Error(`Parent must be a string or an element`)
        }
        const canvas = document.createElement('canvas')
        let parentEl: HTMLElement

        canvas.style.width = width
        canvas.style.height = height

        if(typeof parent == 'string') {
            parentEl = document.querySelector(parent)
        } else {
            parentEl = parent
        }

        parentEl.appendChild(canvas)
        return new Canvas2D(canvas)
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

    /**
     * @description Canvas element
     * @type {HTMLCanvasElement}
     */
    get element(): HTMLCanvasElement {
        return this._canvas
    }
    set element(element: HTMLCanvasElement) {
        console.warn(`It's unrecomended to change the canvas element!`)
        this._canvas = element
    }

    // Getters
    /**
     * @description Context 2d of Canvas element
     * @type {CanvasRenderingContext2D}
     */
    get c(): CanvasRenderingContext2D {
        if(this._resized || !this._c) {
            this._c = this._canvas.getContext('2d')
        }
        return this._c
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

    get pos(): [x: number, y: number] {
        const bounding = this._canvas.getBoundingClientRect()
        return [bounding.top, bounding.left]
    }
}

export default Canvas2D
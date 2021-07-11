import $Core from '../core'
import Canvas2D from "./Canvas2D";

type canvasStyle = string | CanvasGradient | CanvasPattern
type angleUnit = "RADIAN" | "DEGREE"
type coordinatesSystem = "CARTESIAN" | "NORMAL" | "PHYSICS"
interface canvasOptions {
    style?: canvasStyle
    alpha?: number
    compositeOperation?: string
    disableImageSmoothing?: boolean
}
interface strokeOptions {
    style?: canvasStyle
    width?: number
    cap?: CanvasLineCap
    join?: CanvasLineJoin
    dash?: number[]
    dashOffset?: number
    miterLimit?: number
}
interface shadowOptions {
    color?: string
    blur?: number
    xOffset?: number
    yOffset?: number
}
interface fontOptions {
    style?: "normal" | "italic" | "oblique"
    obliqueAngle?: number
    variant?: string
    weight?: string
    stretch?: string
    size?: string
    lineHeight?: string
    family?: string
    system?: string
}

/**
 * @typedef {("RADIAN" | "DEGREE")} angleUnit
 * @typedef {("CARTESIAN" | "NORMAL" | "PHYSICS")} coordinatesSystem
 * @typedef {(string | CanvasGradient | CanvasPattern)} canvasStyle
 * @typedef {{
 *    style?: string | CanvasGradient | CanvasPattern,
 *    alpha?: number,
 *    compositeOperation?: string
 *    disableImageSmoothing?: boolean
 * }} artisanOption
 * 
 * @typedef {{
 *     style?: canvasStyle
 *     width?: number
 *     cap?: CanvasLineCap
 *     join?: CanvasLineJoin
 *     dash?: number[]
 *     dashOffset?: number
 *     miterLimit?: number
 * }} strokeOptions
 * 
 * @typedef {{
 *     color?: string
 *     blur?: number
 *     xOffset?: number
 *     yOffset?: number
 * }} shadowOptions
 * 
 * @typedef {{
 *     style?: "normal" | "italic" | "oblique"
 *     obliqueAngle?: number
 *     variant?: string
 *     weight?: string
 *     stretch?: string
 *     size?: string
 *     lineHeight?: string
 *     family?: string
 *     system?: string
 * }} fontOptions
 */


/**
 * @class
 * @classdesc Artisan will help you to draw
 * everyting in your canvas!
 */
class Artisan {
    /**
     * @description Quick.js core
     * @private
     * @readonly
     */
    private readonly __core = $Core.Core

    /**
     * @description Artisan's task to be done
     * @type {(() => void)[][]}
     * @private
     */
    private _tasks: (() => void)[][] = []
    private _styles: Map<string, () => void> = new Map()

    /**
     * @description reference data
     * @type {{
     *     isOnPath: boolean
     *     isClosed: boolean
     *     firstObjectIndex: number
     *     save?: any
     * }}
     * @private
     */
    private _ref: {
        isOnPath: boolean
        isClosed: boolean
        firstObjectIndex: number
        save?: any
        firstLinePoint: boolean
    } = {
        isOnPath: false,
        isClosed: true,
        firstObjectIndex: 0,
        firstLinePoint: true
    }

    /**
     * @description Artisan configuration
     * @private
     */
    private _config: {
        canvasFillStyle: canvasStyle
        fps?: number
        angleUnit: angleUnit
        coordinatesSystem: coordinatesSystem
    } = {
        canvasFillStyle: 'rgba(0, 0, 0, 0)',
        fps: null,
        angleUnit: 'RADIAN',
        coordinatesSystem: 'NORMAL'
    }

    /**
     * @description Artisan job for each frame
     * @private
     */
    private _job: () => void = null

    /**
     * @description Job ID
     * @type {number}
     * @private
     */
    private _jobId: number = null

    /**
     * @description Canvas2D to draw
     * @type {Canvas2D}
     * @private
     */
    private _canvas: Canvas2D = null

    /**
     * @description Canvas2D loaded pixels
     * @type {Uint8ClampedArray}
     * @private
     */
    private _pixels?: Uint8ClampedArray = null

    /**
     * 
     * @param {Canvas2D} canvas Canvas2D for artisan to draw
     * @param {artisanOption} options Artisan options
     */
    constructor(canvas: Canvas2D, options: canvasOptions = {}) {
        if(!canvas?.element) {
            throw new Error(`Canvas2D Can't be null`)
        }
        this._canvas = canvas

    
    }

    /**
     * @description Convert angle to radian
     * @private
     * 
     * @param angle Angle to be converted
     * @returns {number}
     */
    private convertAngle(angle: number) {
        if(this._config.angleUnit == 'DEGREE') {
            angle = this.__core.std.degToRad(angle)
        }

        return angle
    }

    /**
     * @description Manipulate a coordinate
     * @private
     */
    private manipCoordinate() {
        if(this._config.coordinatesSystem == 'CARTESIAN') {
            this._canvas.c.translate(this._canvas.width / 2, this._canvas.height / 2)
        }
        if(this._config.coordinatesSystem == 'PHYSICS') {
            this._canvas.c.translate(0, this._canvas.height)
        }
    }

    /**
     * @description Check the color before used
     * @param color color to be checked
     * @private
     */
    private checkColor(color: any) {
        if(typeof color != 'string') return color

        if(color == 'none') {
            color = 'rgba(0, 0, 0, 0)'
        }
        if(color.startsWith('0x')) {
            color = color.replace('0x', '#')
        }
        return color
    }

    /**
     * @description Reset canvas before used
     * @private
     */
    private reset() {
        this.resetTransform()
        
        this.beginPath()

        if(this._config.canvasFillStyle == 'clear') {
            this._canvas.c.clearRect(0, 0, this._canvas.width, this._canvas.height)
        } else {
            this._canvas.c.fillStyle = this.checkColor(this._config.canvasFillStyle || 'rgba(0, 0, 0, 0)')
            this._canvas.c.fillRect(0, 0, this._canvas.width, this._canvas.height)
        }

        this.closePath()

        this.manipCoordinate()
    }

    /**
     * @description Execute tasks
     * @private
     */
    private execTasks() {
        for (let i = 0; i < this._tasks.length; i++) {
            for (let j = 0; j < this._tasks[i].length; j++) {
                const step = this._tasks[i][j];
                step()
            }
        }
        this._tasks = [[]]
    }

    /**
     * @description Add draw object task to tasks
     * @param {() => void} task Task
     * @returns {void}
     * @private
     */
    private addObject(task: () => void) {
        if(this._ref.isOnPath) {
            this._tasks[this._tasks.length - 1].push(task)
            this._ref.firstObjectIndex = this._tasks[this._tasks.length - 1].length - 1
            return
        }

        this.execTasks()
        this._tasks.push([
            () => this._canvas.c.beginPath(),
            task,
            () => this._canvas.c.closePath(),
        ])
        this._ref.firstLinePoint = true
        this._ref.isClosed = false
        this._ref.firstObjectIndex = 1
    }

    /**
     * @description Add style object task to tasks
     * @param {() => void} styleBefore Styling executed before object
     * @param {() => void} styleAfter Styling executed after draw object
     * @returns {void}
     * @private
     */
    private addStyle(styleBefore: () => void, styleAfter: () => void) {
        if(this._ref.isClosed) {
            this._tasks[this._tasks.length - 1].push(styleBefore)
            this._ref.firstObjectIndex += 2
            return
        }

        this._tasks[this._tasks.length - 1].splice(this._ref.firstObjectIndex, 0, styleBefore)
        this._tasks[this._tasks.length - 1].push(styleAfter)

        this._ref.firstObjectIndex++
    }

    /**
     * @description Add transform task to tasks
     * @param {() => void} task Task
     * @returns {void}
     * @private
     */
    private addTransform(task: () => void) {
        this._tasks.push([task])
    }

    /**
     * @description Begin line
     * @param {number} x
     * @param {number} y
     * @returns {() => void}
     * @private
     */
    private beginLine(x: number, y: number): () => void {
        if(this._ref.firstLinePoint) {
            this._ref.firstLinePoint = false
            return () => this._canvas.c.moveTo(x, y)
        }
        return () => this._canvas.c.lineTo(x, y)
    }

    /**
     * @description Set a job to do for each
     * frame for artisan
     * 
     * @param job Artisan's job for each frame
     */
    do(job: () => void): void {
        if(this._job) {
            cancelAnimationFrame(this._jobId)
        }
        this._job = () => {
            setTimeout(() => {
                this.reset()
                job()
                this.execTasks()
                const id = requestAnimationFrame(this._job)
                this._jobId = id
            }, this._config.fps ? 1000 / this._config.fps : 0)
        }
        this._job()
    }

    /**
     * @description Greet!!
     */
    greet() {
        console.log('Hello :)')
    }

    /**
     * @description Create DOM Matrix
     * @returns {DOMMatrix}
     */
    createDOMMatrix() {
        return new DOMMatrix()
    }

    /**
     * @description Restore some style to default value
     * @param {("fill" | "stroke" | "shadow" | "font" | "all")[]} keys style key that will restored
     * to default
     */
    restoreDefault(...keys: string[]) {
        const skeys = new Set(keys)
        const all = skeys.has('all')
        
        if(all || skeys.has('fill')) {
            this.addStyle(() => {}, () => {
                this._canvas.c.fillStyle = 'black'
            })
        }
        
        if(all || skeys.has('stroke')) {
            this.addStyle(() => {
                this._canvas.c.strokeStyle = 'black'
                this._canvas.c.lineWidth = 0
                this._canvas.c.lineCap = 'butt'
                this._canvas.c.lineJoin = 'miter'
                this._canvas.c.miterLimit = 10
                this._canvas.c.lineDashOffset = 0
                this._canvas.c.setLineDash([])
            }, () => {})
        }

        if(all || skeys.has('font')) {
            this.addStyle(() => {
                this._canvas.c.font = '10px serif'
            }, () => {})
        }

        if(all || skeys.has('shadow')) {
            this.addStyle(() => {
                this._canvas.c.shadowColor = 'rgba(0, 0, 0, 0)'
                this._canvas.c.shadowBlur = 0
                this._canvas.c.shadowOffsetX = 0
                this._canvas.c.shadowOffsetY = 0
            }, () => {})
        }
    }

    /**
     * @description Adds a rotation to the transformation matrix
     * 
     * @param {number} angle Rotation angle
     * @returns {void}
     */
    rotate(angle: number) {
        angle = this.convertAngle(angle)
        this.addTransform(() => {
            this._canvas.c.rotate(angle)
        })
    }

    /**
     * @description Adds a scaling transformation to
     * the canvas units horizontally and/or vertically
     * 
     * @param {number} x Scaling factor in the horizontal direction
     * @param {number} y Scaling factor in the vertical direction
     * @returns {void}
     */
    scale(x: number, y: number) {
        this.addTransform(() => {
            this._canvas.c.scale(x, y)
        })
    }

    /**
     * @description Adds a translation transformation
     * to the current matrix
     * 
     * @param {number} x Distance to move in the horizontal direction
     * @param {number} y Distance to move in the vertical direction
     */
    translate(x: number, y: number) {
        this.addTransform(() => {
            this._canvas.c.translate(x, y)
        })
    }

    /**
     * @description Set transform
     * 
     * @param {DOMMatrix} matrix Transformation matrix
     * @param {boolean} override If true it will
     * override all transformation
     * 
     * @returns {void}
     */
    transform(matrix: DOMMatrix, override = false) {
        if(override) {
            this.addTransform(() => {
                this._canvas.c.setTransform(matrix)
                this.manipCoordinate()
            })
            return
        }
        this.addTransform(() => {
            this._canvas.c.transform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f)
        })
    }

    /**
     * @description Get canvas transformation matrix
     * @returns {DOMMatrix}
     */
    getTransform() {
        return this._canvas.c.getTransform()
    }

    /**
     * @description Reset transform matrix
     */
    resetTransform() {
        this._canvas.c.setTransform(1, 0, 0, 1, 0, 0)
    }

    // TODO document
    flipH() {
        this.scale(-1, 1)
        this.translate(-this._canvas.width, 0)
    }
    flipV() {
        this.scale(1, -1)
        this.translate(0, -this._canvas.height)
    }

    loadPixels() {
        this.addTransform(() => {
            this._pixels = this._canvas.c.getImageData(0, 0, this._canvas.width, this._canvas.height).data
        })
    }

    /**
     * @description Start a new path
     * @returns {void}
     */
    beginPath() {
        this._ref.isClosed = false
        this._ref.isOnPath = true
        this._ref.firstLinePoint = true
        this._tasks.push([
            () => this._canvas.c.beginPath()
        ])
        this._ref.firstObjectIndex = 1
    }
    /**
     * @description End a path
     * @returns {void}
     */
    closePath() {
        this._ref.isClosed = true
        this._ref.isOnPath = false
        this._ref.firstLinePoint = true
        this._tasks[this._tasks.length - 1].push(
            () => this._canvas.c.closePath()
        )
        this.execTasks()
    }

    /**
     * @description Save canvas state
     * @returns {void}
     */
    save() {
        this.addObject(() => {
            this._canvas.c.save()
        })
    }

    /**
     * @description Restore canvas state
     * @returns {void}
     */
    restore() {
        this.addObject(() => {
            this._canvas.c.restore()
        })
    }

    /**
     * @description Draw a rectange on canvas
     * 
     * @param {number} x x top left coordinate
     * @param {number} y y top left coordinate
     * @param {number} width Width of rectangle
     * @param {number} height Height of rectangle
     */
    rect(x, y, width, height) {
        this.addObject(() => {
            this._canvas.c.rect(x, y, width, height)
        })
    }
    
    /**
     * @description Draw an ellipse on canvas
     * 
     * @param {number} x x center point location of the ellipse
     * @param {number} y y center point location of the ellipse
     * @param {number} xrad x radius of the ellipse
     * @param {number} yrad y radius of the ellipse
     * @param {number} rotation Rotate amount of the ellipse
     * @param {number} startAng Starting angle
     * @param {number} endAng Ending angle
     * @param {?boolean} antiClockwise If true it will draw the ellipse
     * with anti clocwise direction
     */
    ellipse(
        x: number, y: number,
        xRad: number, yRad: number,
        rotation: number = 0,
        startAng: number = 0,
        endAng: number = Math.PI * 2,
        antiClockwise: boolean
    ) {
        rotation = this.convertAngle(rotation)
        startAng = this.convertAngle(startAng)
        endAng = this.convertAngle(endAng)

        this.addObject(() => {
            this._canvas.c.ellipse(x, y, xRad, yRad, rotation, startAng, endAng, antiClockwise)
        })
    }

    /**
     * @description Draw an arc on canvas
     * 
     * @param {number} x x center point location of the arc
     * @param {number} y y center point location of the arc
     * @param {number} r Radius of the arc
     * @param {number} startAng Starting angle
     * @param {number} endAng End angle
     * @param {?boolean} antiClockwise If true it will draw the arc
     * with anti clocwise direction
     */
    arc(
        x: number,
        y: number,
        r: number,
        startAng: number = 0,
        endAng: number = Math.PI * 2,
        antiClockwise: boolean
    ) {
        startAng = this.convertAngle(startAng)
        endAng = this.convertAngle(endAng)

        this.addObject(() => {
            this._canvas.c.arc(x, y, r, startAng, endAng, antiClockwise)
        })
    }

    /**
     * @description Draw a perfect circle on canvas
     * 
     * @param {number} x x center point location of the circle
     * @param {number} y y center point location of the circle
     * @param {number} r Radius of the circle
     */
    circle(x: number, y: number, r: number) {
        this.addObject(() => {
            this._canvas.c.arc(x, y, r, 0, Math.PI * 2, false)
        })
    }

    /**
     * @description Draw a line on canvas
     * 
     * @param {number} x1 Line start point x coordinate
     * @param {number} y1 Line start point y coordinate
     * @param {number} x2 Line end point x coordinate
     * @param {number} y2 Line end point y coordinate
     */
    line(x1: number, y1: number, x2: number, y2: number) {
        const begin = this.beginLine(x1, y1)
        this.addObject(() => {
            begin()
            this._canvas.c.lineTo(x2, y2)
        })
    }

    // TODO add documentation
    image(src: CanvasImageSource, x: number, y: number) {
        this.addObject(() => {
            this._canvas.c.drawImage(src, x, y)
        })
    }

    /**
     * @description Draw a bezier curve on canvas
     * 
     * @param {number} xStart Bezier curve start point x coordinate
     * @param {number} yStart Bezier curve start point y coordinate
     * @param {number} xCp1 Bezier curve first control point x coordinate
     * @param {number} yCp1 Bezier curve first control point x coordinate
     * @param {number} xCp2 Bezier curve second control point x coordinate
     * @param {number} yCp2 Bezier curve second control point x coordinate
     * @param {number} xEnd Bezier curve end point x coordinate
     * @param {number} yEnd Bezier curve end point x coordinate
     */
    bezier(xStart, yStart, xCp1, yCp1, xCp2, yCp2, xEnd, yEnd) {
        this.addObject(() => {
            this.beginLine(xStart, yStart)
            this._canvas.c.bezierCurveTo(xCp1, yCp1, xCp2, yCp2, xEnd, yEnd)
        })
    }

    /**
     * @description Draw quadratic curve on canvas
     * 
     * @param {number} xStart Quadratic curve start point x coordinate
     * @param {number} yStart Quadratic curve start point y coordinate
     * @param {number} xCp Quadratic curve control point x coordinate
     * @param {number} yCp Quadratic curve control point y coordinate
     * @param {number} xEnd Quadratic curve end point x coordinate
     * @param {number} yEnd Quadratic curve end point x coordinate
     */
    curve(xStart, yStart, xCp, yCp, xEnd, yEnd) {
        this.addObject(() => {
            this.beginLine(xStart, yStart)
            this._canvas.c.quadraticCurveTo(xCp, yCp, xEnd, yEnd)
        })
    }

    /**
     * @description Write a text
     * 
     * @param {number} x X position of the text
     * @param {number} y Y position of the text
     * @param {string} text text context
     * @param {canvasStyle} style text fill style
     * @param {{align?: CanvasTextAlign, baseline?: CanvasTextBaseline, maxWidth?: number}} options optional params
     */
    text(x: number, y: number, text: string, style: canvasStyle, options: {align?: CanvasTextAlign, baseline?: CanvasTextBaseline, maxWidth?: number} = {}) {
        this.addObject(() => {
            this._canvas.c.textAlign = options.align || 'left'
            this._canvas.c.textBaseline = options.baseline || 'middle'
            this._canvas.c.fillText(text, x, y, options.maxWidth)
        })
        this.fill(style)
    }

    /**
     * @description Set fill style
     * @param {canvasStyle} style fill style
     * @param {?CanvasFillRule} rule fill rule
     */
    fill(style?: canvasStyle, rule?: CanvasFillRule) {
        this.addStyle(() => {
            this._canvas.c.fillStyle = this.checkColor(style)
        }, () => {
            this._canvas.c.fill(rule)
        })
    }

    /**
     * @description Set stroke style
     * @param {?strokeOptions} options Stroke options
     */
    stroke(options: strokeOptions = {}) {
        this.addStyle(() => {
            this._canvas.c.strokeStyle = this.checkColor(options.style)
            this._canvas.c.lineWidth = options.width
            this._canvas.c.lineCap = options.cap
            this._canvas.c.lineJoin = options.join
            this._canvas.c.lineDashOffset = options.dashOffset
            this._canvas.c.setLineDash(options.dash || [])
            this._canvas.c.miterLimit = options.miterLimit
        }, () => {
            this._canvas.c.stroke()
        })
    }

    /**
     * @description Set shadow style
     * @param {?shadowOptions} options Shadow options
     */
    shadow(options: shadowOptions = {}) {
        this.addStyle(() => {
            this._canvas.c.shadowColor = this.checkColor(options.color)
            this._canvas.c.shadowBlur = options.blur
            this._canvas.c.shadowOffsetX = options.xOffset
            this._canvas.c.shadowOffsetY = options.yOffset
        }, () => {})
    }

    /**
     * @description Set font style
     * @param {?fontOptions} options Font options
     */
    font(options: fontOptions = {}) {
        this.addStyle(() => {
            if(options.system) {
                this._canvas.c.font = options.system
            }
            this._canvas.c.font =
                `${options.style || ''} ${options.variant || ''} ${options.weight || ''}` +
                `${options.stretch || ''} ${options.size || ''} ${options.lineHeight || ''}` +
                `${options.family || 'serif'}`
        }, () => {})
    }

    /**
     * @description Create a linear gradient
     * 
     * @param {number} x1 x-axis coordinate of the start point
     * @param {number} y1 y-axis coordinate of the start point
     * @param {number} x2 x-axis coordinate of the end point
     * @param {number} y2 y-axis coordinate of the end point
     * @param {?{offset: number, color: string}[]} stops gradient color stop
     * @returns {CanvasGradient}
     */
    createLinearGradient(x1, y1, x2, y2, stops: {offset: number, color: string}[] = []) {
        const gr = this._canvas.c.createLinearGradient(x1, y1, x2, y2)
        for (let i = 0; i < stops.length; i++) {
            const stop = stops[i];
            
            gr.addColorStop(stop.offset, this.checkColor(stop.color))
        }
        return gr
    }

    /**
     * @description Create a radial gradient
     * 
     * @param {number} x1 x-axis coordinate of the start circle
     * @param {number} y1 y-axis coordinate of the start circle
     * @param {number} r1 radius of the start circle
     * @param {number} x2 x-axis coordinate of the end circle
     * @param {number} y2 y-axis coordinate of the end circle
     * @param {number} r2 Radius of the end circle
     * @param {?{offset: number, color: string}[]} stops gradient color stops
     * @returns {CanvasGradient}
     */
    createRadialGradient(x1, y1, r1, x2, y2, r2, stops: {offset: number, color: string}[] = []) {
        const gr = this._canvas.c.createRadialGradient(x1, y1, r1, x2, y2, r2)
        for (let i = 0; i < stops.length; i++) {
            const stop = stops[i];
            
            gr.addColorStop(stop.offset, this.checkColor(stop.color))
        }
        return gr
    }

    /**
     * @description Create a canvas pattern
     * 
     * @param {CanvasImageSource} image Pattern Image
     * @param {string} repetition Pattern Repetition
     * @returns {CanvasPattern}
     */
    createPattern(image: CanvasImageSource, repetition: string) {
        return this._canvas.c.createPattern(image, repetition)
    }


    // Properties
    /**
     * @description Canvas2D for artisan to drawing
     * @type {Canvas2D}
     */
    get canvas(): Canvas2D {
        return this._canvas
    }
    set canvas(canvas: Canvas2D) {
        this._canvas = canvas
    }

    /**
     * @description Canvas2D pixels
     * @type {Uint8ClampedArray}
     */
    get pixels(): Uint8ClampedArray {
        return this._pixels
    }

    // Options
    /**
     * @description Artisan angle unit to be used
     * @type {angleUnit}
     */
    get angleUnit(): angleUnit {
        return this._config.angleUnit
    }
    set angleUnit(unit: angleUnit) {
        this._config.angleUnit = unit
    }

    /**
     * @description Artisan angle unit to be used
     * @type {number}
     */
    get fps(): number {
        return this._config.fps
    }
    set fps(fps: number) {
        this._config.fps = fps
    }

    /**
     * @description Artisan coordinates system to be used
     * @type {coordinatesSystem}
     */
    get coordinateSystem(): coordinatesSystem {
        return this._config.coordinatesSystem
    }
    set coordinateSystem(system: coordinatesSystem) {
        this._config.coordinatesSystem = system
    }

    /**
     * @description Canvas background style
     * @type {canvasStyle}
     */
    get canvasFillStyle(): canvasStyle {
        return this._config.canvasFillStyle
    }
    set canvasFillStyle(style: canvasStyle) {
        this._config.canvasFillStyle = style
    }

    // Canvas global configuration
    /**
     * @description Canvas global alpha
     * @type {number}
     */
    get alpha(): number {
        return this._canvas.c.globalAlpha
    }
    set alpha(alpha: number) {
        this._canvas.c.globalAlpha = alpha
    }

    /**
     * @description Canvas global composite operation
     */
    get compositeOperation(): string {
        return this._canvas.c.globalCompositeOperation
    }
    set compositeOperation(operation: string) {
        this._canvas.c.globalCompositeOperation = operation
    }

    /**
     * @description Disable canvas image smoothing
     * @type {boolean}
     */
    get disableImageSmoothing(): boolean {
        return !this._canvas.c.imageSmoothingEnabled
    }
    set disableImageSmoothing(disabled: boolean) {
        this._canvas.c.imageSmoothingEnabled = !disabled
    }
}

export default Artisan
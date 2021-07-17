import std from '../std/std'
import Canvas2D from "./Canvas2D";

type canvasStyle = string | CanvasGradient | CanvasPattern
type angleUnit = "RADIAN" | "DEGREE"
type coordinatesSystem = "CARTESIAN" | "NORMAL" | "PHYSICS"

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
 * @classdesc Kit2D will help you to draw
 * everyting in your canvas!
 */
class Kit2D {
    /**
     * @description Kit2D's task to be done
     * @type {(() => void)[][]}
     * @private
     */
    private _tasks: (() => void)[][] = []

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
     * @description Kit2D configuration
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
     * @description Kit2D drawing steps for each frame
     * @private
     */
    private _steps: () => void = null

    /**
     * @description steps ID
     * @type {number}
     * @private
     */
    private _stepsId: number = null

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
     * @param {Canvas2D} canvas Canvas2D for Kit2D to draw
     */
    constructor(canvas: Canvas2D) {
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
            angle = std.degToRad(angle)
        }

        return angle
    }

    /**
     * @description Manipulate a coordinate
     * @private
     */
    private manipCoordinate() {
        if(this._config.coordinatesSystem == 'CARTESIAN') {
            this._canvas.ctx.scale(1, -1)
            this._canvas.ctx.translate(0, -this._canvas.height)
            this._canvas.ctx.translate(this._canvas.width / 2, this._canvas.height / 2)
        }
        if(this._config.coordinatesSystem == 'PHYSICS') {
            this._canvas.ctx.scale(1, -1)
            this._canvas.ctx.translate(0, -this._canvas.height)
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
        this.execTasks()
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
            () => this._canvas.ctx.beginPath(),
            task,
            () => this._canvas.ctx.closePath(),
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
            return () => this._canvas.ctx.moveTo(x, y)
        }
        return () => this._canvas.ctx.lineTo(x, y)
    }

    /**
     * @description Set drawing Kit2D steps for each
     * frame
     * 
     * @param {() => void} steps Drawing steps
     */
    draw(steps: () => void): void {
        if(this._steps) {
            cancelAnimationFrame(this._stepsId)
        }
        this._steps = () => {
            setTimeout(() => {
                this.reset()
                steps()
                this.execTasks()
                const id = requestAnimationFrame(this._steps)
                this._stepsId = id
            }, this._config.fps ? 1000 / this._config.fps : 0)
        }
        this._steps()
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
     * @param {("fill" | "stroke" | "shadow" | "font" | "all")[]} keys styles key to be restored
     * to default
     */
    restoreDefault(...keys: string[]) {
        const skeys = new Set(keys)
        const all = skeys.has('all')
        
        if(all || skeys.has('fill')) {
            this.addStyle(() => {}, () => {
                this._canvas.ctx.fillStyle = 'black'
            })
        }
        
        if(all || skeys.has('stroke')) {
            this.addStyle(() => {
                this._canvas.ctx.strokeStyle = 'black'
                this._canvas.ctx.lineWidth = 0
                this._canvas.ctx.lineCap = 'butt'
                this._canvas.ctx.lineJoin = 'miter'
                this._canvas.ctx.miterLimit = 10
                this._canvas.ctx.lineDashOffset = 0
                this._canvas.ctx.setLineDash([])
            }, () => {})
        }

        if(all || skeys.has('font')) {
            this.addStyle(() => {
                this._canvas.ctx.font = '10px serif'
            }, () => {})
        }

        if(all || skeys.has('shadow')) {
            this.addStyle(() => {
                this._canvas.ctx.shadowColor = 'rgba(0, 0, 0, 0)'
                this._canvas.ctx.shadowBlur = 0
                this._canvas.ctx.shadowOffsetX = 0
                this._canvas.ctx.shadowOffsetY = 0
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
            this._canvas.ctx.rotate(angle)
        })
    }

    /**
     * @description Adds scaling transformation to
     * the canvas units horizontally and/or vertically
     * 
     * @param {number} x Scaling factor in the horizontal direction
     * @param {number} y Scaling factor in the vertical direction
     * @returns {void}
     */
    scale(x: number, y: number) {
        this.addTransform(() => {
            this._canvas.ctx.scale(x, y)
        })
    }

    /**
     * @description Adds translation transformation
     * to the current matrix
     * 
     * @param {number} x Distance to move in the horizontal direction
     * @param {number} y Distance to move in the vertical direction
     */
    translate(x: number, y: number) {
        this.addTransform(() => {
            this._canvas.ctx.translate(x, y)
        })
    }

    /**
     * @description Replace or add the transformation matrix
     * 
     * @param {DOMMatrix} matrix New transformation matrix
     * @param {boolean} override If true it will
     * replace transformation matrix with the new transformation matrix
     * 
     * @returns {void}
     */
    transform(matrix: DOMMatrix, override = false) {
        if(override) {
            this.addTransform(() => {
                this._canvas.ctx.setTransform(matrix)
                this.manipCoordinate()
            })
            return
        }
        this.addTransform(() => {
            this._canvas.ctx.transform(matrix.a, matrix.b, matrix.c, matrix.d, matrix.e, matrix.f)
        })
    }

    /**
     * @description Get canvas transformation matrix
     * @returns {DOMMatrix}
     */
    getTransform() {
        this.execTasks()
        // remove coordinate system effect
        if(this._config.coordinatesSystem == 'CARTESIAN') {
            this._canvas.ctx.scale(1, -1)
            this._canvas.ctx.translate(0, -this._canvas.height)
            this._canvas.ctx.translate(-this._canvas.width / 2, this._canvas.height / 2)
        }
        if(this._config.coordinatesSystem == 'PHYSICS') {
            this._canvas.ctx.scale(1, -1)
            this._canvas.ctx.translate(0, -this._canvas.height)
        }
        const tr = this._canvas.ctx.getTransform()
        this.manipCoordinate()
        return tr
    }

    /**
     * @description Reset canvas transformation matrix
     */
    resetTransform() {
        this.addTransform(() => {
            this._canvas.ctx.setTransform(1, 0, 0, 1, 0, 0)
            this.manipCoordinate()
        })
    }

    /**
     * @description Add horizontal flip transformation
     * to canvas transformation matrix
     */
    flipH() {
        if(this._config.coordinatesSystem == 'CARTESIAN') {
            this.translate(-this._canvas.width, 0)
            return
        }
        
        this.scale(-1, 1)
        this.translate(-this._canvas.width, 0)
    }

    /**
     * @description Add vertical flip transformation
     * to canvas transformation matrix
     */
    flipV() {
        if(this._config.coordinatesSystem == 'CARTESIAN') {
            this.translate(0, -this._canvas.height)
            return
        }
            
        this.scale(1, -1)
        this.translate(0, -this._canvas.height)
    }

    /**
     * @description Load and store canvas pixels data to 
     * Kit2D pixels variable
     */
    loadPixels() {
        this.execTasks()
        this._pixels = this._canvas.ctx.getImageData(0, 0, this._canvas.width, this._canvas.height).data
    }

    /**
     * @description Start a new path
     * @returns {void}
     */
    beginPath() {
        this.execTasks()
        this._ref.isClosed = false
        this._ref.isOnPath = true
        this._ref.firstLinePoint = true
        this._tasks.push([
            () => this._canvas.ctx.beginPath()
        ])
        this._ref.firstObjectIndex = 1
    }
    /**
     * @description Close a path
     * @returns {void}
     */
    closePath() {
        this._ref.isClosed = true
        this._ref.isOnPath = false
        this._ref.firstLinePoint = true
        this._tasks[this._tasks.length - 1].push(
            () => this._canvas.ctx.closePath()
        )
        this.execTasks()
    }

    /**
     * @description Save canvas state
     * @returns {void}
     */
    save() {
        this.addObject(() => {
            this._canvas.ctx.save()
        })
    }

    /**
     * @description Restore canvas state to saved state
     * @returns {void}
     */
    restore() {
        this.addObject(() => {
            this._canvas.ctx.restore()
        })
    }

    /**
     * @description fill entire canvas
     * @param {canvasStyle} style Canvas fill style
     */
    fillCanvas(style: canvasStyle) {
        this.beginPath()
        const cs = this._config.coordinatesSystem
        const tr = this.getTransform()

        this._config.coordinatesSystem = 'NORMAL'
        this.resetTransform()

        this.rect(0, 0, this._canvas.width, this._canvas.height)
        this.fill(style)
        this.closePath()

        this._config.coordinatesSystem = cs
        this.transform(tr, true)
    }

    /**
     * @description Clear canvas
     */
    clearCanvas() {
        this.beginPath()
        const cs = this._config.coordinatesSystem
        const tr = this.getTransform()

        this._config.coordinatesSystem = 'NORMAL'
        this.resetTransform()

        this.addObject(() => {
            this._canvas.ctx.clearRect(0, 0, this._canvas.width, this._canvas.height)
        })
        this.closePath()

        this._config.coordinatesSystem = cs
        this.transform(tr, true)
    }

    /**
     * @description Draw a rectange on canvas
     * 
     * @param {number} x x coordinate
     * @param {number} y y coordinate
     * @param {number} width Width of rectangle
     * @param {number} height Height of rectangle
     */
    rect(x, y, width, height) {
        this.addObject(() => {
            this._canvas.ctx.rect(x, y, width, height)
        })
    }
    
    /**
     * @description Draw an ellipse on canvas
     * 
     * @param {number} x x center point coordinate of the ellipse
     * @param {number} y y center point coordinate of the ellipse
     * @param {number} xrad x radius of the ellipse
     * @param {number} yrad y radius of the ellipse
     * @param {number} rotation Rotate amount of the ellipse
     * @param {number} startAng Starting angle
     * @param {number} endAng Ending angle
     * @param {boolean=} antiClockwise If true it will draw the ellipse
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
            this._canvas.ctx.ellipse(x, y, xRad, yRad, rotation, startAng, endAng, antiClockwise)
        })
    }

    /**
     * @description Draw an arc on canvas
     * 
     * @param {number} x x center point coordinate of the arc
     * @param {number} y y center point coordinate of the arc
     * @param {number} r Radius of the arc
     * @param {number} startAng Starting angle
     * @param {number} endAng End angle
     * @param {boolean=} antiClockwise If true it will draw the arc
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
            this._canvas.ctx.arc(x, y, r, startAng, endAng, antiClockwise)
        })
    }

    /**
     * @description Draw a perfect circle on canvas
     * 
     * @param {number} x x center point coordinate of the circle
     * @param {number} y y center point coordinate of the circle
     * @param {number} r Radius of the circle
     */
    circle(x: number, y: number, r: number) {
        this.addObject(() => {
            this._canvas.ctx.arc(x, y, r, 0, Math.PI * 2, false)
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
        this.addObject(() => {
            this.beginLine(x1, y1)()
            this._canvas.ctx.lineTo(x2, y2)
        })
    }

    /**
     * @description draw a shape by connecting some points
     * @param {{x: number, y: number}[]} points points to be connected
     */
    shape(points: {x: number, y: number}[]) {
        if(points.length < 1) return
        if(points.length < 2) {
            const point = points[0]

            this.circle(point.x, point.y, 1)
            return
        }

        this.addObject(() => {
            let first = true
            for (let i = 1; i < points.length; i++) {
                const prevPoint = points[i - 1];
                const point = points[i];
                
                if(first) {
                    this._canvas.ctx.moveTo(prevPoint.x, prevPoint.y)
                    first = false
                } else {
                    this._canvas.ctx.lineTo(prevPoint.x, prevPoint.y)
                }
                this._canvas.ctx.lineTo(point.x, point.y)
            }
            this._canvas.ctx.lineTo(points[0].x, points[0].y)
            this._canvas.ctx.lineTo(points[points.length-1].x, points[points.length-1].y)
        })
    }

    /**
     * 
     * @param {CanvasImageSource} src image source
     * @param {number} x x top left coordinate
     * @param {number} y y top left coordinate 
     */
    image(src: CanvasImageSource, x: number, y: number) {
        this.addObject(() => {
            this._canvas.ctx.drawImage(src, x, y)
        })
    }

    /**
     * @description Draw a bezier curve on canvas
     * 
     * @param {number} startX Bezier curve start point x coordinate
     * @param {number} startY Bezier curve start point y coordinate
     * @param {number} cp1X Bezier curve first control point x coordinate
     * @param {number} cp1Y Bezier curve first control point x coordinate
     * @param {number} cp2X Bezier curve second control point x coordinate
     * @param {number} cp2Y Bezier curve second control point x coordinate
     * @param {number} endX Bezier curve end point x coordinate
     * @param {number} endY Bezier curve end point x coordinate
     */
    bezier(startX: number, startY: number, cp1X: number, cp1Y: number, cp2X: number, cp2Y: number, endX: number, endY: number) {
        this.addObject(() => {
            this.beginLine(startX, startY)()
            this._canvas.ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, endX, endY)
        })
    }

    /**
     * @description Draw quadratic curve on canvas
     * 
     * @param {number} startX Quadratic curve start point x coordinate
     * @param {number} startY Quadratic curve start point y coordinate
     * @param {number} cpX Quadratic curve control point x coordinate
     * @param {number} cpY Quadratic curve control point y coordinate
     * @param {number} endX Quadratic curve end point x coordinate
     * @param {number} endY Quadratic curve end point x coordinate
     */
    curve(startX, startY, cpX, cpY, endX, endY) {
        this.addObject(() => {
            this.beginLine(startX, startY)()
            this._canvas.ctx.quadraticCurveTo(cpX, cpY, endX, endY)
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
    text(x: number, y: number, style: canvasStyle, text: string, options: {align?: CanvasTextAlign, baseline?: CanvasTextBaseline, maxWidth?: number} = {}) {
        this.addObject(() => {
            this._canvas.ctx.textAlign = options.align || 'left'
            this._canvas.ctx.textBaseline = options.baseline || 'middle'
            this._canvas.ctx.fillText(text, x, y, options.maxWidth)
        })
        this.fill(style)
    }

    /**
     * @description Set fill style
     * @param {canvasStyle} style fill style
     * @param {CanvasFillRule=} rule fill rule
     */
    fill(style: canvasStyle, rule?: CanvasFillRule) {
        this.addStyle(() => {
            this._canvas.ctx.fillStyle = this.checkColor(style)
        }, () => {
            this._canvas.ctx.fill(rule)
        })
    }

    /**
     * @description Set stroke style
     * @param {?strokeOptions} options Stroke options
     */
    stroke(options: strokeOptions = {}) {
        this.addStyle(() => {
            this._canvas.ctx.strokeStyle = this.checkColor(options.style)
            this._canvas.ctx.lineWidth = options.width
            this._canvas.ctx.lineCap = options.cap
            this._canvas.ctx.lineJoin = options.join
            this._canvas.ctx.lineDashOffset = options.dashOffset
            this._canvas.ctx.setLineDash(options.dash || [])
            this._canvas.ctx.miterLimit = options.miterLimit
        }, () => {
            this._canvas.ctx.stroke()
        })
    }

    /**
     * @description Set shadow style
     * @param {?shadowOptions} options Shadow options
     */
    shadow(options: shadowOptions = {}) {
        this.addStyle(() => {
            this._canvas.ctx.shadowColor = this.checkColor(options.color)
            this._canvas.ctx.shadowBlur = options.blur
            this._canvas.ctx.shadowOffsetX = options.xOffset
            this._canvas.ctx.shadowOffsetY = options.yOffset
        }, () => {})
    }

    /**
     * @description Set font style
     * @param {?fontOptions} options Font options
     */
    font(options: fontOptions = {}) {
        this.addStyle(() => {
            if(options.system) {
                this._canvas.ctx.font = options.system
            }
            this._canvas.ctx.font =
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
     * @param {{offset: number, color: string}[]=} stops gradient color stop
     * @returns {CanvasGradient}
     */
    createLinearGradient(x1: number, y1: number, x2: number, y2: number, stops: {offset: number, color: string}[] = []) {
        const gr = this._canvas.ctx.createLinearGradient(x1, y1, x2, y2)
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
    createRadialGradient(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number, stops: {offset: number, color: string}[] = []) {
        const gr = this._canvas.ctx.createRadialGradient(x1, y1, r1, x2, y2, r2)
        for (let i = 0; i < stops.length; i++) {
            const stop = stops[i];
            
            gr.addColorStop(stop.offset, this.checkColor(stop.color))
        }
        return gr
    }

    /**
     * @description Create a canvas pattern
     * 
     * @param {CanvasImageSource} image pattern image
     * @param {"repeat" | ""repeat-x" | "repeat-y" | "no-repeat"} repetition pattern repetition
     * @returns {CanvasPattern}
     */
    createPattern(image: CanvasImageSource, repetition: "repeat" | "repeat-x" | "repeat-y" | "no-repeat") {
        return this._canvas.ctx.createPattern(image, repetition)
    }

    /**
     * @description get loaded pixel in specific location of canvas
     * 
     * @param {number} x pixel x
     * @param {number} y pixel y
     * @returns {number}
     */
    getPixel(x: number, y: number) {
        const i = (x + y * this._canvas.width) * 4
        return [this.pixels[i], this.pixels[i + 1], this.pixels[i + 2], this.pixels[i + 3] / 255]
    }

    /**
     * @description replace pixel color in specific location
     * 
     * @param {number} x pixel x
     * @param {number} y pixel y
     * @param {number[]} color replacement color [r, g, b, a]
     * @returns {number}
     */
    setPixel(x: number, y: number, color: number[]) {
        const data = this._canvas.ctx.createImageData(1, 1)
        data.data[0] =  color[0] || 0
        data.data[1] = color[1] || 0
        data.data[2] = color[2] || 0
        data.data[3] = color[3] * 255 || 1
        this._canvas.ctx.putImageData(data, x, y)
    }


    // Properties

    /**
     * @description Canvas2D pixels
     * @type {Uint8ClampedArray}
     */
    get pixels(): Uint8ClampedArray {
        return this._pixels
    }

    // Options
    /**
     * @description Kit2D angle unit to be used
     * @type {angleUnit}
     */
    get angleUnit(): angleUnit {
        return this._config.angleUnit
    }
    set angleUnit(unit: angleUnit) {
        this._config.angleUnit = unit
    }

    /**
     * @description Kit2D angle unit to be used
     * @type {number}
     */
    get fps(): number {
        return this._config.fps
    }
    set fps(fps: number) {
        this._config.fps = fps
    }

    /**
     * @description Kit2D coordinates system to be used
     * @type {coordinatesSystem}
     */
    get coordinateSystem(): coordinatesSystem {
        return this._config.coordinatesSystem
    }
    set coordinateSystem(system: coordinatesSystem) {
        this._config.coordinatesSystem = system
    }

    // Canvas global configuration
    /**
     * @description Canvas global alpha
     * @type {number}
     */
    get alpha(): number {
        return this._canvas.ctx.globalAlpha
    }
    set alpha(alpha: number) {
        this._canvas.ctx.globalAlpha = alpha
    }

    /**
     * @description Canvas global composite operation
     */
    get compositeOperation(): string {
        return this._canvas.ctx.globalCompositeOperation
    }
    set compositeOperation(operation: string) {
        this._canvas.ctx.globalCompositeOperation = operation
    }

    /**
     * @description Disable canvas image smoothing
     * @type {boolean}
     */
    get disableImageSmoothing(): boolean {
        return !this._canvas.ctx.imageSmoothingEnabled
    }
    set disableImageSmoothing(disabled: boolean) {
        this._canvas.ctx.imageSmoothingEnabled = !disabled
    }
}

export default Kit2D
import Vector2D from './Vector2D'

class Line {
    private _vertices: Vector2D[] = []

    private _ref: {
        unit: Vector2D
        center: Vector2D
        vertices: Vector2D[]
    }

    constructor(x: number, y: number, mag: number, angle: number) {
        this._vertices[0] = new Vector2D(x - (mag / 2), y)
        this._vertices[1] = new Vector2D(x + (mag / 2), y)

        this._ref = {
            unit: this.vertices[1].$sub(this.vertices[0]).unit,
            center: new Vector2D(x, y),
            vertices: [Vector2D.clone(this.vertices[0]), Vector2D.clone(this.vertices[1])]
        }
        this.angle = angle
    }

    // Generator
    /**
     * @description Create an Line from two point
     * 
     * @param {number} x1 first point x coordinate
     * @param {number} y1 first point y coordinate
     * @param {number} x2 second point x coordinate
     * @param {number} y2 second point y coordinate
     * @returns {Line}
     */
    static fromPoints(x1: number, y1: number, x2: number, y2: number) {
        const start = new Vector2D(x1, y1)
        const end = new Vector2D(x2, y2)

        const pos = start.$add(end).div(2)
        const mag = end.$sub(start).mag
        const angle = end.$sub(start).angle

        const line = new Line(pos.x, pos.y, mag, angle)
        return line
    }

    /**
     * @description Clone an line
     * 
     * @param {Line} line line to be cloned
     * @returns {Line}
     */
    static clone(line: Line) {
        return new Line(line.x, line.y, line.mag, line.angle)
    }

    // Functions
    /**
     * @description Rotate line
     * @param {number} angle angle
     */
    rotate(angle: number) {
        this.angle = this.angle + angle
    }

    // Getter & Setter
    /**
     * @description Line center x coordinate
     * @type {number}
     */
    get x() {
        return this._ref.center.x
    }
    set x(x: number) {
        const diff = x - this._ref.center.x
        this._ref.center.add(diff, 0)
        this._ref.vertices[0].add(diff, 0)
        this._ref.vertices[1].add(diff, 0)
        this._ref.unit = Vector2D.clone(this._ref.vertices[1]).$sub(this._ref.vertices[0]).unit
    }
    
    /**
     * @description Line center y coordinate
     * @type {number}
     */
    get y() {
        return this._ref.center.y
    }
    set y(y: number) {
        const diff = y - this._ref.center.y
        this._ref.center.add(diff, 0)
        this._ref.vertices[0].add(diff, 0)
        this._ref.vertices[1].add(diff, 0)
        this._ref.unit = Vector2D.clone(this._ref.vertices[1]).$sub(this._ref.vertices[0]).unit
    }

    /**
     * @description Line magnitude
     * @type {number}
     */
    get mag(): number {
        return this.vertices[1].$sub(this.vertices[0]).mag
    }
    set mag(mag: number) {
        const unit = Vector2D.clone(this._ref.unit)
        unit.angle = this.angle

        this._vertices[0] = Vector2D.clone(this._ref.center).$add(Vector2D.clone(unit).mult(-mag/2))
        this._vertices[1] = Vector2D.clone(this._ref.center).$add(Vector2D.clone(unit).mult(mag/2))
    }

    /**
     * @description Line angle
     * @type {number}
     */
    get angle(): number {
        return this.vertices[1].$sub(this.vertices[0]).angle
    }
    set angle(angle: number) {
        const unit = Vector2D.clone(this._ref.unit)
        const mag = this.mag
        unit.angle = angle

        this._vertices[0] = Vector2D.clone(this._ref.center).$add(Vector2D.clone(unit).mult(-mag/2))
        this._vertices[1] = Vector2D.clone(this._ref.center).$add(Vector2D.clone(unit).mult(mag/2))
    }

    /**
     * @description Line unit
     * @type {Vector2D}
     */
    get unit(): Vector2D {
        return this.vertices[1].$sub(this.vertices[0]).unit
    }

    // Get vertices
    /**
     * @description Vector2D representation of the line
     * @type {Vector2D}
     */
    get line(): Vector2D {
        return this.vertices[1].$sub(this.vertices[0])
    }

    /**
     * @description Line vertices
     * @type {Vector2D[]}
     */
    get vertices(): Vector2D[] {
        return [Vector2D.clone(this._vertices[0]), Vector2D.clone(this._vertices[1])]
    }
}

export default Line
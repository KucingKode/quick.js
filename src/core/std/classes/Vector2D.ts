import util from '../utility'


class Vector2D {
    /**
     * @description x position
     * @type {number}
     * @private
     */
    private _x: number = 0
    /**
     * @description y position
     * @type {number}
     * @private
     */
    private _y: number = 0
    /**
     * @description Magnitude limit
     * @type {number | null}
     * @private
     */
    private _limit?: number = null

    /**
     * @description Make sure there is no infinite number
     * and the magnitude of the vector less than or
     * equal to its limit
     * 
     * @private
     */
    private check() {
        if(!isFinite(this._x) || !isFinite(this._y)) {
            throw new Error(`Infinite number detected! : (${this._x}, ${this._y})`)
        }
        if(this._limit && this.mag > this._limit) {
            this.mag = this._limit
        }
    }

    /**
     * 
     * @param {number=} x Vector x coordinate
     * @param {number=} y Vector y coordinate
     * @param {number=} limit Vector magnitude limit
     */
    constructor(x?: number, y?:number, limit?: number) {
        this._x = x || 0
        this._y = y || 0
        this._limit = limit || undefined
    }

    // Generator
    /**
     * @description Create new vector from
     * an angle
     * 
     * @param {number} angle Vector angle
     * @returns {Vector2D} Unit vector from angle
     */
    static angle(angle: number) {
        return new Vector2D(Math.cos(angle), Math.sin(angle))
    }

    /**
     * @description Create new vector from
     * substraction of two vectors
     * 
     * @param {Vector2D} vec1 Vector 1
     * @param {Vector2D} vec2 Vector 2
     * @returns {Vector2D} Vector from vec1 - vec2
     */
    static sub(vec1: Vector2D, vec2: Vector2D) {
        return new Vector2D(vec1.x - vec2.x, vec1.y - vec2.y)
    }

    /**
     * @description Create new vector from
     * addition of two vectors
     * 
     * @param {Vector2D} vec1 Vector 1
     * @param {Vector2D} vec2 Vector 2
     * @returns {Vector2D} Vector from vec1 + vec2
     */
    static add(vec1: Vector2D, vec2: Vector2D) {
        return new Vector2D(vec1.x + vec2.x, vec1.y + vec2.y)
    }

    // Vector operations
    /**
     * @description Get dot product of
     * two vectors
     * 
     * @param {Vector2D} vec1 Vector 1
     * @param {Vector2D} vec2 Vector 2
     * @returns {number} Dot product of vec1 and vec2
     */
    static dot(vec1: Vector2D, vec2: Vector2D): number {
        return (vec1.x * vec2.x) + (vec1.y * vec2.y)
    }

    /**
     * @description Get cross product of
     * two vectors
     * 
     * @param {Vector2D} vec1 Vector 1
     * @param {Vector2D} vec2 Vector 2
     * @returns {number} Cross product of vec1 and vec2
     */
    static cross(vec1: Vector2D, vec2: Vector2D): number {
        return (vec1.x * vec2.y) - (vec1.y * vec2.x)
    }

    /**
     * @description Create random 2d unit vector
     * @returns {Vector2D}
     */
    static random2D(): Vector2D {
        return new Vector2D(
            util.round(util.random(0, Math.PI * 2)),
            util.round(util.random(0, Math.PI * 2))
        )
    }

    /**
     * @description Clone a vector
     * 
     * @param {Vector2D} vec Vector to be cloned
     * @returns {Vector2D} Clone of vec
     */
    static clone(vec: Vector2D) {
        return new Vector2D(vec.x, vec.y, vec.limit)
    }

    // Basic operations
    /**
     * @description Add the x and y coordinates
     * with some numbers
     * 
     * @param {number} x Addition of x
     * @param {number} y Addition of y
     * @returns {this}
     */
    add(x: number, y: number): this {
        this._x += x
        this._y += y
        this.check()
        return this
    }
    /**
     * @description Subtract the x and y
     * coordinates with some numbers
     * 
     * @param {number} x Deduction of x
     * @param {number} y Deduction of y
     * @returns {this}
     */
    sub(x: number, y: number): this {
        this._x -= x
        this._y -= y
        this.check()
        return this
    }
    /**
     * @description Multiply x and y coordinate
     * with a number
     * 
     * @param {number} n Vector multiplier
     * @returns {this}
     */
    mult(n: number): this {
        this._x *= n
        this._y *= n
        this.check()
        return this
    }
    /**
     * @description Divide x and y coordinate
     * with a number
     * 
     * @param {number} n Vector divider
     * @returns {this}
     */
    div(n: number): this {
        this._x /= n
        this._y /= n
        this.check()
        return this
    }

    // Shorthands
    /**
     * @description Reset x and y coordinate
     * 
     * @param {number} x New x coordinate
     * @param {number} y New y coordinate
     * @returns {this}
     */
    $set(x: number, y: number): this {
        this._x = x
        this._y = y
        this.check()
        return this
    }
    /**
     * @description Add this vector with another vector
     * 
     * @param {Vector2D} vec Vector to be added
     * @returns {this}
     */
    $add(vec: Vector2D): this {
        this._x += vec.x
        this._y += vec.y
        this.check()
        return this
    }
    /**
     * @description Subtract this vector with another vector
     * 
     * @param {Vector2D} vec Deduction vector
     * @returns {this}
     */
    $sub(vec: Vector2D): this {
        this._x -= vec.x
        this._y -= vec.y
        this.check()
        return this
    }

    // Angular operations
    /**
     * @description Rotate vector
     * 
     * @param {number} angle Addition angle
     * @returns {this}
     */
    rotate(angle: number): this {
        this.angle += angle
        return this
    }
    
    /**
     * @description Vector angle
     * @type {number}
     */
    get angle(): number {
        return Math.atan2(this._y, this._x)
    }
    set angle(angle: number) {
        const   cos = Math.cos(angle),
                sin = Math.sin(angle)

        const   nx = (cos * this._x) - (sin * this._y),
                ny = (cos * this._y) + (sin * this._x)

        this._x = nx
        this._y = ny
    }

    /**
     * @description Get vector x, y coordinate
     * @type {{x: number, y: number}}
     */
    pos(): {x: number, y: number} {
        return {x: this._x, y: this._y}
    }

    // properties
    /**
     * @description Vector magnitude
     * @type {number}
     */
    get mag(): number {
        return Math.sqrt(
            (this._x ** 2) +
            (this._y ** 2)
        )
    }
    set mag(mag: number) {
        if(this._limit && mag > this._limit) {
            console.warn(`Can\'t set Magnitude to higher than limit : Limit is ${this._limit}`)
        }
        this.mult(mag / this.mag)
        this.check()
    }

    /**
     * @description Vector x coordinate
     * @type {number}
     */
    get x(): number {
        return this._x
    }
    set x(x: number) {
        this._x = x
        this.check()
    }
    /**
     * @description Vector y coordinate
     * @type {number}
     */
    get y(): number {
        return this._y
    }
    set y(y: number) {
        this._y = y
        this.check()
    }
    /**
     * @description Vector magnitude limit
     * @type {number | undefined}
     */
    get limit(): number | undefined {
        return this._limit
    }
    set limit(limit: number | undefined) {
        this._limit = limit
    }

    /**
     * @description Vector normal
     * @type {number}
     */
    get normal(): Vector2D {
        return new Vector2D(-this._y, this._x)
    }
    /**
     * @description Vector unit
     * @type {number}
     */
    get unit(): Vector2D {
        const vec = new Vector2D(this._x, this._y)
        vec.mag = 1

        return vec
    }

}

export default Vector2D
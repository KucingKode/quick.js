class Stack<T> {
    /**
     * @description Stack data
     * @type {any[]}
     * @private
     */
    private _data: T[] = []

    /**
     * @description Stack size
     * @type {?number}
     * @private
     */
    private _size: number = null

    /**
     * 
     * @param {?any[]} [data=[]] Stack initial data
     * @param {?number} [size=null] Stack size
     */
    constructor(data?: T[], size?: number) {
        this._data = data || []
        this._size = size || null
    }

    /**
     * @description Clone a stack
     * 
     * @param {Stack} stack Stack to be cloned
     * @returns {Stack}
     */
    static clone(stack: Stack<any>) {
        return new Stack(stack.data)
    }

    /**
     * @description Add a data to the top
     * of the stack
     * 
     * @param {any} data Data to be added
     * @returns {void}
     */
    push(data: T) {
        if(this.isFull) return
        this._data.push(data)
    }

    /**
     * @description Remove the top data of
     * the stack
     * 
     * @returns {void}
     */
    pop() {
        if(this.isEmpty) return
        this._data.splice(this._data.length - 1, 1)
    }

    /**
     * @description Get the top data of
     * the stack
     * 
     * @returns {any}
     */
    peek() {
        if(this.isEmpty) return undefined
        return this._data[this._data.length - 1]
    }

    /**
     * @description Size of the stack
     * @type {?number}
     */
    get size(): number {
        return this._size
    }
    set size(size: number) {
        this._size = size
    }


    /**
     * @description Data of the stack
     * @type {number}
     */
    get data(): T[] {
        return Array.from(this._data)
    }

    /**
     * @description Check whether stack is full
     * @type {boolean}
     */
    get isFull(): boolean {
        if(this._size && this._data.length >= this._size) {
            return true
        }
        return false
    }

    /**
     * @description Check whether stack is empty
     * @type {boolean}
     */
    get isEmpty(): boolean {
        if(this._data.length < 1) {
            return true
        }
        return false
    }

}

export default Stack
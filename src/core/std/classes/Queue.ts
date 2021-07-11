class Queue<T> {
    /**
     * @description Queue data
     * @type {any[]}
     * @private
     */
    private _data: T[] = []

    /**
     * @description Queue size
     * @type {?number}
     * @private
     */
    private _size: number = null

    /**
     * 
     * @param {?any[]} data Queue initial data
     * @param {?number} size Queue size
     */
    constructor(data?: T[], size?: number) {
        this._data = data
        this._size = size
    }

    /**
     * @description Clone a queue
     * 
     * @param {Queue} queue Queue to be cloned
     * @returns {Queue}
     */
    static clone(queue: Queue<any>) {
        return new Queue(queue.data)
    }

    /**
     * @description Add a data to the top
     * of the queue
     * 
     * @param {any} data Data to be added
     * @returns {void}
     */
    enqueue(data: T) {
        if(this.isFull) return
        this._data.push(data)
    }

    /**
     * @description Remove the bottom data of
     * the queue
     * 
     * @returns {void}
     */
    dequeue() {
        if(this.isEmpty) return
        const data = this.peek()
        this._data.splice(0, 1)

        return data
    }

    /**
     * @description Get the bottom data of
     * the queue
     * 
     * @returns {any}
     */
    peek() {
        if(this.isEmpty) return undefined
        return this._data[0]
    }

    /**
     * @description Size of the queue
     * @type {?number}
     */
    get size(): number {
        return this._size
    }
    set size(size: number) {
        this._size = size
    }

    /**
     * @description Data of the queue
     * @type {number}
     */
    get data(): T[] {
        return Array.from(this._data)
    }

    /**
     * @description Check whether queue is full
     * @type {boolean}
     */
    get isFull(): boolean {
        if(this._size && this._data.length >= this._size) {
            return true
        }
        return false
    }

    /**
     * @description Check whether queue is empty
     * @type {boolean}
     */
    get isEmpty(): boolean {
        if(this._data.length < 1) {
            return true
        }
        return false
    }

}

export default Queue
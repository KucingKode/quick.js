import util from '../utility'

class Grid<T> {
    /**
     * @description Grid total rows
     * @type {number}
     * @private
     */
    private _rows: number = 0
    /**
     * @description Grid total columns
     * @type {number}
     * @private
     */
    private _cols: number = 0
    /**
     * @description Grid data
     * @type {any[][]}
     * @private
     */
    private _data: T[][] = []

    /**
     * @description Grid segments initial value
     * @type {any}
     */
    private _initialVal: any = null

    /**
     * @description Set initial value to a segment
     * @param {number} i
     * @param {number} j
     * @private
     */
    private setInitialVal(i, j) {
        let val
        switch (typeof this._initialVal) {
            case ('function'): {
                val = this._initialVal()
                break;
            }
            case ('object'): {
                val = JSON.parse(JSON.stringify(this._initialVal))
                break;
            }
            default: {
                val = this._initialVal
                break;
            }
        }
        this._data[i][j] = val
    }

    /**
     * 
     * @param {number} rows Grid total rows
     * @param {number} columns Grid total columns
     * @param {?any} [segmentInitial=null] Grid segments initial value
     */
    constructor(rows: number, columns: number, segmentInitial: any = null) {
        this._rows = rows
        this._cols = columns

        this._initialVal = segmentInitial
        
        for(let i = 0; i < rows; i++) {
            this._data[i] = []
            for(let j = 0; j < columns; j++) {
                this.setInitialVal(i, j)
            }
        }
    }

    // Generator
    /**
     * @description Create a grid from area
     * 
     * @param {number} areaWidth Grid width
     * @param {number} areaHeight Grid height
     * @param {number} segmentWidth One grid segment width
     * @param {number} segmentHeight One grid segment height
     * @param {any} segmentInitial Grid segments initial value
     * 
     * @returns {Grid} New Grid
     */
    static fromArea(areaWidth: number, areaHeight: number, segmentWidth: number, segmentHeight: number, segmentInitial: any): Grid<any> {
        return new Grid(util.floor(areaHeight / segmentHeight), util.floor(areaWidth / segmentWidth), segmentInitial)
    }

    /**
     * @description Clone a grid
     * 
     * @param grid Grid to be cloned
     * @returns {Grid}
     */
    static clone(grid: Grid<any>) {
        const clone = new Grid(grid.rows, grid.cols)
        clone.data = Array.from(grid.data)
        return clone
    }

    // Operations
    /**
     * @description Iterate grid and modify its value
     * 
     * @param {(value: any, column: number, row: number) => any} handler Function to handle
     * grid input and output
     * @returns {void}
     */
    iterate(handler: (value: T, column: number, row: number) => T): void {
        for(let i = 0; i < this._rows; i++) {
            for(let j = 0; j < this._cols; j++) {
                handler(this._data[i][j], j, i)
            }
        }

    }

    /**
     * @description Get a data from a grid segment
     * 
     * @param {number} row Segment row
     * @param {number} col Segment column
     * @returns {any} data that stored segment
     */
    get(col: number, row: number): T {
        return this._data[row][col]
    }
    /**
     * @description Change a data of a grid segment
     * 
     * @param {number} row Segment row
     * @param {number} col Segemnt column
     * @param {any} newValue New value
     * @returns {void}
     */
    set(col: number, row: number, newValue: T): void {
        this._data[row][col] = newValue
    }

    /**
     * @description Get a datas of a row in grid
     * @param {number} row Row of dats to be getted
     * @returns {any[]} Datas on the 'row' row
     */
    getRow(row: number): T[] {
        if(row >= this.rows) {
            throw new Error(`
                Can't get a value from ${row} row,
                because grid only have ${this._rows} rows
            `)
        }

        let result = []
        for(let i = 0; i < this._cols; i++) {
            result.push(this._data[row][i])
        }

        return result
    }
    /**
     * @description Get a datas of a column in grid
     * @param {number} col Column of datas to be getted
     * @returns {any[]} Datas on the 'col' column
     */
    getCol(col: number): T[] {
        if(col >= this.cols) {
            throw new Error(`
                Can't get a value from ${col} column,
                because grid only have ${this._cols} columns
            `)
        }

        let result = []
        for(let i = 0; i < this._rows; i++) {
            result.push(this._data[i][col])
        }

        return result
    }

    // Properties
    /**
     * @description Initial segment value
     * on the grid
     * 
     * @type {any}
     */
    get initialVal(): number {
        return this._initialVal
    }
    set initialVal(initialVal: number) {
        this._initialVal = initialVal

    }
    
    /**
     * @description total Rows on the grid
     * @type {number}
     */
    get rows(): number {
        return this._rows
    }
    set rows(rows: number) {
        for(let i = this._rows - 1; i < rows; i++) {
            this._data[i] = []
            for(let j = 0; j < this._cols; j++) {
                this.setInitialVal(i, j)
            }
        }
        this._rows = rows

    }

    /**
     * @description total Columns on the grid
     * @type {number}
     */
    get cols(): number {
        return this._cols
    }
    set cols(cols: number) {
        for(let i = 0; i < this._rows; i++) {
            this._data[i] = []
            for(let j = this._cols - 1; j < cols; j++) {
                this.setInitialVal(i, j)
            }
        }
        this._cols = cols

    }

    get data(): any[][] {
        return Array.from(this._data)
    }
    set data(data: any[][]) {
        this._data = data
    }
}

export default Grid
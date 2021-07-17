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
     * @description Grid cells initial value
     * @type {any}
     */
    private _cellInitialValue: any = null

    /**
     * @description Set initial value to a cell
     * @param {number} i
     * @param {number} j
     * @private
     */
    private setInitialVal(i, j) {
        let val
        switch (typeof this._cellInitialValue) {
            case ('function'): {
                val = this._cellInitialValue()
                break;
            }
            case ('object'): {
                val = JSON.parse(JSON.stringify(this._cellInitialValue))
                break;
            }
            default: {
                val = this._cellInitialValue
                break;
            }
        }
        this._data[i][j] = val
    }

    /**
     * 
     * @param {number} rows Grid total rows
     * @param {number} columns Grid total columns
     * @param {any=} [cellInitialValue=null] Grid cells initial value
     */
    constructor(rows: number, columns: number, cellInitialValue: any = null) {
        this._rows = rows
        this._cols = columns

        this._cellInitialValue = cellInitialValue
        
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
     * @param {number} cellWidth One grid cell width
     * @param {number} cellHeight One grid cell height
     * @param {any=} cellInitialValue Grid cells initial value
     * 
     * @returns {Grid} New Grid
     */
    static fromArea(areaWidth: number, areaHeight: number, cellWidth: number, cellHeight: number, cellInitialValue: any): Grid<any> {
        return new Grid(util.floor(areaHeight / cellHeight), util.floor(areaWidth / cellWidth), cellInitialValue)
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
     * @description Get a data from a grid cell
     * 
     * @param {number} row cell row
     * @param {number} col cell column
     * @returns {any} data that stored cell
     */
    get(col: number, row: number): T {
        return this._data[row][col]
    }
    /**
     * @description Change a data of a grid cell
     * 
     * @param {number} row cell row
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
     * @description Initial cell value
     * on the grid
     * 
     * @type {any}
     */
    get cellInitialValue(): number {
        return this._cellInitialValue
    }
    set cellInitialValue(cellInitialValue: number) {
        this._cellInitialValue = cellInitialValue

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
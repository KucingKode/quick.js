<!-- Grid -->
- ### **class: Grid**

> **Descriptions:**
>
> Grid is an object that store some data inside some cells located in specific row and column.
>
> **Syntax:**  
> Create new grid :  
> `new std.Grid(rows: number, cols: number, cellInitialValue?: any)`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `rows` | `number` | **Required** Number of rows in the grid
> `cols` | `number` | **Required** Number of columns in the grid
> `cellInitialValue` | `any` | **Optional** grid initial cells value
>
> Create new grid from an area :  
> `std.Grid.fromArea(areaWidth: number, areaHeight: number, cellWidth: number, cellHeight: number, cellInitialValue?: any)`  
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `areaWidth` | `number` | **Required** grid area width
> `areaHeight` | `number` | **Required** grid area height
> `cellWidth` | `number` | **Required** grid cell width
> `cellHeight` | `number` | **Required** grid cell height
> `cellInitialValue` | `any` | **Optional** grid initial cells value
>
> Clone a grid :  
> `std.Grid.clone(grid: Grid)`  
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `grid` | `Grid` | **Required** grid to be cloned
>
> **Components:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `cols`       | `number` | total columns in the grid  
> `rows`       | `number` | total rows in the grid  
> `cellInitialValue`   | `number` | grid cell initial value  
> `data`     | `number` | grid data  
>
> **Methods:**
>
> `.iterate(callback: (value: any, column: number, row: number) => void)`  
> iterate the grid
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `callback` | `(value: any, column: number, row: number) => void` | **Required** callback that will executed for each cell
>
> `.set(col: number, row: number, newValue: any)`  
> set value in grid specific cell
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `col` | `number` | **Required** column
> `row` | `number` | **Required** row
> `newValue` | `any` | **Required** new value to be set into the cell
>
> `.get(col: number, row: number)`  
> get value in grid specific cell
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `col` | `number` | **Required** column
> `row` | `number` | **Required** row
>
> `.getCol(column: number)`  
> get values inside a column
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `col` | `number` | **Required** column
>
> `.getRow(row: number)`  
> get values inside a row
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `row` | `number` | **Required** row

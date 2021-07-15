<!-- Line -->
- ### **class: Line**

> **Descriptions:**
>
> Line is a straight one-dimensional figure having no thickness and extending infinitely in both directions.
Line class will create a line in 2d space.
>
> **Syntax:**  
> Create new line :  
> `new std.Line(x: number, y: number, mag: number, angle: number)`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `x` | `number` | **Required** new line x component
> `y` | `number` | **Required** new line x component
> `mag` | `number` | **Required** new line magnitude
> `angle` | `number` | **Required** new line angle
>
> Create new line from two points :  
> `std.Line.from(x1: number, y1: number, x2: number, y2: number)`  
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `x1` | `number` | **Required** first point x coordinate
> `x1` | `number` | **Required** first point y coordinate
> `x2` | `number` | **Required** second point x coordinate
> `x2` | `number` | **Required** second point y coordinate
>
> Clone a line :  
> `std.Line.clone(line: Line)`  
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `line` | `Line` | **Required** line to be cloned
>
> **Components:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `x`       | `number` | x component of the line  
> `y`       | `number` | y component of the line  
> `mag`     | `number` | magnitude of the line  
> `angle`   | `number` | angle of the line  
> `unit`    | `Vector2D` | unit of the line
> `start`  | `Vector2D` | line starting vector
> `end`  | `Vector2D` | line end vector
> `vertices`  | `Vector2D[]` | line vertices array
>
> **Methods:**
>
> `.rotate(angle: number)`  
> rotate line
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `angle` | `number` | **Required** angle in radian
>
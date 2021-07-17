<!-- Vector2D -->
- ### **class: Vector2D**

> **Descriptions:**
>
> Vector is an object that has both a magnitude and a direction.
Vector2D class will create a vector in 2d space.
>
> **Syntax:**  
> Create new 2D vector :  
> `new Line(x: number, y: number, limit?: number)`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `x` | `number` | **Required** new vector x component
> `y` | `number` | **Required** new vector x component
> `limit` | `number` | **Optional** new vector magnitude limit
>
> Create new vector by adding two other 2d vector :  
> `Vector2D.add(vec1: Vector2D, vec2: Vector2D)`  
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `vec1` | `Vector2D` | **Required** first vector
> `vec2` | `Vector2D` | **Required** second vector
>
> Create new vector by substracting two other 2d vector :  
> `Vector2D.sub(vec1: Vector2D, vec2: Vector2D)`  
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `vec1` | `Vector2D` | **Required** first vector
> `vec2` | `Vector2D` | **Required** second vector
>
> Clone a Vector :  
> `Vector2D.clone(vec: Vector2D)`  
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `vec` | `Vector2D` | **Required** vector to be cloned
>
> **Components:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `x`       | `number` | x component of the vector  
> `y`       | `number` | y component of the vector  
> `mag`     | `number` | magnitude of the vector  
> `limit`   | `number` | magnitude limit of the vector  
> `angle`   | `number` | angle of the vector  
> `unit`    | `Vector2D` | unit vector of the vector  
> `normal`  | `Vector2D` | normal vector of the vector  
>
> **Methods:**
>
> `.pos(): {x: number, y: number}`  
> get vector x and y component
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
>
> `.rotate(angle: number)`  
> rotate vector
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `angle` | `number` | **Required** angle in radian
>
> `.add(x: number, y: number): this`  
> add x and y component of vector
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `x` | `number` | **Required** addition to x
> `y` | `number` | **Required** addition to y
>
> `.sub(x: number, y: number): this`  
> subtract x and y component of vector
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `x` | `number` | **Required** subtraction to x
> `y` | `number` | **Required** subtraction to y
>
> `.mult(n: number): this`  
> multiply x and y component of vector
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required** multiplier for x and y component
>
> `.div(n: number): this`  
> divide x and y component of vector
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required** divider for x and y component
>
> `.$add(vec: Vector2D): this`  
> add vector with another vector
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `vec` | `Vector2D` | **Required** addition vector
>
> `.$sub(vec: Vector2D): this`  
> subtract vector with another vector
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `vec` | `Vector2D` | **Required** subtraction vector
>
> `.$set(x: number, y: number): this`  
> reset vector x and y component
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `x` | `number` | **Required** new x component value
> `y` | `number` | **Required** new y component value
>
> `Vector2D.dot(vec1: Vector2D, vec2: Vector2D): number`  
> calculate dot product of two vector
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `vec1` | `Vector2D` | **Required** first 2d vector
> `vec2` | `Vector2D` | **Required** second 2d vector
>
> `Vector2D.cross(vec1: Vector2D, vec2: Vector2D): number`  
> calculate cross product of two vector
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `vec1` | `Vector2D` | **Required** first 2d vector
> `vec2` | `Vector2D` | **Required** second 2d vector

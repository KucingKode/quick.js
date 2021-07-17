___

## **Constants:**

<!-- PI -->
- ### **PI**

> **Description:**
>
> PI is a constant number in mathematics with value 3.14159265358979323846. It is the ratio of the circumference of a circle to its diameter. PI was very useful with trigonometry math functions like `Math.sin()` and `Math.cos()`
>
> **Syntax:**
>
> `PI`

<!-- TWO_PI -->
- ### **TWO_PI**

> **Description:**
>
> TWO_PI is a constant number with value PI multiplied by 2. TWO_PI is equal to 90<sup>o</sup> if converted from radian to degree. TWO_PI was very useful with trigonometry math functions like `Math.sin()` and `Math.cos()`
>
> **Syntax:**
>
> `TWO_PI`

## **Utility:**

<!-- Map -->
- ### **map()**

> **Description:**
>
> remap a number from number current range to another range
>
> **Syntax:**
>
> `map(n: number, nMin: number, nMax: number, min: number, max: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required**. Number you want to remap
> `nMin` | `number` | **Required**. Number current range lowest value
> `nMax` | `number` | **Required**. Number current range highest value
> `min` | `number` | **Required**. remapped number range lowest value
> `min` | `number` | **Required**. remapped number range highest value
>
> **Returns:**
>
> mapped number: `number`

<!-- Constraint -->
- ### **constraint()**

> **Description:**
>
> constraint a number to a range
>
> **Syntax:**
>
> `constraint(n: number, min: number, max: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required**. Number you want to constraint
> `min` | `number` | **Required**. lowest number within range
> `min` | `number` | **Required**. highest number within range
>
> **Returns:**
>
> constrainted number: `number`

<!-- Inverse -->
- ### **inverse()**

> **Description:**
>
> inverse a number ( n to 1/n )
>
> **Syntax:**
>
> `inverse(n: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required**. Number you want to inverse
>
> **Returns:**
>
> inversed number: `number`

<!-- Dist -->
- ### **dist()**

> **Description:**
>
> find a distance of two points
>
> **Syntax:**
>
> `dist(x1: number, y1: number, x2: number, y2: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `x1` | `number` | **Required**. First point x coordinate
> `y1` | `number` | **Required**. First point y coordinate
> `x2` | `number` | **Required**. Second point x coordinate
> `y2` | `number` | **Required**. Second point y coordinate
>
> **Returns:**
>
> distance: `number`

<!-- Float Round -->
- ### **fround()**

> **Description:**
>
> Get nearest single precision float representation of a number
>
> **Syntax:**
>
> `fround(n: number, precision: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required** A numeric expression
>
> **Returns:**
>
> float representation of number: `number`

<!-- Min -->
- ### **min()**

> **Description:**
>
> Find a lowest number from array of number
>
> **Syntax:**
>
> `min(numbers: number[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `numbers` | `number[]` | **Required**. Array of number
>
> **Returns:**
>
> lowest number from array: `number | undefined`

<!-- Max -->
- ### **max()**

> **Description:**
>
> Find a highest number from array of number
>
> **Syntax:**
>
> `min(numbers: number[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `numbers` | `number[]` | **Required**. Array of number
>
> **Returns:**
>
> highest number from array: `number | undefined`

<!-- Average -->
- ### **average()**

> **Description:**
>
> Find average number from array of number
>
> **Syntax:**
>
> `min(numbers: number[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `numbers` | `number[]` | **Required**. Array of number
>
> **Returns:**
>
> average number from array: `number | undefined`

## **Random generator:**

<!-- random -->
- ### **random()**

> **Description:**
>
> Generate a random number within range
>
> **Syntax:**
>
> `random(min: number, max: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `min` | `number` | **Default = 0**. lowest number within range
> `max` | `number` | **Default = 1**. highest number within range
>
> **Returns:**
>
> random number: `number`

<!-- RandomChar -->
- ### **randomChar()**

> **Description:**
>
> Pick a random character within range (a-z)(A-Z)(0-9)
>
> **Syntax:**
>
> `randomChar(from: string, to: string)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `from` | `string` | **Default = a**. from character
> `to` | `string` | **Default = Z**. to character
>
> **Returns:**
>
> random char: `string`

<!-- randomFrom -->
- ### **randomFrom()**

> **Description:**
>
> Pick random value that is in array
>
> **Syntax:**
>
> `randomFrom(values: any[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `values` | `any[]` | **Required**. array of values
>
> **Returns:**
>
> random value and its index: `{value: any, i: number}`

## **Noise:**

<!-- PerlinNoise -->
- ### **perlinNoise**

> **Descriptions:**
>
> Perlin noise generator.
>
> **Methods:**
>
> `.get(x: number, y: number): number`  
> Generate perlin noise
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `x` | `number` | **Required** x offset
> `y` | `number` | **Required** y offset
>
> `.clear()`  
> Clear perlin noise memory
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

## **Unit conversion:**

<!-- DegToRad -->
- ### **degToRad()**

> **Description:**
>
> Convert an angle from degree to radian
>
> **Syntax:**
>
> `degToRad(deg: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `deg` | `number` | **Required** angle in degree
>
> **Returns:**
>
> angle in radian: `number`

<!-- RadToDeg -->
- ### **radToDeg()**

> **Description:**
>
> Convert an angle from radian to degree
>
> **Syntax:**
>
> `radToDeg(rad: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `rad` | `number` | **Required** angle in radian
>
> **Returns:**
>
> angle in degree: `number`

## **Rounding:**

<!-- Round -->
- ### **round()**

> **Description:**
>
> Round a number
>
> **Syntax:**
>
> `round(n: number, precision: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required** number to be round
> `precision` | `number` | **Default = 0** the number of digits after comma
>
> **Returns:**
>
> rounded number: `number`

<!-- Floor -->
- ### **floor()**

> **Description:**
>
> Get the greatest integer less than or equal to its numeric argument
>
> **Syntax:**
>
> `floor(n: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required** A numeric expression
>
> **Returns:**
>
> round number: `number`

<!-- Ceil -->
- ### **ceil()**

> **Description:**
>
> Get the greatest integer more than or equal to its numeric argument
>
> **Syntax:**
>
> `ceil(n: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required** A numeric expression
>
> **Returns:**
>
> round number: `number`

## **Classes**

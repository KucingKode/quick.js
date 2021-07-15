___

# **std**

std is a part of the quick.js core library, std contains some standard functions and constants which are used in almost every experiment.

## **Constants:**

<!-- PI -->
- ### **PI**

> **Description:**
>
> PI is a constant number in mathematics with value 3.14159265358979323846. It is the ratio of the circumference of a circle to its diameter. PI was very useful with trigonometry math functions like `Math.sin()` and `Math.cos()`
>
> **Syntax:**
>
> `std.PI`

<!-- TWO_PI -->
- ### **TWO_PI**

> **Description:**
>
> TWO_PI is a constant number with value PI multiplied by 2. TWO_PI is equal to 90<sup>o</sup> if converted from radian to degree. TWO_PI was very useful with trigonometry math functions like `Math.sin()` and `Math.cos()`
>
> **Syntax:**
>
> `std.TWO_PI`

## **Utility:**

<!-- Map -->
- ### **map()**

> **Description:**
>
> remap a number from number current range to another range
>
> **Syntax:**
>
> `std.map(n: number, nMin: number, nMax: number, min: number, max: number)`
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
> **returns:**
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
> `std.constraint(n: number, min: number, max: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required**. Number you want to constraint
> `min` | `number` | **Required**. lowest number within range
> `min` | `number` | **Required**. highest number within range
>
> **returns:**
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
> `std.inverse(n: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required**. Number you want to inverse
>
> **returns:**
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
> `std.dist(x1: number, y1: number, x2: number, y2: number)`
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
> **returns:**
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
> `std.fround(n: number, precision: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required** A numeric expression
>
> **returns:**
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
> `std.min(numbers: number[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `numbers` | `number[]` | **Required**. Array of number
>
> **returns:**
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
> `std.min(numbers: number[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `numbers` | `number[]` | **Required**. Array of number
>
> **returns:**
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
> `std.min(numbers: number[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `numbers` | `number[]` | **Required**. Array of number
>
> **returns:**
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
> `std.random(min: number, max: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `min` | `number` | **Default = 0**. lowest number within range
> `max` | `number` | **Default = 1**. highest number within range
>
> **returns:**
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
> `std.randomChar(from: string, to: string)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `from` | `string` | **Default = a**. from character
> `to` | `string` | **Default = Z**. to character
>
> **returns:**
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
> `std.randomFrom(values: any[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `values` | `any[]` | **Required**. array of values
>
> **returns:**
>
> random value and its index: `{value: any, i: number}`

## **Noise:**

<!-- PerlinNoise -->
- ### **noise.perlin()**

> **Description:**
>
> Generate a perlin noise value
>
> **Syntax:**
>
> `std.noise.perlin(x: number, y: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `x` | `number` | **Required**. x position of perlin noise grid to be returned
> `y` | `number` | **Required**. y position of perlin noise grid to be returned
>
> **returns:**
>
> random number from -1 to 1: `number`

## **Unit conversion:**

<!-- DegToRad -->
- ### **degToRad()**

> **Description:**
>
> Convert an angle from degree to radian
>
> **Syntax:**
>
> `std.degToRad(deg: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `deg` | `number` | **Required** angle in degree
>
> **returns:**
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
> `std.radToDeg(rad: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `rad` | `number` | **Required** angle in radian
>
> **returns:**
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
> `std.round(n: number, precision: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required** number to be round
> `precision` | `number` | **Default = 0** the number of digits after comma
>
> **returns:**
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
> `std.floor(n: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required** A numeric expression
>
> **returns:**
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
> `std.ceil(n: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `n` | `number` | **Required** A numeric expression
>
> **returns:**
>
> round number: `number`

## **Classes**

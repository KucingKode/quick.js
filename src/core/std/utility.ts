/**
 * @description PI is a constant number in mathematics.
 * It is the ratio of the circumference of a circle to its diameter.
 * 
 * @type {number}
 */
const PI = Math.PI

/**
 * @description TWO_PI is a constant number with value PI multiplied by 2.
 * TWO_PI is equal to 90o if converted from radian to degree.
 * 
 * @type {number}
 */
const TWO_PI = Math.PI * 2

/**
 * @description Inverse a number
 * 
 * @param {number} n Number to be inversed
 * @returns {number}
 */
function inverse(n: number): number {
    return 1/n
}

/**
 * @description Map a number 
 * 
 * @param {number} n Number
 * @param {number} nMin n lowest value
 * @param {number} nMax n highest value
 * @param {number} min Mapped n lowset value
 * @param {number} max Mapped n highest value
 * @returns {number}
 */
function map(n: number, nMin: number, nMax: number, min: number, max: number): number {
    const scale = (max - min) / (nMax - nMin)
    return n * scale
}

/**
 * @description Constraint a number to
 * minimum and maximum value
 * 
 * @param {number} n Numeric expression
 * @param {number} min n minimum value
 * @param {number} max n maximum value
 * @returns {number}
 */
function constraint(n: number, min: number, max: number): number {
    if(n < min) return min
    if(n > max) return max
    return n
}

/**
 * @description Round a number with precision
 * 
 * @param {number} n Numeric expression
 * @param {number=} precision Round precision
 * @returns {number}
 */
function round(n: number, precision?: number): number {
    if(!precision) {
        return Math.round(n)
    }
    return Math.round(n * (10 ** precision)) / 10 ** precision
}

/**
 * @description Get nearest single precision
 * float representation of a number
 * 
 * @param {number} n Numeric expression
 * @returns {number}
 */
function fround(n: number): number {
    return Math.fround(n)
}

/**
 * @description Get the greatest integer less
 * than or equal to its numeric argument
 * 
 * @param {number} n number
 * @returns {number} number
 */
function floor(n: number): number {
    return Math.floor(n)
}

/**
 * @description Returns the smallest integer greater
 * than or equal to its numeric argument
 * 
 * @param {number} n Numeric expression
 * @returns {number}
 */
function ceil(n: number): number {
    return Math.ceil(n)
}


/**
 * @description Calculate distance between two points
 * @param {number} x1 x coordinate of first point
 * @param {number} y1 y coordinate of first point
 * @param {number} x2 x coordinate of second point
 * @param {number} y2 y coordinate of second point
 * @returns {number}
 */
function dist(x1: number, y1: number, x2: number, y2: number): number {
    return Math.sqrt(
        (Math.abs(x1 - x2) ** 2) +
        (Math.abs(y1 - y2) ** 2)
    )
}

/**
 * @description Search a minimum number on an array
 * 
 * @param {number} numbers Array of number
 * @returns {number}
 */
function min(numbers: number[]): number {
    if(numbers.length < 1) return undefined
    let min = numbers[0]
    numbers.forEach(number => {
        number < min ? min = number : ''
    })

    return min
}

/**
 * @description Search a maximum number on an array
 * 
 * @param {number} numbers Array of number
 * @returns {number}
 */
function max(numbers: number[]): number {
    if(numbers.length < 1) return undefined
    let max = numbers[0]
    numbers.forEach(number => {
        number > max ? max = number : ''
    })

    return max
}

/**
 * @description Calculate sum of array
 * 
 * @param {number} numbers Array of number
 * @returns {number}
 */
function sum(numbers: number[]): number {
    let sum = 0
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i]
    }

    return sum
}

/**
 * @description Search average number of an array
 * 
 * @param {number} numbers Array of number
 * @returns {number}
 */
function average(numbers: number[]): number {
    if(numbers.length < 1) return 
    const average = sum(numbers) / numbers.length
    return average
}

/**
 * @description Return random number in a range
 * @param {number=} [min=0] Lowest random value
 * @param {number=} [max=1] Highest random value
 * @returns {number}
 */
function random(min: number = 0, max: number = 1) {
    return (Math.random() * (max - min)) + min
}

/**
 * @description Return random items from values
 * 
 * @param {any[]} values Array of value
 * @returns {{value: any, i: number}}
 */
function randomFrom(values: any[]) {
    if(values.length < 1) return undefined
    const i = round(random(0, values.length - 1))

    return {
        value: values[i],
        i: i
    }

}

/**
 * @description Return random character (from 'a-Z, A-Z, 0-9')
 * 
 * @param {string=} [from=a] pick letter from
 * @param {string=} [to=Z] pick letter to
 * @returns {string}
 */
function randomChar(from: string = 'a', to: string = 'Z') {
    let fromI: number, toI: number
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
    fromI = letters.indexOf(from)
    toI = letters.indexOf(to)

    return letters[random(fromI, toI)]
}

/**
 * @description Convert angle from degree to radian
 * 
 * @param deg Angle in degree
 * @returns {number}
 */
function degToRad(deg: number) {
    return deg * Math.PI / 180
}

/**
 * @description Convert angle from radian to degree
 * 
 * @param deg Angle in degree
 * @returns {number}
 */
function radToDeg(rad: number) {
    return rad * 180 / Math.PI
}

function loop(callback: (stop: () => void) => void) {
    let id, stopped = false
    function loop() {
        callback(stop)
        if(!stopped) {
            id = requestAnimationFrame(loop)
        }
    }

    function stop() {
        stopped = true
        cancelAnimationFrame(id)
    }

    loop()
}

export default {
    PI,
    TWO_PI,
    round,
    fround,
    floor,
    ceil,
    min,
    max,
    average,
    map,
    constraint,
    inverse,
    dist,
    random,
    randomFrom,
    randomChar,
    radToDeg,
    degToRad,
    loop
}
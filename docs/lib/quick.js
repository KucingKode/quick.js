class Sketch {
    constructor(options, sketch) {
        options.title ? this._title = options.title : this._title = 'Title';
        options.note ? this._note = options.note : this._note = '';
        this._sketch = sketch;
    }
    start() {
        document.querySelector('head title').innerHTML = this._title;
        this._sketch();
    }
    get title() {
        return this._title;
    }
    get note() {
        return this._note;
    }
}

const theme = {
    'dark-default': {
        err: 'font-weight: bold; color: #ff6767;',
        ok: 'color: #6dff9e',
        warn: 'color: #ffef5b;',
        highlight: 'color: #8ce4ff;',
        secondary: 'color: #777777;'
    },
    'light-default': {
        err: 'font-weight: bold; color: #ff3e3e;',
        ok: 'color: #1e9b48;',
        warn: 'color: #ff8901;',
        highlight: 'color: #3171e9;',
        secondary: 'color: #777777;',
    }
};

const PI = Math.PI;
const TWO_PI = Math.PI * 2;
/**
 * @description Inverse a number
 *
 * @param {number} n Number to be inversed
 * @returns {number}
 */
function inverse(n) {
    return 1 / n;
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
function map(n, nMin, nMax, min, max) {
    const scale = (max - min) / (nMax - nMin);
    return n * scale;
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
function constraint(n, min, max) {
    if (n < min)
        return min;
    if (n > max)
        return max;
    return n;
}
/**
 * @description Round a number with precision
 *
 * @param {number} n Numeric expression
 * @param {?number} precision Round precision
 * @returns {number}
 */
function round(n, precision) {
    if (!precision) {
        return Math.round(n);
    }
    return Math.round(n * (Math.pow(10, precision))) / Math.pow(10, precision);
}
/**
 * @description Get nearest single precision
 * float representation of a number
 *
 * @param {number} n Numeric expression
 * @returns {number}
 */
function fround(n) {
    return Math.fround(n);
}
/**
 * @description Get the greatest integer less
 * than or equal to its numeric argument
 *
 * @param {number} n number
 * @returns {number} number
 */
function floor(n) {
    return Math.floor(n);
}
/**
 * @description Returns the smallest integer greater
 * than or equal to its numeric argument
 *
 * @param {number} n Numeric expression
 * @returns {number}
 */
function ceil(n) {
    return Math.ceil(n);
}
/**
 * @description Calculate distance between two points
 * @param {number} x1 x coordinate of first point
 * @param {number} y1 y coordinate of first point
 * @param {number} x2 x coordinate of second point
 * @param {number} y2 y coordinate of second point
 * @returns {number}
 */
function dist(x1, y1, x2, y2) {
    return Math.sqrt((Math.pow(Math.abs(x1 - x2), 2)) +
        (Math.pow(Math.abs(y1 - y2), 2)));
}
/**
 * @description Search a minimum number on an array
 *
 * @param {number} numbers Array of number
 * @returns {number}
 */
function min(numbers) {
    if (numbers.length < 1)
        return undefined;
    let min = numbers[0];
    numbers.forEach(number => {
        number < min ? min = number : '';
    });
    return min;
}
/**
 * @description Search a maximum number on an array
 *
 * @param {number} numbers Array of number
 * @returns {number}
 */
function max(numbers) {
    if (numbers.length < 1)
        return undefined;
    let max = numbers[0];
    numbers.forEach(number => {
        number > max ? max = number : '';
    });
    return max;
}
/**
 * @description Calculate sum of array
 *
 * @param {number} numbers Array of number
 * @returns {number}
 */
function sum(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}
/**
 * @description Search average number of an array
 *
 * @param {number} numbers Array of number
 * @returns {number}
 */
function average(numbers) {
    if (numbers.length < 1)
        return;
    const average = sum(numbers) / numbers.length;
    return average;
}
/**
 * @description Return random number in a range
 * @param {?number} [min=0] Lowest random value
 * @param {?number} [max=1] Highest random value
 * @returns {number}
 */
function random(min = 0, max = 1) {
    return (Math.random() * (max - min)) + min;
}
/**
 * @description Return random items from values
 *
 * @param {any[]} values Array of value
 * @returns {{value: any, i: number}}
 */
function randomFrom(values) {
    if (values.length < 1)
        return undefined;
    const i = round(random(0, values.length - 1));
    return {
        value: values[i],
        i: i
    };
}
/**
 * @description Return random character (from 'a-Z, A-Z, 0-9')
 *
 * @param {?string} [from=a] pick letter from
 * @param {?string} [to=Z] pick letter to
 * @returns {string}
 */
function randomChar(from = 'a', to = 'Z') {
    let fromI, toI;
    const letters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    fromI = letters.indexOf(from);
    toI = letters.indexOf(to);
    return letters[random(fromI, toI)];
}
/**
 * @description Convert angle from degree to radian
 *
 * @param deg Angle in degree
 * @returns {number}
 */
function degToRad(deg) {
    return deg * Math.PI / 180;
}
/**
 * @description Convert angle from radian to degree
 *
 * @param deg Angle in degree
 * @returns {number}
 */
function radToDeg(rad) {
    return rad * 180 / Math.PI;
}
var util = {
    PI, TWO_PI,
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
    degToRad
};

class RGB {
    /**
     *
     * @param {number} r Red
     * @param {number} g Green
     * @param {number} b Blue
     * @param {number} a Alpha
     */
    constructor(r, g, b, a) {
        /**
         * @description RGB components
         * @type {number[]}
         * @private
         */
        this._comp = [0, 0, 0];
        this._comp = a ? [r, g, b, a] : [r, g, b];
    }
    // Generator
    /**
     * @description Create RGB color from hex code
     * @param {string} code Hex Code
     * @returns {RGB}
     */
    static fromHex(code) {
        if (code.startsWith('#')) {
            code = code.substr(1);
        }
        else if (code.startsWith('0x')) {
            code = code.substr(2);
        }
        let r = '0', g = '0', b = '0', a = undefined;
        if (code.length == 3) {
            r = '0x' + code[0] + code[0];
            g = '0x' + code[1] + code[1];
            b = '0x' + code[2] + code[2];
        }
        if (code.length == 4) {
            r = '0x' + code[0] + code[0];
            g = '0x' + code[1] + code[1];
            b = '0x' + code[2] + code[2];
            a = '0x' + code[3] + code[3];
            a = +(+a / 255).toFixed(3);
        }
        if (code.length == 6) {
            r = '0x' + code[0] + code[1];
            g = '0x' + code[2] + code[3];
            b = '0x' + code[4] + code[5];
        }
        if (code.length == 8) {
            r = '0x' + code[0] + code[1];
            g = '0x' + code[2] + code[3];
            b = '0x' + code[4] + code[5];
            a = '0x' + code[6] + code[7];
            a = +(+a / 255).toFixed(3);
        }
        return new RGB(+r, +g, +b, a);
    }
    /**
     * @description Create RGB color from HSL color
     * @param {number[]} components HSL components
     * @returns {RGB}
     */
    static fromHSL(components) {
        let h = components[0], s = components[1], l = components[2], a = components[3] || undefined;
        let r = 0, g = 0, b = 0;
        s /= 100;
        l /= 100;
        let c = (1 - Math.abs(2 * l - 1)) * s;
        let x = c * (1 - Math.abs((h / 60) % 2 - 1));
        let m = l - c / 2;
        if (0 <= h && h < 60) {
            r = c;
            g = x;
            b = 0;
        }
        else if (60 <= h && h < 120) {
            r = x;
            g = c;
            b = 0;
        }
        else if (120 <= h && h < 180) {
            r = 0;
            g = c;
            b = x;
        }
        else if (180 <= h && h < 240) {
            r = 0;
            g = x;
            b = c;
        }
        else if (240 <= h && h < 300) {
            r = x;
            g = 0;
            b = c;
        }
        else if (300 <= h && h < 360) {
            r = c;
            g = 0;
            b = x;
        }
        r = util.round((r + m) * 255);
        g = util.round((g + m) * 255);
        b = util.round((b + m) * 255);
        return new RGB(r, g, b, a);
    }
    /**
     * @description Return string representation
     * of this RGB color
     *
     * @returns {string}
     */
    toString() {
        return this._comp.length == 4 ?
            `rgba(${this._comp[0]},${this._comp[1]},${this._comp[2]},${this._comp[3]})` :
            `rgb(${this._comp[0]},${this._comp[1]},${this._comp[2]})`;
    }
    /**
     * @description Return hex code representation
     * of this RGB color
     *
     * @returns {string}
     */
    toHex() {
        let r = `${(this._comp[0]).toString(16)}`;
        let g = `${(this._comp[1]).toString(16)}`;
        let b = `${(this._comp[2]).toString(16)}`;
        let a = this._comp[3] ? `${util.round(this._comp[3] * 255).toString(16)}` : '';
        r.length == 1 ? r = `0${r}` : '';
        g.length == 1 ? g = `0${g}` : '';
        b.length == 1 ? b = `0${b}` : '';
        a.length == 1 ? a = `0${a}` : '';
        return `0x${r}${g}${b}${a}`;
    }
    // Properties
    /**
     * @description RGB components
     * @type {number[]}
     */
    get comp() {
        return Object.assign([], this._comp);
    }
    set comp(comp) {
        this._comp = comp;
    }
    /**
     * @description Red value of this color
     * @type {number}
     */
    get r() {
        return this._comp[0];
    }
    set r(r) {
        this._comp[0] = r;
    }
    /**
     * @description Green value of this color
     * @type {number}
     */
    get g() {
        return this._comp[1];
    }
    set g(g) {
        this._comp[1] = g;
    }
    /**
     * @description Blue value of this color
     * @type {number}
     */
    get b() {
        return this._comp[2];
    }
    set b(b) {
        this._comp[2] = b;
    }
    /**
     * @description Alpha value of this color
     * @type {number}
     */
    get a() {
        return this._comp[3];
    }
    set a(a) {
        this._comp[3] = a;
    }
}

class HSL {
    /**
     *
     * @param {number} h Hue
     * @param {number} s Saturation
     * @param {number} l Lightness
     * @param {number} a Alpha
     */
    constructor(h, s, l, a) {
        /**
         * @description HSL components
         * @type {number[]}
         * @private
         */
        this._comp = [0, 0, 0];
        this._comp = a ? [h, s, l, a] : [h, s, l];
    }
    // Generator
    /**
     * @description Create HSL color from hex code
     * @param {string} code Hex Code
     * @returns {HSL}
     */
    static fromHex(code) {
        const rgb = RGB.fromHex(code);
        return HSL.fromRGB(rgb.comp);
    }
    /**
     * @description Create HSL color from RGB color
     * @param {number[]} components RGB components
     * @returns {HSL}
     */
    static fromRGB(components) {
        let r = components[0] / 255, g = components[1] / 255, b = components[2] / 255, a = components[3] || undefined;
        let h = 0, s = 0, l = 0;
        const cmin = util.min([r, g, b]);
        const cmax = util.max([r, g, b]);
        const delta = cmax - cmin;
        // Calculate hue
        if (delta == 0)
            h = 0;
        else if (cmax == r)
            h = ((g - b) / delta) % 6;
        else if (cmax == g)
            h = ((b - r) / delta) + 2;
        else if (cmax == b)
            h = ((r - g) / delta) + 4;
        h = Math.round(h * 60);
        h < 0 ? h += 360 : '';
        // calculate lightness
        l = (cmax + cmin) / 2;
        // Calculate Saturation
        s = delta == 0 ? 0 : delta / (1 - Math.abs((2 * l) - 1));
        l = +(l * 100).toFixed(1);
        s = +(s * 100).toFixed(1);
        return new HSL(h, s, l, a);
    }
    /**
     * @description Return string representation
     * of this HSL color
     *
     * @returns {string}
     */
    toString() {
        return this._comp.length == 4 ?
            `hsla(${this._comp[0]},${this._comp[1]}%,${this._comp[2]}%,${this._comp[3]})` :
            `hsl(${this._comp[0]},${this._comp[1]}%,${this._comp[2]}%)`;
    }
    /**
     * @description Return hex code representation
     * of this HSL color
     *
     * @returns {string}
     */
    toHex() {
        const rgb = RGB.fromHSL(this.comp);
        return rgb.toHex();
    }
    // Properties
    /**
     * @description HSL components
     * @type {number[]}
     */
    get comp() {
        return Object.assign([], this._comp);
    }
    set comp(components) {
        this._comp = components;
    }
    /**
     * @description Hue of this color
     * @type {number}
     */
    get h() {
        return this._comp[0];
    }
    set h(h) {
        this._comp[0] = h;
    }
    /**
     * @description Saturation of this color
     * @type {number}
     */
    get s() {
        return this._comp[1];
    }
    set s(s) {
        this._comp[1] = s;
    }
    /**
     * @description Lightness of this color
     * @type {number}
     */
    get l() {
        return this._comp[2];
    }
    set l(l) {
        this._comp[2] = l;
    }
    /**
     * @description Alpha of this color
     * @type {number}
     */
    get a() {
        return this._comp[3];
    }
    set a(a) {
        this._comp[3] = a;
    }
}

var colorSys = {
    RGB,
    HSL
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

/**
 * @typedef {(err?: Error, context?: string) => void} callback
 */
const url = window.location;
/**
 * @description Create a path from paths
 *
 * @param path Paths to be joined
 * @returns {string}
 */
function path(...path) {
    return window.location.href + path.join('/');
}
/**
 * @description Get text from a file using fetch
 *
 * @param {string} path Url or path to a file
 * @param {callback} callback Function that will be
 * executed after fetch operation failed or success
 *
 * @returns {Promise<void>}
 */
function getText(path, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(path)
            .then(data => data.text())
            .then(text => callback(undefined, text || ''))
            .catch(err => callback(new Error(err)));
    });
}
/**
 * @description Get data from json file using fetch
 *
 * @param {string} path Url or path to json file
 * @param {callback} callback Function that will be
 * executed after fetch operation failed or success
 *
 * @returns {Promise<void>}
 */
function getJSON(path, callback) {
    return __awaiter(this, void 0, void 0, function* () {
        yield fetch(path)
            .then(data => data.text())
            .then(text => callback(undefined, text || ''))
            .catch(err => callback(new Error(err)));
    });
}
function sendText(text, name) {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', name);
    element.style.display = 'none';
    element.click();
}
var fileSys = {
    url,
    path,
    getText,
    getJSON,
    sendText
};

/**
 * @description Watch mouse
 */
function watchMouse() {
    return (new class {
        constructor() {
            /**
             * @private
             */
            this.data = {
                x: 0,
                y: 0,
                pressed: false
            };
            window.addEventListener('mousemove', (e) => {
                this.data.x = e.clientX;
                this.data.y = e.clientY;
            });
            window.addEventListener('mousedown', () => {
                this.data.pressed = true;
            });
            window.addEventListener('mouseup', () => {
                this.data.pressed = false;
            });
        }
        get x() {
            return this.data.x;
        }
        get y() {
            return this.data.y;
        }
        get pressed() {
            return this.data.pressed;
        }
    });
}

/**
 * @description Watch keyboardkeys
 */
function watchKey() {
    return (new class {
        constructor() {
            /**
             * @private
             */
            this.data = {
                pressed: new Set(),
                shiftPressed: false,
                ctrlPressed: false,
                altPressed: false
            };
            window.addEventListener('keydown', (e) => {
                switch (e.key) {
                    case ('Shift'): {
                        this.data.shiftPressed = true;
                    }
                    case ('Ctrl'): {
                        this.data.ctrlPressed = true;
                    }
                    case ('Alt'): {
                        this.data.altPressed = true;
                    }
                    default: {
                        this.data.pressed.add(e.key);
                    }
                }
            });
            window.addEventListener('keyup', (e) => {
                switch (e.key) {
                    case ('Shift'): {
                        this.data.shiftPressed = false;
                    }
                    case ('Ctrl'): {
                        this.data.ctrlPressed = false;
                    }
                    case ('Alt'): {
                        this.data.altPressed = false;
                    }
                    default: {
                        this.data.pressed.delete(e.key);
                    }
                }
            });
        }
        isPressed(key) {
            if (this.data.pressed.has(key)) {
                return true;
            }
            return false;
        }
        get pressed() {
            let result = [];
            this.data.pressed.forEach(key => {
                result.push(key);
            });
            return result;
        }
        get shiftPressed() {
            return this.data.shiftPressed;
        }
        get ctrlPressed() {
            return this.data.ctrlPressed;
        }
        get altPressed() {
            return this.data.altPressed;
        }
    });
}

/**
 * @description Watch touches
 */
function watchTouch() {
    return (new class {
        constructor() {
            /**
             * @private
             */
            this.data = [];
            window.addEventListener('touchmove', (e) => {
                for (let i = 0; i < e.touches.length; i++) {
                    const touch = e.touches.item(i);
                    this.data.push(touch);
                }
            });
        }
        get touches() {
            return this.data;
        }
    });
}

var media = {
    watchMouse,
    watchKey,
    watchTouch
};

class Grid {
    /**
     *
     * @param {number} rows Grid total rows
     * @param {number} columns Grid total columns
     * @param {?any} [segmentInitial=null] Grid segments initial value
     */
    constructor(rows, columns, segmentInitial = null) {
        /**
         * @description Grid total rows
         * @type {number}
         * @private
         */
        this._rows = 0;
        /**
         * @description Grid total columns
         * @type {number}
         * @private
         */
        this._cols = 0;
        /**
         * @description Grid data
         * @type {any[][]}
         * @private
         */
        this._data = [];
        /**
         * @description Grid segments initial value
         * @type {any}
         */
        this._initialVal = null;
        this._rows = rows;
        this._cols = columns;
        this._initialVal = segmentInitial;
        for (let i = 0; i < rows; i++) {
            this._data[i] = [];
            for (let j = 0; j < columns; j++) {
                this.setInitialVal(i, j);
            }
        }
    }
    /**
     * @description Set initial value to a segment
     * @param {number} i
     * @param {number} j
     * @private
     */
    setInitialVal(i, j) {
        let val;
        switch (typeof this._initialVal) {
            case ('function'): {
                val = this._initialVal();
                break;
            }
            case ('object'): {
                val = JSON.parse(JSON.stringify(this._initialVal));
                break;
            }
            default: {
                val = this._initialVal;
                break;
            }
        }
        this._data[i][j] = val;
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
    static fromArea(areaWidth, areaHeight, segmentWidth, segmentHeight, segmentInitial) {
        return new Grid(util.floor(areaHeight / segmentHeight), util.floor(areaWidth / segmentWidth), segmentInitial);
    }
    /**
     * @description Clone a grid
     *
     * @param grid Grid to be cloned
     * @returns {Grid}
     */
    static clone(grid) {
        const clone = new Grid(grid.rows, grid.cols);
        clone.data = Array.from(grid.data);
        return clone;
    }
    // Operations
    /**
     * @description Iterate grid and modify its value
     *
     * @param {(value: any, column: number, row: number) => any} handler Function to handle
     * grid input and output
     * @returns {void}
     */
    iterate(handler) {
        for (let i = 0; i < this._rows; i++) {
            for (let j = 0; j < this._cols; j++) {
                handler(this._data[i][j], j, i);
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
    get(col, row) {
        return this._data[row][col];
    }
    /**
     * @description Change a data of a grid segment
     *
     * @param {number} row Segment row
     * @param {number} col Segemnt column
     * @param {any} newValue New value
     * @returns {void}
     */
    set(col, row, newValue) {
        this._data[row][col] = newValue;
    }
    /**
     * @description Get a datas of a row in grid
     * @param {number} row Row of dats to be getted
     * @returns {any[]} Datas on the 'row' row
     */
    getRow(row) {
        if (row >= this.rows) {
            throw new Error(`
                Can't get a value from ${row} row,
                because grid only have ${this._rows} rows
            `);
        }
        let result = [];
        for (let i = 0; i < this._cols; i++) {
            result.push(this._data[row][i]);
        }
        return result;
    }
    /**
     * @description Get a datas of a column in grid
     * @param {number} col Column of datas to be getted
     * @returns {any[]} Datas on the 'col' column
     */
    getCol(col) {
        if (col >= this.cols) {
            throw new Error(`
                Can't get a value from ${col} column,
                because grid only have ${this._cols} columns
            `);
        }
        let result = [];
        for (let i = 0; i < this._rows; i++) {
            result.push(this._data[i][col]);
        }
        return result;
    }
    // Properties
    /**
     * @description Initial segment value
     * on the grid
     *
     * @type {any}
     */
    get initialVal() {
        return this._initialVal;
    }
    set initialVal(initialVal) {
        this._initialVal = initialVal;
    }
    /**
     * @description total Rows on the grid
     * @type {number}
     */
    get rows() {
        return this._rows;
    }
    set rows(rows) {
        for (let i = this._rows - 1; i < rows; i++) {
            this._data[i] = [];
            for (let j = 0; j < this._cols; j++) {
                this.setInitialVal(i, j);
            }
        }
        this._rows = rows;
    }
    /**
     * @description total Columns on the grid
     * @type {number}
     */
    get cols() {
        return this._cols;
    }
    set cols(cols) {
        for (let i = 0; i < this._rows; i++) {
            this._data[i] = [];
            for (let j = this._cols - 1; j < cols; j++) {
                this.setInitialVal(i, j);
            }
        }
        this._cols = cols;
    }
    get data() {
        return Array.from(this._data);
    }
    set data(data) {
        this._data = data;
    }
}

class Vector2D {
    /**
     *
     * @param {number} x Vector x coordinate
     * @param {number} y Vector y coordinate
     * @param {number} limit Vector magnitude limit
     */
    constructor(x, y, limit) {
        /**
         * @description x position
         * @type {number}
         * @private
         */
        this._x = 0;
        /**
         * @description y position
         * @type {number}
         * @private
         */
        this._y = 0;
        /**
         * @description Magnitude limit
         * @type {number | null}
         * @private
         */
        this._limit = null;
        this._x = x || 0;
        this._y = y || 0;
        this._limit = limit || undefined;
    }
    /**
     * @description Make sure there is no infinite number
     * and the magnitude of the vector less than or
     * equal to its limit
     *
     * @private
     */
    check() {
        if (!isFinite(this._x) || !isFinite(this._y)) {
            throw new Error(`Infinite number detected! : (${this._x}, ${this._y})`);
        }
        if (this._limit && this.mag > this._limit) {
            this.mag = this._limit;
        }
    }
    // Generator
    /**
     * @description Create new vector from
     * an angle
     *
     * @param {number} angle Vector angle
     * @returns {Vector2D} Unit vector from angle
     */
    static angle(angle) {
        return new Vector2D(Math.cos(angle), Math.sin(angle));
    }
    /**
     * @description Create new vector from
     * substraction of two vectors
     *
     * @param {Vector2D} vec1 Vector 1
     * @param {Vector2D} vec2 Vector 2
     * @returns {Vector2D} Vector from vec1 - vec2
     */
    static sub(vec1, vec2) {
        return new Vector2D(vec1.x - vec2.x, vec1.y - vec2.y);
    }
    /**
     * @description Create new vector from
     * addition of two vectors
     *
     * @param {Vector2D} vec1 Vector 1
     * @param {Vector2D} vec2 Vector 2
     * @returns {Vector2D} Vector from vec1 + vec2
     */
    static add(vec1, vec2) {
        return new Vector2D(vec1.x + vec2.x, vec1.y + vec2.y);
    }
    // Vector operations
    /**
     * @description Get dot product of
     * two vectors
     *
     * @param {Vector2D} vec1 Vector 1
     * @param {Vector2D} vec2 Vector 2
     * @returns {number} Dot product of vec1 and vec2
     */
    static dot(vec1, vec2) {
        return (vec1.x * vec2.x) + (vec1.y * vec2.y);
    }
    /**
     * @description Get cross product of
     * two vectors
     *
     * @param {Vector2D} vec1 Vector 1
     * @param {Vector2D} vec2 Vector 2
     * @returns {number} Cross product of vec1 and vec2
     */
    static cross(vec1, vec2) {
        return (vec1.x * vec2.y) - (vec1.y * vec2.x);
    }
    /**
     * @description Create random 2d unit vector
     * @returns {Vector2D}
     */
    static random2D() {
        return new Vector2D(util.round(util.random(0, Math.PI * 2)), util.round(util.random(0, Math.PI * 2)));
    }
    /**
     * @description Clone a vector
     *
     * @param {Vector2D} vec Vector to be cloned
     * @returns {Vector2D} Clone of vec
     */
    static clone(vec) {
        return new Vector2D(vec.x, vec.y, vec.limit);
    }
    // Basic operations
    /**
     * @description Add the x and y coordinates
     * with some numbers
     *
     * @param {number} x Addition of x
     * @param {number} y Addition of y
     * @returns {this}
     */
    add(x, y) {
        this._x += x;
        this._y += y;
        this.check();
        return this;
    }
    /**
     * @description Subtract the x and y
     * coordinates with some numbers
     *
     * @param {number} x Deduction of x
     * @param {number} y Deduction of y
     * @returns {this}
     */
    sub(x, y) {
        this._x -= x;
        this._y -= y;
        this.check();
        return this;
    }
    /**
     * @description Multiply x and y coordinate
     * with a number
     *
     * @param {number} n Vector multiplier
     * @returns {this}
     */
    mult(n) {
        this._x *= n;
        this._y *= n;
        this.check();
        return this;
    }
    /**
     * @description Divide x and y coordinate
     * with a number
     *
     * @param {number} n Vector divider
     * @returns {this}
     */
    div(n) {
        this._x /= n;
        this._y /= n;
        this.check();
        return this;
    }
    // Shorthands
    /**
     * @description Reset x and y coordinate
     *
     * @param {number} x New x coordinate
     * @param {number} y New y coordinate
     * @returns {this}
     */
    $set(x, y) {
        this._x = x;
        this._y = y;
        this.check();
        return this;
    }
    /**
     * @description Add this vector with another vector
     *
     * @param {Vector2D} vec Vector to be added
     * @returns {this}
     */
    $add(vec) {
        this._x += vec.x;
        this._y += vec.y;
        this.check();
        return this;
    }
    /**
     * @description Subtract this vector with another vector
     *
     * @param {Vector2D} vec Deduction vector
     * @returns {this}
     */
    $sub(vec) {
        this._x -= vec.x;
        this._y -= vec.y;
        this.check();
        return this;
    }
    // Angular operations
    /**
     * @description Rotate vector
     *
     * @param {number} angle Addition angle
     * @returns {this}
     */
    rotate(angle) {
        this.angle += angle;
        return this;
    }
    /**
     * @description Vector angle
     * @type {number}
     */
    get angle() {
        return Math.atan2(this._y, this._x);
    }
    set angle(angle) {
        const cos = Math.cos(angle), sin = Math.sin(angle);
        const nx = (cos * this._x) - (sin * this._y), ny = (cos * this._y) + (sin * this._x);
        this._x = nx;
        this._y = ny;
    }
    // properties
    /**
     * @description Vector magnitude
     * @type {number}
     */
    get mag() {
        return Math.sqrt((Math.pow(this._x, 2)) +
            (Math.pow(this._y, 2)));
    }
    set mag(mag) {
        if (this._limit && mag > this._limit) {
            console.warn(`Can\'t set Magnitude to higher than limit : Limit is ${this._limit}`);
        }
        this.mult(mag / this.mag);
        this.check();
    }
    /**
     * @description Vector x, y coordinate
     * @type {{x: number, y: number}}
     */
    get pos() {
        return { x: this._x, y: this._y };
    }
    /**
     * @description Vector x coordinate
     * @type {number}
     */
    get x() {
        return this._x;
    }
    set x(x) {
        this._x = x;
        this.check();
    }
    /**
     * @description Vector y coordinate
     * @type {number}
     */
    get y() {
        return this._y;
    }
    set y(y) {
        this._y = y;
        this.check();
    }
    /**
     * @description Vector magnitude limit
     * @type {number | undefined}
     */
    get limit() {
        return this._limit;
    }
    set limit(limit) {
        this._limit = limit;
    }
    /**
     * @description Vector normal
     * @type {number}
     */
    get normal() {
        return new Vector2D(-this._y, this._x);
    }
    /**
     * @description Vector unit
     * @type {number}
     */
    get unit() {
        const vec = new Vector2D(this._x, this._y);
        vec.mag = 1;
        return vec;
    }
}

class Line {
    constructor(x, y, mag, angle) {
        this._vertices = [];
        this._vertices[0] = new Vector2D(x - (mag / 2), y);
        this._vertices[1] = new Vector2D(x + (mag / 2), y);
        this._ref = {
            unit: this.vertices[1].$sub(this.vertices[0]).unit,
            center: new Vector2D(x, y),
            vertices: [Vector2D.clone(this.vertices[0]), Vector2D.clone(this.vertices[1])]
        };
        this.angle = angle;
    }
    // Generator
    /**
     * @description Create an Line from two point
     *
     * @param {number} x1 first point x coordinate
     * @param {number} y1 first point y coordinate
     * @param {number} x2 second point x coordinate
     * @param {number} y2 second point y coordinate
     * @returns {Line}
     */
    static from(x1, y1, x2, y2) {
        const start = new Vector2D(x1, y1);
        const end = new Vector2D(x2, y2);
        const pos = start.$add(end).div(2);
        const mag = end.$sub(start).mag;
        const angle = end.$sub(start).angle;
        const line = new Line(pos.x, pos.y, mag, angle);
        return line;
    }
    /**
     * @description Clone an line
     *
     * @param {Line} line line to be cloned
     * @returns {Line}
     */
    static clone(line) {
        return new Line(line.x, line.y, line.mag, line.angle);
    }
    // Functions
    rotate(angle) {
        this.angle = this.angle + angle;
    }
    // Getter & Setter
    get x() {
        return this._ref.center.x;
    }
    set x(x) {
        const diff = x - this._ref.center.x;
        this._ref.center.add(diff, 0);
        this._ref.vertices[0].add(diff, 0);
        this._ref.vertices[1].add(diff, 0);
        this._ref.unit = Vector2D.clone(this._ref.vertices[1]).$sub(this._ref.vertices[0]).unit;
    }
    get y() {
        return this._ref.center.y;
    }
    set y(y) {
        const diff = y - this._ref.center.y;
        this._ref.center.add(diff, 0);
        this._ref.vertices[0].add(diff, 0);
        this._ref.vertices[1].add(diff, 0);
        this._ref.unit = Vector2D.clone(this._ref.vertices[1]).$sub(this._ref.vertices[0]).unit;
    }
    get mag() {
        return this.vertices[1].$sub(this.vertices[0]).mag;
    }
    set mag(mag) {
        const unit = Vector2D.clone(this._ref.unit);
        unit.angle = this.angle;
        this._vertices[0] = Vector2D.clone(this._ref.center).$add(Vector2D.clone(unit).mult(-mag / 2));
        this._vertices[1] = Vector2D.clone(this._ref.center).$add(Vector2D.clone(unit).mult(mag / 2));
    }
    get angle() {
        return this.vertices[1].$sub(this.vertices[0]).angle;
    }
    set angle(angle) {
        const unit = Vector2D.clone(this._ref.unit);
        const mag = this.mag;
        unit.angle = angle;
        this._vertices[0] = Vector2D.clone(this._ref.center).$add(Vector2D.clone(unit).mult(-mag / 2));
        this._vertices[1] = Vector2D.clone(this._ref.center).$add(Vector2D.clone(unit).mult(mag / 2));
    }
    get unit() {
        return this.vertices[1].$sub(this.vertices[0]).unit;
    }
    // Get vertices
    get start() {
        return this._vertices[0];
    }
    get end() {
        return this._vertices[1];
    }
    get line() {
        return this.vertices[1].$sub(this.vertices[0]);
    }
    get vertices() {
        return [Vector2D.clone(this._vertices[0]), Vector2D.clone(this._vertices[1])];
    }
}

class Stack {
    /**
     *
     * @param {?any[]} [data=[]] Stack initial data
     * @param {?number} [size=null] Stack size
     */
    constructor(data, size) {
        /**
         * @description Stack data
         * @type {any[]}
         * @private
         */
        this._data = [];
        /**
         * @description Stack size
         * @type {?number}
         * @private
         */
        this._size = null;
        this._data = data || [];
        this._size = size || null;
    }
    /**
     * @description Clone a stack
     *
     * @param {Stack} stack Stack to be cloned
     * @returns {Stack}
     */
    static clone(stack) {
        return new Stack(stack.data);
    }
    /**
     * @description Add a data to the top
     * of the stack
     *
     * @param {any} data Data to be added
     * @returns {void}
     */
    push(data) {
        if (this.isFull)
            return;
        this._data.push(data);
    }
    /**
     * @description Remove the top data of
     * the stack
     *
     * @returns {void}
     */
    pop() {
        if (this.isEmpty)
            return;
        this._data.splice(this._data.length - 1, 1);
    }
    /**
     * @description Get the top data of
     * the stack
     *
     * @returns {any}
     */
    peek() {
        if (this.isEmpty)
            return undefined;
        return this._data[this._data.length - 1];
    }
    /**
     * @description Size of the stack
     * @type {?number}
     */
    get size() {
        return this._size;
    }
    set size(size) {
        this._size = size;
    }
    /**
     * @description Data of the stack
     * @type {number}
     */
    get data() {
        return Array.from(this._data);
    }
    /**
     * @description Check whether stack is full
     * @type {boolean}
     */
    get isFull() {
        if (this._size && this._data.length >= this._size) {
            return true;
        }
        return false;
    }
    /**
     * @description Check whether stack is empty
     * @type {boolean}
     */
    get isEmpty() {
        if (this._data.length < 1) {
            return true;
        }
        return false;
    }
}

class Queue {
    /**
     *
     * @param {?any[]} data Queue initial data
     * @param {?number} size Queue size
     */
    constructor(data, size) {
        /**
         * @description Queue data
         * @type {any[]}
         * @private
         */
        this._data = [];
        /**
         * @description Queue size
         * @type {?number}
         * @private
         */
        this._size = null;
        this._data = data;
        this._size = size;
    }
    /**
     * @description Clone a queue
     *
     * @param {Queue} queue Queue to be cloned
     * @returns {Queue}
     */
    static clone(queue) {
        return new Queue(queue.data);
    }
    /**
     * @description Add a data to the top
     * of the queue
     *
     * @param {any} data Data to be added
     * @returns {void}
     */
    enqueue(data) {
        if (this.isFull)
            return;
        this._data.push(data);
    }
    /**
     * @description Remove the bottom data of
     * the queue
     *
     * @returns {void}
     */
    dequeue() {
        if (this.isEmpty)
            return;
        const data = this.peek();
        this._data.splice(0, 1);
        return data;
    }
    /**
     * @description Get the bottom data of
     * the queue
     *
     * @returns {any}
     */
    peek() {
        if (this.isEmpty)
            return undefined;
        return this._data[0];
    }
    /**
     * @description Size of the queue
     * @type {?number}
     */
    get size() {
        return this._size;
    }
    set size(size) {
        this._size = size;
    }
    /**
     * @description Data of the queue
     * @type {number}
     */
    get data() {
        return Array.from(this._data);
    }
    /**
     * @description Check whether queue is full
     * @type {boolean}
     */
    get isFull() {
        if (this._size && this._data.length >= this._size) {
            return true;
        }
        return false;
    }
    /**
     * @description Check whether queue is empty
     * @type {boolean}
     */
    get isEmpty() {
        if (this._data.length < 1) {
            return true;
        }
        return false;
    }
}

const memory = {};
const gradients = {};
function perlin(x, y) {
    if (memory[key(x, y)]) {
        return memory[key(x, y)];
    }
    let xf = Math.floor(x);
    let yf = Math.floor(y);
    const tl = dot_prod_grid(x, y, xf, yf);
    const tr = dot_prod_grid(x, y, xf + 1, yf);
    const bl = dot_prod_grid(x, y, xf, yf + 1);
    const br = dot_prod_grid(x, y, xf + 1, yf + 1);
    const xt = interp(x - xf, tl, tr);
    const xb = interp(x - xf, bl, br);
    const v = interp(y - yf, xt, xb);
    memory[key(x, y)] = v;
    return v;
    // Function to generate key
    function key(x, y) {
        return `${x}-${y}`;
    }
    // calculate dot product
    function dot_prod_grid(x, y, vx, vy) {
        // gradient Vector, distance Vector
        let gVect, dVect;
        dVect = { x: x - vx, y: y - vy };
        if (gradients[key(vx, vy)]) {
            gVect = gradients[key(vx, vy)];
        }
        else {
            gVect = Vector2D.random2D();
            gradients[key(vx, vy)] = { x: gVect.x, y: gVect.y };
        }
        const dot = dVect.x * gVect.x + dVect.y * gVect.y;
        return dot;
    }
    // Smoother
    function smootherStep(n) {
        return (6 * Math.pow(n, 5)) - (15 * Math.pow(n, 4)) + (10 * Math.pow(n, 3));
    }
    // Linear interpolate
    function interp(n, a, b) {
        return a + smootherStep(n) * (b - a);
    }
}

var noise = /*#__PURE__*/Object.freeze({
    __proto__: null,
    perlin: perlin
});

var std = Object.assign({ Vector2D,
    Line,
    Grid,
    Stack,
    Queue,
    noise }, util);

const Core = {
    colorSys: colorSys,
    fileSys: fileSys,
    std: std,
    media: media
};

let colors;
let current, repeat = false, perform = null;
const libraries = {
    libs: []
};
class Quick {
    constructor() {
        /**
         * @description Quick.js sketches
         * @type {any}
         * @private
         */
        this._sketches = {};
        /**
         * @description Quick.js Version
         * @type {string}
         * @private
         */
        this._version = '0.1.0';
        /**
         * @description Quick.js Core Version
         * @type {string}
         * @private
         */
        this._core_version = '1a';
        // /**
        //  * @description Quick.js Theme
        //  * @type {string}
        //  * @private
        //  */
        // private _theme: string = 'plain'
        /**
         * @description store all intervals that have been set
         * and animation frame that have been requested
         *
         * @type {number[]}
         * @private
         */
        this._ref = {
            interval: [],
            animFr: [],
            terminated: true,
            initialized: false,
            pendingLibLinks: [],
            content: ''
        };
        /**
         * @description Quick.js Core library
         */
        this.Core = Core;
        const _setInterval = window.setInterval;
        window.setInterval = (handler, timeout, ...args) => {
            if (this._ref.terminated)
                return;
            const newInterval = _setInterval(handler, timeout, ...args);
            this._ref.interval.push(newInterval);
            return newInterval;
        };
        const _requestAnimationFrame = window.requestAnimationFrame;
        window.requestAnimationFrame = (callback) => {
            if (this._ref.terminated)
                return;
            const newAnimFr = _requestAnimationFrame(callback);
            this._ref.animFr.push(newAnimFr);
            return newAnimFr;
        };
    }
    link(lib) {
        this._ref.pendingLibLinks.push(lib);
    }
    // Main Operations
    /**
     * @description run Quick.js
     *
     * @param {?{theme?: string}} [options={}] options
     */
    run(options = {}) {
        var _a;
        if (!this._ref.initialized) {
            this._ref.initialized = true;
            const browserScheme = window.matchMedia('(prefers-color-scheme: dark)').matches ?
                'dark' : 'light';
            if (options.theme && (theme[options.theme] || theme[`${browserScheme}-${options.theme}`])) {
                colors = theme[`${browserScheme}-${options.theme}`];
                colors = colors ? colors : theme[options.theme];
            }
            else {
                colors = theme[`${browserScheme}-default`];
            }
            console.log(`\n` +
                `Hi!, This sketch was created with\n` +
                `Quick.js version ${this._version}😍\n` +
                `\n` +
                `%c\n` +
                `For more information, just type\n` +
                `\'Quick.help\' on console😁\n`, colors.highlight);
            this._ref.pendingLibLinks.forEach(lib => lib.link(this, colors));
            this._ref.content = ((_a = document.querySelector('body')) === null || _a === void 0 ? void 0 : _a.innerHTML) || '';
        }
        perform = null;
        this._ref.terminated = false;
        document.querySelector('body').innerHTML = this._ref.content;
        const sketches = Object.values(this._sketches);
        if (sketches.length > 0) {
            let sketch = sketches[0];
            if (window.localStorage.getItem('QQ-default')) {
                sketch = this._sketches[window.localStorage.getItem('QQ-default')];
            }
            current = sketch;
            this._ref.p1 = performance.now();
            current.start();
        }
    }
    switch(title) {
        if (this._sketches[title]) {
            const temp = repeat;
            repeat = false;
            this.terminate(() => { });
            repeat = temp;
            this._ref.terminated = false;
            document.querySelector('body').innerHTML = '';
            perform = null;
            this._ref.p1 = performance.now();
            current = this._sketches[title];
            current.start();
            return;
        }
        console.log(`%cSketch with title "${title}" not found!`, colors.err);
        throw new Error('Sketch not found!');
    }
    restart() {
        this.switch(current.title);
    }
    addLib(lib) {
        libraries.libs.push(lib);
    }
    /**
     * @description terminate Quick.js
     *
     * @param {() => void} callback function to executed at
     * Quick program terminated
     */
    terminate(callback = () => console.log('Bye Bye 😭')) {
        perform = performance.now() - this._ref.p1;
        this._ref.terminated = true;
        this._ref.animFr.forEach(cancelAnimationFrame);
        this._ref.animFr = [];
        this._ref.interval.forEach(clearInterval);
        this._ref.interval = [];
        callback();
        if (repeat) {
            setTimeout(() => {
                this.switch(current.title);
            }, 750);
        }
    }
    /**
     * @description Add new sketch to quick js
     * @param {{title: string,note?: string}} options Sketch options
     * @param {() => void} sketch Sketch
     */
    createSketch(options, sketch) {
        this._sketches[options.title] = (new Sketch(options, sketch));
    }
    // Properties
    /**
     * @description Quick.js Version
     * @type {string}
     */
    get VERSION() {
        return this._version;
    }
    /**
     * @description Quick.js Core Version
     * @type {string}
     */
    get CORE_VERSION() {
        return this._core_version;
    }
    /**
     * @description Screen
     * @type {[width: number, height: number]}
     */
    get screenSize() {
        return [window.screen.width, window.screen.height];
    }
    get sketches() {
        return this._sketches;
    }
}
const Q = new Quick;
window.Quick = new class {
    get help() {
        // basic
        const commands = [
            '%c Quick.help %c : log some usefull information for Quick console',
            '%c Quick.clear %c : clear console',
            '%c %c',
            '%c Quick.current %c : get current sketch title',
            '%c Quick.sketches %c : get sketches title',
            '%c Quick.switch( sketch_title ) %c : switch to another sketch',
            '%c Quick.default( sketch_title ) %c : set default sketch',
            '%c Quick.unsetDefault %c : remove default sketch option data',
            '%c %c',
            '%c Quick.terminate %c : terminate current sketch',
            '%c Quick.restart %c : restart current sketch',
            '%c Quick.repeat %c : repeat current sketch',
            '%c Quick.noRepeat %c : stop repeat current sketch',
            '%c %c',
            '%c Quick.version %c : get Quick.js version',
            '%c Quick.coreVersion %c : get Quick.js core version',
            '%c Quick.libs %c : get all library that linked with Quick.js'
        ];
        let styles = [];
        commands.forEach(cmd => styles.push(colors.highlight, ''));
        console.log(`\nAvailable commands:\n\n${commands.join('\n')}\n\n`, ...styles);
        return;
    }
    get clear() {
        console.clear();
        return;
    }
    // Sketch control
    get current() {
        console.log(`%c${current.title}`, colors.highlight);
        return;
    }
    get sketches() {
        let sketches = [];
        let styles = [];
        Object.keys(Q.sketches).forEach(title => {
            sketches.push(`%c- %c${title}`);
            styles.push('', colors.highlight);
        });
        console.log('\n' +
            'Sketches:\n' +
            '\n' +
            `${sketches.join('\n')}\n`, ...styles);
        return;
    }
    default(title) {
        const sketches = Q.sketches;
        if (sketches[title]) {
            window.localStorage.setItem('QQ-default', title);
            Q.terminate(() => { });
            Q.run();
        }
        else {
            console.log(`%cSketch with title "${title}" not found!`, colors.err);
            this.sketches;
        }
        return;
    }
    get unsetDefault() {
        window.localStorage.removeItem('QQ-default');
        Q.terminate(() => { });
        Q.run();
        return;
    }
    get note() {
        console.log(current.note);
        return;
    }
    // Runtime control
    get reset() {
        Q.restart();
        return;
    }
    switch(title) {
        try {
            Q.switch(title);
        }
        catch (err) {
            this.sketches;
        }
    }
    get terminate() {
        Q.terminate();
        return;
    }
    get repeat() {
        repeat = true;
        Q.restart();
        return;
    }
    get noRepeat() {
        repeat = false;
        return;
    }
    get execTime() {
        if (!perform) {
            console.log('%cSketch not terminated yet...', colors.secondary);
            return;
        }
        console.log(`%c${Math.floor(perform)} ms`, colors.warn);
        return;
    }
    // Kits
    get version() {
        console.log('%c' + Q.VERSION, colors.highlight);
        return;
    }
    get coreVersion() {
        console.log('%c' + Q.CORE_VERSION, colors.highlight);
        return;
    }
    get libs() {
        let libs = [];
        let styles = [];
        libraries.libs.forEach(lib => {
            libs.push(`- %c${lib.name}%c@${lib.version}`);
            styles.push('', colors.highlight);
        });
        console.log('\n' +
            'Libs:\n' +
            '' +
            `${libs.join('\n\t\t\t')}\n`, ...styles);
        return;
    }
};

export default Q;

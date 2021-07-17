import Vector2D from "./classes/Vector2D"

const perlinNoise: {
    memory: any,
    gradient: any,
    get: (x, y) => number,
    clear: () => void
} = {
    memory: {},
    gradient: {},

    /**
     * @description Generate a perlin noise
     * 
     * @param {number} x noise x offset
     * @param {number} y noise y offset
     * @returns {number} number from -1 to 1
     */
    get(x, y) {
        return getPerlin(x, y, this.memory, this.gradient)
    },

    /**
     * @description Clear perlin noise memory
     */
    clear() {
        this.memory = {}
        this.gradient = {}
    }
}

function getPerlin(x, y, memory, gradients) {
    if(memory[ key(x, y) ]) {
        return memory[ key(x, y) ]
    }

    const x0 = Math.floor(x), x1 = x0 + 1
    const y0 = Math.floor(y), y1 = y0 + 1

    
    const sx = x - x0
    const sy = y - y0


    let n0: number, n1: number
    n0 = dotGridGradient(x0, y0, x, y)
    n1 = dotGridGradient(x1, y0, x, y)
    const ix0 = interp(sx, n0, n1)

    n0 = dotGridGradient(x0, y1, x, y)
    n1 = dotGridGradient(x1, y1, x, y)
    const ix1 = interp(sx, n0, n1)

    const v = interp(sy, ix0, ix1)

    memory[ key(x, y) ] = v

    return v

    // Function to generate key
    function key(x, y) {
        return `${x}-${y}`
    }
    
    // calculate dot product
    function dotGridGradient(x, y, vx, vy) {
        // gradient Vector, distance Vector
        let gVect, dVect;
        
        dVect = {x: x - vx, y: y - vy}
        if(gradients[ key(vx, vy) ]) {
            gVect = gradients[key(vx, vy)]
        } else {
            gVect = Vector2D.random2D()
            gradients[ key(vx, vy) ] = {x: gVect.x, y: gVect.y}
        }
    
        const dot = (dVect.x * gVect.x) + (dVect.y * gVect.y)
        return dot
    }
    
    // Linear interpolate
    function interp(n, a, b) {
        return (b-a) * ((n * (n * 6 - 15) + 10) * n * n * n) + a
    }
}

export {perlinNoise}
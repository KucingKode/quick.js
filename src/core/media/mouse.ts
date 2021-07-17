interface mouseData {
    x: number
    y: number
    prevX: number
    prevY: number
    isPressed: boolean
}

/**
 * @typedef {{
 *  x: number
 *  y: number
 *  prevX: number
 *  prevY: number
 *  isPressed: boolean
 * }} mouseData
 */

/**
 * @type {mouseData}
 */
let mouseData: mouseData

/**
 * @description Get mouse data
 * @returns {mouseData}
 */
function getMouse(): mouseData {
    if(!mouseData) {
        mouseData = (new class {
            /**
             * @private
             */
            private data: {
                x: number
                y: number
                prevX: number
                prevY: number
                pressed: boolean
            } = {
                x: 0,
                y: 0,
                prevX: 0,
                prevY: 0,
                pressed: false
            }
    
            constructor() {
                window.addEventListener('mousemove', (e) => {
                    this.data.x = e.clientX
                    this.data.y = e.clientY
                    this.data.prevX = this.data.x
                    this.data.prevY = this.data.y
                })
                window.addEventListener('mousedown', () => {
                    this.data.pressed = true
                })
                window.addEventListener('mouseup', () => {
                    this.data.pressed = false
                })
            }
    
            get x(): number {
                return this.data.x
            }
            get y(): number {
                return this.data.y
            }
            get prevX(): number {
                return this.data.prevX
            }
            get prevY(): number {
                return this.data.prevY
            }
            get isPressed(): boolean {
                return this.data.pressed
            }
        })

    }

    return mouseData
}

export default getMouse
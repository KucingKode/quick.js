interface touchesData {
    touches: Touch[]
}

/**
 * @typedef {{
 *  touches: Touch[]
 * }} touchesData
 */

/**
 * @type {touchesData}
 */
let touchesData: touchesData

/**
 * @description Get touches data
 * @returns {touchesData}
 */
function getTouches(): touchesData {
    if(!touchesData) {
        touchesData = (new class {
            /**
             * @private
             */
            private data: Touch[] = []
    
            constructor() {
                window.addEventListener('touchmove', (e) => {
                    for(let i = 0; i < e.touches.length; i++) {
                        const touch = e.touches.item(i)
                        this.data.push(touch)
                    }
                })
            }
    
            get touches() {
                return this.data
            }
        })
    }

    return touchesData
}

export default getTouches
/**
 * @description Watch touches
 */
function watchTouch() {
    return (new class {
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

export default watchTouch
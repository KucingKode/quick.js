/**
 * @description Watch mouse
 */
function watchMouse() {
    return (new class {
        /**
         * @private
         */
        private data: {
            x: number
            y: number
            pressed: boolean
        } = {
            x: 0,
            y: 0,
            pressed: false
        }

        constructor() {
            window.addEventListener('mousemove', (e) => {
                this.data.x = e.clientX
                this.data.y = e.clientY
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
        get pressed(): boolean {
            return this.data.pressed
        }
    })
}

export default watchMouse
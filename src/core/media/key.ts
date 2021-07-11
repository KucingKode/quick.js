/**
 * @description Watch keyboardkeys
 */
function watchKey() {
    return (new class {
        /**
         * @private
         */
        private data: {
            pressed: Set<string>,
            shiftPressed: boolean
            ctrlPressed: boolean
            altPressed: boolean
        } = {
            pressed: new Set(),
            shiftPressed: false,
            ctrlPressed: false,
            altPressed: false
        }

        constructor() {
            window.addEventListener('keydown', (e) => {
                switch(e.key) {
                    case('Shift'): {
                        this.data.shiftPressed = true
                    }
                    case('Ctrl'): {
                        this.data.ctrlPressed = true
                    }
                    case('Alt'): {
                        this.data.altPressed = true
                    }
                    default: {
                        this.data.pressed.add(e.key)
                    }
                }
            })
            window.addEventListener('keyup', (e) => {
                switch(e.key) {
                    case('Shift'): {
                        this.data.shiftPressed = false
                    }
                    case('Ctrl'): {
                        this.data.ctrlPressed = false
                    }
                    case('Alt'): {
                        this.data.altPressed = false
                    }
                    default: {
                        this.data.pressed.delete(e.key)
                    }
                }
            })
        }

        isPressed(key: string) {
            if(this.data.pressed.has(key)) {
               return true
            }
            return false
        }

        get pressed(): string[] {
            let result = []
            this.data.pressed.forEach(key => {
                result.push(key)
            })

           return result
        }
        get shiftPressed(): boolean {
            return this.data.shiftPressed
        }
        get ctrlPressed(): boolean {
            return this.data.ctrlPressed
        }
        get altPressed(): boolean {
            return this.data.altPressed
        }
    })
}

export default watchKey
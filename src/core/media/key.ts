interface keyboardData {
    pressedKeys: string[],
    isShiftPressed: boolean,
    isCtrlPressed: boolean,
    isAltPressed: boolean
}

/**
 * @typedef {{
 *  pressedKeys: string[],
 *  isShiftPressed: boolean,
 *  isCtrlPressed: boolean,
 *  isAltPressed: boolean
 * }} keyboardData
 */

/**
 * @type {keyboardData}
 */
let keyboardData: keyboardData

/**
 * @description Get keyboard data
 * @returns {keyboardData}
 */
function getKeyboard(): keyboardData {
    if(!keyboardData) {
        keyboardData = (new class {
            /**
             * @private
             */
            private data: {
                pressed: string[],
                isShiftPressed: boolean
                isCtrlPressed: boolean
                isAltPressed: boolean
            } = {
                pressed: [],
                isShiftPressed: false,
                isCtrlPressed: false,
                isAltPressed: false
            }
    
            constructor() {
                window.addEventListener('keydown', (e) => {
                    switch(e.key) {
                        case('Shift'): {
                            this.data.isShiftPressed = true
                        }
                        case('Ctrl'): {
                            this.data.isCtrlPressed = true
                        }
                        case('Alt'): {
                            this.data.isAltPressed = true
                        }
                        default: {
                            this.data.pressed.push(e.key)
                        }
                    }
                })
                window.addEventListener('keyup', (e) => {
                    switch(e.key) {
                        case('Shift'): {
                            this.data.isShiftPressed = false
                        }
                        case('Ctrl'): {
                            this.data.isCtrlPressed = false
                        }
                        case('Alt'): {
                            this.data.isAltPressed = false
                        }
                        default: {
                            const i = this.data.pressed.indexOf(e.key)
                            i > -1 ? this.data.pressed.splice(i, 1) : ''
                        }
                    }
                })
            }
    
            isPressed(key: string) {
                if(this.data.pressed.indexOf(key) > -1) {
                   return true
                }
                return false
            }
    
            get pressedKeys(): string[] {
                let result = []
                this.data.pressed.forEach(key => {
                    result.push(key)
                })
    
               return result
            }
            get isShiftPressed(): boolean {
                return this.data.isShiftPressed
            }
            get isCtrlPressed(): boolean {
                return this.data.isCtrlPressed
            }
            get isAltPressed(): boolean {
                return this.data.isAltPressed
            }
        })

    }

    return keyboardData
}

export default getKeyboard
___

## **Media And Controller**

- ### **getMouse()**

> **Description:**
>
> Get mouse data (move, press)
>
> **Syntax:**
>
> `media.getMouse()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> **Returns:**
>
> mouse state: `{ x: number, y: number, isPressed: boolean }`

- ### **getKeyboard()**

> **Description:**
>
> Get keyboard data (pressed keys)
>
> **Syntax:**
>
> `media.getKeyboard()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> **Returns:**
>
> mouse state:
> `{ pressedKeys: Set<string>, isShiftPressed: boolean, isCtrlPressed: bolean, isAltPressed: boolean }`

- ### **listenTouches()**

> **Description:**
>
> Get touches data (press)
>
> **Syntax:**
>
> `media.getTouches()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> **Returns:**
>
> mouse state:
> `{ touches: Touch[] }`

- ### **getCamera()**

> **Description:**
>
> Get camera data (video, size)
>
> **Syntax:**
>
> `media.getCamera()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> **Returns:**
>
> mouse state:
> `{ video: HTMLVideoElement, size: {width: number, height: number} }`

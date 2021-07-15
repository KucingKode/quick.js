___

# **media**

media is a part of the quick.js core library, media contains some functions for listen to user media (mouse, keyboard, touch, camera, microphone). Which is very useful for your sketch.

## **Controller**

- ### **watchMouse()**

> **Description:**
>
> Listen to the mouse events (move, press)
>
> **Syntax:**
>
> `media.watchMouse()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> **returns:**
>
> mouse state: `{ x: number, y: number, pressed: boolean }`

- ### **watchKey()**

> **Description:**
>
> Listen to the keyboard events (press)
>
> **Syntax:**
>
> `media.watchMouse()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> **returns:**
>
> mouse state:
> `{ pressed: Set<string>, isShiftPressed: boolean, isCtrlPressed: bolean, isAltPressed: boolean }`

- ### **watchTouch()**

> **Description:**
>
> Listen to the touch events (press)
>
> **Syntax:**
>
> `media.watchMouse()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> **returns:**
>
> mouse state:
> `{ touches: Touch[] }`

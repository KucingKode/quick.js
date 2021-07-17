<!-- Canvas2D -->
- ### **class: Canvas2D**

> **Descriptions:**
>
> Canvas2D is an object that used for drawing, is allows you to create many 2d shapes in your sketch.
>
> **Syntax:**  
> Create new 2D Canvas and create new HTML canvas:  
> `new Canvas2D(width: number, height: number, parent: string | HTMLElement)`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `width`   | `number` | **Required** width of the canvas  
> `height`  | `number` | **Required** height of the canvas
> `parent`  | `string` | **Required** HTMLElement parent element of the canvas
>
> Create 2D Canvas from existing HTML canvas :  
> `Canvas2D.fromCanvas(canvas: HTMLCanvasElement)`  
>
> Parameter     | Type      | Description
> ------------- | --------- | --------------------------  
> `canvas`      | `Stack`   | **Required** existing canvas
>
> **Components:**
>
> Parameter         | Type                      | Description
> ----------------- | ------------------------- | --------------------------  
> `width`           | `number`                  | width of the canvas  
> `height`          | `number`                  | height of the canvas  
> `pos`             | `{x: number, y: number}`  | canvas computed position  
> `ctx`             | `CanvasRenderingContext2D`| 2d context  
> `kit`             | [Kit2D](#kit2d-variable) | improved 2d context  
> `style`           | `CSSStyleDeclaration`     | canvas CSS styles  
> `computedStyle`   | `CSSStyleDeclaration`     | canvas computed CSS styles  
> `element`         | `HTMLCanvasElement`       | HTML canvas elemnt of Canvas2D
>
> **Methods:**
>
> `.resize()`  
> resize canvas context and kit to canvas computed size
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
>
> `.background(color: string)`  
> change canvas background color
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> color     | `string` | **Required** canvas background color
>

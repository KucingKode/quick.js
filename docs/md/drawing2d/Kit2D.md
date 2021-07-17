<!-- Kit2D -->
## **Kit2D Variable:**

Parameter                 | Type                                  | Description
------------------------- | ------------------------------------- | --------------------------  
`fps`                     | `number`                              | the number of frames in 1 second
`angleUnit`               | `"RADIAN" \| "DEGREE"`                 | **Default = "RADIAN"** unit for angle to be used
`coordinatesSystem`       | `"NORMAL" \| "CARTESIAN" \| "PHYSICS"`  | **Default = "NORMAL"** coordinates system to be applied
`alpha`                   | `number`                              | **Default = 1** canvas alpha
`compositeOperation`      | `string`                              | **Default = "source-over"** canvas composite operation
`disableImageSmoothing`   | `boolean`                             | **Default = false** if true canvas will not smoothing your images
`pixels`                  | `Uint8ClampedArray`                   | loaded canvas pixels

## **Kit2D Utility:**

- ### **draw()**

> **Description:**
>
> Set Kit2D Drawing steps for each frame
>
> **Syntax:**
>
> `kit.draw(steps: () => void)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `steps` | `() => void` | **Required**. drawing steps
>

- ### **createDOMMatrix()**

> **Description:**
>
> Create transform DOM matrix
>
> **Syntax:**
>
> `kit.createDOMMatrix()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> **Returns:**
>
> DOM matrix: `DOMMatrix`

- ### **restoreDefault()**

> **Description:**
>
> Restore some style to the default value
>
> **Syntax:**
>
> `kit.restoreDefault(...keys: ("fill" | "stroke" | "shadow" | "font" | "all")[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `keys`  | `("fill" | "stroke" | "shadow" | "font" | "all")[]` | **Required** styles key to be restored to default
>

## **Kit2D Transform:**

- ### **rotate()**

> **Description:**
>
> Adds a rotation transformation to the canvas transformation matrix
>
> **Syntax:**
>
> `kit.rotate(angle: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `angle` | `number` | **Required** rotation angle
>

- ### **scale()**

> **Description:**
>
> Adds a scaling transformation to the canvas transformation matrix
>
> **Syntax:**
>
> `kit.scale(x: number, y: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x`  | `number` | **Required** scaling factor in the horizontal direction
> `y`  | `number` | **Required** scaling factor in the vertical direction
>

- ### **translate()**

> **Description:**
>
> Adds a translation transformation to the canvas transformation matrix
>
> **Syntax:**
>
> `kit.translate(x: number, y: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x`  | `number` | **Required** distance to move in the horizontal direction
> `y`  | `number` | **Required** distance to move in the vertical direction
>

- ### **transform()**

> **Description:**
>
> Replace or add the transformation matrix
>
> **Syntax:**
>
> `kit.transform(matrix: DOMMatrix, override: boolean = false)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `matrix`  | `DOMMatrix` | **Required** new transformation matrix
> `override`  | `boolean` | **Default = false** if true it will replace the canvas transformation matrix, else it will add the canvas transformation matrix with new transformation matrix
>

- ### **flipH()**

> **Description:**
>
> Add horizontal flip transformation to canvas transformation matrix
>
> **Syntax:**
>
> `kit.flipH()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

- ### **flipV()**

> **Description:**
>
> Add vertical flip transformation to canvas transformation matrix
>
> **Syntax:**
>
> `kit.flipV()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

- ### **getTransform()**

> **Description:**
>
> Get canvas transformation matrix
>
> **Syntax:**
>
> `kit.getTransform()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> **Returns:**
>
> matrix: `DOMMatrix`

- ### **resetTransform()**

> **Description:**
>
> Reset canvas transformation matrix
>
> **Syntax:**
>
> `kit.resetTransform()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

## **Kit2D Drawing:**

- ### **beginPath()**

> **Description:**
>
> Start a new path
>
> **Syntax:**
>
> `kit.beginPath()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

- ### **closePath()**

> **Description:**
>
> Close a path
>
> **Syntax:**
>
> `kit.closePath()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

- ### **save()**

> **Description:**
>
> Save canvas state
>
> **Syntax:**
>
> `kit.save()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

- ### **restore()**

> **Description:**
>
> Restore canvas state to saved state
>
> **Syntax:**
>
> `kit.restore()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

- ### **fillCanvas()**

> **Description:**
>
> Fill entire canvas
>
> **Syntax:**
>
> `kit.fillCanvas(style: string | CanvasGradient | CanvasPattern)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `style`  | `string \| CanvasGradient \| CanvasPattern` | **Required** fill style
>

- ### **clearCanvas()**

> **Description:**
>
> Clear entire canvas
>
> **Syntax:**
>
> `kit.clearCanvas()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

- ### **rect()**

> **Description:**
>
> Draw a rectangle on the canvas
>
> **Syntax:**
>
> `kit.rect(x: number, y: number, width: number, height: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x`  | `number` | **Required** rectangle x coordinate
> `y`  | `number` | **Required** rectangle y coordinate
> `width`  | `number` | **Required** rectangle width
> `height`  | `number` | **Required** rectangle height
>

- ### **ellipse()**

> **Description:**
>
> Draw an ellipse on the canvas
>
> **Syntax:**
>
> `kit.ellipse(x: number, y: number, xRad: number, yRad: number, rotation: number, startAng: number, endAng: number, antiClockwise?: boolean)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x`  | `number` | **Required** ellipse center point x coordinate
> `y`  | `number` | **Required** ellipse center point y coordinate
> `xRad`  | `number` | **Required** ellipse x radius
> `yRad`  | `number` | **Required** ellipse y radius
> `rotation`  | `number` | **Required** rotate amount of the ellipse
> `startAng`  | `number` | **Required** ellipse starting angle
> `endAng`  | `number` | **Required** ellipse end angle
> `antiClockwise`  | `number` | **Default = false** if true, it will draw ellipse with anti clockwise direction
>

- ### **arc()**

> **Description:**
>
> Draw an arc on the canvas
>
> **Syntax:**
>
> `kit.arc(x: number, y: number, r: number, startAng: number, endAng: number, antiClockwise?: boolean)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x`  | `number` | **Required** arc center point x coordinate
> `y`  | `number` | **Required** arc center point y coordinate
> `r`  | `number` | **Required** arc radius
> `startAng`  | `number` | **Required** arc starting angle
> `endAng`  | `number` | **Required** arc end angle
> `antiClockwise`  | `number` | **Default = false** if true, it will draw arc with anti clockwise direction
>

- ### **circle()**

> **Description:**
>
> Draw a circle on the canvas
>
> **Syntax:**
>
> `kit.circle(x: number, y: number, r: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x`  | `number` | **Required** circle center point x coordinate
> `y`  | `number` | **Required** circle center point y coordinate
> `r`  | `number` | **Required** circle radius
>

- ### **line()**

> **Description:**
>
> Draw a line on the canvas
>
> **Syntax:**
>
> `kit.line(x1: number, y1: number, x2: number, y2: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x1`  | `number` | **Required** line start point x coordinate
> `y1`  | `number` | **Required** line start point y coordinate
> `x2`  | `number` | **Required** line end point x coordinate
> `y2`  | `number` | **Required** line end point y coordinate
>

- ### **bezier()**

> **Description:**
>
> Draw a bezier curve on the canvas
>
> **Syntax:**
>
> `kit.bezier(startX: number, startY: number, cp1X: number, cp1Y: number, cp2X: number, cp2Y: number, endX: number, endY: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `startX`  | `number` | **Required** curve start point x coordinate
> `startY`  | `number` | **Required** curve start point y coordinate
> `cp1X`  | `number` | **Required** curve first control point point y coordinate
> `cp1Y`  | `number` | **Required** curve first control point y coordinate
> `cp2X`  | `number` | **Required** curve second control point point y coordinate
> `cp2Y`  | `number` | **Required** curve second control point y coordinate
> `endX`  | `number` | **Required** curve end point x coordinate
> `endY`  | `number` | **Required** curve end point y coordinate
>

- ### **curve()**

> **Description:**
>
> Draw a quadratic curve on the canvas
>
> **Syntax:**
>
> `kit.bezier(startX: number, startY: number, cpX: number, cpY: number, endX: number, endY: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `startX`  | `number` | **Required** curve start point x coordinate
> `startY`  | `number` | **Required** curve start point y coordinate
> `cpX`  | `number` | **Required** curve control point point y coordinate
> `cpY`  | `number` | **Required** curve control point y coordinate
> `endX`  | `number` | **Required** curve end point x coordinate
> `endY`  | `number` | **Required** curve end point y coordinate
>

- ### **shape()**

> **Description:**
>
> Draw a shape on the canvas by connecting some points
>
> **Syntax:**
>
> `kit.shape(points: {x: number, y: number}[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `points`  | `{x: number, y: number}[]` | **Required** points to be connected
>

- ### **image()**

> **Description:**
>
> Draw an image on the canvas
>
> **Syntax:**
>
> `kit.image(src: CanvasImageSource, x: number, y: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `src`  | `CanvasImageSource` | **Required** points to be connected
> `x`  | `number` | **Required** image x coordinate
> `y`  | `number` | **Required** image y coordinate
>

- ### **text()**

> **Description:**
>
> Write a text on the canvas
>
> **Syntax:**
>
> `kit.text(x: number, y: number, style: string | CanvasGradient | CanvasPattern, text: string, options?: {align?: CanvasTextAlign, baseline?: CanvasTextBaseline, maxWidth?: number})`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x`  | `number` | **Required** text x coordinate
> `y`  | `number` | **Required** text y coordinate
> `style`  | `string \| CanvasGradient \| CanvasPattern` | **Required** text style
> `options`  | `{align?: CanvasTextAlign, baseline?: CanvasTextBaseline, maxWidth?: number}` | **Default = {align: "left", baseline: "middle"}** text writing options
>

## **Kit2D Styling:**

- ### **fill()**

> **Description:**
>
> Set fill style for object in canvas
>
> **Syntax:**
>
> `kit.fill(style: string | CanvasGradient | CanvasPattern, rule?: CanvasFillRule)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `style`  | `string \| CanvasGradient \| CanvasPattern` | **Required** fill style
> `rule`  | `CanvasFillRule` | **Optional** fill rule
>

- ### **stroke()**

> **Description:**
>
> Set stroke style for object in canvas
>
> **Syntax:**
>
> `kit.stroke(options?: {style?: canvasStyle, width?: number, cap?: CanvasLineCap, join?: CanvasLineJoin, dash?: number[], dashOffset?: number, miterLimit?: number})`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `options`  | `options?: {style?: canvasStyle, width?: number, cap?: CanvasLineCap, join?: CanvasLineJoin, dash?: number[], dashOffset?: number, miterLimit?: number}` | **Optional** stroke style, kit.shadow is wrapped canvas context lineStyle, lineWidth, lineCap, lineJoin, lineDash...
>

- ### **shadow()**

> **Description:**
>
> Set shadow style for object in canvas
>
> **Syntax:**
>
> `kit.shadow(options?: {color?: string, blur?: number, xOffset?: number, yOffset?: number})`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `options`  | `{color?: string, blur?: number, xOffset?: number, yOffset?: number}` | **Optional** shadow style, kit.shadow is wrapped canvas context shadowColor, shadowBlur, shadowOffsetX, shadowOffsetY
>

- ### **font()**

> **Description:**
>
> Set font style for object in canvas
>
> **Syntax:**
>
> `kit.font(options?: {style?: "normal" | "italic" | "oblique", obliqueAngle?: number, variant?: string, weight?: string, stretch?: string, size?: string, lineHeight?: string, family?: string, system?: string})`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `options`  | `{style?: "normal" | "italic" | "oblique", obliqueAngle?: number, variant?: string, weight?: string, stretch?: string, size?: string, lineHeight?: string, family?: string, system?: string}` | **Optional** font style, kit.font is wrapped canvas context font
>

- ### **createLinearGradient()**

> **Description:**
>
> Create a linear gradient
>
> **Syntax:**
>
> `kit.createLinearGradient(x1: number, y1: number, x2: number, y2: number, stops?: {offset: number, color: string}[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x1`  | `number`  | **Required** x-axis coordinate of the start point
> `y1`  | `number`  | **Required** y-axis coordinate of the start point
> `x2`  | `number`  | **Required** x-axis coordinate of the end point
> `y2`  | `number`  | **Required** y-axis coordinate of the end point
> `stops` | `{offset: number, color: string}[]` | **Optional** gradient color stops
>
> **Returns:**
>
> gradient: `CanvasGradient`
>

- ### **createRadialGradient()**

> **Description:**
>
> Create a radial gradient
>
> **Syntax:**
>
> `kit.createRadialGradient(x1: number, y1: number, r1: number, x2: number, y2: number, r2: number, stops: {offset?: number, color: string}[])`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x1`  | `number`  | **Required** x-axis coordinate of the start circle
> `y1`  | `number`  | **Required** y-axis coordinate of the start circle
> `r1`  | `number`  | **Required** radius of the start circle
> `x2`  | `number`  | **Required** x-axis coordinate of the end circle
> `y2`  | `number`  | **Required** y-axis coordinate of the end circle
> `r2`  | `number`  | **Required** radius of the end circle
> `stops` | `{offset: number, color: string}[]` | **Optional** gradient color stops
>
> **Returns:**
>
> gradient: `CanvasGradient`
>

- ### **createPattern()**

> **Description:**
>
> Create a radial gradient
>
> **Syntax:**
>
> `kit.createRadialGradient(image: CanvasImageSource, repetition: "repeat" | ""repeat-x" | "repeat-y" | "no-repeat")`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `image`  | `CanvasImageSource`  | **Required** pattern image
> `repetition`  | `"repeat" \| "repeat-x" \| "repeat-y" \| "no-repeat"`  | **Required** pattern repetition of the start circle
>
> **Returns:**
>
> pattern: `CanvasPattern`
>

## **Kit2D Pixel:**

- ### **loadPixels()**

> **Description:**
>
> Load and store canvas pixels data to Kit2D pixels variable
>
> **Syntax:**
>
> `kit.loadPixels()`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

- ### **getPixel()**

> **Description:**
>
> Get loaded pixel in specific location of canvas
>
> **Syntax:**
>
> `kit.getPixel(x: number, y: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x`   | `number`  | pixel x coordinate
> `y`   | `number`  | pixel y coordinate
>
> **Returns:**
>
> rgba of pixel: `number[]`

- ### **setPixel()**

> **Description:**
>
> Set pixel color in specific location of canvas
>
> **Syntax:**
>
> `kit.setPixel(x: number, y: number)`
>
> **Parameters:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
> `x`   | `number`  | pixel x coordinate
> `y`   | `number`  | pixel y coordinate
> `color` | `number[]` | replacement color, with format [r, g, b, a]
>
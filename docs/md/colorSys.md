___

# **colorSys**

colorSys is a part of the quick.js core library, colorSys contains some functions manipulating colors, Which is very useful for your sketch.

## **class**

- ### **class: RGB**

> **Descriptions:**
>
> RGB is a color format that has 3 or 4 omponents red, green, blue, alpha. in RGB alpha is always 1, but you can change the alpha(0 - 1) in the RGBA format.
>
> **Syntax:**  
> Create new RGB or RGBA:  
> `new colorSys.RGB(r: number, g: number, b: number, a: number)`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `r` | `number` | **Required** red value
> `g` | `number` | **Required** green value
> `b` | `number` | **Required** blue value
> `a` | `number` | **Optional** alpha value
>
> Generate RGB or RGBA from hex code:  
> `colorSys.RGB.fromHex(code: string)`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `code` | `string` | **Required** hex code
>
> Generate RGB or RGBA from HSL string:  
> `colorSys.RGB.fromHSL(components: number[])`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `components` | `number[]` | **Required** HSL or HSLA components
>
> **Components:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `comp` | `number[]` | red, green, blue, alpha? values
> `r` | `number` | red value
> `g` | `number` | green value
> `b` | `number` | blue value
> `a` | `number \| undefined` | alpha value
>
> **Methods:**
>
> `.toHex()`  
> get hex code from rgb color
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> `.toString()`  
> get string representation of the rgb or rgba color
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

- ### **class: HSL**

> **Descriptions:**
>
> HSL is a color format that has 3 or 4 omponents hue, saturation, lightness. in HSL alpha is always 1, but you can change the alpha(0 - 1) in the HSLA format.
>
> **Syntax:**  
> Create new HSL or HSLA:  
> `new colorSys.HSL(r: number, g: number, b: number, a: number)`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `h` | `number` | **Required** hue value
> `s` | `number` | **Required** saturation value
> `l` | `number` | **Required** lightness value
> `a` | `number` | **Optional** alpha value
>
> Generate RGB or RGBA from hex code:  
> `colorSys.RGB.fromHex(code: string)`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `code` | `string` | **Required** hex code
>
> Generate HSL or HSLA from RGB string:  
> `colorSys.HSL.fromHSL(components: number[])`
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `components` | `number[]` | **Required** RGB or RGBA components
>
> **Components:**
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------  
> `comp` | `number[]` | hue, saturaton, lightness, alpha values
> `h` | `number` | hue value
> `s` | `number` | saturation value
> `l` | `number` | lightness value
> `a` | `number \| undefined` | alpha value
>
> **Methods:**
>
> `.toHex()`  
> get hex code from HSL color
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>
> `.toString()`  
> get string representation of the HSL or HSLA color
>
> Parameter | Type     | Description
> --------- | -------- | --------------------------
>

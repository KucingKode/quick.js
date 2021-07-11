# Quick.js

Quick.js is a library to create awesome sketch in minutes.

- **Ease To Use :** Quick.js will make everything easier. Quick.js has amazing core library : math library, color library, file library, Vector2D, Grid, and many more 😍

- **Console :** Quick.js make you easier to control your project sketches by using web console, you can install extra library, get performance info, switch to another sketch, and many more only with your web console 🙄

- **Documented :** Quick.js has documented code in JSDoc format, that will give you better
development experience 😎

## **Installation**

___

To Install Quick.js all you need to do is just
visit our website, and click download button, it will download quick.js file, then the only thing that do you need to do is just import that file in index.js

> `import Quick from 'path/to/Quick.js'`

## **Documentation**

___

### [Getting Started🐱‍👤](#Getting_Started)

### References📃

- [std](#std)
- [media](#media)
- [fileSys](#fileSys)
- [colorSys](#colorSys)

## **Getting_Started**

___

### **First Project :**

```javascript
// index.js


// Import Quick.js
import Quick from './path/to/Quick.js'

// Create new sketch
Quick.createSketch({
  title: 'hello world!'
}, () => {
    // Extract std library from quick core
    const {std} = Quick.Core

    const arr = [1.22, 2.23, 3.21, 4.11]
    const arrSum = std.sum(arr)) // 10.77

    console.log(std.round(arrSum, 1)) // 10.8
})

// run quick sketch
Quick.run()

```

```HTML
<!-- index.html -->


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Title</title>

    <!-- link your index.js file -->
    <script src="path/to/index.js" type="module" defer></script>
</head>
<body>
</body>
</html>

```

### **Quick console :**

To access Quick.js console, just press open your browser console, to see all available console command just type **Quick.help** on your console then click [ Enter ]

>  
> **how to open browsers console:**  
>
> Chrome / Brave:  
> Press : ( Ctrl or Cmd ) + Shift + I
>
> Firefox:  
> Press : ( Ctrl or Cmd ) + Shift + K
>
> Safari:  
> Press : ( Ctrl or Cmd ) + Shift + C
>  
<!-- 
### **Install library :**

Quick.js has some extra library that can be downloaded using your browser console, to install a quick library, you can type

> Quick.install('library_name')

on your browser console -->

## **API Reference**

___

- ### **std**

  - constant : **PI**, **TWO_PI**

  - random : random(), randomChar(), randomFrom(), noise

  - array : min(), max(), average()

  - number : map(), constraint(), inverse(), dist(), radToDeg(), degToRad()

  - round : round(), fround(), floor(), ceil()

  - class : **Vector2D**
    - static : clone(), fromAdd(), fromSub(), random2D(), dot(), cross()

    - components : x, y, limit,  
    angle, mag, unit, normal

    - basic method : add(), sub(), mult(), div(), rotate()
    - shorthand : $add(), $sub(), $set()

  - class : **Stack**
    - static: clone()

    - components : data, size

    - method : push(), pop(), peek(), isFull(), isEmpty()

  - class : **Queue**
    - static: clone()

    - components : data, size

    - method : enqueue(), dequeue(), peek(), isFull(), isEmpty()

  - class : **Grid**
    - static : clone(), fromArea()

    - components : data, cols, rows, initialVal

    - method : iterate(), get(), set(), getCol(), getRow()

  - class : **Line**
    - static : clone(), from()

    - component : x, y, mag, angle, unit, start, end

    - method : rotate()

- ### **media**

  - watcher: watchMouse(), watchKey(), watchTouch()

- ### **fileSys**

  - utility : url, path()

  - get file : getText(), getJSON(), sendText()

- ### **colorSys**

  - RGB
    - static : fromHex(), fromHSL(), clone()
    - components : r, g, b, a, comp
    - method : toHex(), toString(), normalize()

  - HSL
    - static : fromHex(), fromRGB(), clone()
    - components : h, s, l, a, comp
    - method : toHex(), toString()

<!-- 
## **Future Plan**

___

- ❕ Add Image and Audio library

- ❕ Add more basic data structure : Heap, Linked List, Graph

- ❕ Add Media Capture method : Video capture, Image capture, Audio Capture -->

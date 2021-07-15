# Quick.js

![img](./img/logo.png)

Quick.js is a library that is easy to use and read, even for beginners or people who have never coded. Quick.js focuses on **making creative experiments easier** to do.

- **Ease To Use :** Quick.js will make everything easier. Quick.js has amazing core library : math library, color library, file library, Vector2D, Grid, and many more 😍

- **Console :** Quick.js make you easier to control your project sketches by using web console, you can install extra library, get performance info, switch to another sketch, and many more only with your web console 🙄

- **Documented :** Quick.js has documented code in JSDoc format, that will give you better
development experience 😎

## **Installation**

___

To Install Quick.js all you need to do is just
visit [quick.js website](https://kucingkode.github.io/quick.js/), and click download button, it will download quick.js file, then the only thing that do you need to do is just import that file in index.js

> `import Quick from 'path/to/Quick.js'`

## **Documentation**

___

### [Getting Started🐱‍👤](#Getting_Started)

### Reference📃

**For detail reference, please visit [our website](https://kucingkode.github.io/quick.js/) on <https://kucingkode.github.io/quick.js/>**

- [std](#std)
- [media](#media)
- [fileSys](#fileSys)
- [colorSys](#colorSys)

## **Getting_Started**

___

- [download visual studio code](https://code.visualstudio.com/download), for your code editor

- [download quick.js library](https://github.com/KucingKode/quick.js/releases/download/v1.0.0/quick.js), then save it on your project folder

- Create new file, then name it `index.html`

- Create new file, then name it `index.js`

- Then write this code into your `index.html` file

- ![html template](https://github.com/KucingKode/quick.js/tree/main/assets/html1.png)  

- Then write this code into tour `index.js` file

- ![js template](https://github.com/KucingKode/quick.js/tree/main/assets/js.png)  

- add this line to your `index.html` file

- ![link js in html](https://github.com/KucingKode/quick.js/tree/main/assets/html2.png)

- Download the `live server` extension on your Visual Studio Code

- ![live server icon](https://github.com/KucingKode/quick.js/tree/main/assets/liveServer.png)

- On the bottom left on your visual studio code, click `Go Live` button

- ![go live button](https://github.com/KucingKode/quick.js/tree/main/assets/goLive.png)

- Open your web browser on `localhost:{ port number on the bottom right your visual studio code }`

___

Happy Coding😍  
For more information you can go to our [website](https://kucingkode.github.io/quick.js/)

Recomended links:  
Coming Soon...

## **API Reference**

___

**For more details reference, please visit [our website](https://kucingkode.github.io/quick.js/)**

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

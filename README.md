# Quick.js

![img](https://github.com/KucingKode/quick.js/raw/main/assets/logo.png)

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

**For documentation, visit [Quick.js website](https://kucingkode.github.io/quick.js/) on <https://kucingkode.github.io/quick.js/>**

## **Getting_Started**

___

### **Easy way**

the easiest way to use is to use it on Quick.js [code sandbox template](https://codesandbox.io/s/quickjs-template-2k95c)

### **Offline way**

- [download visual studio code](https://code.visualstudio.com/download) or your favorite editor, for your code editor

- [download quick.js library](https://github.com/KucingKode/quick.js/releases/download/v2.0.0-alpha/quick.js), then save it on your project folder

- Create new file, then name it `index.html`

- Create new file, then name it `index.js`

- Then write this code into your `index.html` file

```html
  <!-- index.html -->

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>{ any Title }</title>
      <script src="path/to/index.js" type="module" defer></script>
  </head>
  <body>
  </body>
  </html>
```  

- Then write this code into tour `index.js` file

```js
// index.js

// Import Quick.js into your index.js file
const _Quick = await import('../build/quick.js')
const Quick = _Quick.default
// another form : import Quick from '../build/quick.js'

// Create new Quick.js sketch
Quick.sketch = (lib) => {
    // do something...
}

// Run quick.js
Quick.run()
```

- add this line to your `index.html` file

```html
  <!-- index.html -->

  <!DOCTYPE html>
  <html lang="en">
  <head>
      <title>{ any Title }</title>
      <!-- Link index.js -->
      <script src="path/to/index.js" type="module" defer></script>
  </head>
  <body>
  </body>
  </html>
```

- Download the `live server` extension on your Visual Studio Code

![live server icon](https://github.com/KucingKode/quick.js/raw/main/assets/liveServer.png)

- On the bottom left on your visual studio code, click `Go Live` button

![go live button](https://github.com/KucingKode/quick.js/raw/main/assets/goLive.png)

- Open your web browser on `localhost:{ port number on the bottom right your visual studio code }`

___

Happy Coding😍  
For more information you can go to our [website](https://kucingkode.github.io/quick.js/)

Recomended links:  
Coming Soon...
  
<!-- 
## **Future Plan**

___

- ❕ Add Image and Audio library

- ❕ Add more basic data structure : Heap, Linked List, Graph

- ❕ Add Media Capture method : Video capture, Image capture, Audio Capture -->

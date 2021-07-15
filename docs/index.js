import Quick from './lib/quick.js'
import quickCanvas from './lib/quick.canvas.js'

Quick.link(quickCanvas)

Quick.createSketch({
    title: 'Quick.js',
    note: 'Quick.js official website!'
}, async () => {
    const {std, fileSys} = Quick.Core
    const {Artisan, Canvas2D} = quickCanvas.lib

    await import('./js/sectionLoader.js')

    const canvas = new Canvas2D(document.querySelector('canvas'))
    const a = new Artisan(canvas)
    a.canvasFillStyle = 'clear'
    a.coordinateSystem = 'PHYSICS'

    let rects = []
    function addRect() {
        rects.push({
            x: std.random(0, canvas.width),
            y: 0,
            width: std.random(3, 5),
            height: std.random(50, 100),
            vel: std.random(10, 20),
            alpha: std.random()
        })
    }

    for (let i = 0; i < canvas.width / 80; i++) {
        addRect()
    }

    a.do(() => {

        rects.forEach((rect, i) => {
            if(rect.y < -canvas.height) {
                rects.splice(i, 1)
                addRect()
                return
            }

            rect.y -= rect.vel
            a.line(rect.x, rect.y, rect.x, rect.y + rect.height)
            a.stroke({
                style: `rgba(190, 167, 255, ${rect.alpha})`,
                width: rect.width,
                cap: 'butt',
                join: 'butt'
            })

        })
    })
})


Quick.run({
    theme: 'default'
})

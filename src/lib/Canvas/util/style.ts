import Canvas2D from "../lib/Canvas2D"

interface styledata {
    fill?: {
        style: string | CanvasGradient | CanvasPattern
    }
    stroke?: {
        style: string | CanvasGradient | CanvasPattern
        width?: number
        cap?: CanvasLineCap
        join?: CanvasLineJoin
        dash?: number[]
        dashOffset?: number
        miterLimit?: number

    }
    shadow?: {
        color: string
        blur?: number
        xOffset?: number
        yOffset?: number
    }
    font?: {
        family?: string
        size?: string
        weight?: string
    }
    text?: {
        align?: CanvasTextAlign
        baseline?: CanvasTextBaseline
    }
}

function computeStyleFunction(canvas: Canvas2D, styledata: styledata) {
    function doIf(job, condition) {
        if(condition) {
            return job
        }
        return () => {}
    }
    function check(style) {
        if(typeof style != 'string' || !style.startsWith('0x')) return style
        return style.replace('0x', '#')
    }

    const fillStyle = doIf(
        () => { canvas.c.fillStyle = check(styledata.fill.style) },
        styledata.fill?.style )

    const strokeStyle = doIf(
        () => { canvas.c.strokeStyle = check(styledata.stroke.style) },
        styledata.stroke?.style )

    const strokeWidth = doIf(
        () => { canvas.c.lineWidth = styledata.stroke.width },
        styledata.stroke?.width )

    const strokeCap = doIf(
        () => { canvas.c.lineCap = styledata.stroke.cap },
        styledata.stroke?.cap )

    const strokeJoin = doIf(
        () => { canvas.c.lineJoin = styledata.stroke.join },
        styledata.stroke?.join )
        
    const dash = doIf(
        () => { canvas.c.setLineDash(styledata.stroke.dash) },
        styledata.stroke?.dash )

    const dashOffset = doIf(
        () => { canvas.c.lineDashOffset = styledata.stroke.dashOffset },
        styledata.stroke?.dashOffset )

    const miterLimit = doIf(
        () => { canvas.c.miterLimit = styledata.stroke.miterLimit },
        styledata.stroke?.miterLimit )

    const shadowColor = doIf(
        () => { canvas.c.shadowColor = styledata.shadow.color },
        styledata.shadow?.color )

    const shadowBlur = doIf(
        () => { canvas.c.shadowColor = styledata.shadow.color },
        styledata.shadow?.color )

    const shadowX = doIf(
        () => { canvas.c.shadowOffsetX = styledata.shadow.xOffset },
        styledata.shadow?.xOffset )

    const shadowY = doIf(
        () => { canvas.c.shadowOffsetY = styledata.shadow.yOffset },
        styledata.shadow?.yOffset )
    const font = doIf(
        () => { canvas.c.font = `${styledata.font.weight || 'normal'} ${styledata.font.size || '10px'} ${styledata.font.family || 'sans-serif'}` },
        styledata.font )
    const textAlign = doIf(
        () => { canvas.c.textAlign = styledata.text.align },
        styledata.text?.align )
    const textBase = doIf(
        () => { canvas.c.textBaseline = styledata.text.baseline },
        styledata.text?.baseline )
    const cfill = doIf(
        () => { canvas.c.fill() },
        styledata.fill )
    const cstroke = doIf(
        () => { canvas.c.stroke() }, 
        styledata.stroke )
    const reset = doIf(
        () => { canvas.c.shadowColor = '#00000000' },
        styledata.shadow )


    return () => {
        fillStyle()
        strokeStyle()
        strokeWidth()
        strokeCap()
        strokeJoin()
        dash()
        dashOffset()
        miterLimit()
        shadowColor()
        shadowBlur()
        shadowX()
        shadowY()
        font()
        textAlign()
        textBase()

        cfill()
        cstroke()
        reset()
    }
}

export {styledata, computeStyleFunction}
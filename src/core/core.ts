import colorSys from './colorsys/colorsys'
import fileSys from './fileSys/fileSys'
import media from './media/media'
import std from './std/std'
import Canvas2D from './canvas/Canvas2D'

const Core = {
    ...colorSys,
    ...fileSys,
    ...std,
    ...media,
    Canvas2D
}

export default Core
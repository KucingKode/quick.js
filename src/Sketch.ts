interface options {
    title: string,
    note?: string
}

class Sketch {
    private _title: string
    private _note: string
    private _sketch: () => void

    constructor(options: options, sketch: () => void) {
        options.title ? this._title = options.title : this._title = 'Title'
        options.note ? this._note = options.note : this._note = ''

        this._sketch = sketch
    }

    start() {
        document.querySelector('head title').innerHTML = this._title
        this._sketch()
    }

    get title(): string {
        return this._title
    }
    get note(): string {
        return this._note
    }
}

export default Sketch
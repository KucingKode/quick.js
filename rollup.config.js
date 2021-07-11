import typescript from '@rollup/plugin-typescript'

// rollup.config.js
/**
 * @type {import('rollup').RollupOptions}
 */
const config = [
    {
        input: 'src/index.ts',
        output: {
                file: 'build/quick.js',
                format: 'esm'
        },
        plugins: [
            ts()
        ]
    },
    {
        input: 'src/lib/Canvas/index.ts',
        output: {
                file: 'build/quick.canvas.js',
                format: 'esm'
        },
        plugins: [
            ts()
        ]
    }
]

function ts() {
    return typescript({
        target: "ES6",
        noEmitHelpers: true,
        lib: ["DOM", "DOM.Iterable", "ES2017"]
    })
}

export default config
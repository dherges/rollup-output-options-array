const rollup = require('rollup');

rollup.watch([{
    input: './src/foo',
    output: [
        {
            format: 'es',
            file: './dist/foo.es6.js'
        },
        {
            format: 'umd',
            name: 'foo',
            file: './dist/foo.umd.js'
        }
    ]
}]).on('event', (evt) => {
    console.log("watcher event!", evt);
})

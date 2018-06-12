import * as rollup from 'rollup';

rollup.watch([{
    input: './src/foo',
    output: [
        {
            format: 'es',
            file: './dist/foo.es6.js'
        },
        {
            format: 'umd',
            file: './dist/foo.umd.js'
        }
    ]
}]).on('event', (evt) => {
    console.log("watcher event!", evt);
})

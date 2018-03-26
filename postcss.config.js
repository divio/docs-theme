module.exports = {
    plugins: [
        require('autoprefixer')({
            browsers: '> 2%, IE >= 10'
        }),
        require('cssnano')({
            preset: 'default',
        }),
    ],
};

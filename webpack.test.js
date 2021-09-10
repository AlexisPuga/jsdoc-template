const path = require('path');

const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'docs/demo')
        },
        port: 9000,
        host: 'localhost', // 0.0.0.0
        devMiddleware: {
            writeToDisk: false
        },
        open: true
    }
});

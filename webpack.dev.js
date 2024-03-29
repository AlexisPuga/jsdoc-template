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
        host: '0.0.0.0',
        devMiddleware: {
            // Don't write hot-updates.
            writeToDisk: false
        }
    }
});

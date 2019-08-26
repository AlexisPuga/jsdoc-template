const path = require('path');

const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.resolve(__dirname, 'docs/demo'),
        compress: true,
        port: 9000,
        host: '0.0.0.0',
        writeToDisk: true
    }
});

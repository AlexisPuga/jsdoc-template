const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new CopyPlugin([
            {
                from: 'static/js/main*',
                to: path.resolve('docs/demo/js/'),
                flatten: true
            },
            {
                from: 'static/css/main*',
                to: path.resolve('docs/demo/css/'),
                flatten: true
            }
        ])
    ]
});

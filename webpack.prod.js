const HookWebpackPlugin = require('hook-webpack-plugin');
const {merge} = require('webpack-merge');
const common = require('./webpack.common.js');
const copy = require('copy');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new HookWebpackPlugin('done', function copyBundles(compilation, callback) {
            const from = ['static/js/jsdoc-template.{js,min.js}', 'static/css/jsdoc-template.{css,min.css}'];
            const to = ['docs/demo/js', 'docs/demo/css'];

            Promise.all(from.map((src, i) => {
                const dest = to[i];

                return new Promise((resolve, reject) => {
                    copy(src, dest, (error, files) => {
                        if (error) {
                            return reject(error);
                        }

                        return resolve(files);
                    });
                });
            })).then(() => callback()).catch(error => callback(error));
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                '**/*.hot-update.*'
            ]
        })
    ]
});

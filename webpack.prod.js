const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const copy = require('copy');
const AfterBuildPlugin = class AfterBuildWebpackPlugin {
    constructor(callback) {
        this.callback = callback;
    }
    apply(compiler) {
        compiler.hooks.done.tapPromise('AfterBuildWebpackPlugin',
            (...args) => this.callback.apply(compiler, args));
    }
};

module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    plugins: [
        new AfterBuildPlugin(function copyBundles() {
            const from = ['static/js/main*', 'static/css/main*'];
            const to = ['docs/demo/js', 'docs/demo/css'];

            return Promise.all(from.map((src, i) => {
                const dest = to[i];

                return new Promise((resolve, reject) => {
                    copy(src, dest, (error, files) => {
                        if (error) {
                            return reject(error);
                        }

                        return resolve(files);
                    });
                });
            })).catch(error => {
                console.log(error);
            });
        })
    ]
});

const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const JsDocPlugin = require('jsdoc-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

/* eslint-disable-next-line no-process-env */
const isDevMode = !/production|test/i.test(process.env.NODE_ENV);

module.exports = {
    entry: {
        main: './static/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'js/[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                // Changing the key to another name will create another file.
                main: {
                    name: 'main',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            new TerserJSPlugin({
                sourceMap: true
            }),
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.css/g,
                cssProcessorPluginOptions: {
                    preset: ['default']
                }
            })
        ]
    },
    plugins: [
        new CleanWebpackPlugin({
          cleanOnceBeforeBuildPatterns: [
            path.join(process.cwd(), 'docs/demo/**/*')
          ]
        }),
        new MiniCssExtractPlugin({
            filename: 'css/[name].css'
        }),
        new JsDocPlugin({
            conf: 'jsdoc.config.json',
        	cwd: 'docs'
        })
    ],
    module: {
        rules: [
            {
                enforce: 'pre',
                test: /\.js$/,
                exclude: /(node_modules|external)/,
                loader: 'eslint-loader',
                options: {
                    fix: true,
                    cache: true,
                    failOnWarning: true,
                    failOnError: true
                }
            },
            {
                test: /\.css$/,
                exclude: /(node_modules|\.min)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: isDevMode,
                            reloadAll: true
                        }
                    },
                    'css-loader'
                ]
            }
        ]
    }
};

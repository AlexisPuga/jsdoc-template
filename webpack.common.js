const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin').default;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const JsDocPlugin = require('jsdoc-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const EslintWebpackPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: {
        'jsdoc-template': './static/js/index.js'
    },
    output: {
        path: path.resolve(__dirname, 'static'),
        filename: 'js/[name].js'
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                // Changing the key to another name will create another file.
                'jsdoc-template': {
                    name: 'jsdoc-template',
                    test: /\.css$/,
                    chunks: 'all',
                    enforce: true
                }
            }
        },
        minimizer: [
            '...', // terser
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new EslintWebpackPlugin({
            fix: true,
            cache: false,
            failOnWarning: true,
            failOnError: true,
            exclude: ['node_modules', '*.min']
        }),
        new CleanWebpackPlugin({
            cleanOnceBeforeBuildPatterns: [
                'docs/demo/**/*'
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
                test: /\.css$/,
                exclude: /(node_modules|\.min)/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                        // HMR should be done by webpack v5, by default.
                    },
                    'css-loader'
                ]
            }
        ]
    }
};

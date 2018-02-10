const path = require('path')
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

//setting the ENV variables magically makes webpack --watch work...dafuq do I know
process.env.NODE_ENV = 'development';
process.env.BABEL_ENV = 'development'

module.exports = {
    entry: {
        inject: './src/inject.js',
        main: './src/main.js',
        popup: './src/popup.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: [
                    path.resolve(__dirname, './src'),
                    /pretty-bytes/ // <- ES6 module
                ],
                use: 'babel-loader'
            },
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015']
                }
            },
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: 'css-loader'
                })
            },
            {
                test: /\.(ico|eot|otf|webp|ttf|woff|woff2)(\?.*)?$/,
                use: 'file-loader?limit=100000'
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'file-loader?limit=100000',
                    {
                        loader: 'img-loader',
                        options: {
                            enabled: true,
                            optipng: true
                        }
                    }
                ]
            }
        ]
    },
    stats: {
        children: false,
        chunks: false,
        chunkModules: false,
        chunkOrigins: false,
        modules: false
    },
    plugins: [
        new ExtractTextPlugin('bundle.css'),
        new HtmlWebpackPlugin({
            inject: true,
            chunks: ['popup'],
            filename: 'popup.html',
            template: './src/popup.html'
        }),
        // copy extension manifest and icons
        new CopyWebpackPlugin([
            { from: './src/manifest.json' },
            { context: './src/assets', from: 'icon-**', to: 'assets' }
        ])
    ]
}

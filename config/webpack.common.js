var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        polyfills: ['./src/polyfills'],
        vendor: ['./src/vendor', 'bootstrap/dist/css/bootstrap.css'],
        app: ['./src/index', './src/styles/app.css']
    },

    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },

    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: [
                    { loader: 'babel-loader' },
                    {
                        loader: 'awesome-typescript-loader',
                        options: {
                            configFileName: helpers.root('src', 'tsconfig.json')
                        }
                    }]
            },
            {
                test: /\.jsx?$/,
                use: [
                    { loader: 'babel-loader' }
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.json$/,
                use: 'json-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                sourceMap: true,
                                modules: true,
                                localIdentName: '[name]_[local]--[hash:base64:5]'
                            }
                        },
                        {
                            loader: 'postcss-loader'
                        },
                        {
                            loader: 'typed-css-modules-loader',
                            options: {
                                camelCase: true
                            }
                        }
                    ]
                }),
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        { loader: 'css-loader' },
                        { loader: 'postcss-loader' }
                    ]
                }),
                include: /node_modules/
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
        }),

        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            "window.$": 'jquery'
        })
    ]
}
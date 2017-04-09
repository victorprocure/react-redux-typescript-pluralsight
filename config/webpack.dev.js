var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common.js');
var helpers = require('./helpers');
var express = require('express');
var webpack = require('webpack');

module.exports = webpackMerge(commonConfig, {
    devtool: 'cheap-module-eval-source-map',

    output: {
        path: helpers.root('dist'),
        publicPath: 'http://localhost:3000/',
        filename: '[name].js',
        chunkFilename: '[id].chunk.js'
    }, 

    plugins: [
        new ExtractTextPlugin('[name].css'),
        new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
        historyApiFallback: true,
        stats: 'minimal',
        setup: function(app) {
            app.use('/assets', express.static(helpers.root('src','assets')));
            app.get('/test', function(req, res) {
                res.json({custom: 'response'})
            });
        }
    }
});
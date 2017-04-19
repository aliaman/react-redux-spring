const path = require('path');
var webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require('extract-text-webpack-plugin');

const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
    template: './client/index.html',
    filename: 'index.html',
    inject: 'body'
})

module.exports = {
    entry: './client/index.js',
    devtool: 'sourcemaps',
    cache: true,
    output: {
        path: path.resolve('.'),
        filename: 'index_bundle.js'
    },
    module: {
        loaders: [
            { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
            { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass']
            },
            {test: /\.scss$/, loader: ExtractTextPlugin.extract('css!sass')}
        ]
    },
    plugins: [
        HtmlWebpackPluginConfig,
        new ExtractTextPlugin('bundle.css'),
        new webpack.DefinePlugin({
            __DEVELOPMENT__: true
        }),
    ]
}
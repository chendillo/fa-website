var webpack = require('webpack');
var path = require('path');
var HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

var APP_DIR = path.resolve(__dirname, 'src');
var BUILD_DIR = path.resolve(__dirname, 'public');

var HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: APP_DIR + '/index.html',
  filename: 'index.html',
  inject: 'body'
});

// style sheets into a dedicated file for production
const extractSass = new ExtractTextPlugin({
    filename: "[name].[contenthash].css",
    disable: process.env.NODE_ENV === "development"
});

module.exports = {
  entry: [APP_DIR + '/index.jsx'],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [{
              loader: "style-loader" // creates style nodes from JS strings
          }, {
              loader: "css-loader", // translates CSS into CommonJS
              options: {
                sourceMap: true,
                modules: true,
                localIdentName: '[name]__[local]___[hash:base64:5]'
              }
          }, {
              loader: "sass-loader", // compiles Sass to CSS
              options: { sourceMap: true }
          }]
        })
      },
      {
        test: /\.jsx?/,
        include: APP_DIR,
        loader: 'babel-loader'
      },
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  plugins: [
    HTMLWebpackPluginConfig,
    extractSass
  ]
};

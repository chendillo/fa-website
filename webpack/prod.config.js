const webpack = require('webpack')
const merge = require('webpack-merge')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')
const commonConfig = require('./config.js')

const { paths, common, stats, port, host } = commonConfig

module.exports = function (env) {
  console.log('*********************************************')
  console.log(env)
  const plugins = []
  const cssLoader = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: [
      {
        loader: 'css-loader',
        options: {
          module: true, // css-loader 0.14.5 compatible
          modules: true,
          localIdentName: '[hash:base64:5]',
        },
      },
      {
        loader: 'sass-loader',
        options: {
          outputStyle: 'collapsed',
          sourceMap: true,
          includePaths: [paths.src],
        },
      },
    ],
  })

  plugins.push(
    new HTMLWebpackPlugin({
      template: paths.src + '/index.html',
      filename: 'index.html',
      inject: true,
      production: true,
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new UglifyJSWebpackPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      }
    }),
  )

  return merge(common,
    {
      output: {
        path: paths.public,
        filename: '[name]-[hash:8].js',
        chunkFilename: '[name]-[chunkhash:8].js',
        publicPath: `http://${host}:${port}/`,
      },
      module: {
        rules: [
          {
            test: /\.scss$/,
            exclude: /node_modules/,
            use: cssLoader,
          },
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
          },
        ],
      },
      plugins,
    }
  )
}

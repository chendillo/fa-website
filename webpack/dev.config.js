const webpack = require('webpack')
const merge = require('webpack-merge')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const commonConfig = require('./config.js')

const { paths, common, stats, port, host } = commonConfig

module.exports = function () {
  const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: paths.src + '/index.html',
    filename: 'index.html',
    inject: true,
    production: false,
    minify: false
  });

  const cssLoader = [
    {
      loader: 'style-loader',
    },
    {
      loader: 'css-loader',
      options: {
        module: true,
        localIdentName: '[path][name]-[local]',
      },
    },
    {
      loader: 'sass-loader',
      options: {
        outputStyle: 'expanded',
        sourceMap: false,
        includePaths: [paths.src],
      },
    },
  ]

  return merge(common,
    {
      output: {
        path: paths.public,
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
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
      plugins: [
        HTMLWebpackPluginConfig,
      ],
      devServer: {
        contentBase: '/',
        publicPath: '/',
        historyApiFallback: true,
        port: port,
        host: host,
        hot: false,
        compress: false,
        stats: stats,
      },
    }
  )
}

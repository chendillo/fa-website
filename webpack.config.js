const webpack = require('webpack')
const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const UglifyJSWebpackPlugin = require('uglifyjs-webpack-plugin')

const APP_DIR = path.resolve(__dirname, 'src')
const BUILD_DIR = path.resolve(__dirname, 'public')

const host = process.env.HOST || 'localhost'
const port = process.env.PORT || 3000
const stats = {
  assets: true,
  children: false,
  chunks: false,
  hash: false,
  modules: false,
  publicPath: false,
  timings: true,
  version: false,
  warnings: true,
  colors: {
    green: '\u001b[32m',
  },
};

module.exports = function (env) {
  const nodeEnv = env && env.prod ? 'production' : 'development'
  const isProd = nodeEnv === 'production'
  const plugins = []

  // Use hashed only on production
  const outputFileName = isProd ? '[name]-[hash:8].js' : '[name].js'
  const outputChunkName = isProd ? '[name]-[chunkhash:8].js' : '[name].chunk.js'

  const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
    template: APP_DIR + '/index.html',
    filename: 'index.html',
    inject: true,
    production: isProd,
    minify: isProd && {
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
  });

  let cssLoader
  let UglifyJSWebpackPluginConfig

  // style sheets into a dedicated file for production
  const extractSass = new ExtractTextPlugin({
      filename: "style-[contenthash:8].css",
  });

  if(isProd) {
    cssLoader = ExtractTextPlugin.extract({
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
            includePaths: [APP_DIR],
          },
        },
      ],
    })

    plugins.push(
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
      })
    )

  } else {
    cssLoader = [
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
          includePaths: [APP_DIR],
        },
      },
    ]
  }

  return {
    entry: [APP_DIR + '/index.jsx'],
    context: APP_DIR,
    output: {
      path: BUILD_DIR,
      filename: outputFileName,
      chunkFilename: outputChunkName,
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
    resolve: {
      extensions: ['.js', '.jsx', '.sass', '.scss'],
      modules: ['src', 'node_modules'],
    },
    plugins: [
      HTMLWebpackPluginConfig,
      extractSass,
      ...plugins,
    ],
    stats: stats,
    devServer: {
      contentBase: '/',
      publicPath: '/',
      historyApiFallback: true,
      port: port,
      host: host,
      hot: false,
      compress: isProd,
      stats: stats,
    },
  }
}

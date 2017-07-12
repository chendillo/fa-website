const webpack = require('webpack')
const path = require('path')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const src = path.resolve(__dirname, '../src')
const public = path.resolve(__dirname, '../public')

const paths = { src, public }

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

const plugins =  []

plugins.push(
  // style sheets into a dedicated file for production
  new ExtractTextPlugin({
      filename: "style-[contenthash:8].css",
  })
)

const common =  {
  entry: [src + '/index.jsx'],
  context: src,
  resolve: {
    extensions: ['.js', '.jsx', '.sass', '.scss'],
    modules: ['src', 'node_modules'],
  },
  stats,
  plugins,
}


module.exports = {
  paths,
  host,
  port,
  common,
  stats,
}

'use strict'
const webpack = require('webpack')
const {
  VueLoaderPlugin
} = require('vue-loader')
const HtmlWebPackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

function resolve(dir) {
  return path.join(__dirname, '..', dir)
}
module.exports = {
  mode: 'development',
  // hotdeploy
  devServer: {
    hot: true,
    watchOptions: {
      poll: true
    }
  },
  module: {
    rules: [
      // load vue file
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader'
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }, {
        test: /\.styl(us)?$/,
        use: ['vue-style-loader', 'css-loader', 'stylus-loader']
      }
      // ESLint loader is a pre-loader, it will run before the other loaders
      // and apply the linting rules before the babel-loader kicks in and
      // start processing the javascript
      , {
        test: /\.(js|vue)$/,
        use: 'eslint-loader',
        enforce: 'pre'
      }
      // make dist/main.css
      // , {
      //   test: /\.vue$/,
      //   use: 'vue-loader'
      // }, {
      //   test: /\.styl(us)?$/,
      //   use: [
      //     MiniCssExtractPlugin.loader,
      //     'css-loader',
      //     'stylus-loader'
      //   ]
      // }
    ]
  },
  plugins: [
    // load vue
    new VueLoaderPlugin(),
    // hotdeploy
    new webpack.HotModuleReplacementPlugin(),
    // inject main.js -> index.html
    new HtmlWebPackPlugin({
      filename: 'index.html',
      template: 'index.html',
      inject: true
    }),
    new CopyWebpackPlugin([{
      from: resolve('static/image'),
      to: resolve('dist/static/image'),
      toType: 'dir'
    }]),
    // extra css from stylus -> main.css
    new MiniCssExtractPlugin({
      filename: 'main.css'
    })
  ]
}
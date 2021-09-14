

const { merge } = require('webpack-merge');
const baseWebpackConfig  = require('./webpack.base.config');
const htmlWebpackPlugin = require('html-webpack-plugin');
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin");
const webpack = require('webpack');

const prodWebpackConfig  = merge(baseWebpackConfig,{
  mode: 'production',
  plugins: [ 
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      title: "webpack demo",
      minfy: {}
    }),
  
      // 压缩css
    new optimizeCssAssetsWebpackPlugin(),
    new webpack.DefinePlugin({
      API_BASE_URL:  JSON.stringify('http://apidev.example.com'),
    })
]
})

module.exports = prodWebpackConfig;
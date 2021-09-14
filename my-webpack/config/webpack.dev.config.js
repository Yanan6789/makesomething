const webpack = require('webpack')
const { merge } = require('webpack-merge');
const baseWebpackConfig  = require('./webpack.base.config');
const htmlWebpackPlugin = require('html-webpack-plugin');

const devWebpackConfig  = merge(baseWebpackConfig,{
  mode: 'development',
  devServer: {
    compress: true, // gzip compress
    port: 9200,
    open: true,
    liveReload: true,
     // proxySetup
    proxy:{
      
      '/api':{
        target: 'https://api.github.com',
        pathRewrite:{
          '^/api': ''
        },
        changeOrigin: true,
      }
    }
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.ejs',
      title: "webpack dev",
      minfy: {}
    }),
    new webpack.DefinePlugin({
      // 后面是一个代码片段
      API_BASE_URL: JSON.stringify('http://apidev.example.com'),
    })
  ]
})

module.exports = devWebpackConfig;
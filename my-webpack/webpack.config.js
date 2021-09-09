// webpack config

const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const styleLintPlugin = require('stylelint-webpack-plugin')
const optimizeCssAssetsWebpackPlugin = require("optimize-css-assets-webpack-plugin")
const htmlWebpackPlugin = require('html-webpack-plugin')
const eslintPlugin = require('eslint-webpack-plugin')





module.exports = {

  mode: 'production',

  entry: './src/index.js',

  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'main.js'
  },

  module: {
    rules: [
      // babel js config
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', { 
                targets: "defaults" ,
                useBuiltIns: 'usage', // 按需加载 
                corejs: 3
              }]
            ]
          }
        }
      },
      // 指定多个配置规则
      {
        test: /\.css$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use:{
          loader: 'url-loader',
          options:{
            limit: 10240
          }
        }
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css'
    }),

    // css 校验
    new styleLintPlugin({
      files: ['src/css/*.{css,less,sass,scss}']
    }),

    // 压缩css
    new optimizeCssAssetsWebpackPlugin(),

    // html config
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: 'index.html',
      title: "webpack demo",
      minfy: {

      }
    }),
    new eslintPlugin({
      fix: true
    })
  ],

  devServer: {

  }

}
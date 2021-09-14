const { resolve } = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const styleLintPlugin = require('stylelint-webpack-plugin')
const eslintPlugin = require('eslint-webpack-plugin')
const copyWebpackPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')



const commonStyleLoaders = [
  MiniCssExtractPlugin.loader,
  'css-loader',
  'postcss-loader'
]

module.exports = {
  // 单入口
  // entry: './src/index.js',
  
  entry: {
    index: './src/index.js',
    about: './src/about.js',
  },

  output: {
    path: resolve(__dirname, '../dist'),
    filename: '[name].bundle.js'
  },
  devtool: 'source-map',

  // 优化策略
  optimization:{
    splitChunks:{
      chunks: 'all'
    }
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
            // 第二次构建时会读取之前的缓存
            cacheDirectory: true,
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
        use: commonStyleLoaders
      },
      {
        test: /\.scss$/i,
        use: [
          ...commonStyleLoaders,
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        type: 'asset',
        generator: {
          filename: 'image/[name][ext]'
        }
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        // 文件<8k, 使用asset/inline
        type: 'asset',
        generator: {
          filename: 'fonts/[name][ext]'
        }
      },
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

  

    // new eslintPlugin({
    //   fix: true
    // }),
    new copyWebpackPlugin({
      patterns:[
        {
          from: 'public',
          to: 'public'
        }
      ]
    }),
    new CleanWebpackPlugin()
  ],

  target: 'web',

  performance:{
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  },


}
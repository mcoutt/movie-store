const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: ['./src/index.js'],

  output: {
    filename: '[name].bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json']
  },

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },

  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'School',
      template: 'index.html',
      filename: 'index.html',
      minify: { collapseWhitespace: true }
    }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[name].css',
    })
  ],

  resolveLoader: {
    alias: {
      'remove-comments-loader': path.join(__dirname, 'src/loaders', 'remove-comments-loader.js'),
    }
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              '@babel/preset-env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread', 
              '@babel/plugin-transform-runtime'
            ]
          }
        }
      },
      {
        enforce: 'pre',
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: 'eslint-loader'
      },
      {
        test: /\.html$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'remove-comments-loader',
            options: { attrs: false }
          },
          {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        ]
      },
      {
        test: /\.scss$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          'css-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: { name: 'img/[name].[ext]' }
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 60
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4
              },
              gifsicle: {
                interlaced: false,
                optimizationLevel: 3
              },
              webp: {
                quality: 60
              }
            }
          }
        ]
      }
    ]
  },

  mode: 'production'
};
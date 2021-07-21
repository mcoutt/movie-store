const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const dotenvWebpack = require('dotenv-webpack');
const dotenv = require('dotenv');

dotenv.config({
  path: path.resolve(__dirname, '.env.prod'),
})


module.exports = {
  entry: ['./src/index.js'],

  output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: 'auto',
      filename: '[name].bundle.js',
      chunkFilename: '[name].bundle.js',
    },
  
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    // fallback: { "os": require.resolve("os-browserify/browser") }
  },

  target: 'node',

  devServer: {
    contentBase: path.join(__dirname, 'build'),
    compress: true,
    port: 3000,
    open: true,
    overlay: true
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all'
  //   }
  // },

  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(dotenv.parsed),
    }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
    new dotenvWebpack(
      {
        path: path.resolve(__dirname, '.env.dev'),
        systemVars: true,
        ignoreStub: true
      }
    ),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'School',
      template: 'index.html',
      filename: 'index.html'
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
              '@babel/env',
              '@babel/preset-react'
            ],
            plugins: [
              '@babel/plugin-proposal-object-rest-spread', 
              '@babel/plugin-transform-runtime',
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-syntax-dynamic-import'
            ]
          }
        }
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
          },
        ]
      },
      {
        test: /\.s[ac]ss$/i,
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
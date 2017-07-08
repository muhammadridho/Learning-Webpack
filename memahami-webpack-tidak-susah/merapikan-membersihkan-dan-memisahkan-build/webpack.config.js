const HtmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path'),
      merge = require('webpack-merge'),
      settings = require('./modular.js');


var commonConf = {
    entry : {
      app : './src/app.js'
    },
    output : {
      path : path.resolve( __dirname, 'dist'),
      filename : '[name].[chunkhash].js',
      chunkFilename : '[chunkhash].js'
    },
    plugins : [
      new HtmlWebpackPlugin({
        title : 'Belajar webpack'
      })
    ]
  },

  configuration = {};

  switch (process.env.npm_lifecycle_event) {
    case "build":
      configuration = merge(commonConf, settings.production())
    break;
    default:
      configuration = merge(commonConf, settings.development())
    break;
  }

  module.exports = configuration

const HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      path = require('path'),
      setting = require('./modular.js'),
      merge = require('webpack-merge');


//global configuration webpack
var commonConf = {
  entry : './src/app.js',
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'app.bundle.js'
  },
  plugins : [
      new HtmlWebpackPlugin({
        title : 'Belajar devtool dan Source Map'
      }),
      new ExtractTextPlugin({
        filename : 'app.css',
        disable : false,
        allChunks : true
      })
    ]
  },

  configuration = {};

  switch(process.env.npm_lifecycle_event){
    case "build" :
      configuration = merge(commonConf, setting.production())
    break;
    default :
      configuration = merge(commonConf, setting.development())
    break;
  }

  module.exports = configuration

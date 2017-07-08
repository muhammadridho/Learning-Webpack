const HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      webpack = require('webpack'),
      path = require('path'),
      merge = require('webpack-merge'),
      parts = require('./modules.js');

var commonConf = {
      entry : './src/app.js',
      output : {
        path : path.resolve(__dirname, 'dist'),
        filename : 'app.bundle.js'
      },
      plugins : [
        new HtmlWebpackPlugin({
          title : 'Belajar Konfigurasi webpack'
        }),
        new ExtractTextPlugin({
          filename : 'app.css',
          disable : false,
          allChunks : true
        }),
      ]
    },
    config = {}

    switch(process.env.npm_lifecycle_event) {
    	case 'build':
    		config = merge(
          commonConf,
          parts.build()
        );
    		break;
    	default:
    		config = merge(
          commonConf,
          parts.development({
            host: process.env.HOST,
            port: process.env.PORT
          })
        );
    }
module.exports = config

const webpack = require('webpack'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      path = require('path');

exports.development = function(options) {
  return {
    module : {
      rules : [
        {
          test : /\.css$/,
          use : ['style-loader','css-loader']
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      inline: true,
      hot: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multistep: true
      })
    ]
  }
}

exports.build = function(){
  return {
    module : {
      rules : [
        {
          test : /\.css$/,
          use : ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  loader: ['css-loader'],
                  publicPath: '/dist'
                })
        }
      ]
    }
  }
}

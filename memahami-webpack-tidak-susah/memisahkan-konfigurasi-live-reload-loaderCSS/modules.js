const webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin');

exports.development = function(options) {
  return {
    module : {
      rules : [
        {
          test : /\.scss$/,
          use : ['style-loader','css-loader','sass-loader']
        }
      ]
    },
    devServer: {
      historyApiFallback: true,
      inline: true,
      hot: true,
      stats: 'errors-only',
      host: options.host,
      port: options.port || 8080
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin({
        multistep: true
      }),
      new webpack.NamedModulesPlugin()
    ]
  }
}

exports.build = function(){
  return {
    module : {
      rules : [
        {
          test : /\.scss$/,
          use : ExtractTextPlugin.extract({
                  fallback: 'style-loader',
                  loader: ['css-loader','sass-loader'],
                  publicPath: '/dist'
                })
        }
      ]
    },
    plugins : [
      new HtmlWebpackPlugin({
        title : 'Belajar Webpack !',
        minify : {
          collapseWhitespace : true
        },
        hash : true
      })
    ]
  }
}

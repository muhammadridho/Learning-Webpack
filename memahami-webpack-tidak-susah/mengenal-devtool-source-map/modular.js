const path = require('path'),
      webpack = require('webpack'),
      HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin')


exports.development = function(){
  return {
    module : {
      rules : [
        {
          test : /\.scss$/,
          use : ['style-loader', 'css-loader', 'sass-loader']
        }
      ]
    },
    devtool : 'eval-source-map',
    devServer : {
      contentBase : path.join(__dirname, 'dist'),
      inline : true,
      hot : true,
      stats : 'errors-only',
      compress : true,
      open : true,
      host: process.env.HOST,
      port: process.env.PORT,
      openPage : ''
    },
    plugins : [
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NamedModulesPlugin()
    ]
  }
}

exports.production = function(){
  return {
    module : {
      rules : [
        {
          test : /\.scss$/,
          use : ExtractTextPlugin.extract({
            fallback : 'style-loader',
            use : ['css-loader', 'sass-loader'],
            publicPath : 'dist'
          })
        }
      ]
    },
    devtool : 'source-map',
    plugins : [
      new HtmlWebpackPlugin({
        title : 'Webpack itu mudah',
        minify : {
          collapseWhitespace : true
        },
        hash : true
      })
    ]
  }
}

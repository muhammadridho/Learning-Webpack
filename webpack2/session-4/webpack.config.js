const HtmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path'),
      ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  entry : './src/app.js',
  output : {
    path : path.resolve(__dirname,'dist'),
    filename : 'app.bundle.js'
  },
  module : {
    rules : [
      {test : /\.scss$/,
       use :  ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: ["css-loader","sass-loader"]
        })
      }
    ]
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : 'Learning with CSS Loader',
      minify : {
        collapseWhitespace : true
      },
      hash : true,
      filename : 'index.html'
    }),
    new ExtractTextPlugin({
            filename: 'app.css',
            disable: false,
            allChunks: true
        })
  ]
}

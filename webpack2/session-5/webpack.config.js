const HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      path = require('path')

module.exports = {
  entry : './src/app.js',
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'app.bundle.js'
  },
  module : {
    rules : [
      {
        test : /\.scss$/,
        use : ExtractTextPlugin.extract({
          fallback : 'style-loader',
          use : ['css-loader','sass-loader']
        })
      },
    ]
  },
  devServer : {
    contentBase : path.join(__dirname, 'dist'),
    compress : true,
    port : 9000,
    stats : "errors-only"
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : 'Learing webpack-dev-server',
      minify : {
        collapseWhitespace : true
      },
      hash : true,
      filename : 'index.html'
    }),
    new ExtractTextPlugin({
      filename : 'app.css',
      disable : false,
      allChunks : true
    })
  ]
}

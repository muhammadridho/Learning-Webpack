const HtmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path')

module.exports = {
  entry : './src/app.js',
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'app.bundle.js'
  },
  module : {
    rules : [
      {test : /\.css$/, loaders : 'style-loader!css-loader'}
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
    })
  ]
}

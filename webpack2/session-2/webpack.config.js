const HtmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path')

module.exports = {
  entry : './src/app.js',
  output : {
    path : path.resolve(__dirname, 'dist'),
    filename : 'app.bundle.js'
  },
  plugins : [
     new HtmlWebpackPlugin({
       title  : 'Learning webpack',
       minify : {
         collapseWhitespace : true
       },
       hash : true,
       filename : 'index.html'
     })
  ]
}

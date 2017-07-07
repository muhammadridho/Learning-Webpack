const HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin')
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
          use : ['css-loader', 'sass-loader']
        })
      },
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : 'babel-loader'
      }
    ]
  },
  devServer : {
    contentBase : path.join(__dirname, 'dist'),
    compress : true,
    stats : 'errors-only'
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : 'React and Babel with Webpack',
      minify : {
        collapseWhitespace : true
      },
      hash : true,
      template : './src/index.html'
    }),
    new ExtractTextPlugin({
      filename : 'app.css',
      disable : false,
      allChunks : true
    })
  ]
}

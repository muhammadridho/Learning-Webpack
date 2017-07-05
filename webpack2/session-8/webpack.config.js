const HtmlWebpackPlugin = require('html-webpack-plugin'),
      ExtractTextPlugin = require('extract-text-webpack-plugin'),
      webpack = require('webpack'),
      path = require('path')

      var isProd = process.env.NODE_ENV === 'production' // true or false
      var cssDev = ['style-loader', 'css-loader', 'sass-loader']
      var cssProd = ExtractTextPlugin.extract({
        fallback: 'style-loader',
        loader: ['css-loader', 'sass-loader'],
        publicPath: '/dist'
      })
      var cssConfig = isProd ? cssProd : cssDev


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
        use : cssConfig
      },
      {
        test : /\.js$/,
        exclude : /node_modules/,
        use : ['babel-loader']
      },
      {
        test : /\.pug$/,
        use : ['html-loader','pug-html-loader']
      }
    ]
  },
  devServer : {
    contentBase : path.join(__dirname,'dist'),
    stats : 'errors-only',
    compress : true,
    hot: true,
    open : true
  },
  plugins : [
    new HtmlWebpackPlugin({
      title : 'Test module Hot Reload',
      hash : true,
      template : './src/index.pug'
    }),
    new ExtractTextPlugin({
      filename : 'app.css',
      disable : !isProd,
      allChunks : true
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}

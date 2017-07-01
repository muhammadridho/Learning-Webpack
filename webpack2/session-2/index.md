# Webpack 2 Tutorial - Installation and Config

### Basic Installation and Configuration Webpack

1. Install Webpack global in your computer ``` npm i -g webpack ```
2. Init NPM in your project
3. Install webpack as dependencies modules
4. Write your code in src file
5. Run Webpack via CLI ``` webpack ./src/app.js ./dist/app.bundle.js```
6. Install HtmlWebpackPlugin as webpack plugins
7. Insert HtmlWebpackPlugin as Config
```javascript
//insert this code
const HtmlWebpackPlugin = require('html-webpack-plugin'),
      path = require('path')

module.exports = {
  entry : './src/app.js',
  output : {
    path : path.resolve(__dirname, 'dist'), //insert path
    filename : 'app.bundle.js'//output
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

```

7. Create Bundle file ```npm run dev```

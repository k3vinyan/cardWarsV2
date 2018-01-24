const path = require('path');

const config = {
  entry: './app.js',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, "src")
  },
  watch: true,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        exclude: /(node_modules)/,
        use: [{loader:"style-loader"}, {loader: "css-loader"}]
      }
    ]
  }
}


module.exports = config;

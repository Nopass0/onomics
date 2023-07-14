const webpack = require('webpack')
const path = require('path')

module.exports = {
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader"
          },
        },
        {
            test: /\.css$/i,
            use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
      ]
    },
    
    devtool: 'source-map',

    devServer: {
        static: {
            directory: path.join(__dirname, 'static/frontend/main.js'),
          },
          compress: true,
          port: 9000,
      },
  };
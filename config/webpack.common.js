const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    main: './src/js/app.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    })
  ],
  module: {
    rules: [
      // {
      //   test: /\.(png|jpg|jpeg|gif|svg)$/,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       name: '[name].[hash].[ext]',
      //       useRelativePath: true,
      //       outputPath: 'img/'
      //     }
      //   }
      // }
    ]
  }
};

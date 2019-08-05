const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, 'docs');
module.exports = {
  entry: './src/index.js',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Rebecca & Danny",
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: 'file-loader',
      },
      {
        test: /\.svg$/,
        use: 'svg-inline-loader',
      }
    ],
  },
  devServer: {
    contentBase: outputPath,
  }
};
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const outputPath = path.resolve(__dirname, 'docs');
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({
    title: "Danny & Rebecca",
  })],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: 'url-loader',
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
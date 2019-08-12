const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ResourceHintWebpackPlugin = require('resource-hints-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');

const outputPath = path.resolve(__dirname, 'docs');
module.exports = {
  entry: './src/index.js',
  mode: 'production',
  output: {
    path: outputPath,
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Danny & Rebecca",
    }),
    new ResourceHintWebpackPlugin(),
    new CompressionPlugin(),
  ],
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
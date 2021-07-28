const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: {
    background: path.join(__dirname, 'src/background/background.js'),
    popup: path.join(__dirname, 'src/popup/popup.js'),
    options: path.join(__dirname, 'src/options/options.js'),
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'extension'),
    clean: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'popup/popup.html'),
      filename: 'popup.html',
      chunks: ['popup'],
    }),
    new HtmlWebpackPlugin({
      template: path.join(__dirname, 'src', 'options/options.html'),
      filename: 'options.html',
      chunks: ['options'],
    }),
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname, 'src', 'background.html'),
    //   filename: 'background.html',
    // }),
    new CopyPlugin({
      patterns: [
        {
          from: path.join(__dirname, 'src/manifest.json'),
        },
        {
          from: path.join(__dirname, 'src/assets'),
        },
      ],
    }),
  ],
}

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
  filename: '[name].[contenthash].css',
  disable: process.env.NODE_ENV === 'development',
});

module.exports = {
  mode: 'development',
  entry: ['./src/js/index.jsx', './src/scss/app.scss'],
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },

  module: {
    rules: [
      {
        test: /.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.scss$/,
        use: extractSass.extract({
          use: [
            { loader: 'css-loader' },
            { loader: 'sass-loader' },
          ],
          fallback: 'style-loader',
        }),
      },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader' },
    ],
  },

  plugins: [
    extractSass,
    new HtmlWebpackPlugin({
      hash: true,
      template: './src/index.html',
    }),
  ],

  resolve: {
    extensions: ['.js', '.jsx', '.ttf'],
  },
};

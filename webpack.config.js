const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const js = require('./webpack/js');
// const sass = require('./webpack/sass');
const css = require('./webpack/css');



const common = merge([
  {
    entry: './src/index.js',

    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'index.js'
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html'
      })
    ]
  },
  js(),
  css(),
]);

module.exports = function(env, argv) {
  if (argv.mode === 'development') {
    return merge([
      common
    ]);
  }

  if (argv.mode === 'production') {
    return merge([
      common
    ]);
  }
};

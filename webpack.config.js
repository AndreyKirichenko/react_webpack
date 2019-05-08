const merge = require('webpack-merge');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let CopyWebpackPlugin = require('copy-webpack-plugin');

const js = require('./webpack/js');
const css = require('./webpack/css');
const favicon = require('./webpack/favicon');


const devserver = require('./webpack/devserver');

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
      }),

      new CopyWebpackPlugin([
        { from: 'src/img/', to: 'img/', force: true },
        { from: 'src/fonts/', to: 'fonts/', force: true }
      ], {})
    ]
  },
  js(),
  css(),
  favicon(),
]);

module.exports = function(env, argv) {
  if (argv.mode === 'development') {
    return merge([
      common,
      devserver(),
    ]);
  }

  if (argv.mode === 'production') {
    return merge([
      common
    ]);
  }
};

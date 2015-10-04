'use strict';

import webpack from 'webpack';
import path from 'path';
import BowerWebpackPlugin from 'bower-webpack-plugin';

const config = {

  entry: './app/assets/scripts/main.js',

  output: {
    path: path.join(process.cwd(), 'public', 'assets'),
    filename: 'scripts/main.js'
  },

  module: {
    preLoaders: [{
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'jshint-loader'
      }, {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'jscs-loader'
      }
    ],
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel'
    }]
  },

  plugins: [
    new BowerWebpackPlugin()
  ]

};

export default config;

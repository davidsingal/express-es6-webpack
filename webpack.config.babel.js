'use strict';

import webpack from 'webpack';
import path from 'path';

const config = {

  entry: './app/assets/scripts/main.js',

  output: {
    path: path.join(process.cwd(), 'public', 'assets'),
    filename: 'scripts/main.js'
  },

  module: {
    preLoaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'jshint-loader' },
      { test: /\.js$/, exclude: /node_modules/, loader: 'jscs-loader' }
    ]
  }

};

export default config;

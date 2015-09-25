'use strict';

var bodyParser = require('body-parser');
var compress = require('compression');
var express = require('express');
var favicon = require('serve-favicon');
var jade = require('jade');
var logger = require('morgan');
var root = process.cwd();

module.exports = function(app) {

  // HTTP request logger
  if ('development' === app.get('env')) {
    app.use(logger('dev'));
  }

  // For multipart bodies
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // GZIP compression
  app.use(compress());

  // Configuring Jade as layout engine
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');

  // Public folder
  app.use(express.static(root + '/public'));

  // Middleware for serving a favicon
  app.use(favicon(root + '/public/favicon.ico'));

};

'use strict';

var http = require('http');
var app = require('./app');
var port = process.env.PORT || 3000;

/**
 * Creating HTTP server with Express.js application
 */
http.createServer(app).listen(port, function() {
  console.log('Running server on localhost:%s', port);
});

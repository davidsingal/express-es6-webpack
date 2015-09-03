'use strict';

var express = require('express');

// Creating a Express js application
var app = express();

// Importing configuration
require('./config')(app);

// Importing router
require('./router')(app);

module.exports = app;

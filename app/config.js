'use strict';

import bodyParser from 'body-parser';
import compress from 'compression';
import express from 'express';
import favicon from 'serve-favicon';
import jade from 'jade';
import logger from 'morgan';

const root = process.cwd();

export default function(app) {

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
  app.set('views', `${ __dirname }/views`);
  app.set('view engine', 'jade');

  // Public folder
  app.use(express.static(`${ root }/public`));

  // Middleware for serving a favicon
  app.use(favicon(`${ root }/public/favicon.ico`));

};

'use strict';

import http from 'http'
import app from './app'

const port = process.env.PORT || 3000

/**
 * Creating HTTP server with Express.js application
 */
http.createServer(app).listen(port, () => {
  console.log('Running server on localhost:%s', port);
});

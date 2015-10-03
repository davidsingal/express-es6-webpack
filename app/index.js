'use strict';

import express from 'express';
import config from './config';
import router from './router';

// Creating a Express js application
var app = express();

// Executing config
config(app);

// Executing router
router(app);

export default app;

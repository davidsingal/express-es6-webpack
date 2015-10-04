'use strict';

import {App} from './app';

const onReady = function() {
  new App({ el: 'body' }).start();
};

document.addEventListener('DOMContentLoaded', onReady);

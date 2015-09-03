'use strict';

module.exports = function(app) {

  app.get('/', require('./controllers/welcome_controller').index);

};

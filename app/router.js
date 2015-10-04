'use strict';

import welcomeController from './controllers/welcome_controller';

export default function(app) {

  app.get('/', welcomeController.index);

};

'use strict';

import welcomeController from './controllers/welcome_controller';

export default (app) => {

  app.get('/', welcomeController.index);

};

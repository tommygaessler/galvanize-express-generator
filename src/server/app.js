// iffie nothing here is global
(function() {

  'use strict';

  // *** dependencies *** //
  const express = require('express');
  // requires express in node_modules, which is a function

  const appConfig = require('./config/main-config.js');
  const routeConfig = require('./config/route-config.js');
  const errorConfig = require('./config/error-config.js');
  // requires files inside of config folder

  // *** express instance *** //
  const app = express();
  // creates an instance of express

  // *** config *** //
  appConfig.init(app, express);
  // passes in app, and express to main-config.js file
  routeConfig.init(app);
  // passes in app to route-config.js file
  errorConfig.init(app);
  // passes in app to error-config.js file

  module.exports = app;
  // exports app, can be used anywhere

}());

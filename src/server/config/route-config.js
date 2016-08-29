(function (routeConfig) {

  'use strict';

  routeConfig.init = function (app) {

    // *** routes *** //
    const routes = require('../routes/index');
    const puppyRoutes = require('../routes/puppies');
    const catRoutes = require('../routes/cats');

    // *** register routes *** //
    app.use('/', routes);
    app.use('/api/v1/puppies', puppyRoutes);
    app.use('/api/v1/cats', catRoutes);
  };

})(module.exports);

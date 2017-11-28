'use strict';

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');
  var testimonials = require('../controllers/testimonial.server.controller');

  app.route('/api/test').get(core.testtransloc);

  // Route for testimonial submission
  app.route('/api/testimonial/submit').post(testimonials.submit);
  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

  // Define application route
//  app.route('/*').get(core.testtransloc);
  app.route('/*').get(core.renderIndex);



};

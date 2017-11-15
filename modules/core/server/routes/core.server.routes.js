'use strict';

module.exports = function (app) {
  // Root routing
  var core = require('../controllers/core.server.controller');
  var testimonials = require('../controllers/testimonial.server.controller');

  // Route for uploading testimonial picture
  app.route('/api/testimonial/picture').post(testimonials.addPicture);

  // Route for testimonial submission
  app.route('/api/testimonial/submit').post(testimonials.submit);

  app.route('/test').get(core.testtransloc);

  // Define error pages
  app.route('/server-error').get(core.renderServerError);

  // Return a 404 for all undefined api, module or lib routes
  app.route('/:url(api|modules|lib)/*').get(core.renderNotFound);

  // Define application route
//  app.route('/*').get(core.testtransloc);
  app.route('/*').get(core.renderIndex);



};

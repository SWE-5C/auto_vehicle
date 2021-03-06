'use strict';

/**
 * Module dependencies.
 */
var adminPolicy = require('../policies/admin.server.policy'),
  admin = require('../controllers/admin.server.controller'),
  testimonial = require('../controllers/experience-list.server.controller');

module.exports = function (app) {
  // User route registration first. Ref: #713
  require('./users.server.routes.js')(app);

  // Users collection routes
  app.route('/api/users')
    .get(adminPolicy.isAllowed, admin.list);

  app.route('/api/testimonials')
    .get(admin.listTestimonials);

  app.route('/api/picks')
    .get(admin.listPicks);

  app.route('/api/picks/:pickId')
    .delete(admin.deletePick)
    .put(admin.updatePicks);

  app.param('pickId', admin.pickByID);

  app.route('/api/testPicks')
    .get(admin.saveTest);

  // Single user routes
  app.route('/api/users/:userId')
    .get(adminPolicy.isAllowed, admin.read)
    .put(adminPolicy.isAllowed, admin.update)
    .delete(adminPolicy.isAllowed, admin.delete);

  // Finish by binding the user middleware
  app.param('userId', admin.userByID);

  app.param('pickId', admin.pickByID);

  app.route('/:testimonialId')
    .get(admin.readTest);

  app.param('testimonialId', admin.listingByID);
};

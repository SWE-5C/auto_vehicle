'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  mongoose = require('mongoose'),
  Testimonial = mongoose.model('Testimonial');

/**
 * Signup
 */
exports.submit = function (req, res) {
  // For security measurement we remove the roles from the req.body object
  delete req.body.roles;

  // Init Variables
  var testimonial = new Testimonial(req.body);
  var message = null;

  // Add missing user fields
  testimonial.picture = 'TEST_STRING';
  //user.provider = 'local';
  //user.displayName = user.firstName + ' ' + user.lastName;

  // Then save the user
  testimonial.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    } else {
      // Remove sensitive data before login
      //user.password = undefined;
      //user.salt = undefined;

      // req.login(user, function (err) {
      //   if (err) {
      //     res.status(400).send(err);
      //   } else {
      //     res.json(user);
      //   }
      // });
    }
  });
};

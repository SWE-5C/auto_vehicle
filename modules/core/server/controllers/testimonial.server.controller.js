'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  _ = require('lodash'),
  fs = require('fs'),
  multer = require('multer'),
  config = require(path.resolve('./config/config')),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  mongoose = require('mongoose'),
  Testimonial = mongoose.model('Testimonial');

/**
 * Update profile picture
 */
exports.addPicture = function (req, res) {
  var testimonial = req.testimonial;
  var message = null;
  var upload = multer(config.uploads.profileUpload).single('newPicture');
  var profileUploadFileFilter = require(path.resolve('./config/lib/multer')).profileUploadFileFilter;

  // Filtering to upload only images
  upload.fileFilter = profileUploadFileFilter;

    upload(req, res, function (uploadError) {
      if(uploadError) {
        return res.status(400).send({
          message: 'Error occurred while uploading picture'
        });
      } else {
        testimonial.picture = config.uploads.profileUpload.dest + req.file.filename;

        user.save(function (saveError) {
          if (saveError) {
            return res.status(400).send({
              message: errorHandler.getErrorMessage(saveError)
            });
          } else {
              res.json(user);
          }
        });
      }
    });
};

/**
 * Submit
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
        res.json(testimonial);
    }
  });
};

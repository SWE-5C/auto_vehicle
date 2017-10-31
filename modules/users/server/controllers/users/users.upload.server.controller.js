'use strict';

/**
 * Module dependencies.
 */
var _ = require('lodash'),
  fs = require('fs'),
  path = require('path'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller')),
  mongoose = require('mongoose'),
  multer = require('multer'),
  config = require(path.resolve('./config/config')),
  User = mongoose.model('User'),
  cloudinary = require('cloudinary');

cloudinary.config({
  cloud_name: 'dlrfbhutw',
  api_key: '949977149971631',
  api_secret: 'MlsUytFuDaXXJ9c1uq8eHHrDoug'
});

/**
 * Upload picture
 */
exports.uploadFile = function (req, res) {
// Init Variables
  cloudinary.uploader.upload("https://static.pexels.com/photos/356378/pexels-photo-356378.jpeg", function(result) {
    console.log(result);
    res.send(result);
  });
};

'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Testimonial Schema
 */
var TestimonialSchema = new Schema({
  fullName: {
    type: String,
    trim: true,
    default: ''
  },
  testimonial: {
    type: String,
    trim: true,
    default: ''
  },
  picture: {
    type: String,
    trim: true,
    default: 'modules/users/client/img/profile/default.png'
  }
});

mongoose.model('Testimonial', TestimonialSchema);

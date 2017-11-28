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
  },
  created_at: Date,
  updated_at: Date
});

TestimonialSchema.pre('save', function(next){
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

mongoose.model('Testimonial', TestimonialSchema);

var Testimonial = mongoose.model('Testimonial', TestimonialSchema);

/* Export the model to make it avaiable to other parts of your Node application */
module.exports = Testimonial;


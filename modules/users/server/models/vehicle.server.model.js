'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Vehicle Schema
 */
var VehicleSchema = new Schema({
  vehicle1ID: {
    type: String,
    trim: true,
    default: ''
  },
  vehicle2ID: {
    type: String,
    trim: true,
    default: ''
  },
  vehicle3ID: {
    type: String,
    trim: true,
    default: ''
  }
});

mongoose.model('VehicleID', VehicleSchema);

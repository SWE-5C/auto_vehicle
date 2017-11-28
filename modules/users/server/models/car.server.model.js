'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Car Schema
 */
var CarSchema = new Schema({
  vehicleID1: {
    type: String,
    trim: true,
    default: ''
  },
  vehicleID2: {
    type: String,
    trim: true,
    default: ''
  },
  vehicleID3: {
    type: String,
    trim: true,
    default: ''
  }
});

mongoose.model('CarID', CarSchema);
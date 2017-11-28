'use strict';

/**
 * Module dependencies.
 */
var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

/**
 * Chosen Testimonial Schema
 */
var ChosenSchema = new Schema({
  pick1: {
    fullName: {
      type: String,
      trim: true,
      default: 'Michael Samper'
    },
    text: {
      type: String,
      trim: true,
      default: ''
    },
    url: {
      type: String,
      trim: true,
      default: ''
    }
  },
  pick2: {
    fullName: {
      type: String,
      trim: true,
      default: ''
    },
    text: {
      type: String,
      trim: true,
      default: ''
    },
    url: {
      type: String,
      trim: true,
      default: ''
    }
  },
  pick3: {
    fullName: {
      type: String,
      trim: true,
      default: ''
    },
    text: {
      type: String,
      trim: true,
      default: ''
    },
    url: {
      type: String,
      trim: true,
      default: ''
    }
  },
  pick4: {
    fullName: {
      type: String,
      trim: true,
      default: ''
    },
    text: {
      type: String,
      trim: true,
      default: ''
    },
    url: {
      type: String,
      trim: true,
      default: ''
    }
  },
  created_at: Date,
  updated_at: Date
});

ChosenSchema.pre('save', function(next){
  var currentTime = new Date;
  this.updated_at = currentTime;
  if(!this.created_at)
  {
    this.created_at = currentTime;
  }
  next();
});

var Chosen = mongoose.model('Chosen', ChosenSchema);

// var exChosen = new Chosen({
//   pick1: {
//     fullName: Michael Samper,
//     text: {
//       type: String,
//       trim: true,
//       default: ''
//     },
//     url: {
//       type: String,
//       trim: true,
//       default: ''
//     }
//   },
//   pick2: {
//     fullName: {
//       type: String,
//       trim: true,
//       default: ''
//     },
//     text: {
//       type: String,
//       trim: true,
//       default: ''
//     },
//     url: {
//       type: String,
//       trim: true,
//       default: ''
//     }
//   },
//   pick3: {
//     fullName: {
//       type: String,
//       trim: true,
//       default: ''
//     },
//     text: {
//       type: String,
//       trim: true,
//       default: ''
//     },
//     url: {
//       type: String,
//       trim: true,
//       default: ''
//     }
//   },
//   pick4: {
//     fullName: {
//       type: String,
//       trim: true,
//       default: ''
//     },
//     text: {
//       type: String,
//       trim: true,
//       default: ''
//     },
//     url: {
//       type: String,
//       trim: true,
//       default: ''
//     }
//   }
// });

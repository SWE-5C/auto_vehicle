'use strict';

/**
 * Module dependencies.
 */
var path = require('path'),
  mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Testimonial = mongoose.model('Testimonial'),
  Pick = mongoose.model('Chosen'),
  errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));

/**
 * Show the current user
 */
exports.read = function (req, res) {
  res.json(req.model);
};

/**
 * Show the current testimonials
 */
exports.readTest = function (req, res) {
  res.json(req.testimonial);
};

/**
 * Update a User
 */
exports.update = function (req, res) {
  var user = req.model;

  //For security purposes only merge these parameters
  user.firstName = req.body.firstName;
  user.lastName = req.body.lastName;
  user.displayName = user.firstName + ' ' + user.lastName;
  user.roles = req.body.roles;

  user.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }

    res.json(user);
  });
};

/**
 * Delete a user
 */
exports.delete = function (req, res) {
  var user = req.model;

  user.remove(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }

    res.json(user);
  });
};

/**
 * List of Users
 */
exports.list = function (req, res) {
  User.find({}, '-salt -password').sort('-created').populate('user', 'displayName').exec(function (err, users) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }

    res.json(users);
  });
};

/**
 * List of Testimonials
 */
exports.listTestimonials = function (req, res) {
  Testimonial.find().exec(function (err, testimonials) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }
    res.json(testimonials);
  });
};

exports.listingByID = function(req, res, next, id) {
  Testimonial.findById(id).exec(function(err, testimonial) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.testimonial = testimonial;
      next();
    }
  });
};

exports.pickByID = function(req, res, next, id) {
  Pick.findById(id).exec(function(err, pick) {
    if(err) {
      res.status(400).send(err);
    } else {
      req.pick = pick;
      next();
    }
  });
};

/**
 * List of Picks of testimonials
 */
exports.listPicks = function (req, res) {
  Pick.find().exec(function (err, picks) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }
    res.json(picks);
  });
};

/**
 * Update Picks
 */
exports.updatePicks = function (req, res) {
  var pick = new Pick(req.body);
  //pick = req.pick.body;
  //console.log(pick);

  // pick.pick1.fullName = req.pick1.fullName;
  // // pick.lastName = req.body.lastName;
  // // pick.displayName = user.firstName + ' ' + user.lastName;
  // // pick.roles = req.body.roles;

  pick.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }

    res.json(pick);
  });
};

/* Delete a listing */
exports.deletePick = function(req, res) {
  var pick = req.pick;

  /* Remove the article */
  pick.remove(function(err) {
    if(err) {
      res.status(400).send(err);
    }
    else {
      res.end();
    }
  })
};

/**
 * Save Test
 */
exports.saveTest = function (req, res) {
  // var user = req.model;

  //For security purposes only merge these parameters

  var exChosen = new Pick({
    pick1: {
      fullName: 'Michael Samper',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id fermentum leo. Pellentesque et suscipit nisi. Sed eu felis quis urna pellentesque pulvinar. Nullam laoreet ligula sed odio dignissim congue. Integer viverra urna tortor, et porttitor felis mattis quis. Etiam interdum risus ut lectus aliquam pellentesque. Curabitur congue nulla neque, vitae congue nulla facilisis in. Mauris elementum lacus et venenatis malesuada. In volutpat malesuada dui, id convallis nibh dictum et.',
      url: 'http://res.cloudinary.com/dlrfbhutw/image/upload/v1511842017/Testimonials/cviurzx57jkmgz6ngwbe.jpg'
    },
    pick2: {
      fullName: 'Nikhil Venkatesh',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id fermentum leo. Pellentesque et suscipit nisi. Sed eu felis quis urna pellentesque pulvinar. Nullam laoreet ligula sed odio dignissim congue. Integer viverra urna tortor, et porttitor felis mattis quis. Etiam interdum risus ut lectus aliquam pellentesque. Curabitur congue nulla neque, vitae congue nulla facilisis in. Mauris elementum lacus et venenatis malesuada. In volutpat malesuada dui, id convallis nibh dictum et.',
      url: 'http://res.cloudinary.com/dlrfbhutw/image/upload/v1511842363/Testimonials/ajx6bbydggebvoweyrml.jpg'
    },
    pick3: {
      fullName: 'David Stolear',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id fermentum leo. Pellentesque et suscipit nisi. Sed eu felis quis urna pellentesque pulvinar. Nullam laoreet ligula sed odio dignissim congue. Integer viverra urna tortor, et porttitor felis mattis quis. Etiam interdum risus ut lectus aliquam pellentesque. Curabitur congue nulla neque, vitae congue nulla facilisis in. Mauris elementum lacus et venenatis malesuada. In volutpat malesuada dui, id convallis nibh dictum et.',
      url: 'http://res.cloudinary.com/dlrfbhutw/image/upload/v1511842017/Testimonials/cviurzx57jkmgz6ngwbe.jpg'
    },
    pick4: {
      fullName: 'Jeff Zou',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis id fermentum leo. Pellentesque et suscipit nisi. Sed eu felis quis urna pellentesque pulvinar. Nullam laoreet ligula sed odio dignissim congue. Integer viverra urna tortor, et porttitor felis mattis quis. Etiam interdum risus ut lectus aliquam pellentesque. Curabitur congue nulla neque, vitae congue nulla facilisis in. Mauris elementum lacus et venenatis malesuada. In volutpat malesuada dui, id convallis nibh dictum et.',
      url: 'http://res.cloudinary.com/dlrfbhutw/image/upload/v1511842363/Testimonials/ajx6bbydggebvoweyrml.jpg'
    }
  });

  exChosen.save(function (err) {
    if (err) {
      return res.status(400).send({
        message: errorHandler.getErrorMessage(err)
      });
    }

    res.json(exChosen);
  });
};



/**
 * User middleware
 */
exports.userByID = function (req, res, next, id) {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).send({
      message: 'User is invalid'
    });
  }

  User.findById(id, '-salt -password').exec(function (err, user) {
    if (err) {
      return next(err);
    } else if (!user) {
      return next(new Error('Failed to load user ' + id));
    }

    req.model = user;
    next();
  });
};

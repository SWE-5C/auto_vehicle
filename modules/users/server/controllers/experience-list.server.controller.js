/* Dependencies */
var mongoose = require('mongoose'),
    Testimonial = require('../../../core/server/models/testimonial.server.model.js');

/*
  In this file, you should use Mongoose queries in order to retrieve/add/remove/update listings.
  On an error you should send a 404 status code, as well as the error message.
  On success (aka no error), you should send the listing(s) as JSON in the response.
  HINT: if you are struggling with implementing these functions, refer back to this tutorial
  from assignment 3 https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
 */

/* Create a listing */
exports.create = function(req, res) {

  /* Instantiate a Listing */
  var testimonial = new Testimonial(req.body);



/* Retreive all the directory listings, sorted alphabetically by listing code */
exports.list = function(req, res) {
  Testimonial.find().sort('fullName').exec(function(err, testimonials) {
    if(err) {
      res.status(400).send(err);
    } else {
      res.json(testimonials);
    }
  });
};

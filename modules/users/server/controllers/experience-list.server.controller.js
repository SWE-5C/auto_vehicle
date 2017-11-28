// /* Dependencies */
// var mongoose = require('mongoose'),
//     path = require('path'),
//     Testimonial = require('../../../core/server/models/testimonial.server.model'),
//     errorHandler = require(path.resolve('./modules/core/server/controllers/errors.server.controller'));
//
//
//
//   /* Instantiate a Listing */
//   var testimonial = new Testimonial(req.body);
//
//
// /**
//  * List of Testimonials
//  */
// exports.listTestimonials = function (req, res) {
//   Testimonial.find({}, '').sort('-created').populate('testimonial').exec(function (err, testimonials) {
//     if (err) {
//       return res.status(400).send({
//         message: errorHandler.getErrorMessage(err)
//       });
//     }
//
//     res.json(testimonials);
//   });
// };

'use strict';

angular.module('users').controller('UserExperienceController', ['$scope', 'Testimonials',
  function($scope, Testimonials) {
    /* Get all the listings, then bind it to the scope */
    Testimonials.getAll().then(function(response) {
      $scope.testimonials = response.data;
    }, function(error) {
      console.log('Unable to retrieve testimonials:', error);
    });
    // $scope.detailedInfo = undefined;
    // $scope.addListing = function() {
    //   $scope.listings.push($scope.newListing);
    //   $scope.newListing = {};
    // };
    // $scope.deleteListing = function(index) {
    //   $scope.listings.splice(index, 1);
    // };
    // $scope.showDetails = function(index) {
    //   $scope.detailedInfo = $scope.listings[index];
    // };
  }
]);

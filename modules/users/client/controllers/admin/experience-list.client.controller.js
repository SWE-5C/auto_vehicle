'use strict';

angular.module('users.admin').controller('UserExperienceController', ['$scope', '$filter', 'Admin', '$http', 'Testimonial',
  function ($scope, $filter, Admin, $http, Testimonial) {

  $http.get('/api/testimonials').success(function (req, res) {
      $scope.testimonials = res;
    });

    $scope.buildPager = function () {
      $scope.pagedItems = [];
      $scope.itemsPerPage = 15;
      $scope.currentPage = 1;
      $scope.figureOutItemsToDisplay();
    };

    $scope.figureOutItemsToDisplay = function () {
      $scope.filteredItems = $filter('filter')($scope.users, {
        $: $scope.search
      });
      $scope.filterLength = $scope.filteredItems.length;
      var begin = (($scope.currentPage - 1) * $scope.itemsPerPage);
      var end = begin + $scope.itemsPerPage;
      $scope.pagedItems = $scope.filteredItems.slice(begin, end);
    };

    $scope.pageChanged = function () {
      $scope.figureOutItemsToDisplay();
    }
  }
]);

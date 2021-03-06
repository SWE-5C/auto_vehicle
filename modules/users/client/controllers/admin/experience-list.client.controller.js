'use strict';

angular.module('users.admin').controller('UserExperienceController', ['$scope', '$filter', 'Admin', '$http',
  function ($scope, $filter, Admin, $http) {

  $http.get('/api/testimonials')
    .then(function (res) {
      $scope.testimonials = res.data;
    },function (err) {
      console.log(err);
      }
    );
    
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
    };
  }
]);

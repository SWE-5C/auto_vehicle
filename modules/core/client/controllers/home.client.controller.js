'use strict';

angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$http',
  function ($scope, Authentication, $http) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    (function() { return $http.get('/test').then(function(response) {
        $scope.sample = response.data;
      });
    }) ();

    console.log($scope.sample);
  }
]);

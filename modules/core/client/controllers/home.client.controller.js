'use strict';


    angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$http',
      function ($scope, Authentication, $http) {
        // This provides Authentication context.
        $scope.authentication = Authentication;

        var periodicCalling = function() { return $http.get('/test').then(function(response) {
          $scope.sample = response.data;
        });
        };
        setInterval(periodicCalling, 1000);

  }
]);

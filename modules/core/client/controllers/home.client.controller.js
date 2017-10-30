'use strict';


angular.module('core',
  ['uiGmapgoogle-maps']
)
// .config(function(uiGmapGoogleMapApiProvider) {
//   uiGmapGoogleMapApiProvider.configure({
//     key: 'AIzaSyCZFjTD5PycADD6a-0PoBz51BEOcK91Mbs',
//     v: '3.20', //defaults to latest 3.X anyhow
//     libraries: 'weather,geometry,visualization'
//   });
// })
.controller('HomeController', ['$scope', 'Authentication', '$http',
  function($scope, Authentication, $http) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    var periodicCalling = function() {
      return $http.get('/test').then(function(response) {
        $scope.sample = response.data;
        console.log($scope.sample);
      });
    };

    setInterval(periodicCalling, 1000);

    $scope.map = {
      center: {
        latitude: 29.6436,
        longitude: 82.3549
      },
      zoom: 8
    };

    // uiGmapGoogleMapApi.then(function(maps) {
    //   console.log("This is being accessed");
    // });

  }
]);

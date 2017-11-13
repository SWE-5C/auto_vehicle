'use strict';

angular.module('core').controller('UploadFileController', ['$scope', '$http',
  function ($scope, $http) {

    $scope.info = "Default";

    $scope.uploadFile = function() {
      $scope.info = "TEST";
      $http({
        method: 'GET',
        url: '/api/upload'
      }).then(function successCallback(response) {
        // this callback will be called asynchronously
        // when the response is available
        $scope.info = response.data;
        return response.data;
      }, function errorCallback(response) {
        // called asynchronously if an error occurs
        // or server returns response with an error status.
        $scope.info = response.data;
      });
    };

    $scope.example = function () {
      document.getElementById("upload_widget_opener").addEventListener("click", function() {
        cloudinary.openUploadWidget({ cloud_name: 'dlrfbhutw', upload_preset: 'da96pduq'},
          function(error, result) { console.log(error, result); });
      }, false);
    };
  }
]);

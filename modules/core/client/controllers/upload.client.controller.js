'use strict';

angular.module('core').controller('UploadTestimonialController', ['$scope', '$http', '$state',
  function ($scope, $http, $state) {

    $scope.info = "Default";

    // Handles testimonial form submission
    $scope.submit = function (isValid) {
      $scope.error = null;

      if (!isValid) {
        $scope.$broadcast('show-errors-check-validity', 'userForm');

        return false;
      }
      if (!$scope.form.picture){
        $scope.error = 'Please upload a picture.';
        return false;
      }

      $http.post('/api/testimonial/submit', $scope.form).success(function (response) {
        // If successful we assign the response to the global testimonial model
        $scope.testimonial = response;

        // And redirect to the previous or home page
        $state.go('home' || $state.previous.state.name, $state.previous.params);
      }).error(function (response) {
        $scope.error = response.message;
      });
    };

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

    // Function for the cloudinary upload widget
    // Replace cloud_name with your cloud's unique name and upload_preset with your upload preset
    $scope.uploadWidget = function () {
      document.getElementById("upload_widget_opener").addEventListener("click", function() {
        cloudinary.openUploadWidget({ cloud_name: 'dlrfbhutw', upload_preset: 'da96pduq'},
          function(error, result) {
            console.log(error, result);
            $scope.form.picture = result[0].url;
          });
      }, false);
    };
  }
]);

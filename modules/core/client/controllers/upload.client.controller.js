'use strict';

angular.module('app').controller('myController', function (currentUser, $scope, FileUploader, $sce) {
  $scope.uploader = new FileUploader();
  var uploadURL = '/api/upload/' + currentUser._id;
  $scope.uploadOptions = {
    queueLimit: 1,
    autoUpload: true,
    url: uploadURL
  };

  $scope.submit = function(){
    if (!$scope.uploader.queue[0]) return;
    $scope.uploader.queue[0].upload();
  };
});

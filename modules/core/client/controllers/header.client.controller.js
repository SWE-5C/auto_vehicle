'use strict';

angular.module('core').controller('HeaderController', ['$scope', '$state', 'Authentication', 'Menus',
  function ($scope, $state, Authentication, Menus) {
    // Expose view variables
    $scope.$state = $state;
    $scope.authentication = Authentication;

    // Get the topbar menu
    $scope.menu = Menus.getMenu('topbar');

    // Toggle the menu items
    $scope.isCollapsed = false;
    $scope.chooseSurvey = function(user){
      if(user == ""){
        window.open("https://ufl.qualtrics.com/jfe/form/SV_dnGx4WipnOJkwol");
        //var result = str.link("https://ufl.qualtrics.com/jfe/form/SV_dnGx4WipnOJkwol");
        //document.getElementById("demo").innerHTML = result;
        console.log("EMPTY USER");
      }
      else{
        window.open("https://ufl.qualtrics.com/jfe/form/SV_9BQkXEU3sa4v4Bn");
        console.log("HAS ACCOUNT");
      }
      //debugger;
      //var flag = Boolean(false);
      //var arrayLength = $scope.authentication.user.roles.length;
    }
    $scope.toggleCollapsibleMenu = function () {
      $scope.isCollapsed = !$scope.isCollapsed;
    };

    // Collapsing the menu after navigation
    $scope.$on('$stateChangeSuccess', function () {
      $scope.isCollapsed = false;
    });
  }
]);

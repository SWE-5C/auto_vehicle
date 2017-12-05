'use strict';

angular.module('core').controller('VisualizationController', ['$scope', 'Authentication',
  function ($scope, Authentication) {
    // This provides Authentication context.
    $scope.authentication = Authentication;

    // Loads tableau visualization
    // Replace url with your visualization's url
    $scope.tester = function() {
      var containerDiv = document.getElementById("vizContainer"),
        url = "https://public.tableau.com/views/BusSurvey_updated/Final",
        options = {
          hideTabs: true,
          onFirstInteractive: function () {
            console.log("Run this code when the viz has finished loading.");
          }
        };

      var viz = new tableau.Viz(containerDiv, url, options);
      // Create a viz object and embed it in the container div.
    };
  }
]);

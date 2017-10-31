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
            
         window.twttr = (function(d, s, id) {
	  var js, fjs = d.getElementsByTagName(s)[0],
	    t = window.twttr || {};
	  if (d.getElementById(id)) return t;
	  js = d.createElement(s);
	  js.id = id;
	  js.src = "https://platform.twitter.com/widgets.js";
	  fjs.parentNode.insertBefore(js, fjs);

	  t._e = [];
	  t.ready = function(f) {
	    t._e.push(f);
	  };

	  return t;
	  }(document, "script", "twitter-wjs"));


	  twttr.widgets.load();

      }
]);

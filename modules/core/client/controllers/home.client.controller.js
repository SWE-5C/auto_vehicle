'use strict';

(function(){

angular.module('core').controller('HomeController', ['$scope', 'Authentication', '$http',
      function ($scope, Authentication, $http) {
        // This provides Authentication context.
        $scope.authentication = Authentication;
        $scope.sample;

      function initMap() {
		  var center = {lat: 29.643971, lng: -82.358410};
		  var vehicle_1 = {lat: 29.643979, lng: -82.358415};
		  var map = new google.maps.Map(document.getElementById('map'), {
		    zoom: 13,
		    center: center
		  });

		  var marker = new google.maps.Marker({
		    position: center,
		    map: map
		  });
		  

        function moveMarker(){
        	if ($scope.sample[1] != null){
        		var test_lat = $scope.sample[1].location.lat;
	            var test_lng = $scope.sample[1].location.lng;
		        var latlng = new google.maps.LatLng(test_lat, test_lng);
		        marker.setPosition(latlng);
        	} 
	          //console.log(marker.position.lat);
        }; setInterval(moveMarker, 1000);

		  //console.log("center: ", $scope.marker2.position);
		}
		

 	  var periodicCalling = function() { return $http.get('/test').then(function(response) {
        $scope.sample = response.data;
        //console.log($scope.sample[0].location);
		//console.log($scope.sample[1].location);
        });
        };
        setInterval(periodicCalling, 1000);

		google.maps.event.addDomListener(window, "load", initMap);
      }
]);
})();


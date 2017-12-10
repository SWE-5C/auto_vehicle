'use strict';

angular.module('core')
  .controller('HomeController', ['$scope', 'Authentication', '$http', '$interval',
    function ($scope, Authentication, $http, $interval) {
      // This provides Authentication context.
      $scope.authentication = Authentication;

      // Grabs testimonials from the database
      $scope.grabTestimonials = function initTestimonials() {
        $http.get('/api/picks')
          .then(function (res) {
              $scope.picks = res.data;
            }, function (err) {
              console.log(err);
            }
          );
      };

      // periodic calling calls the request to the transloc api
      var periodicCalling = function() { return $http.get('/api/test').then(function(response) {
        // transloc json is saved to "sample"
        $scope.sample = response.data;
      });
      };
      // create a promise whenever the screen is initialized that can be cancelled later using the cancel promse function
      var promise = $interval(periodicCalling, 1000);

      //function to initialize the map
      function initMap() {
        //centers the map at the University of Florida
        var center = {lat: 29.643971, lng: -82.358410};
        var map = new google.maps.Map(document.getElementById('map'), {
          // zoom 14 appeared to look the best
          zoom: 14,
          center: center
        });

        // marker for vehicel 1
        var marker = new google.maps.Marker({
          // position of vehicle 1 marker is the center of the map while it is waiting on the information from $scope.sample
          position: center,
          map: map,
          label: '1'
        });

        // marker for vehicel 1
        var markerTwo = new google.maps.Marker({
          // position of vehicle 2 marker is the center of the map while it is waiting on the information from $scope.sample
          position: center,
          map: map,
          label: '2'
        });

        var moveMarker = function(){
          var test_lat;
          var test_lng;
          var latlng;

          // ends the function if the sample is null (which can occur the first few seconds of the page load)
          // the set interval function allows the application to keep checking
          // once there is a sample this is not hit anymore
          if ($scope.sample === null){
            return;
          }

          // sets the new position for vehicle 1
          if ($scope.sample[1] !== null){
            // $scope.sample[1] is the second vehicle in the array of University of Florida Vehicles
            test_lat = $scope.sample[1].location.lat;
            test_lng = $scope.sample[1].location.lng;
            latlng = new google.maps.LatLng(test_lat, test_lng);
            marker.setPosition(latlng);
          }
          
          // sets the new position for vehicle 2
          if ($scope.sample[0] !== null){
            // $scope.sample[0] is the first vehicle in the array of University of Florida Vehicles
            test_lat = $scope.sample[0].location.lat;
            test_lng = $scope.sample[0].location.lng;
            latlng = new google.maps.LatLng(test_lat, test_lng);
            markerTwo.setPosition(latlng);
          }
        };

        // Periodically calls the move marker function in order to create new marker
        // locations and give them the appearance of moving along the map
        setInterval(moveMarker, 1000);
      }

      // checks for state change
      $scope.$on('$stateChangeStart', function() {
        $scope.stateChange();
        $scope.cancel();
      });

      // stops the api call once you leave the state and page
      $scope.cancel = function () {
          $interval.cancel(promise);
      };

      // displays on the console upon state change
      $scope.stateChange = function() {
        console.log("State Changed");

      };

      // initializes the map
      $scope.testChange = function() {
        console.log("home");
        initMap();
      };

      // Loads the Twitter API
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

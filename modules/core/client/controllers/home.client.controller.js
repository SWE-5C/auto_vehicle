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

      var periodicCalling = function() { return $http.get('/api/test').then(function(response) {
        $scope.sample = response.data;
      });
      };
      // setInterval(periodicCalling, 1000);
      var promise = $interval(periodicCalling, 1000);

      function initMap() {
        var center = {lat: 29.643971, lng: -82.358410};
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,
          center: center
        });

        var marker = new google.maps.Marker({
          position: center,
          map: map,
          label: '1'
        });

        var markerTwo = new google.maps.Marker({
          position: center,
          map: map,
          label: '2'
        });

        var moveMarker = function(){
          var test_lat;
          var test_lng;
          var latlng;

          if ($scope.sample === null){
            return;
          }

          if ($scope.sample[1] !== null){
            test_lat = $scope.sample[1].location.lat;
            test_lng = $scope.sample[1].location.lng;
            latlng = new google.maps.LatLng(test_lat, test_lng);
            marker.setPosition(latlng);
          }

          if ($scope.sample[0] !== null){
            test_lat = $scope.sample[0].location.lat;
            test_lng = $scope.sample[0].location.lng;
            latlng = new google.maps.LatLng(test_lat, test_lng);
            markerTwo.setPosition(latlng);
          }
        };
        setInterval(moveMarker, 1000);
      }

      $scope.$on('$stateChangeStart', function() {
        $scope.stateChange();
        $scope.cancel();
      });
      $scope.cancel = function () {
          $interval.cancel(promise);
      };

      $scope.stateChange = function() {
        console.log("State Changed");

      };

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

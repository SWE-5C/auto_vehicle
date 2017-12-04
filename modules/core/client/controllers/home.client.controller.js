'use strict';

angular.module('core')
  .controller('HomeController', ['$scope', 'Authentication', '$http',
    function ($scope, Authentication, $http, NgMap) {
      // This provides Authentication context.
      $scope.authentication = Authentication;

      $scope.grabTestimonials = function initTestimonials() {
        $http.get('/api/picks')
          .then(function (res) {
              $scope.picks = res.data;
            }, function (err) {
              console.log(err);
            }
          );
      };

      $scope.periodicCalling = function() { return $http.get('/api/test').then(function(response) {
        $scope.sample = response.data;
        //console.log($scope.sample[0].location);
        //console.log($scope.sample[1].location);
      });
      };
      // var item = var item = {
      //     coordinates: [$scope.sample[0].location.lat, $scope.sample[0].location.lng]
      // };
      setInterval($scope.periodicCalling, 100);

      function initMap() {
        var center = {lat: 29.643971, lng: -82.358410};
        var vehicle_1 = {lat: 29.643979, lng: -82.358415};//these are the intial values which dont matter as long as they ar ein Gainesville and dont represent a hughe jump to the first ping location
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 14,//zoom out by decreasing this number if you want the path of the vehicles to be larger
          center: center
        });

        var marker = new google.maps.Marker({
          position: center,
          map: map,
          label: '1'//this represents the text on the markers
        });

        var markerTwo = new google.maps.Marker({
          position: center,
          map: map,
          label: '2'
        });

        var markerThree = new google.maps.Marker({
          position: center,
          map: map,
          label: '3'
        });


        function moveMarker(){
          if ($scope.sample[1] !== null){//change the number inside of the brackets once you have your autonomous vehicles up and running
            var test_lat = $scope.sample[1].location.lat;
            var test_lng = $scope.sample[1].location.lng;
            var latlng = new google.maps.LatLng(test_lat, test_lng);
            marker.setPosition(latlng);
          }

          if ($scope.sample[0] !== null){//same as abouve for second vehicle
            var test_lat = $scope.sample[0].location.lat;
            var test_lng = $scope.sample[0].location.lng;
            var latlng = new google.maps.LatLng(test_lat, test_lng);
            markerTwo.setPosition(latlng);
          }

          if ($scope.sample[2] !== null){// same as above for third vehicle
            var test_lat = $scope.sample[2].location.lat;
            var test_lng = $scope.sample[2].location.lng;
            var latlng = new google.maps.LatLng(test_lat, test_lng);
            markerThree.setPosition(latlng);
          }

          //console.log(marker.position.lat);
        } setInterval(moveMarker, 1000);//refresh every 1000 ms change the number for a faster or slower refresh rate

        //console.log("center: ", $scope.marker2.position);
      }
      // $scope.initialize = function() {
      google.maps.event.addDomListener(window, "load", initMap);

      $scope.testEvent = function(){
        initMap();
      }

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

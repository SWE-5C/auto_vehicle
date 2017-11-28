'use strict';

angular.module('users.admin').controller('TestimonialController', ['$scope', '$state', '$stateParams', 'Authentication', '$http',
  function ($scope, $state, $stateParams, Authentication, $http) {
    $scope.authentication = Authentication;
    $scope.pickNum = 1;
    $scope.count = 0;
    $scope.findOne = function() {

      $scope.id = $stateParams.testimonialId;
      console.log($scope.id);
      $http.get('/' + $scope.id)
        .then(function (res) {
            $scope.testimonial = res.data;
          },function (err) {
            console.log(err);
          }
        );
    };

    $scope.update = function () {
      //var picks = 0;
      $http.get('/api/picks')
        .then(function (res) {
            $scope.picks = res.data;
            console.log($scope.picks);
            switch($scope.pickNum) {
              case 1:
                var chosen = {
                  pick1: {
                    fullName: $scope.testimonial.fullName,
                    text: $scope.testimonial.testimonial,
                    url: $scope.testimonial.picture
                  },
                  pick2: {
                    fullName: $scope.picks[0].pick2.fullName,
                    text: $scope.picks[0].pick2.text,
                    url: $scope.picks[0].pick2.url
                  },
                  pick3: {
                    fullName: $scope.picks[0].pick3.fullName,
                    text: $scope.picks[0].pick3.text,
                    url: $scope.picks[0].pick3.url
                  },
                  pick4: {
                    fullName: $scope.picks[0].pick4.fullName,
                    text: $scope.picks[0].pick4.text,
                    url: $scope.picks[0].pick4.url
                  }
                };
                break;
              case 2:
                var chosen = {
                  pick1: {
                    fullName: $scope.picks[0].pick1.fullName,
                    text: $scope.picks[0].pick1.text,
                    url: $scope.picks[0].pick1.url
                  },
                  pick2: {
                    fullName: $scope.testimonial.fullName,
                    text: $scope.testimonial.testimonial,
                    url: $scope.testimonial.picture
                  },
                  pick3: {
                    fullName: $scope.picks[0].pick3.fullName,
                    text: $scope.picks[0].pick3.text,
                    url: $scope.picks[0].pick3.url
                  },
                  pick4: {
                    fullName: $scope.picks[0].pick4.fullName,
                    text: $scope.picks[0].pick4.text,
                    url: $scope.picks[0].pick4.url
                  }
                };
                break;
              case 3:
                var chosen = {
                  pick1: {
                    fullName: $scope.picks[0].pick1.fullName,
                    text: $scope.picks[0].pick1.text,
                    url: $scope.picks[0].pick1.url
                  },
                  pick2: {
                    fullName: $scope.picks[0].pick2.fullName,
                    text: $scope.picks[0].pick2.text,
                    url: $scope.picks[0].pick2.url
                  },
                  pick3: {
                    fullName: $scope.testimonial.fullName,
                    text: $scope.testimonial.testimonial,
                    url: $scope.testimonial.picture
                  },
                  pick4: {
                    fullName: $scope.picks[0].pick4.fullName,
                    text: $scope.picks[0].pick4.text,
                    url: $scope.picks[0].pick4.url
                  }
                };
                break;
              case 4:
                var chosen = {
                  pick1: {
                    fullName: $scope.picks[0].pick1.fullName,
                    text: $scope.picks[0].pick1.text,
                    url: $scope.picks[0].pick1.url
                  },
                  pick2: {
                    fullName: $scope.picks[0].pick2.fullName,
                    text: $scope.picks[0].pick2.text,
                    url: $scope.picks[0].pick2.url
                  },
                  pick3: {
                    fullName: $scope.picks[0].pick3.fullName,
                    text: $scope.picks[0].pick3.text,
                    url: $scope.picks[0].pick3.url
                  },
                  pick4: {
                    fullName: $scope.testimonial.fullName,
                    text: $scope.testimonial.testimonial,
                    url: $scope.testimonial.picture
                  }
                };
                break;
            }

            $http.post('/api/picks', chosen)
              .then(function (res) {
                  $scope.picks = res.data;
                  $scope.count++;
                $http.get('/api/picks')
                  .then(function (res) {
                      $scope.tbDeleted = res.data[0]._id;
                      console.log($scope.tbDeleted);
                    $http.delete('/api/picks/'+ $scope.tbDeleted)
                      .then(function (res) {
                          $scope.picks = res.data;
                        }, function (err) {
                          console.log(err);
                        }
                      );
                    }, function (err) {
                      console.log(err);
                    }
                  );
                }, function (err) {
                  console.log(err);
                }
              );
          }, function (err) {
            console.log(err);
          }
        );

      // console.log("TEST");
      // console.log(picks);

    };
  }
]);

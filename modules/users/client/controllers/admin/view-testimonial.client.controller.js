'use strict';

angular.module('users.admin').controller('TestimonialController', ['$scope', '$state', 'Picks', '$stateParams', 'Authentication', '$http',
  function ($scope, $state, Picks, $stateParams, Authentication, $http) {
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

    $scope.update = function (num) {
      //var picks = 0;
      $http.get('/api/picks')
        .then(function (res) {
            $scope.picks = res.data;
            console.log($scope.picks);
            switch(num) {
              case 1:
                var pick = {
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
                var pick = {
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
                var pick = {
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
                var pick = {
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

          // ID OF THE HOME PAGE TESTIMONIAL CHOICES
          var id = '5a26c529294e624ae8d8d218';

          Picks.update(id, pick)
            .then(function(response) {
              //if the object is successfully updated redirect back to the list page
              $state.go('admin.addUX', { successMessage: 'Testimonial successfully updated!' });
            }, function(error) {
              //otherwise display the error
              $scope.error = 'Unable to update testimonial!\n' + error;
            });

          }, function (err) {
            console.log(err);
          }
        );
    };
  }
]);

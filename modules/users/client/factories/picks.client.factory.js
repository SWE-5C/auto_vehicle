'use strict';

angular.module('users.admin').factory('Picks', ['$http',
  function($http) {
    var methods = {

      update: function(id, pick) {
        return $http.put('/api/picks/' + id, pick);
      }

    };

    return methods;
  }
]);

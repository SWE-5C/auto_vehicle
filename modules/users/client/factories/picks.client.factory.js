angular.module('users.admin').factory('Picks', ['$http',
  function($http) {
    var methods = {
      // getAll: function() {
      //   return $http.get('http://localhost:8080/api/listings');
      // },
      //
      // create: function(pick) {
      //   return $http.post('http://localhost:8080/api/listings', pick);
      // },
      //
      // read: function(id) {
      //   return $http.get('http://localhost:8080/api/listings/' + id);
      // },

      update: function(id, pick) {
        return $http.put('/api/picks/' + id, pick);
      }

      // delete: function(id) {
      //   return $http.delete('http://localhost:8080/api/listings/' + id);
      // }
    };

    return methods;
  }
]);

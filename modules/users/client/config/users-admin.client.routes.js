'use strict';

// Setting up route
angular.module('users.admin.routes').config(['$stateProvider',
  function ($stateProvider) {
    $stateProvider
      .state('admin.dashboard', {
        url: '/dashboard',
        templateUrl: 'modules/users/client/views/admin/admin-dashboard.client.view.html'
      })
      .state('admin.addAV', {
        url: '/addAV',
        templateUrl: 'modules/users/client/views/admin/add-av.client.view.html',
        //controller: 'addAVController'
        controller: 'UserListController'
      })
      .state('admin.addUX', {
        url: '/addUX',
        templateUrl: 'modules/users/client/views/admin/add-ux.client.view.html'
      })
      .state('admin.addData', {
        url: '/addData',
        templateUrl: 'modules/users/client/views/admin/add-data.client.view.html'
      })
      .state('admin.users', {
        url: '/users',
        templateUrl: 'modules/users/client/views/admin/list-users.client.view.html',
        controller: 'UserListController'
      })
      .state('admin.user', {
        url: '/users/:userId',
        templateUrl: 'modules/users/client/views/admin/view-user.client.view.html',
        controller: 'UserController',
        resolve: {
          userResolve: ['$stateParams', 'Admin', function ($stateParams, Admin) {
            return Admin.get({
              userId: $stateParams.userId
            });
          }]
        }
      })
      .state('admin.user-edit', {
        url: '/users/:userId/edit',
        templateUrl: 'modules/users/client/views/admin/edit-user.client.view.html',
        controller: 'UserController',
        resolve: {
          userResolve: ['$stateParams', 'Admin', function ($stateParams, Admin) {
            return Admin.get({
              userId: $stateParams.userId
            });
          }]
        }
      });
  }
]);

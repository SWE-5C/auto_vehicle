'use strict';

// Configuring the Articles module
angular.module('users.admin').run(['Menus',
  function (Menus) {
    //Admins can access Admin Dashboard from 'Admin' dropdown in header
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Dashboard',
      state: 'admin.dashboard'
    });
    Menus.addSubMenuItem('topbar', 'admin', {
      title: 'Manage Users',
      state: 'admin.users'
    });
  }
]);
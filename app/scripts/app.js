'use strict';

angular.module('apidocApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'logCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

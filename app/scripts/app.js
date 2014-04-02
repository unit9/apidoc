'use strict';
var controllers = angular.module('controllers',[]);
var services = angular.module('services',[]);
var app = angular.module('apidocApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'controllers',
  'services'
]);
  app.config(function ($routeProvider, $locationProvider) {
    app.$routeProvider = $routeProvider;
//    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/secure', {
        templateUrl: 'views/secure.html',
        redirectTo: function (params, path, search) {
          console.log('signed in:', $routeProvider.signedIn);
          return $routeProvider.signedIn ? path : '/';
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  });

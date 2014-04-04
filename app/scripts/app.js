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
  app.config(['$routeProvider','$locationProvider',function ($routeProvider, $locationProvider) {
    app.$routeProvider = $routeProvider;
//    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/login.html',
        controller: 'loginCtrl'
      })
      .when('/dashboard', {
        templateUrl: 'views/dashboard.html',
        controller: 'dashboardCtrl',
        redirectTo: function (params, path, search) {
          console.log('signed in:', $routeProvider.signedIn);
          return $routeProvider.signedIn ? path : '/';
        }
      })
      .when('/project',{
        templateUrl: 'views/project.html',
        controller: 'projectCtrl',
        redirectTo: function(params,path,search){
          return $routeProvider.signedIn ? path : '/';
        }
      })
      .otherwise({
        redirectTo: '/'
      });
  }]);

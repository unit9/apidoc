'use strict';

controllers.controller('loginCtrl', ['$scope', '$location', '$firebase','loginService', function($scope, $location, $firebase, loginService){
  /*----------------------------------INIT--------------------------------------------*/
  loginService.initLoginService(function(){$scope.$apply()});
  /*---------------------------------SERVICES-----------------------------------------*/

  /*---------------------------------VARIABLES----------------------------------------*/

  $scope.loginValue = null;
  $scope.passwordValue = null;

//  auth.login('password',{
//    email: 'test@unit9.com',
//    password:'test'
//  });
  /*---------------------------------FUNCTIONS----------------------------------------*/
  $scope.keydown = function(e){
    if(e.keyCode != 13) return
    $scope.login();
  }
  $scope.login = function(){
    loginService.auth.login('password',{
      email : $scope.loginValue,
      password: $scope.passwordValue
    });
  }
}]);

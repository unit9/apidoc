'use strict';

controllers.controller('loginCtrl', ['$scope', '$location', '$firebase', function($scope, $location, $firebase){
  /*----------------------------------INIT--------------------------------------------*/
  var apidocsRef = new Firebase('https://apidocs.firebaseio.com');
  var auth = new FirebaseSimpleLogin(apidocsRef,function(error,user){
    if(error){
      console.log(error);
    }
    else if(user){
      console.log("---------");
      console.log(user);
      app.$routeProvider.signedIn = true;
      setTimeout(function () {
        console.log('location', $location);
        $location.path('/secure');
      }, 1000);
    }
    else{
    }
  });
  /*---------------------------------SERVICES-----------------------------------------*/

  /*---------------------------------VARIABLES----------------------------------------*/

  $scope.loginValue = null;
  $scope.passwordValue = null;

//  auth.login('password',{
//    email: 'test@unit9.com',
//    password:'test'
//  });
  /*---------------------------------FUNCTIONS----------------------------------------*/

  $scope.login = function(){
    auth.login('password',{
      email : $scope.loginValue,
      password: $scope.passwordValue
    });
  }
}]);

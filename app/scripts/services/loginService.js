services.factory('loginService',['$firebase','$location',function($firebase,$location){
  var factory = {};

  factory.initLoginService = function(callback){

      var apidocsRef = new Firebase('https://apidocs.firebaseio.com');

      factory.auth = new FirebaseSimpleLogin(apidocsRef,function(error,user){
          if(error){
            console.log(error);
          }
          else if(user){
            app.$routeProvider.signedIn = true;
            $location.path('/dashboard');
            callback();
          }
          else{
          }
      });
  }
  return factory;
}])

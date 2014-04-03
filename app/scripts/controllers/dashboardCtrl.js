controllers.controller('dashboardCtrl',['$scope','$firebase','$http','apiService','fireBaseService',function($scope,$firebase,$http,apiService,fireBaseService){

  /*---------------------------------SERVICES-----------------------------------------*/

      $scope.projects = [];
      $scope.projects = fireBaseService.getAllProjectsNames(function(){
        $scope.$apply();
      });


  /*---------------------------------VARIABLES----------------------------------------*/
      $scope.newApiUrl = null;

  /*---------------------------------FUNCTIONS----------------------------------------*/
      $scope.addApi = function(){
        $http({
          url: $scope.newApiUrl,
          method : 'POST'
        }).success(function(data,status,headers,config){

          apiService.setData($scope.newApiUrl);

        }).error(function(data,status,headers,config){
            console.log("cant to connect to api");
        });
      };

}]);

//   http://localhost:4567/api

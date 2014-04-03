services.factory('apiService',['$http','fireBaseService',function($http,fireBaseService){
  var factory = {}
  factory.projectName = null;
  factory.projectData = null;

  factory.setData = function(url){
    $http({
      url: url +'/doc',
      method: 'POST'
    }).success(function(data,status,headers,config){
      console.log(data);
      factory.projectName = data.name;

      fireBaseService.add(data,url);



    }).error(function(data,status,headers,config){
      console.log("cant connect to doc");
    });
  }

  return factory;
}]);

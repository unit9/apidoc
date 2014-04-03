services.factory('fireBaseService',['$http','$firebase',function($http,$firebase){

  var factory = {};
  factory.projects = [];
  factory.db = new Firebase('https://apidocs.firebaseio.com/projects');

  factory.add = function(data,endpoint){
    //add validate of existing object in firebase
    var newMessageRef = factory.db.push();
    newMessageRef.set({name: data.name, endpoint: endpoint});

  }
  factory.remove = function(){
    //add removing data from firebase
  }

  factory.get = function(){
   //get data from firebase
  }


  factory.getAllProjectsNames = function(callback){
    factory.db.once('value', function(allProjects) {
      allProjects.forEach(function(project) {
        var name = project.child('name').val();
        factory.projects.push(name);
      });
      callback();
    });
    return factory.projects;

  }

  return factory;

}]);

var myApp = angular.module('myApp');

myApp.controller("mikaController", ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){
  console.log('messaging loaded')
  $scope.getAnswer = function(){
    $http.post('/answer').success(function(response){
      $scope.mika = response;
    })
  }
}]);

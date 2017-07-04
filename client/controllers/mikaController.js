var myApp = angular.module('myApp');

myApp.controller("mikaController", function($scope, $http, $location, $routeParams){
  console.log('messaging loaded')
    $http.get('/answer').success(function(response){
      console.log('Asking Server for Answer')
      $scope.mika = response;
    });
    // $http.post('/someUrl', data, config).then(successCallback, errorCallback);
});

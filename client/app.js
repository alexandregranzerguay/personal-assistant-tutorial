var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/answer', {
    controller:'mikaController',
    templateUrl:'index.html'
  })
  // .when('/answer', {
  //   controller:'mikaController',
  //   templateUrl:'views/answer.html'
  // })
  .otherwise({
    redirectTo: '/'
  });
});

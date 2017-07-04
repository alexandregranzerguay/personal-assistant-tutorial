var myApp = angular.module("myApp", ['ngRoute']);

myApp.config(function($routeProvider){
  $routeProvider.when('/', {
    // TO TEST WHEN EVERYTHING ELSE WORKS
    // redirectTo:'/'
    controller:'mikaController',
    templateUrl:'index.html'
  })
  $routeProvider.when('/answer', {
    // TO TEST WHEN EVERYTHING ELSE WORKS
    // redirectTo:'/'
    controller:'mikaController',
    templateUrl:'index.html'
  })
  // .when('/answer', {
  //   controller:'mikaController',
  //   templateUrl:'views/answer.html'
  // })
  // .otherwise({
  //   redirectTo: '/'
  // });
});

var myApp = angular.module("myApp", []);

// myApp.config(['$routeProvider', function($routeProvider){
//   $routeProvider.when('/', {
//     // TO TEST WHEN EVERYTHING ELSE WORKS
//     controller:'mikaController',
//     // templateUrl:'/client/index.html'
//   })
//   $routeProvider.when('/answer', {
//     // TO TEST WHEN EVERYTHING ELSE WORKS
//     controller:'mikaController',
//     templateUrl:'/client/index.html'
//   })
//   // .when('/answer', {
//   //   controller:'mikaController',
//   //   templateUrl:'views/answer.html'
//   // })
//   // .otherwise({
//   //   redirectTo: '/'
//   // });
// }]);

myApp.controller("mikaController",['$scope', '$http', function($scope, $http){
  console.log('messaging loaded')
  // $scope.mika = { answer: 'Test' };

  $scope.askMika = function() {
    console.log('send button was pressed')
    console.log($scope.question)
    $http.post('/api/answer', $scope.question)
      .then(function successCallback(response){
        console.log('Got answer')
        console.log(response)
        // $scope.mika = { answer: response };
        $scope.mika = response;
      }, function errorCallback(error){
        console.log('got call back')
        console.log(error);
      });
  };
    // $http.post('/someUrl', data, config).then(successCallback, errorCallback);
}]);

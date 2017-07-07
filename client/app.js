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
var el = angular.element("#myConversation");
var count = 0;
myApp.controller("mikaController",['$scope', '$http', function($scope, $http){
  console.log('messaging loaded')
  // $scope.mika = { answer: 'Test' }
  $scope.askMika = function() {
    console.log('send button was pressed')
    console.log($scope.question)
    // var question = $scope.question.toJSON();
    var question2 = JSON.stringify($scope.question);
    console.log(question2)
    $http({
      method: 'POST',
      url: '/api/answer',
      data: {question: $scope.question},
      // config: 'text/html'
      headers : { 'Content-type': 'application/json'}
    }).then(function successCallback(response){
        console.log('Got answer')
        console.log(response)
        // $scope.mika = { answer: response };
        el.append(compile('<p>{{ mika }}</p>'));
        $scope.mika = response.data;
      }, function errorCallback(error){
        console.log('got call back')
        console.log(error);
      });
  };
    // $http.post('/someUrl', data, config).then(successCallback, errorCallback);
}]);

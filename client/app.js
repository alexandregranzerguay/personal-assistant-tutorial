var myApp = angular.module("myApp", []);


  var el = angular.element("#myConversation");
  var count = 0;
  myApp.controller("mikaController",['$scope', '$http', function($scope, $http){
    console.log('messaging loaded');
    var myConvo = this;
    myConvo.convoList = [];

    // $scope.mika = { answer: 'Test' }
    $scope.askMika = function() {
      console.log('send button was pressed');
      console.log($scope.question);
      // var question = $scope.question.toJSON();
      var question2 = JSON.stringify($scope.question);
      console.log(question2);
      $http({
        method: 'POST',
        url: '/api/answer',
        data: {question: $scope.question},
        headers : { 'Content-type': 'application/json'}
      }).then(function successCallback(response){
          console.log('Got answer');
          console.log(response);
          var length = response.data.convos.length;
          myConvo.convoList.push({text:response.data.convos[length-2].el, sender:"user"});
          myConvo.convoList.push({text:response.data.convos[length-1].el, sender:"mika"});

        }, function errorCallback(error){
          console.log('got call back');
          console.log(error);
        });
    };
}]);

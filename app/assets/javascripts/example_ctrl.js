(function () {
  "use strict"; 
  angular.module("app").controller("exampleCtrl", function($scope) {

    $scope.messages = ["Hello world!", "Goobye!", "Voila!"];

    $scope.alertMe = function(message) {
      alert(message);
    }


  });
})();
  
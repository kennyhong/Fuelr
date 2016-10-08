// Your code goes here

angular.module('ngi', [])
  .controller('HelloWorldCtrl', ['$scope', '$timeout', function($scope, $timeout){
    $timeout(function(){
      $scope.vin = gm.info.getVIN();
    }, 1000);
  }]);



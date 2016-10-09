angular.module('ngi').controller('WarningCtrl',
  function($scope, $route, $routeParams, $location) {
    $scope.fuel = $routeParams.fuel;
    console.log($scope.fuel);
});
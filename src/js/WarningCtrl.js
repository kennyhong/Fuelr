angular.module('ngi').controller('WarningCtrl', ['$scope', '$route', '$routeParams', '$location',
  function($scope, $route, $routeParams, $location) {
    $scope.fuel = $routeParams.fuel;
    console.log($scope.fuel);
}]);
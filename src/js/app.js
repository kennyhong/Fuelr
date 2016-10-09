// Your code goes here

angular.module('ngi', ['ngRoute'])
  .config(function($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: '../homePage.html',
      controller: 'HomeCtrl',
    })
    .when('/warning/:fuel', {
      templateUrl: '../warningPage.html',
      controller: 'WarningCtrl'
    })
    .otherwise({
      redirectTo: '/'
    });
  });






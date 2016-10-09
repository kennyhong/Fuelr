// Your code goes here

var app = angular.module("ngi", ["ui.router"]);

app.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state("warning/:fuel", {
                url: "/warning/:fuel",
                templateUrl: "../views/warningPage.html",
                controller: "HomeCtrl"
            })
            .state("home", {
                url: "/",
                templateUrl: "../views/homePage.html"
            });
        $urlRouterProvider.otherwise("/");
    })
    .controller('HomeCtrl',
        function($scope, $location) {
            var fuelID = gm.info.watchVehicleData(processData, watchDataFailureCallback, ["fuel_level"]);
            console.log('watching');
            function processData(data) {
                console.log(data);
                if(data.fuel_level <= 25) {
                    console.log('A');
                    $location.path = '/warning/' + data.fuel_level;
                }
            }
            
            function watchDataFailureCallback() {
                console.error("T~T");
            }
        })
    .controller('WarningCtrl',
        function($scope, $route, $routeParams, $location) {
            $scope.fuel = $routeParams.fuel;
            console.log($scope.fuel);
        });

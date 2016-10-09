// Your code goes here

angular.module("ngi", ["ngRoute"])
  .config(function($routeProvider) {
        $routeProvider
          .when("/", {
            templateUrl: "views/homePage.html",
            controller: "HomeCtrl"
          })
          .when("/warning/:fuel", {
            templateUrl: "../views/warningPage.html",
            controller: "WarningCtrl"
          })
          .otherwise({
            redirectTo: "/"
          });
    })
    .controller('HomeCtrl', function($scope, $location) {
            var fuelID = gm.info.watchVehicleData(processData, watchDataFailureCallback, ["fuel_level"]);
            console.log('watching');
            function processData(data) {
                console.log(data);
                if (data.fuel_level <= 25) {
                  console.log("ATTEMPTING TO REDIRECT TO /warning/" + data.fuel_level);
                    $location.path = '/warning/' + data.fuel_level;
                }
            }
            
            function watchDataFailureCallback() {
                console.error("T~T");
            }
        })
    .controller('WarningCtrl', function($scope, $routeParams) {
      $scope.fuel = $routeParams.fuel_level;
    });
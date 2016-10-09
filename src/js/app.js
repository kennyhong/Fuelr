// Your code goes here

angular.module("ngi", ["ngRoute"])
  .config(function($routeProvider) {
        $routeProvider
          .when("/", {
            templateUrl: "views/homePage.html",
            controller: "HomeCtrl"
          })
          .when("/warning/:fuel", {
            templateUrl: "./views/warningPage.html",
            controller: "WarningCtrl"
          })
          .otherwise({
            redirectTo: "/"
          });
    })
    .controller('HomeCtrl', function($scope, $route, $location) {
      console.log("in HomeCtrl")
            var fuelID = gm.info.watchVehicleData(processData, watchDataFailureCallback, ["fuel_level"]);
            console.log('watching');
            function processData(data) {
                console.log(data);
                if (data.fuel_level <= 25) {
                  console.log("ATTEMPTING TO REDIRECT TO /warning/" + data.fuel_level);
                    $location.path('/warning/' + data.fuel_level);
                    gm.info.clearVehicleData(fuelID);
                    $scope.$apply();
                }
            }
            
            function watchDataFailureCallback() {
                console.error("T~T");
            }
        })
    .controller('WarningCtrl', function($scope, $routeParams) {
      console.log("in WarningCtrl");
      $scope.fuel = $routeParams.fuel;
      console.log($routeParams);

            var fuelID = gm.info.watchVehicleData(processData, watchDataFailureCallback, ["fuel_level"]);
            console.log('watching');
            function processData(data) {
                console.log(data);
                $scope.fuel = data.fuel_level;
                $scope.$apply();
            }
            
            function watchDataFailureCallback() {
                console.error("T~T");
            }
    });
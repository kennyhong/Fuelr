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
        var fuelID = gm.info.watchVehicleData(processData, watchDataFailureCallback, ["fuel_level"]);
        
        function processData(data) {
            if (data.fuel_level <= 25) {
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
        $scope.fuel = $routeParams.fuel;

        var fuelID = gm.info.watchVehicleData(processData, watchDataFailureCallback, ["fuel_level"]);
        function processData(data) {
            $scope.fuel = data.fuel_level;
            $scope.$apply();
        }
            
        function watchDataFailureCallback() {
            console.error("T~T");
        }
    
        function setStations(stations) {
            console.log("The stations are", stations);
            $scope.stations = stations;
        }
    
        gm.info.getCurrentPosition(function (position) {
            $scope.position = position;
            $http.get("http://api.mygasfeed.com/stations/radius/" + position.coords.latitude + "/" + positions.coords.longitude + "/5/reg/distance/8mi9kj0577.json?callback=setStations");
        });
    
    })
    .controller("NearbyCtrl", function ($scope, $http) {
                
    });
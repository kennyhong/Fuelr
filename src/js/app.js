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
          .when("/selection", {
            templateUrl: "./views/selectionPage.html",
            controller: "SelectionCtrl"
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
    .controller('WarningCtrl', function($scope, $rootScope, $http, $routeParams, $location) {
        $scope.fuel = $routeParams.fuel;

        var fuelID = gm.info.watchVehicleData(processData, watchDataFailureCallback, ["fuel_level"]);
        function processData(data) {
            $scope.fuel = data.fuel_level;
            $scope.$apply();
        }
            
        function watchDataFailureCallback() {
            console.error("T~T");
        }

        $scope.findNearest = function() {
          $scope.stationPreference = 'distance';
          getStations();
        }

        $scope.findCheapest = function() {
          $scope.stationPreference = 'price';
          getStations();
        }
    
        function setStations(res) {
            $rootScope.stations = res.data.stations;
            $location.path('/selection');
        }
  
        function getStations() {
          gm.info.getCurrentPosition(function (position) {
            $scope.position = position;

            // hardcoded values
            position = {coords: {latitude: 42.11147869413297, longitude: -83.48970413208}};
          
            $http.get("http://api.mygasfeed.com/stations/radius/" + position.coords.latitude + "/" + position.coords.longitude + "/15/reg/"
                      + ($scope.stationPreference || "distance") + "/8mi9kj0577.json")
                .then(function success(res) {
                  setStations(res);
                });
          }, true);
        }
    })
    .controller('SelectionCtrl', function($scope, $rootScope) {
      $scope.stations = $rootScope.stations;
      console.log($scope.stations);

    })
    .controller("NearbyCtrl", function ($scope, $http) {
                
    });
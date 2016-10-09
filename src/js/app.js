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
        function initializeCoordinates(position) {
            var coords = {lat: position.coords.latitude, lng: position.coords.longitude};
            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 17,
                center: coords
            });
            var marker = new google.maps.Marker({
                position: coords,
                map: map
            });
        }
        
        gm.info.getCurrentPosition(initializeCoordinates, true);
        
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

        var fuelID = gm.info.watchVehicleData(processData, watchDataFailureCallback, ["fuel_level"]);;
        function processData(data) {
            console.log(data);
            $scope.fuel = data.fuel_level;
            $scope.$apply();
        }
            
        function watchDataFailureCallback() {
            console.error("T~T");
        }
    })
    .controller("FunctionsCtrl", function ($scope) {
        $scope.processData = function (data) {
            $scope.fuel = data.fuel_level;
            $scope.$apply();
        };
    });
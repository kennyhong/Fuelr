angular.module('ngi').controller('HomeCtrl', ['$scope', '$location',
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
}]);
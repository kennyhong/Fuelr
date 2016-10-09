// Your code goes here

angular.module('ngi', [])
  .controller('HelloWorldCtrl', ['$scope', '$timeout', function($scope, $timeout){
    $timeout(function(){
      $scope.vin = gm.info.getVIN();
    }, 1000);
  }]);


// Your code goes here

gm.info.getVehicleConfiguration(function (data) {

});

var fuelID = gm.info.watchVehicleData(processData, watchDataFailureCallback, ["fuel_level"]);


gm.info.getVehicleData(processData, ["fuel_level"]);



function processData(data) {
  	if(data.fuel_level <= 25)
	{
		window.location.href = "warningPage.html";
		console.log("fueldId under 25");
	}		
 	console.log("@@@@", data);
}

function watchDataFailureCallback() {

	console.error("T~T");
}



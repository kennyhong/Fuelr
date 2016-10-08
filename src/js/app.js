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

if(fuelID <= 25)
{
	<script type="text/javascript">
		window.open ('warningPage','_self',false)
	</script>
}

// gm.info.getVehicleData(processData, ["fuel_level"]);

/*function processData(data) {
  // called continuously as watched signals update
  // NOTE: expect some `analog` signals to bounce
 	console.log("@@@@", data);
}

function watchDataFailureCallback() {

	console.error("T~T");
}
*/


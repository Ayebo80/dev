angular
	.module('ngCribs')	//if you don't put in 2nd argument []: Just make reference to module instead of declaring new module
	.controller('cribsController', function($scope, cribsFactory) {	//Dependency-Injection: inject $scope-Object: allows to get hold of other pieces of code

		$scope.hello = 'Hello world!';
		//$scope.cribs = cribsFactory.getCribs();
		$scope.cribs;

		//Initialize priceInfo, so we don't get a blank screen
		$scope.priceInfo = {
			min: 0,
			max: 1000000
		}

		//Setup empty object for our newListing
		$scope.newListing = {};
		
		$scope.addCrib = function(newListing){
			//intercept newListing before we push to cribs-Array
			newListing.image = 'default-crib';
			//if we get newListing push(add) it to our cribs
			$scope.cribs.push(newListing);
			//after filling form the input should disappear
			$scope.newListing = {};
		}


        $scope.editCrib = function(crib) {
        	//Show that portion of the user interface
            $scope.editListing = true;
            //Set inputs of this form to the data of the current crib-object
            $scope.existingListing = crib;
        }

        $scope.saveCribEdit = function() {
        	//Clear existingListing
        	$scope.existingListing = {};
        	//Close the box
        	$scope.editListing = false
        }

		//MOCK: splice() INSTEAD of HTTP-Request
        $scope.deleteCrib = function(listing) {
        	//MOCK: to mock out delete-Functionality we need to get index of array
            var index = $scope.cribs.indexOf(listing);
            //splice(remove) it out of Array, BUT NOT DELETE
            //MOCK: because we are not doing HTTP-Request to delete data
            $scope.cribs.splice(index, 1);
            //Clear form
            $scope.existingListing = {};
            //Close the box
            $scope.editListing = false;
        }

		cribsFactory.getCribs().success(function(data) {
			$scope.cribs = data;
		}).error(function(error) {
			console.log(error);
		});

	});
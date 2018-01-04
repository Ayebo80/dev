//todo: Whats the difference between 1 Factory & 1 Service ???
angular
	.module('ngCribs')
	.factory('cribsFactory', function ($http){

			function getCribs() {
				//return cribsData;
				return $http.get('data/data.json');
			}

			return {
				getCribs: getCribs
			}
	});
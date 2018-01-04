angular
	.module('ngCribs')
	.filter('cribsFilter', function() {

		return function(listings, priceInfo) {	
			//Setup Array of filtered Items
			var filtered = [];
			//Properties min & max will come from priceInfo argument
			var min = priceInfo.min;
			var max = priceInfo.max;
			//Angular Helper-Method forEach
			//foreEach of the listings, take 1 listing
			angular.forEach(listings, function(listing) {

				if(listing.price >= min && listing.price <= max) {
					//push our listing into the Array filtered
					filtered.push(listing);
				}
			});

			//return Array of filtered Items
			return filtered;
		}
	});
angular.module('SessionService', []).factory('sessionService', ['$http', function($http) {
	return{
		set: function(key,value) {
			console.log("SDGdfgd");
			//return sessionStorage.setItem(key,value);
		},
		get: function(key) {
			return sessionStorage.getItem(key);
		},
		destroy: function(key) {
			return sessionStorage.removeItem(key);
		},
	};
}]);

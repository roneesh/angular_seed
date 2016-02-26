(function() {	
	'use strict';

	angular
		.module('ngcq5')
		.factory('moduleFactory', moduleFactory);

	moduleFactory.$inject = ['$http', '$rootScope'];

	function moduleFactory($http, $rootScope) {
		return {
			getModuleData: getModuleData
		};

		function getModuleData() {
			return $http.get('http://www.you-api-url.com');
		}
	}
})();
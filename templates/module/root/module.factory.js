(function() {	
	'use strict';

	angular
		.module('{%= app_name %}')
		.factory('{%= module_name %}Factory', {%= module_name %}Factory);

	{%= module_name %}Factory.$inject = ['$http', '$rootScope'];

	function {%= module_name %}Factory($http, $rootScope) {
		return {
			{%= get_module_name %}Data: {%= get_module_name %}Data
		};

		function {%= get_module_name %}Data() {
			return $http.get('http://www.you-api-url.com');
		}
	}
})();
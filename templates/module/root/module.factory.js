/**
 * @ngdoc service
 * @name {%= module_name %}.factory:{%= module_name %}Factory
 * @description
 * factory functionality here
 * @requires $http
 * @requires $rootScope
 **/

(function() {	
	'use strict';

	angular
		.module('{%= app_name %}')
		.factory('{%= module_name %}Factory', {%= module_name %}Factory);

	{%= module_name %}Factory.$inject = ['environmentFactory', '$http', '$rootScope'];

	function {%= module_name %}Factory(environmentFactory, $http, $rootScope) {
		var environmentData = environmentFactory.getEnvironmentData();
			// access to environment variables returns:
			// environmentData.env - 'QA', 'STAG', or 'DEV'
			// environmentData.host - 'SEARS' or 'KMART'
			// environmentData.urls[environmentData.env].{name}

		return {
			{%= get_module_name %}Data: {%= get_module_name %}Data
		};

		function {%= get_module_name %}Data() {
			return $http.get('http://www.you-api-url.com');
		}
	}
})();
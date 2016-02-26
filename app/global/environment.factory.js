(function() {	
	'use strict';

	angular
		.module('ngcq5')
		.factory('Factory', environmentFactory);

	environmentFactory.$inject = [];

	function environmentFactory($http, $rootScope) {
		return {
			getEnvironmentData: getEnvironmentData
		};

		function getenvironmentData() {
			var urls = {
		        "DEV": {
		            "moduleFactoryEndpoint": "../module/moduleJSON.json",
		        },
		        "QA": {
		            "moduleFactoryEndpoint": "http://qa1.ecom.sears.com/module",
		        },
		        "STAG": {
		            "moduleFactoryEndpoint": "http://staging.ecom.sears.com/module",
		        },
		        "PROD": {
		            "moduleFactoryEndpointt": "http://module.sears.com",
		        },
		    };
		    
		    var env = "PROD",
		    	host = "SEARS";
		    //looking at domain to determine environment
		    if ($location.host().toUpperCase().indexOf('QA') !== -1) {
		        env = "QA";
		    } else if ($location.host().toUpperCase().indexOf('STAG') !== -1) {
		        env = "STAG";
		    } else if ($location.host().toUpperCase().indexOf('LOCAL') !== -1) {
		        env = "DEV";
		    }
		    if ($location.host().toUpperCase().indexOf('KMART') !== -1) {
		        host = "KMART";
		    }

			return {
		        "urls": urls,
		        "env": env,
		        "host": host
		    };
		}
	}
})();
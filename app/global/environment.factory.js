(function() {	
	'use strict';

	angular
		.module('ngcq5')
		.factory('environmentFactory', environmentFactory);

	environmentFactory.$inject = ['$location', '$rootScope'];

	function environmentFactory($location, $rootScope) {
		return {
			getEnvironmentData: getEnvironmentData
		};

		function getEnvironmentData() {
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

		  //console.log("Environment : " + env);
      //console.log("Host : " + host);

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

			return {
		        "urls": urls,
		        "env": env,
		        "host": host
		    };
		}
	}
})();
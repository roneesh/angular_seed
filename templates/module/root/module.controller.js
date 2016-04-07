/**
 * @ngdoc controller
 * @name {%= module_name %}Controller:{%= module_name %}ControllerController
 * @description
 * A controller that renders the {%= module_name %} part of the application
 **/

(function() {
	'use strict';

	angular
		.module('{%= app_name %}')
		.controller('{%= module_name %}Controller', {%= module_name %}Controller);

	{%= module_name %}Controller.$inject = ['{%= module_name %}Factory', 'environmentFactory', 'omnitureFactory', '$state', '$scope', '$location', '$rootScope'];

	function {%= module_name %}Controller({%= module_name %}Factory, environmentFactory, omnitureFactory, $state, $scope, $location, $rootScope) { 

		var vm = this, // vm means viewModel
			EF = environmentFactory.getEnvironmentData();
			// access to environment variables returns:
			// EF.env - 'QA', 'STAG', or 'DEV'
			// EF.host - 'SEARS' or 'KMART'

		// Controllers have 6 areas:
	    // 1. Data which holds state and is rendered to DOM
	    // 2. A ui object which holds variables used to handle interactions
	    // 3. Functions which are called via a DOM interaction
	    // 4. An activate function which runs on controller load
	    // 5. Private functions (non-user facing) the controller uses
	    // 6. An omniture object which holds functions referenced in the DOM and private functions for omniture
		

		// 1. Data which holds state
		vm.someData = undefined;
		vm.someData1 = 100;
		$scope.someData2 = 101;
		

		// 2. UI variables (e.g. changing triggers ng-show/hide or alters filters)
		vm.ui = {
			"showModal" : false,
			"showDropDown" : true
		};


		// 3. Functions available in DOM
	    vm.onClickOfProduct = onClickOfProduct;

	    function onClickOfProduct() {

	    }

	    // 4. Activation
	    function activate() {
	    	firstFunctionRun();
	    }

	    activate();
	    

	    // 5. Private functions
	    function firstFunctionRun() {
	    	return {%= module_name %}Factory.{%= get_module_name %}Data()
	    		.then(function(response) {
	    			vm.someData = response;
	    		}).then(function() {

	    		})
	    }


	    //6. Omniture variables and private functions
	     vm.omniture = {
	    	onClickOfDOMObject : function() {
	    		return true
	    	}
	    }

	}
})();
(function() {
	'use strict';

	angular
		.module('ngcq5')
		.controller('moduleController', moduleController);

	moduleController.$inject = ['moduleFactory', '$state', '$scope', '$location', '$rootScope'];

	function moduleController(moduleFactory, $state, $scope, $location, $rootScope) { 

		var vm = this; // vm means viewModel

		// Controllers have 6 areas:
	    // 1. Data which holds state and is rendered to DOM
	    // 2. A ui object which holds variables used to handle interactions
	    // 3. Functions which are called via a DOM interaction
	    // 4. An activate function which runs on controller load
	    // 5. Private functions (non-user facing) the controller uses
	    // 6. An omniture object which holds functions referenced in the DOM and private functions for omniture
		
		// 1. Data which holds state
		vm.someData = undefined;
		
		// 2. UI variables (e.g. changing triggers ng-show/hide or alters filters)
		vm.ui = {
			"showFoo" : undefined
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
	    

	    // 5. private functions
	    function firstFunctionRun() {
	    	return moduleFactory.getSomeAPIdata()
	    		.then(function(response) {

	    		}).then(function() {

	    		})
	    }

	}
})();
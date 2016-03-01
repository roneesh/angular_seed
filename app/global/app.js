(function() {
    'use strict';

    angular
        .module('ngcq5', ['ui.router', 'page' ])
        .config(config);

    function config($stateProvider, $locationProvider) {
        // $stateProvider
        //     .state('home', {
        //         url: '/',
        //         templateUrl: '',
        //         controller: '',
        //         controllerAs: 'vm'
        //     });
        //$locationProvider.html5Mode(true);
    }
})();
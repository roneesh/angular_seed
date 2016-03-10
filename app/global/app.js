/**
 * @ngdoc object
 * @name Your app name
 * @description 
 * This is the starting point of your app
 * @requires ui.router
 * @requires page
 **/

(function() {
    'use strict';

    angular
        .module('ngcq5', ['ui.router', 'page' ])
        .config(config);

    function config($stateProvider, $locationProvider) {
        // $stateProvider
        //     .state('home', {
        //         url: '/etc/designs/shc/change_this_to_your_component_name/partials/example.html',
        //         templateUrl: '',
        //         controller: '',
        //         controllerAs: 'vm'
        //     });
        //$locationProvider.html5Mode(true);
    }
})();
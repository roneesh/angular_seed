"use strict";

var app = angular.module('ngcq5', [
    'ngRoute'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/etc/designs/shc/global/base/js/ngcq5/partials/home.html',
            controller: 'mainController'
        }).
        when('/b', {
            templateUrl: '/etc/designs/shc/global/base/js/ngcq5/partials/b.html',
            controller: 'bController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
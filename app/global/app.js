"use strict";

var app = angular.module('ngcq5', [
    'ngRoute', 'page'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '../module/module.html',
            controller: 'mainController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
"use strict";

var app = angular.module('ngcq5', [
    'ngRoute', 'page'
]);

app.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: '/etc/designs/shc/dynamicCampaignComponent/partials/home.html',
            controller: 'mainController'
        }).
        when('/b', {
            templateUrl: '/etc/designs/shc/dynamicCampaignComponent/partials/b.html',
            controller: 'bController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }
]);
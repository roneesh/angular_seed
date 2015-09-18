"use strict";
//JSP page context setup
var page = angular.module('page', []);
page.factory('pageCtx', function(){
    return {
        configJson: function(){
            return JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}');
        },
        cookieType: function(){
            return "cookieType5656999";
        },
        campaignName: function(){
            return "campaignName";
        },
    };
});
//end JSP page context setup
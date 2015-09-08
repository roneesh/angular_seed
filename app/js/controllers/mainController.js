app.controller('mainController', function ($scope, pageCtx) {
    "use strict";
    console.log("PageCtx : "+pageCtx.campaignName());
    console.log("PageCtx : "+JSON.stringify(pageCtx.configJson()));
    console.log("PageCtx : "+pageCtx.cookieType());
    $scope.message = pageCtx.campaignName();
});
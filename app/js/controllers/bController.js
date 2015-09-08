app.controller('bController', function ($scope, pageCtx) {
    "use strict";
    $scope.message = pageCtx.cookieType();
});
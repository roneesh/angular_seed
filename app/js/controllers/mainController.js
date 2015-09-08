app.controller('mainController', function ($scope, pageCtx) {
    "use strict";

    $scope.message = pageCtx.configuration();
});
describe("ngcq5 application", function() {

    var scope;
    var pageCtx = {
        configJson: function() {
            return JSON.parse('{"1": 1, "2": 2, "3": {"4": 4, "5": {"6": 6}}}');
        },
        cookieType: function() {
            return "cookieType";
        },
        campaignName: function() {
            return "campVal";
        },
    };


    beforeEach(module('ngcq5'));

    // Loads the controllers
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('mainController', {
            $scope: scope,
            pageCtx: pageCtx
        });
    }));


    it("should have a success message initialized", inject(function() {
        expect(scope.message).toBeTruthy();
        expect(scope.message).toBe('campVal');
    }));

});
describe("{%= app_name %} application", function() {

    var scope;

    beforeEach(module('{%= app_name %}'));

    // Loads the controllers
    beforeEach(inject(function($controller, $rootScope) {
        scope = $rootScope.$new();
        $controller('{%= module_name %}Controller', {
            $scope: scope
        });
    }));

    it("should have a scope and scope.ui variable initialized", inject(function() {
        expect(scope.someData).toBe(undefined);
        expect(scope.ui.showModal).toBe(false);
        expect(scope.ui.showDropDown).toBe(true);
    }));

});
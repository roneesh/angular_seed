describe("{%= module_name %}Controller", function() {

    // Varaibles to hold controller function and it's scope to be used in tests
    var testModuleController,
        testModuleControllerScope;

    // Loads the angular app and it's dependency of page
    beforeEach(module("page", "{%= app_name %}"));

    // Loads the controllers
    beforeEach(inject(function($controller, $rootScope) {
        testModuleControllerScope = $rootScope.$new();
        testModuleController = $controller('testModuleController', {
            $scope: testModuleControllerScope
        });
    }));

    it('should have a testModule controller', function() {
        expect(testModuleController).toBeDefined();
    });

});
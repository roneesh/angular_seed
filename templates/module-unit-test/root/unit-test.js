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

    //an example of testing any values attached to vm in your controller
    it('should have a vm.someData value of 100', function() {
        expect(testModuleController.someData1).toBe(100);
    });

    //an example of testing any values attached to $scope in your controller
    it('should have a $scope.someData2 value of 101', function() {
        expect(testModuleControllerScope.someData2).toBe(101);
    });

});
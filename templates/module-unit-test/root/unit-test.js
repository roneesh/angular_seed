describe("{%= module_name %}Controller", function() {

    // Varaibles to hold controller function and it's scope to be used in tests
    var {%= module_name %}Controller,
        {%= module_name %}ControllerScope;

    // Loads the angular app and it's dependency of page
    beforeEach(module("page", "{%= app_name %}"));

    // Loads the controllers
    beforeEach(inject(function($controller, $rootScope) {
        {%= module_name %}ControllerScope = $rootScope.$new();
        {%= module_name %}Controller = $controller('{%= module_name %}Controller', {
            $scope: {%= module_name %}ControllerScope
        });
    }));

    it('should have a {%= module_name %} controller', function() {
        expect({%= module_name %}Controller).toBeDefined();
    });

    //an example of testing any values attached to vm in your controller
    it('should have a vm.someData value of 100', function() {
        expect({%= module_name %}Controller.someData1).toBe(100);
    });

    //an example of testing any values attached to $scope in your controller
    it('should have a $scope.someData2 value of 101', function() {
        expect({%= module_name %}ControllerScope.someData2).toBe(101);
    });

});
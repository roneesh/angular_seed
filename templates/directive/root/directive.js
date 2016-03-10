/**
 * @ngdoc directive
 * @name {%= directive_name %}.directive:{%= directive_name %}Directive
 * @restrict A
 * @description 
 * Describe what the directive is supposed to do here
 * Example: <div class="example" directive-name> ... </div>
 **/


angular
    .module('{%= module_name %}')
    .directive('{%= directive_name %}', {%= directive_name %});

{%= directive_name %}.$inject = [''];

function {%= directive_name %}() {

    var directive = {
        restrict: 'A',
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
}
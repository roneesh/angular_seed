/* module.directive.js */

/**
* @desc Describe what the directive is supposed to do here
* @example <div class="tab" module> ... </div>
*/

angular
    .module('{%= module_name %}')
    .directive('{%= directive_name %}Directive', {%= directive_name %}Directive);

{%= directive_name %}Directive.$inject = [''];

function {%= directive_name %}Directive() {

    var directive = {
        restrict: 'A',
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
}
/* module.directive.js */

/**
* @desc Describe what the directive is supposed to do here
* @example <div class="tab" module> ... </div>
*/

angular
    .module('ngcq5')
    .directive('moduleDirective', moduleDirective);

moduleDirective.$inject = [''];

function moduleDirective() {

    var directive = {
        restrict: 'A',
        link: linkFunc
    };

    return directive;

    function linkFunc(scope, el, attr, ctrl) {

    }
}

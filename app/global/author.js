/**
 * @ngdoc object
 * @name page
 * @description 
 * The module page present in author.js is mocking what comes from a CQ5 author.
 * It is not part of the js files which get minified and bundled. Its runtime conterpart comes from script on the JSP (see sampleCQ5JSP.jsp)
 **/

var page = angular.module('page', []);
page.factory('pageCtx', function($q){
    return {
        someJSPValue: function(){
            // value given to JS by the CQ5 dialog
            return "${DIALOGUEVALUE}";
        }
    };
});
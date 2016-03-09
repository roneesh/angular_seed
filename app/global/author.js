var page = angular.module('page', []);
page.factory('pageCtx', function($q){
    return {
        someJSPValue: function(){
            // value given to JS by the CQ5 dialog
            return "${DIALOGUEVALUE}";
        }
    };
});
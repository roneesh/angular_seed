<%@include file="/apps/shc/global/global.jsp" %>
<shc-aem:clientlib-includes categories="angularframework" />
<div ng-app="APPNAME" ng-strict-di>
    <div ng-controller="CONTROLLERNAME" ng-cloak>
        
    </div>
</div>
<script type="text/javascript" src="http://media.richrelevance.com/rrserver/js/1.1/p13n.js"></script>
<% pageContext.setAttribute("DIALOGEVALUE", properties.get("./DROPDOWNVALUENAME", "Ex1")); %>
<script type="text/javascript">
var page = angular.module('page', []);
page.factory('pageCtx', function($q){
    return {
        someJSPValue: function(){
            // value given to JS by the CQ5 dialog
            return "${DIALOGEVALUE}";
        }
    };
});
</script>
<script src="/staticassets/assets/js/shims.js"></script>
<shc-aem:clientlib-includes categories="COMPONENT" />
<!-- Add external scripts below that you need from CDNs -->
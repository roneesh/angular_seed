<%@include file="/apps/shc/global/global.jsp" %>
<%@page session="false" import="java.util.LinkedHashMap" %>
<%@page session="false" import="org.apache.sling.commons.json.JSONObject" %>
<%
LinkedHashMap<String, String> configuration = new LinkedHashMap<String, String>();
String cookieType = properties.get("shc:cookieType", "");
JSONObject json = new JSONObject();
String fieldNameParticle = cookieType.equals("aam_tnt")? "shc:campId" : "shc:altcampId";

for (int i = 1; i <= 6; i++) {
    String nextcampid = properties.get(fieldNameParticle+i, "");
    if (nextcampid.length() > 0) {
        configuration.put( nextcampid, properties.get("shc:campUrl"+i, "") );
        json.put(nextcampid, properties.get("shc:campUrl"+i, ""));
        } else break;
}
pageContext.setAttribute("configuration", configuration);
pageContext.setAttribute("cookieType", cookieType);
pageContext.setAttribute("campaignName", properties.get( "shc:campName", ""));
%>
<script type="text/javascript" src="/etc/designs/shc/global/base/js/angular.min.js"></script>
<div ng-app="ngcq5" ng-strict-di>
	<div ng-view></div>
</div>
<script type="text/javascript">
var page = angular.module('page', []);
page.factory('pageCtx', function(){
    var jsonConfig = '<%= json %>';
    return {
        configuration: function(){
            return "${configuration}";
        },
        cookieType: function(){
            return "${cookieType}";
        },
        campaignName: function(){
            return "${campaignName}";
        },
        configJson: function(){
            return JSON.parse(jsonConfig);
        },
    }
});
</script>
<script type="text/javascript" src="/etc/designs/shc/global/base/js/ngcq5/ngcq5.js"></script>
<script type="text/javascript">
	$( document ).ready(function() {
		FED.Util.addCssFile('/etc/designs/shc/global/base/css/ngcq5/ngcq5.css');
});
</script>
<shc-aem:onlyIn modes="edit">
    <cq:includeClientLib js= "cq.author.dynamicCampaignComponent" />
</shc-aem:onlyIn>



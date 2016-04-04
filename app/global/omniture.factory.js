/**
 * @ngdoc service
 * @name omniture.factory:omnitureFactory
 * @description
 * Check that global omniture has been loaded before setting your onLoad omniture data. 
 * @requires $log
 * @requires $q
 * @example 
 *   ```
 *  omnitureFactory.omnitureLoad().then(function(){
 *       try { 
 *           s.pageName = 'Local Ad > PLP ';
 *           setProfileVars(); //triggers omniture onload event
 *       } catch(e) {
 *           console.log('in catch of Omniture section');}
 *       },function(){
 *           $log.error("Did not get confirmation of Omni load event");
 *   });
 *  ```
 **/

(function() {
    "use strict";

    angular
        .module('ngcq5')
        .factory('omnitureFactory', omnitureFactory);

   omnitureFactory.$inject = ['$log', '$q'];

    function omnitureFactory($log, $q) {
        var service = {};

        service.omnitureLoad = function () {
            var deferred = $q.defer();
            var waitTime = 0;
            var check = setInterval(function () {
                if (waitTime > 4000) {
                    clearInterval(check);
                    deferred.reject("Timeout");
                } else if (shc.features.omniture === true) {
                    $log.info("Omniture Load fired :", shc.features.omniture);
                    clearInterval(check);
                    deferred.resolve();
                }
                waitTime += 100;
            }, 100);
            return deferred.promise;
        };
        return service;
    }
})();
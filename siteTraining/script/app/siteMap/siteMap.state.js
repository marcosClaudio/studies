(function(){
    'use strict';

    angular.module('shop')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];
    function stateConfig($stateProvider) {
        $stateProvider.state('app.siteMap', {
            parent : 'app',
            url : '/siteMap',
            views : {
                'content@' : {
                    templateUrl : '/script/app/siteMap/siteMap.html',
                    controller : 'SiteMapController'
                }
            }
        });
    }
})();
(function(){
    'use strict';
    angular.module('shop')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];
    
    function stateConfig($stateProvider) {
        $stateProvider.state('app.home',{
            parent : 'app',
            url : '/home',
            views : {
                'content@' : {
                    templateUrl : '/script/app/home/home.html',
                    controller : 'HomeController'
                }
            }
        });
    }
})();
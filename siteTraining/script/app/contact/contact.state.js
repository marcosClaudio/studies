(function(){
    'use strict';
    angular.module('shop')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('app.contact', {
            parent : 'app',
            url : '/contact',
            views : {
                'content@' : {
                    templateUrl : '/script/app/contact/contact.html',
                    controller : 'ContactController'
                }
            }
        });
    }
})();
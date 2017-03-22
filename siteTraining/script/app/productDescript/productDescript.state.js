(function(){
    'use strict';
    angular.module('shop')
    .config(stateConfig);
    
    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('app.productDescript', {
            parent : 'app',
            url : '/productDescript',
            views : {
                'content@' : {
                    templateUrl : '/script/app/productDescript/productDescript.html',
                    controller : 'ProductDescriptController'
                }
            }
        });
    }
})();
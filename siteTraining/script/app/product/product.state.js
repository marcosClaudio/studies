(function(){
    'use strict';
    angular.module('shop')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider){
        $stateProvider.state('app.product',{
            parent : 'app',
            url : '/product',
            views : {
                'content@' : {
                    templateUrl : '/script/app/product/product.html',
                    controller : 'ProductController'
                }
            }
        });
    }
})();
(function(){
    'use strict';
    angular.module('shop')
    .config(stateConfig);

    stateConfig.$inject = ['$stateProvider'];

    function stateConfig($stateProvider) {
        $stateProvider.state('app.company',{
            parent : 'app',
            url : '/company',
            views : {
                'content@' : {
                    templateUrl : '/script/app/company/company.html',
                    controller : 'CompanyController'
                }
            }
        });
    }
})();
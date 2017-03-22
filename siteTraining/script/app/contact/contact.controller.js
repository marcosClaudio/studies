(function(){
    'use strict';
    angular.module('shop')
    .controller('ContactController', ContactController);

    ContactController.$inject = ['$scope'];

    function ContactController($scope) { 
    $scope.user = {
        
    };     
    $scope.states = (' ' + 'Compras Vendas Reclamacoes' +
    ' Superacao Separacao Advocacia ' +
    'Sla').split(' ').map(function(state) {
        return {abbrev: state};
      });
    $scope.add = function() {
        console.log('owekfokweofkwoek', $scope.user);
    }
    }
    
})();
(function() {
    
    var CustomersController = function ($scope) {
        $scope.sortBy = 'parents';
        $scope.reverse = false;
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    CustomersController.$inject = ['$scope'];

    angular.module('customersApp')
      .controller('CustomersController', CustomersController);
    
}());
(function() {
    var UsersController = function ($scope) {
        $scope.sortBy = 'parents';
        $scope.reverse = false;
        
        $scope.doSort = function(propName) {
           $scope.sortBy = propName;
           $scope.reverse = !$scope.reverse;
        };
    };
    
    UsersController.$inject = ['$scope'];
    console.log("UsersController injected into $scope...");

    angular.module('homeApp').controller('UsersController', UsersController);
    console.log("Defined UsersController in angular.module...");
}());

//(function() {
    app.CustomersController = function ($scope, $http) {
        $scope.sortBy = 'name';
        $scope.reverse = false;
        $http.get('js/data.json').
            success(function(data, status, headers, config) {
                $scope.users = data;
            }).
            error(function(data, status, headers, config) {
            // log error
        });
        $scope.doSort = function(propName) {
            $scope.sortBy = propName;
            $scope.reverse = !$scope.reverse;
        };
    };

    //angular.module('custRtApp').controller('CustomersController', ['$scope', CustomersController]); // script minifier protection

//}());

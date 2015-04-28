var app = angular.module('userApp', []);

app.controller("UserController", function ($scope, $http) {
    $scope.sortBy = 'parents';
    $scope.reverse = false;

    $http.get('data.json').
        success(function(data, status, headers, config) {
            $scope.users = data;
            }).
        error(function (data, status, headers, config) {
            Console.log("Get data.json failed...");
        });
    $scope.doSort = function (propName) {
        $scope.sortBy = propName;
        $scope.reverse = !$scope.reverse;
    };
});
    

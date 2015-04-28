(function() {

    var DataController = function ($scope, $http) {
        $http.defaults.headers.common["X-Custom-Header"] = "js/angular.js";
        $http.get('data/data.json').
        success(function(data, status, headers, config) {
            $scope.users = data;
            console.log("Loaded JSON data...");
        }).
        error(function(data, status, headers, config) {
            console.log("Failed to load JSON data");
        });
    };

    DataController.$inject = ['$scope'];
    console.log("DataController injected into $scope...");

    angular.module('homeApp').controller('DataController', DataController);
    console.log("Defined DataController in angular.module...");

}());
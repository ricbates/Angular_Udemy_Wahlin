(function () {
    var GetCtrl = function($scope, $http, $routeParams) {
        var Id = $routeParams.Id;
        var max = $scope.users.length;
        $scope.findUser = null;

        function init() {
            for(var i = 0; i< max; i++){
                if ($scope.users[i].Id === parseInt(Id)) {
                    $scope.findUser = $scope.users[i].findUser;
                    break;
                }
            }

        }
        
        $http.defaults.headers.common["X-Custom-Header"] = "js/angular.js";
        $http.get('js/data.json').
        success(function(data, status, headers, config) {
            $scope.users = data;
            }).
        error(function(data, status, headers, config) {
            console.log("Failed to load JSON data");
            });
    
        init();

        GetCtrl.$inject = ['$scope'];

        angular.module('custRtApp')
            .controller('GetCtrl', GetCtrl);
    }
}());

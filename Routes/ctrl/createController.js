app.controller('PostNewCtrl', ['$scope', '$resource', function($scope, $resource) {
    var newRec = users.length + 1;
    var newUserResource = $resource('js/data.json/:newRec', 
                                    { Id: newRec}, 
                                    { 'update': { method:'PUT' }});
    $scope.post = newUserResource.get();

    $scope.updateUser = function() {
        newUserResource.update($scope.user);
    };
}]);
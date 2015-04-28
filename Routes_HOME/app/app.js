(function() {
    
    var app = angular.module('homeApp', ['ngRoute']);
    
    app.config(function($routeProvider) {
        $routeProvider
            .when('/', {
                controller: 'UsersController',
                templateUrl: 'app/views/users.html'
            })
            .when('/users/:Id', {
                controller: 'EditUserController',
                templateUrl: 'app/views/edituser.html'
            })
            .otherwise( { redirectTo: '/' } );
    });
}());
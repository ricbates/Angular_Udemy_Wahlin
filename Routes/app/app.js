(function() {

var app = angular.module('custRtApp', ['ngRoute','ngResource']);
    
    app.config( function ($routeProvider) {
        $routeProvider
            .when('/',
                {
                controller:  'UsersCtrl',
                templateUrl: 'app/views/users.html'
                
            })
            .when('/findUser/:Id',
                {
                controller:  'GetController',
                templateUrl: 'app/views/findUser.html'
            })
            .when('/new',
                  {
                controller:  'OrdersController',
                templateUrl: 'app/views/orders.html'
            })
            .otherwise({ redirectTo: '/' });
        
    });
    
    
}());
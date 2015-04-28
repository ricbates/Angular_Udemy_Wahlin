(function() {

    var app = angular.module('custRtApp', ['ngRoute']);
    
    app.config( function ($routeProvider) {
        $routeProvider
            .when('/customers',
                {
                controller:  'CustomersController',
                templateUrl: 'html/app/views/customers.html'
            })
                    .when('/orders',
                {
                controller:  'OrdersController',
                templateUrl: 'html/app/views/orders.html'
            })
            .otherwise({ redirectTo: 'html/app/views/' });
        
    });
    
}());
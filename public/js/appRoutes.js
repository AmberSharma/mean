    // public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/login-register', {
            templateUrl: 'views/login-register.html',
            controller: 'LoginRegisterController'
        });

    $locationProvider.html5Mode(true);

}]);
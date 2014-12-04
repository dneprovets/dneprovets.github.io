(function () {
    'use strict';

    angular.module('auction', ['ngRoute']).config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            }).when('/home', {
                templateUrl: 'views/home.html',
                controller: 'HomeController',
                controllerAs: 'home'
            })
            .when('/search', {
                templateUrl: 'views/search.html',
                controller: 'SearchController',
                controllerAs: 'search'
            })
            .otherwise({redirectTo: '404.html'});
    }]);
}());

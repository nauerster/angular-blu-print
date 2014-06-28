'use strict';

var bluPrint = angular.module('bluPrint', [
    'ui.router',
    'ui.bootstrap'
]);

bluPrint.config(function($stateProvider, $urlRouterProvider, $httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    $stateProvider.state('main', {
        url: '/main',
        views: {
            content: {
                templateUrl: '/views/main/partial.main.html',
                controller: 'MainController'
            }
        }
    }).state('info', {
        url: '/info',
        views: {
            content: {
                templateUrl: '/views/info/partial.info.html',
                controller: 'InfoController'
            }
        }
    });

    $urlRouterProvider.otherwise('/info');
});
describe('MainController', function() {
    console.log("MainController Test: " + new Date().toUTCString());

    var scope, ctrl, factory, http, httpback;

    beforeEach(function() {

        module('bluPrint');

        inject(function($rootScope, $controller, $injector) {

            scope = $rootScope.$new();
            factory = $injector.get('baseFactory');
            http = $injector.get("$http");
            httpback = $injector.get("$httpBackend");

            ctrl = $controller('MainController', {
                $scope: scope,
                'baseFactory': factory,
                $http: http,
            });
        });
    });

    afterEach(function() {
        scope.$destroy();
    });

    it('should be an array', function() {
        expect(scope.test).toBe('stubbing out test');
    });

});
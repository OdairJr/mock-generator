function routing($stateProvider, $urlRouterProvider) {
    // default route
    $urlRouterProvider.otherwise("/");

    // app routes
    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'components/home/index.view.html',
            controller: 'Home.IndexController',
            controllerAs: 'vm'
        });
}

angular
    .module("app")
    .config(routing)
    .run(function ($rootScope, $state, $localStorage) {
        $rootScope.$state = $state;
        $rootScope.$localStorage = $localStorage;
    });

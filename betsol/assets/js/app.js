 angular.module('gitApp', ['ui.router',
     'gitApp.controllers',
     'gitApp.services'
 ])


.config(function ($stateProvider, $urlRouterProvider) {

    // For any unmatched url, send to /route1
    $urlRouterProvider.otherwise("/")

    $stateProvider
        .state('home', {
            url:"/",
            templateUrl: "views/home.html",
            controller:'homeCtrl'
        })

        .state('repos', {
            url:"/repos/:owner/:reponame",
            templateUrl: "views/repos.html",
            controller:'reposCtrl'
        })    
		
})

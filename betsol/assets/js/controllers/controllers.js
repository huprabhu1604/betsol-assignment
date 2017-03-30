angular.module('gitApp.controllers', ['gitApp.services'])
.controller('mainCtrl', function($scope, $stateParams, $http, $state, urls, $rootScope) {
        
})

.controller('homeCtrl', function($scope, $stateParams, $http, $state, urls, $rootScope) {

    $scope.baseHref= urls.apiHref;
    $scope.getrepos =function(username){

        $http.get(urls.apiUrl+'users/'+username+'/repos').success(function(data) {
                    console.log(data)

                    $scope.repoData = data;
                    console.log(JSON.stringify($scope.repoData));
                

                })
                .error(function(data) {


                    $scope.errorMsg= true;
                    
                    console.log("No results found.")
                });

    }


        
})

.controller('reposCtrl', function($scope, $stateParams, $http, $state, urls, $rootScope) {


$scope.baseHref= urls.apiHref;

        $http.get(urls.apiUrl+'repos/'+$stateParams.owner+'/'+$stateParams.reponame+'/commits')
        .success(function(data) {
                    console.log(data)

                    $scope.commitData = data;
                    console.log(JSON.stringify($scope.commitData));
                

                })
                .error(function(data) {
                    
                    console.log("No results found.")
                });



        
})



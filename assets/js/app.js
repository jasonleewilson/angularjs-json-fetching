var currentpriceApp = angular.module('currentpriceApp', ['ui.bootstrap', 'ngRoute']);
currentpriceApp.controller('currentpriceCtrl', function ($scope, $http){
	$http.get('https://api.coinmarketcap.com/v1/ticker/?limit=0').success(function(data) {
		$scope.crypto = data;
    $scope.viewby = 100;
    $scope.totalItems = $scope.crypto.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = $scope.viewby;
    $scope.maxSize = 5; //Number of pager buttons to show

    $scope.setPage = function (pageNo) {
      $scope.currentPage = pageNo;
    };

    $scope.pageChanged = function() {
      console.log('Page changed to: ' + $scope.currentPage);
    };

  $scope.setItemsPerPage = function(num) {
    $scope.itemsPerPage = num;
    $scope.currentPage = 1; //reset to first page
  }
	});

	$scope.orderByField = 'rank*1';
	$scope.reverseSort = false;
	});

//currentpriceApp.config(function($routeProvider, $locationProvider) {
//  $routeProvider
//       .when('/', {
//         templateUrl: "templates/main.html",
//         controller:'MainCtrl',
//        })
//        .otherwise({
//            template: 'does not exists'
//        });
//});

currentpriceApp.config(function($routeProvider){
  $routeProvider.when('/', {
    template: '<h1>Home Page</h1>',
    //controller:'currentpriceCtrl',
  }).when('/about', {
    template: '<h1>About page</h1>'
  }).otherwise({
    redirectTo:'/' 
  })
})
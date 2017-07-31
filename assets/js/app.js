var currentpriceApp = angular.module('currentpriceApp', []);
currentpriceApp.controller('currentpriceCtrl', function ($scope, $http){
	$http.get('https://api.coinmarketcap.com/v1/ticker/').success(function(data) {
		$scope.countries = data;
	});
	$scope.orderByField = 'rank*1';
	$scope.reverseSort = false;
	});
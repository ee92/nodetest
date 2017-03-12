var app = angular.module('app',["ngRoute"])

app.config(function($routeProvider, $locationProvider){

	$routeProvider
	.when('/', {
		templateUrl: 'views/home.html'
	})
	.when('/about', {
		templateUrl: 'views/about.html'
	})
	.otherwise({
		redirectTo: '/'
	})
})

app.controller('appCtrl',function($scope, $http){
	$scope.test = "hello"
})

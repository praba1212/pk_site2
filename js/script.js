var app = angular.module('myApp', ['ngRoute']);
	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				templateUrl : 'pages/home.html',
				controller  : 'mainController'
			})
			.when('/service', {
				templateUrl : 'pages/service.html',
				controller  : 'serviceController'
			})
			.when('/contact', {
				templateUrl : 'pages/contact.html',
				controller  : 'contactController'
			});
	});

	app.controller('mainController', function($scope) {
   
	});

	app.controller('serviceController', function($scope) {
		$scope.message = '';
	});

	app.controller('contactController', function($scope) {
		 $scope.phoneNumbr = /^\+?\d{2}[- ]?\d{3}[- ]?\d{5}$/;
	});
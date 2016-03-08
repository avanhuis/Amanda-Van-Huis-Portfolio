var app = angular.module('myModule', ['ngRoute']);

app.config(function($routeProvider){
	$routeProvider
		.when('/', {
			controller: 'mainController',
			templateUrl: 'views/main.html'
		})
		.when('/view2', {
			controller: 'aboutController',
			templateUrl: 'views/portfolio.html'
		})
		.when('/view3', {
			controller: 'portfolioController',
			templateUrl: 'views/about.html'
		})
		.when('/view4', {
			controller: 'contactController',
			templateUrl: 'views/contact.html'
		})
		.otherwise({
			templateUrl: 'fourohfour.html'
		})
});

app.controller('mainController', function(){

});

app.controller('aboutController', function(){

});

app.controller('portfolioController', function(){

});

app.controller('contactController', function(){

});
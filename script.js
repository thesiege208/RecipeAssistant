var recipeAssistant = angular.module('recipeAssistant', ['ngRoute']);
recipeAssistant.config(function($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl : 'home.html',
			controller : 'mainController'
		})
		.when('/add', {
			templateUrl : 'add.html',
			controller : 'addController'
		})
});

recipeAssistant.controller('mainController');
recipeAssistant.controller('addController');
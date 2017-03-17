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
		.when('/recipe', {
			templateUrl : 'recipe.html',
			controller : 'recipeController'
		});
});

recipeAssistant.controller('mainController', function($scope));
recipeAssistant.controller('addController', function($scope));
recipeAssistant.controller('recipeController', function($scope));
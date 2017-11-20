'use strict';

(function(){
		
	var app = angular.module('MyApp', ['ui.router', 'ngAnimate']);

	app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/#');

		$stateProvider
			.state('home', {
				url: '/',
				templateUrl: 'templates/books.html',
				controller: 'BooksController',
			})
			.state('book', {
				url: '/book/:id',
				templateUrl: 'templates/book.html',
				controller: 'BookController',
			});
			/*.state('404', {
				url: '/404',
				templateUrl: 'templates/404.html'
			});*/

		/*$routeProvider
			.when('/', {
				controller: 'BooksController',
				templateUrl: 'templates/books.html'
			})
			.when('/book/:id', {
				controller: 'BookController',
				templateUrl: 'templates/book.html'
			})
			.when('/404', {
				templateUrl: 'templates/404.html'
			})
			.otherwise({redirectTo: '/404'});*/
	}]);
	
})();
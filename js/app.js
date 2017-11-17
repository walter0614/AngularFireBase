'use strict'

var app = angular.module("FireJobApp" , [ 
	'ngAnimate',
	'ngResource',
	'ngRoute',
	'firebase'
])
.constant('FBURL' , 'https://angular-adf7f.firebaseio.com/')
.config(function ($routeProvider){
	$routeProvider
		.when('/',{
			templateUrl: 'views/main.html'
		})
		.when('/publicar',{
			templateUrl: 'views/publicar.html',
			controller: 'WorkCtrl'
		})
		.when('/editar/:trabajoId',{
			templateUrl: 'views/editar.html',
			controller: 'WorkCtrl'
		})
		.when('/buscar',{
			templateUrl: 'views/buscar.html',
			controller: 'WorkCtrl'
		})
		.when('/register',{
			templateUrl: 'views/register.html',
			controller: 'AutenCtrl'
		})
		.when('/session',{
			templateUrl: 'views/session.html',
			controller: 'AutenCtrl'
		})
		.otherwise({
			redirectTo: '/'
		});
});
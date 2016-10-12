'use strict'//Define que el código JavaScript deba ejecutarse en el "modo estricto".

var app = angular.module("appRootTrivia", [
	'ngResource',
	'ngRoute',
	'firebase'
])
.config(function ($routeProvider){
	$routeProvider
		.when('/', {
			templateUrl: 'templates/bienvenido.html',
			controller:'preguntasController'
		})
		.when('/formPreguntas', {
			templateUrl: 'templates/BPreguntas/formBPregunta.html',
			controller:'preguntasController'
		})
		.otherwise({
			redirectTo: '/'
		});
})
.run(function($rootScope, $location){
	
	window.oncontextmenu = function() {
		return false;
	}

});
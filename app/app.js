(function() {
	'use strict';

	angular
		.module('myApp', [
			'ngRoute',
			'myApp.view1',
			'myApp.view2',
			'myApp.version'
		])
		.config(config);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider.otherwise({redirectTo: '/view1'});
	}
})();


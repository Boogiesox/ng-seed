(function() {
	'use strict';

	angular
		.module('myApp.view1', ['ngRoute'])
		.config(config)
		.controller('View1Ctrl', View1Ctrl);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider.when('/view1', {
			templateUrl: 'view1/view1.html',
			controller: 'View1Ctrl',
			controllerAs: 'vm'
		});
	}

	function View1Ctrl() {
		var vm = this;

		this.vmString = 'This is a string in the VM';
	}
})();
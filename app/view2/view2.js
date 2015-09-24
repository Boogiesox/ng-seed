(function() {
	'use strict';

	angular
		.module('myApp.view2', ['ngRoute'])
		.config(config)
		.controller('View2Ctrl', View2Ctrl);

	config.$inject = ['$routeProvider'];

	function config($routeProvider) {
		$routeProvider.when('/view2', {
			templateUrl: 'view2/view2.html',
			controller: 'View2Ctrl',
			controllerAs: 'vm'
		});
	}

	function View2Ctrl() {
		var vm = this;

		this.anotherVmString = 'This is another string on the VM';
	}
})();
'use strict';

describe('myApp.view1 module', function() {

	beforeEach(module('myApp.view1'));

	describe('view1 controller', function(){

		it('should be defined', inject(function($controller) {
			var sut = $controller('View1Ctrl');
			expect(sut).toBeDefined();
		}));

		it('should contain a string on the VM', inject(function($controller){
			var sut = $controller('View1Ctrl');
			expect(typeof(sut.vmString)).toBe('string');
		}));

	});
});
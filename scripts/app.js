angular
	.module("ngNotes", ["ngMaterial"])
	.config(function($mdThemingProvider) {

		$mdThemingProvider.theme('default')
			.primaryPalette('yellow')
			.accentPalette('blue');
	})
	.directive("helloWorld", function() {
		return {
			template: "<h1>Hello World!</h1>"
		}
	});
(function() {
	"use strict";

	angular
		.module("ngNotes")
		.controller("notesCtrl", function($scope) {
			$scope.name = "Note 1";
		});
})();
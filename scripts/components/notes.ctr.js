(function() {
	"use strict";

	angular
		.module("ngNotes")
		.controller("notesCtrl", function($scope, $http, notesFactory) {
			notesFactory.getNotes().then(function(data){
				$scope.notes = data.data;
			});
		});
})();
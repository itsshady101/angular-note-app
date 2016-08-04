(function() {
	"use strict";

	angular
		.module("ngNotes")
		.controller("notesCtrl", function($scope, $http) {
			$http.get('notes.json').then(function(data){
				$scope.notes = data.data;				
			});
			
		});
})();
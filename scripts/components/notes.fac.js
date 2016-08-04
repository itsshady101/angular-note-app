(function(){
	"use strict";

	angular
		.module("ngNotes")
		.factory("notesFactory", function($http){
			function getNotes() {
				return $http.get("notes.json");
			}

			return {
				getNotes: getNotes
			}
		});
})();
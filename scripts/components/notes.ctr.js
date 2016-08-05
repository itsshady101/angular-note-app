(function() {
	"use strict";

	angular
		.module("ngNotes")
		.controller("notesCtrl", function($scope, $http, notesFactory, $mdSidenav, $mdToast) {
			notesFactory.getNotes().then(function(data){
				$scope.notes = data.data;
			});

			$scope.openSidebar = function() {
				$mdSidenav("left").open();
			}

			$scope.closeSidebar = function() {
				$mdSidenav("left").close();
			}

			$scope.saveNote = function(note) {
				if (note) {
					note.posted = new Date();
					$scope.notes.push(note);
					$scope.closeSidebar();
					$mdToast.show(
						$mdToast.simple()
							.content("Note Created")
							.position('top, right')
							.hideDelay(3000)
					);
				}
			}
		});
})();
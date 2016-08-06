(function() {
	"use strict";

	angular
		.module("ngNotes")
		.controller("notesCtrl", function($scope, $http, notesFactory, $mdSidenav, $mdToast, $mdDialog, $mdSelect) {
			notesFactory.getNotes().then(function(data){
				$scope.notes = data.data;
				$scope.categories = getCategories($scope.notes);

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
					showToast("Note Saved", 3000);
				}
			}

			$scope.editNote = function(note) {
				$scope.editing = true;
				$scope.openSidebar();
				$scope.note = note;
			}

			$scope.saveEdit = function() {
				$scope.editing = false;
				$scope.note = {};
				$scope.closeSidebar();
				showToast("Note Edited", 3000);
			}

			$scope.deleteNote = function(event,note) {
				var confirm = $mdDialog.confirm()
								.title('You are about to delete ' + note.title + '?')
								.ok('Yes')
								.cancel('No')
								.targetEvent(event);

				$mdDialog.show(confirm).then(function(){
					var index = $scope.notes.indexOf(note);
					$scope.notes.splice(index,1);
				},function(){
					
				});

			}

			function showToast($content, $delay) {
				$mdToast.show(
					$mdToast.simple()
						.content($content)
						.position('top, right')
						.hideDelay($delay)
				);
			}

			function getCategories(notes) {
				var categories = [];
				angular.forEach(notes, function(item){
					angular.forEach(item.category, function(category){
						categories.push(category);	
					});
				});
				return _.uniq(categories);
			}

		});
})();
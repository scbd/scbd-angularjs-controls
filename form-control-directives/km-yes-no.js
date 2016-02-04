define(['app', 'text!./km-yes-no.html','../../jquery/jquery.min'], function(app, template,$) { 'use strict';
		//============================================================
		//
		//
		//============================================================
		app.directive('kmYesNo', [function() {
				return {
						restrict: 'EAC',
						template: template,
						replace: true,
						transclude: false,
						scope: {
								binding: '=ngModel',
								ngDisabledFn: '&ngDisabled',
								required: "@"
						},
						link: {},
						controller: ["$scope", function($scope) {
								//==============================
								//
								//==============================
								$scope.isRequired = function() {
										return $scope.required !== undefined && $.isEmptyObject($scope.binding);
								};
						}]
				};
		}]);
});
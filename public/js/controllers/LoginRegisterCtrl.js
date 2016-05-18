// public/js/controllers/LoginCtrl.js
angular.module('LoginRegisterCtrl', ['LoginService', 'RegisterService']).controller('LoginRegisterController', function($scope, loginService, registerService) {

    $scope.tagline = 'Nothing beats a pocket protector!';
    $scope.registerView = function() {
		$('.container').stop().addClass('active');
    };
    $scope.loginView = function() {
    	$('.container').stop().removeClass('active');    
    };
    $scope.login = function() {
		loginService.login($scope);
	},
	$scope.logout = function() {
		loginService.logout();
	};
	$scope.register = function() {
		registerService.create($scope);
	};

		
});
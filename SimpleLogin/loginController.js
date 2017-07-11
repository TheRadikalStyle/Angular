var app = angular.module("IniciarSesion", []);
app.controller("FirstController", function($scope, $window){
	$scope.username ="";
	$scope.password = "";

	$scope.Login = function(){
	if($scope.username == "David" && $scope.password == "Meep"){
		$window.alert("Hola " + $scope.username);
	}else{
		$window.alert("Usuario o contraseña incorrectos");
		}
	};
});
angular.module("MyFirstApp", [])
.controller("FirstController", function($scope){
	$scope.nombre = "";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
	{
		comentario: "Waka Waka Waka",
		username: "PacMan"
	},
	{
		comentario: "Glu Glu Glu",
		username: "Alguien tomando agua"
	}];
	$scope.agregarComentario = function(){
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	}
});
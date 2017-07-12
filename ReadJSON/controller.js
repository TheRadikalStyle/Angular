angular.module("JSONAPP", [])
.controller("GetController", function($scope, $http){
	$scope.jsonResponse = "";
	$scope.test ="";

	$http.get("https://jsonplaceholder.typicode.com/posts")
		.then(function(response){
			$scope.jsonResponse = response;
			console.log(jsonResponse);
			$scope.test = "Ola ke ace";
		});
});


//https://jsonplaceholder.typicode.com/posts
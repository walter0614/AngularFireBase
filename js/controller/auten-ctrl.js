app.controller("AutenCtrl", function($scope, Aut){
	$scope.session = function(user){
		Aut.session(user).then(function(){
			console.log("Start Session Correct!!!");
			$location.path("/buscar");
		},function(error){
			console.log(error);
		});
	}
	$scope.register = function(user){
		Aut.register(user).then(function(){
			console.log("Register Correct!!!");
		},function(error){
			console.log(error);
		});
	}
});
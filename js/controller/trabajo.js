'use strict'

app.controller("WorkCtrl",function($scope, FBURL, $firebaseArray, 
	$routeParams, $firebaseObject){


	var ref = new Firebase(FBURL);
	$scope.works = $firebaseArray(ref.child("trabajos"));
	var trabajoId = $routeParams.trabajoId;
	if (trabajoId) {
		$scope.workCheck = getWork(trabajoId);
	}
	function getWork(workId){
		return $firebaseObject(ref.child("trabajos").child(workId));
	}

	$scope.postWork = function(work){
		$scope.works.$add(work);
	}

	$scope.setWork = function(work){
		$scope.workCheck.$save(work);
	}
});

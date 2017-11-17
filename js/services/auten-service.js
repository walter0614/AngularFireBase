'use strict'

app.factory("Aut", function(FBURL, $firebaseAuth){
	var ref = new Firebase(FBURL);
	var aut = $firebaseAuth(ref);

	var Aut = {
		session: function (user){
			return aut.$authWithPassword({
				email: user.email,
				password: user.password
			});
		},
		register: function(user){
			/*return firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
			  var errorCode = error.code;
			  var errorMessage = error.message;
			});*/
			return aut.$createUser({
				email: user.email,
				password: user.password
			});
		}
	}
	return Aut;

});

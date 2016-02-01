define(['jquery'], function($){
return function () {
	function getloggedInUser() {
		return $.ajax({
			dataType:'json',
			type: 'GET',
			url: '/user'
		});
	}
	
	function logout() {
		return $.ajax({
			dataType:'json',
			type: 'POST',
			url: '/logout'
		});
	}
	
	return{
		getloggedInUser : getloggedInUser,
		logout : logout
	};
};
});
define(['jquery'], function($){
return function () {
	function all(user) {
		return $.ajax({
			dataType:'json',
			type: 'GET',
			url: '/premises'
		});
	}
	
	
	function get(id) {

	}
	
	
	return {
		all: all,
		get: get		
	};
};
});
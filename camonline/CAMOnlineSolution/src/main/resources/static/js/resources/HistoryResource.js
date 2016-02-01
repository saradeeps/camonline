define(['jquery'], function($){
return function () {
	function all(user) {
		return $.ajax({
			dataType:'json',
			type: 'GET',
			url: '/history'
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
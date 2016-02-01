define(['knockout',
		'resources/UserResource'
	], function(ko, UserResource){
return function(){
	var self = null;
	var userContext = new UserResource();
	var user = [];
	var authenticated = ko.observable(false);
	
	
	var logout = function(){
		console.log('logout start');
		userContext.logout().always(function(){
			authenticated(false);
			user = [];
			console.log('logout end');
			window.location.href="/";
			return true;
		});
	}
	
	var activate = function () {
		self = this;
		userContext.getloggedInUser().then(allCallbackSuccess,allCallbackfailure);
		};
		
		var allCallbackSuccess = function(response){
			user.name = response.name;
			authenticated(true);
			ko.applyBindings(self,document.getElementById("headerlogin"));
		};
		
		var allCallbackfailure = function(response){
		//	user.name = response.name;
			authenticated(false);
			ko.applyBindings(self,document.getElementById("headerlogin"));
		};
			
	return {
		user : user,
		authenticated:authenticated,
		logout : logout,
		activate : activate
	};
};
});

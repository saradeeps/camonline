define(['knockout',	
	'models/camHistory',	
	'resources/HistoryResource'
	], function(ko, history, HistoryResource){
	return function(){
		 var historyContext = new HistoryResource();
		 var historyList = ko.observableArray();
		 
	var activate = function(){
		self = this;
		HistoryResource.all().done(allCallbackSuccess);			
	};
	
	
	var allCallbackSuccess = function(response){
		historyList([]);
		response.data.forEach(function(item){
		//response.forEach(function(item){
			historyList.push(premise (item.camName, item.camDate, item.version, item.actionTaken, item.actionRequired));				
		});	
		
		ko.applyBindings(self,document.getElementById("updateCAM"));
		$('#updateCAM').modal('show');
	};
	
	return{
		historyList : historyList,
		activate : activate
	};
	};
});
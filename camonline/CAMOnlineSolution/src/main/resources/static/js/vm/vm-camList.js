define(['knockout',
	'models/premise',
	'models/camHistory',
	'resources/PremiseResource',
	'resources/UserResource',
	'resources/HistoryResource',
	'vm/vm-history'
	], function(ko, premise, history, PremiseResource, UserResource, HistoryResource, vm){

	return function(){
		 var self = null;
		 var dataContext = new PremiseResource();	
		 var historyContext = new HistoryResource();
		 var searchTerm = ko.observable('');
		 var entityList = ko.observableArray([]);
		 var premiseList = ko.observableArray([]);
		 var historyList = ko.observableArray();
		 
		 //Filter Observables
		 var selectedLE = ko.observable('');
		 var selectedPremise = ko.observable('');
		 var selectedAuditType = ko.observable('');
		 var selectedAuditSubType = ko.observable('');
		 var selectedAuditDate = ko.observable('');
		 var selectedAuditCriterion = ko.observable('');
		 var selectedAttainmentRisk = ko.observable('');
		 
		 var camTobeUpdated = ko.observable('');
		 var camDetailsSelectedNew = history('','','','','','','','','');
		 var camDetailsSelected = ko.observable(camDetailsSelectedNew);
				
		 var leList = ko.computed(function() {
		        var types = ko.utils.arrayMap(entityList(), function(item){ return item.leName})		       
		        return ko.utils.arrayGetDistinctValues(types).sort();
		    });	
		 
		 var auditTypeList = ko.computed(function() {
		        var types = ko.utils.arrayMap(entityList(), function(item){ return item.auditType})		       
		        return ko.utils.arrayGetDistinctValues(types).sort();
		    });	
		 
		 var auditSubTypeList = ko.computed(function() {
		        var types = ko.utils.arrayMap(entityList(), function(item){ return item.auditSubType})		       
		        return ko.utils.arrayGetDistinctValues(types).sort();
		    });	
		 
		 var auditDateList = ko.computed(function() {
		        var types = ko.utils.arrayMap(entityList(), function(item){ return item.auditDate})		       
		        return ko.utils.arrayGetDistinctValues(types).sort();
		    });	
		 
		 var auditCriterionList = ko.computed(function() {
		        var types = ko.utils.arrayMap(entityList(), function(item){ return item.auditCriterion})		       
		        return ko.utils.arrayGetDistinctValues(types).sort();
		    });	
		 
		 var attainmentRiskList = ko.computed(function() {
		        var types = ko.utils.arrayMap(entityList(), function(item){ return item.attainmentRisk})		       
		        return ko.utils.arrayGetDistinctValues(types).sort();
		    });	
		
		 var premiseFilterList = ko.computed(function() {
			 var premiseNames = [];		
			 if (!entityList()) {
					return [];
				}
			 if (!selectedLE()) {
					return [];
			 }
					
			 entityList().forEach(function(item){
				 if(item.leName == selectedLE())
					 premiseNames.push(item.premiseName);
		 		
		 	   });					 
		        return ko.utils.arrayGetDistinctValues(premiseNames).sort();
		    });	

		 
		 var filteredCAM = ko.computed(function () {
			if (!entityList()) {
				return [];
			}
			var filter = selectedLE();
			var premiseFilter = selectedPremise();
			var auditTypeFilter = selectedAuditType();
			var auditSubTypeFilter = selectedAuditSubType();
			var auditDateFilter = selectedAuditDate();
			var auditCriterionFilter = selectedAuditCriterion();
			var attainmentRiskFilter = selectedAttainmentRisk();
			
			var filtered = entityList();					
			
			/*if (!filter && !premiseFilter && !auditTypeFilter && !auditSubTypeFilter && !auditDateFilter && !auditCriterionFilter
			 * && !attainmentRiskFilter) {
				return entityList();
			}*/
			
			//filter data based on legal entity name
			if(filter){					
			filtered = filterCAMList(filtered, filter, 'leName');			
			}
			
			//filter data based on premise name
			if(premiseFilter){					
				filtered = filterCAMList(filtered, premiseFilter, 'premiseName');			
			}
					
			if(auditTypeFilter){	
				filtered = filterCAMList(filtered, auditTypeFilter, 'auditType');			
			}
			
			if(auditSubTypeFilter){	
				filtered = filterCAMList(filtered, auditSubTypeFilter, 'auditSubType');			
			}
			
			if(auditDateFilter){	
				filtered = filterCAMList(filtered, auditDateFilter, 'auditDate');			
			}
			
			if(auditCriterionFilter){	
				filtered = filterCAMList(filtered, auditCriterionFilter, 'auditCriterion');			
			}
			
			if(attainmentRiskFilter){	
				filtered = filterCAMList(filtered, attainmentRiskFilter, 'attainmentRisk');			
			}
			
			return filtered;
			});

		 var filterCAMList = function(array, filter, field){
			 var filtered = ko.utils.arrayFilter(array, function (cam) {
				console.log(filter);
				 var filterProp = ko.unwrap(cam[field]);
				 if (filterProp.indexOf(filter) !== -1){
					return true;
				};
				return false;
			 });
			return filtered;
		 };		
	
		 var getCamDetails = function(data){
			 historyContext.all().done(function(response){
				console.log(response.data);
			     camDetailsSelected(clone(response.data));
			     $('#updateCAM').modal('show');	
			 
			 });
				 	
		    };
		    
		    var clone = function (item) {
		    	
		    	return history(item.camName,item.camDate,item.version,item.actionTaken,item.actionRequired, item.auditDate,item.caseId,
		    			item.references, item.finding, item.guidance, item.auditCriterion, item.attainmentRisk, item.responseDate, item.actionResponse, item.responseSubmittedDate);
		    	
		    	};
	    
	    var populateHistory = function(data){
	    	console.log(data);
	    	vm.activate();
	    };
		 
		var getPremiseDetails = function(data){
			window.location.href = "/audit/" + data.leName;
		};


		var activate = function(){
			self = this;
			dataContext.all().done(allCallbackSuccess);			
		};
		
		
		var allCallbackSuccess = function(response){
			entityList([]);
			response.data.forEach(function(item){
			//response.forEach(function(item){
				entityList.push(premise (item.leName, item.premiseName, item.auditType, item.auditSubType, item.auditDate, item.auditCriterion, item.attainmentRisk));				
			});	
			ko.applyBindings(self,document.getElementById("acontainer"));
		};
		
		return {
			entityList : filteredCAM,
			premiseList : premiseFilterList,
			auditTypeList : auditTypeList,
			auditSubTypeList : auditSubTypeList,
			auditDateList : auditDateList,
			auditCriterionList : auditCriterionList,
			attainmentRiskList : attainmentRiskList,			
			historyList : historyList,
			camDetailsSelected : camDetailsSelected,
			leList : leList,
			selectedLE : selectedLE,
			selectedPremise : selectedPremise,
			selectedAuditType : selectedAuditType,
			selectedAuditSubType : selectedAuditSubType,
			selectedAuditDate : selectedAuditDate,
			selectedAuditCriterion : selectedAuditCriterion,
			selectedAttainmentRisk : selectedAttainmentRisk,
			searchTerm : searchTerm,
			camTobeUpdated : camTobeUpdated,
			getCamDetails : getCamDetails,
			getPremiseDetails : getPremiseDetails,
			populateHistory : populateHistory,
			activate : activate
		};

		};
		
		});
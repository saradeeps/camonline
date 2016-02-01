define([],function(){
return function(camName, camDate, version, actionRequired, actionTaken, auditDate, caseId, references, finding, guidance, auditCriterion,
		attainmentRisk,responseDate, actionResponse, responseSubmittedDate){
	var 
		_camName = camName,
		_camDate = camDate,
		_version = version,
		_actionRequired = actionRequired,
		_actionTaken = actionTaken,		
		_auditDate = auditDate,
		_responseDate = responseDate,
		_attainmentRisk = attainmentRisk,
		_caseId = caseId,
		_auditCriterion = auditCriterion,
		_references = references,		
		_finding = finding,
		_guidance = guidance,
		_actionResponse = actionResponse,
		_responseSubmittedDate = responseSubmittedDate
	;

	return{
		camName : _camName,
		camDate : _camDate,
		version : _version,
		actionRequired : _actionRequired,
		actionTaken : _actionTaken,
		actionResponse : _actionResponse,
		auditDate : _auditDate,
		responseDate : _responseDate,
		attainmentRisk : _attainmentRisk,
		caseId : _caseId,
		auditCriterion : _auditCriterion,
		references : _references,
		guidance : _guidance,
		finding : _finding,
		responseSubmittedDate : _responseSubmittedDate
	};
};
});
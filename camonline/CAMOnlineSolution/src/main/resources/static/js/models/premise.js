define([],function(){
return function(leName, premiseName, auditType, auditSubType, auditDate, auditCriterion, attainmentRisk){
	var 
		_leName = leName,
		_premiseName = premiseName,
		_auditType = auditType,
		_auditSubType = auditSubType,
		_auditDate = auditDate,
		_auditCriterion = auditCriterion,
		_attainmentRisk = attainmentRisk			
	;

	return{
		leName : _leName,
		premiseName : _premiseName,
		auditType : _auditType,
		auditSubType : _auditSubType,
		auditDate : _auditDate,
		auditCriterion : _auditCriterion,
		attainmentRisk : _attainmentRisk
	};
};
});
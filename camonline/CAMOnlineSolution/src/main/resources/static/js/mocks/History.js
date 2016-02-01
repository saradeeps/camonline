define(['jquery',
		'mockjson',
		'mockjax'], function($,mockJSON,mockjax){
	
	$.mockJSON.data.CAMNAME = [
'Corrective Action Monitoring','yfgejfg gdhsduifyweiuy duyfwdifywiufhiu'];

$.mockJSON.data.CAMDATE = [
'26-05-2015', '13-10-2014', '12-12-2012', '09-08-2014'];

$.mockJSON.data.VERSION = [
'v1','v2','v3'];

$.mockJSON.data.ACTIONREQUIRED	= [
'Corrective Action Monitoring','yfgejfg gdhsduifyweiuy duyfwdifywiufhiu'];

$.mockJSON.data.ACTIONTAKEN	= [
'Replaced','Action Taken'];

$.mockJSON.data.CASEID = [
'MC_CorrectiveActionMonitoring_000000180008', 'MC_CorrectiveActionMonitoring_0000001800010', 'MC_CorrectiveActionMonitoring_0000001800029',
'MC_CorrectiveActionMonitoring_000000180005'];

$.mockJSON.data.AUDITDATE = [
'16-08-2015', '17-11-2014', '22-12-2015', '19-08-2014'];


$.mockJSON.data.REFERENCES = ['Ref No 123', 'Ref No 234', 'Ref No 250'];

$.mockJSON.data.FINDING = ['Reservoirs and exceptions trays in the automated packaging device are filled safely and accurately, and required documentation is maintained',
                           'Medicines dispensed by the automated packaging device are checked for accuracy and appropriate labelling, in accordance with regulatory and professional requirements'];

$.mockJSON.data.GUIDANCE = ['GUIDE_001','GUIDE_008'];

$.mockJSON.data.AUDITCRITERION = ['MedicineControl-Criterion 1.1.0','MedicineControl-Criterion 1.2.0'];

$.mockJSON.data.ATTAINMENTRISK = ['High','Low','Medium'];

$.mockJSON.data.RESPONSEDATE = ['12-3-2016', '4-5-2016'];

$.mockJSON.data.ACTIONRESPONSE = [''];

$.mockJSON.data.RESPONSESUBMITTEDDATE = ['02-01-2016','15-01-2016'];

$.mockjax({ 
	url: '/history',
	type: 'GET',
	dataType: 'json',
	responseTime: 750,
	status:200,
	responseText: $.mockJSON.generateFromTemplate({
		'data': {
		'id': 100,
		'camName': '@CAMNAME',
		'camDate': '@CAMDATE',
		'version': '@VERSION',
		'actionRequired' : '@ACTIONREQUIRED',
		'actionTaken' : '@ACTIONTAKEN',
		'caseId' : '@CASEID',
		'auditDate' : '@AUDITDATE',
		'references' : '@REFERENCES',
		'finding' : '@FINDING',
		'guidance' : '@GUIDANCE',
		'auditCriterion': '@AUDITCRITERION',
		'attainmentRisk': '@ATTAINMENTRISK',
		'responseDate' : '@RESPONSEDATE',
		'actionResponse': '@ACTIONRESPONSE',
		'responseSubmittedDate': '@RESPONSESUBMITTEDDATE'
		}
	})
});


});



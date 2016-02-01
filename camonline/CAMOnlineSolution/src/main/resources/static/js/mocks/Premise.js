define(['jquery',
		'mockjson',
		'mockjax'], function($,mockJSON,mockjax){
$.mockJSON.data.LENAME = [
'LE SP 09','LE SP 01','LE SP 08','LE SP 04','LE SP 07'];

$.mockJSON.data.PREMISENAME = [
'Newlands Pharmacy', 'Thorndon Pharmacy', 'Freyburg', 'Hutt Central Pharmacy'];

$.mockJSON.data.AUDITTYPE = [
'Authority (Depot)','Authority (Emergency Kit)','Authority||Deal','Authority (Emergency Kit)||Authority (Emergency Kit)||Authority'];

$.mockJSON.data.AUDITSUBTYPE = [
'Authority (Depot)','Authority (Emergency Kit)','Authority||Deal','Authority (Emergency Kit)||Authority (Emergency Kit)||Authority'];

$.mockJSON.data.AUDITDATE	= [
'28-12-2015','12-10-2015','16-11-2015'];

$.mockJSON.data.AUDITCRITERION	= [
'	CRITERIA_1','CRITERIA_25', 'CRITERIA_20', 'CRITERIA_15'];

$.mockJSON.data.ATTAINMENTRISK	= [
'HIGH','Medium', 'Low'];

$.mockjax({ 
	url: '/premises',
	type: 'GET',
	dataType: 'json',
	responseTime: 750,
	status:200,
	responseText: $.mockJSON.generateFromTemplate({
		'data|30-30': [{
		'id|1-100': 0,
		'leName': '@LENAME',
		'premiseName': '@PREMISENAME',
		'auditType': '@AUDITTYPE',
		'auditSubType' : '@AUDITSUBTYPE',
		'auditDate' : '@AUDITDATE',
		'auditCriterion': '@AUDITCRITERION',
		'attainmentRisk' : '@ATTAINMENTRISK'
		}]
	})
});
});
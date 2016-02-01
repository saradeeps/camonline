define([
//LIBRARIES
	'bootstrap',
	'knockout',
//VIEWMODEL
	'vm/vm-camList',
	'vm/vm-index',
//MOCKS
	'mocks/Premise',
	'mocks/History'
	], function(bs, ko,ViewModel,indexView) {

	var vm = new ViewModel();
	var vmindex = new indexView();
    vm.activate();
    vmindex.activate();	
});
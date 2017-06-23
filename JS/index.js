$(function() {
	$('#userPoliceId').setMustWrite();
	$('#newUserName').setMustWrite();
	$('#iPhone').setMustWrite();
	$('#tall').setMustWrite();	
	$('#sureBtn').click(function(){
		$.checkMustWrite();
	});
});
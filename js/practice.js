$(document).ready(function(){
	$('.popover-dismiss').popover({
		trigger: 'focus'
	});
	$('#chameleon').click(function(){
		$(this).toggleClass('green');
	});
	$('#pop').dblclick(function(){
		$(this).fadeOut('fast');
	});
});
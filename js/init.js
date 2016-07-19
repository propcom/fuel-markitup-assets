$(document).ready(function() {
	$('textarea.markitup').markItUp(myTextileSettings);

	$('.markItUpButton1 a').html('<i class="icon-link"></i>');
	$('.markItUpButton2 a').html('<i class="icon-italic"></i>');
	$('.markItUpButton3 a').html('<i class="icon-bold"></i>');
	$('.markItUpButton4 a').html('<i class="icon-strikethrough"></i>');
	$('.markItUpButton5 a').html('<i class="icon-table"></i>');
});
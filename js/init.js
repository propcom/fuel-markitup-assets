var markitupInit = {
	init: function() {
		$('.markitup:not(.markItUpEditor)').markItUp(myTextileSettings);

		$('.markItUpButton1 a').html('<i class="icon-link"></i>');
		$('.markItUpButton2 a').html('<i class="icon-italic"></i>');
		$('.markItUpButton3 a').html('<i class="icon-bold"></i>');
		$('.markItUpButton4 a').html('<i class="icon-strikethrough"></i>');
	}
}
$(document).ready(function() {
	markitupInit.init();
});

$('#sections-sortable').on('new-section.pagemanager', function() {
	markitupInit.init();
});
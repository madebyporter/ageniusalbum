$(document).ready(function() {
	$(".sc-player").append($('.genius_download'));
});


$(document).ready(function(){
	$('#home').parallax("50%", 0.5, 0.1, true);
});

$(document).ready(function() {
	$('.genius_download').addClass('hidden');
	$.waypoints.settings.scrollThrottle = 30;
	$('.marketing').waypoint(function(event, direction) {
		$('.genius_download').toggleClass('hidden', direction === "up");
	}, {
		offset: '-50%'
	}).find('.marketing').waypoint(function(event, direction) {
		$(this).parent().toggleClass('sticky', direction === "down");
		event.stopPropagation();
	});
	
	$('.sc-scrubber').addClass('hidden');
	$.waypoints.settings.scrollThrottle = 30;
	$('.marketing').waypoint(function(event, direction) {
		$('.sc-scrubber').toggleClass('hidden', direction === "up");
	}, {
		offset: '-50%'
	}).find('.marketing').waypoint(function(event, direction) {
		$(this).parent().toggleClass('sticky', direction === "down");
		event.stopPropagation();
	});
});
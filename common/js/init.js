$(document).ready(function() {

  var track1 = "Since I Found You";
  var track2 = "California Dreaming";
  var track3 = "Leave You Behind";

	//Load Player
	$.scPlayer.defaults.onDomReady = function(){
  	$('.sc-player').scPlayer();
	};

  $(document).bind('onPlayerInit.scPlayer', function(event){
    $('.sc-player').show();
    $('.loading-player').addClass('auto_off');
    $('.start-player').show();
    $('.genius_download').show();
    $('.scroll_map .track1').addClass('map_active');
    $.scrollTo($('.map_active'), 600 );
    $('.sc-player .sc-trackslist li').click(function(){
      $('.help_icon').removeClass('auto_on');
    });
    $.stop();
  });

  $(document).bind('onMediaEnd.scPlayer', function(event){
    $('.scroll_map div').removeClass('map_active');
  });

  $('.start-player a').click(function(){
    $.scrollTo($('.map_active'), 600 );
  });

  $(document).bind('onPlayerPlay.scPlayer', function(event, track){
    $('.scroll_map div').removeClass('map_active');
    $('.sc-trackslist .active a:contains("Since I Found You")').click(function(){
      $('.scroll_map .track1').addClass('map_active');
      $.scrollTo($('.map_active'), 600 );
      $.stop();
    });
    $('.sc-trackslist .active a:contains("California Dreaming")').click(function(){
      $('.scroll_map .track2').addClass('map_active');
      $.scrollTo($('.map_active'), 600 );
      $.stop();
    });
  });

  $(document).bind('onPlayerPause.scPlayer', function(event){
  });

  // Hide Hint tab while loading player
  $('.sc-player').hover(function(){
    $('.help_icon').toggleClass('auto_on');
  });

	//Track Info
	$('.track_info_button').click(function(){
    if ($('.sc-trackslist .active a:contains("Since I Found You")').length > 0) {

      $(".track_info_viewer li").removeClass("show_this");
      $(".track_info_viewer li").removeClass("open");
      $(".track-since_i_found_you").addClass("show_this");
      $(".track-since_i_found_you").addClass("open").toggleClass("open");
      console.log(".track-since_i_found_you");
    }
	});

  $('.track_info_button').click(function(){
    if ($('.sc-trackslist .active a:contains("California Dreaming")').length > 0) {
      $(".track_info_viewer li").removeClass("open");
      $(".track_info_viewer li").removeClass("show_this");
      $(".track-california_dreaming").toggleClass("show_this");
      $(".track-california_dreaming").toggleClass("open");
    }
  });

	//Download Modal
	$('.marketing_download_button').click(function(){
		$('download_modal').modal(show);
		console.log(modal);
	});

	//Help Modal
	$('.help_icon').click(function(){
		$('#help_modal').modal();
	});

	//Popover

	$('.sc-player.playing li.active').hover(function(){
    if(condition == 'true'){
        $(this).popover({placement:'top', content: "Click to pause music"});
    }
    else {
        doThis(someVariable);
    }
	});

	// $('.sc-player.playing li.active').hover(function(){
	// 	$(this).popover({placement:'top', content: "Click to pause music"});
	// });

	//BG Parallax
	$('#home').parallax("50%", 0, 0.1, true);

	//Download button Waypoints
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
	
	//Player Controls Waypoints
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

	//Open external links in new tab
	$("a[href^=http]").each(function(){
    if(this.href.indexOf(location.hostname) == -1) {
      $(this).attr({
        target: "_blank",
        title: "Opens in a new window"
      });
    };
  });
});
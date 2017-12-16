$(document).ready(function() {
	// Header Scroll
	$('#fixedbutton').hide();
	$(window).on('scroll', function() {
		var scroll = $(window).scrollTop();

			   if (scroll >= 60) {
					$('#fixedbutton').show();
					} 
					else 
					{
						$('#fixedbutton').hide();
					}		
	});

	// Fancybox
	$('.work-box').fancybox();

	// Flexslider
	$('.flexslider').flexslider({
		animation: "fade",
		directionNav: false,
	});

	// Page Scroll
	var sections = $('section')
		nav = $('nav[role="navigation"]');

	$(window).on('scroll', function () {
	  	var cur_pos = $(this).scrollTop();
	  	sections.each(function() {
	    	var top = $(this).offset().top - 76
	        	bottom = top + $(this).outerHeight();
	    	if (cur_pos >= top && cur_pos <= bottom) {
	      		nav.find('a').removeClass('active');
	      		nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
	    	} 
	  	});
	});
	nav.find('a').on('click', function () {
	  	var $el = $(this)
	    	id = $el.attr('href');
		$('html, body').animate({
			scrollTop: $(id).offset().top - 75
		}, 500);
	  return false;
	});

	// Mobile Navigation
	$('.nav-toggle').on('click', function() {
		$(this).toggleClass('close-nav');
		nav.toggleClass('open');
		return false;
	});	
	nav.find('a').on('click', function() {
		$('.nav-toggle').toggleClass('close-nav');
		nav.toggleClass('open');
	});


});
/*$("#banner_container").hover(function(){
	$('body').css('overflow','auto');
    $('body').css('scroll','yes');
});*/
$("#banner_container").mouseenter(function(){
	$('body').css('overflow','auto');
    $('body').css('scroll','yes');
});

$('#mobile_start_btn').click(function() {      // When arrow is clicked
    $('body').css('overflow','auto');
    $('body').css('scroll','yes');
});   

$('#fixedbutton').click(function() {      // When arrow is clicked
    $('body,html').animate({
        scrollTop : 0                       // Scroll to top of body
    }, 500);
});            

$("#register_icon").click(function(){
	$('#register_modal').modal('toggle');
})
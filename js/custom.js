(function ($) {
                
    // Navigation scrolls
    $('.navbar-nav li a').bind('click', function(event) {
        $('.navbar-nav li').removeClass('active');
        $(this).closest('li').addClass('active');
        var $anchor = $(this);
        var nav = $($anchor.attr('href'));
        if (nav.length) {
        $('html, body').stop().animate({				
            scrollTop: $($anchor.attr('href')).offset().top				
        }, 1500, 'easeInOutExpo');
        
        event.preventDefault();
        }
    });
    
    // Add smooth scrolling to all links in navbar
    $(".navbar a, a.mouse-hover, .overlay-detail a").on('click', function(event) {
        event.preventDefault();
        var hash = this.hash;
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 900, function(){
            window.location.hash = hash;
        });
    });
})(jQuery);

function userlogin(){
	var email = $("#loginid").val();
	var pwd = $("#loginpsw").val();
	if (email == "" && pwd == "")
	{
		$("#loginid").addClass("pp_error");
		$("#loginpsw").addClass("pp_error");		
	}
	else if(email == "")
	{
		$("#loginid").addClass("pp_error");
	}
	else if(pwd == "")
	{
		$("#loginpsw").addClass("pp_error");		
	}
	$('input').focus(function(){
		$(this).removeClass("pp_error");
	});
}
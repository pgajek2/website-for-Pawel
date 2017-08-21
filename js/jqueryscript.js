 $(document).ready(function() {
                var stickyNavTop = $('.nav').offset().top;

                var stickyNav = function(){
                    var scrollTop = $(window).scrollTop();
                    if (scrollTop > stickyNavTop) { 
                            $('.nav').addClass('sticky');
                        } else {
                            $('.nav').removeClass('sticky'); 
                        }
                };
                stickyNav();

                $(window).scroll(function() {
                    stickyNav();
                });
            });
		
		jQuery(function($)
		{
			//zresetuj scrolla
			$.scrollTo(0);
			
			$('#link1').click(function() { $.scrollTo($('#home'), 500); });
			$('#link2').click(function() { $.scrollTo($('#help'), 500); });
			$('#link3').click(function() { $.scrollTo($('#about'), 500); });
			$('#link4').click(function() { $.scrollTo($('#contact'), 500); });
		}
		);
		
		//pokaż podczas przewijania
		$(window).scroll(function()
		{
			if($(this).scrollTop()>300) $('.scrollup').fadeIn();
			else $('.scrollup').fadeOut();		
		}
		);
	
	
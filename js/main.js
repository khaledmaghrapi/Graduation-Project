$(document).ready(function()
{
	 "use strict";
	 $('.carousel-inner').height($(window).height());
	 $("html").niceScroll();

	 /* transperant of nav bar*/
	 $(window).scroll(function()
		{
			if($(window).scrollTop()>= $('.navbar').height())
			{
				$('.navbar').addClass('navbar_transparent');
			}
			else
			{
				$('.navbar').removeClass('navbar_transparent');
			} 
		});
});
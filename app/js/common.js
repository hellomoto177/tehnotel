

$(document).ready(function() {

$(".loader_inner").fadeOut();
$(".loader").delay(400).fadeOut("slow");

$(".splash-center h1").animated("fadeIn", "fadeOutUp");
$(".splash-center .buttons").animated("fadeInUp", "fadeOutDown");

	// Валидация контактной формы
	$("input,select,textarea").not("[type=submit]").jqBootstrapValidation();

	$("a[href*='#']").mPageScroll2id();

	$("section h1").animated("fadeInUp", "fadeOutDown");
	$(".s-contacts .map").animated("fadeInUp", "fadeOutDown");
	$(".s-contacts .contact-info").animated("fadeInRight", "fadeOutDown");
	$(".from-left").animated("fadeInLeft", "fadeOutDown");
	$(".from-right").animated("fadeInRight", "fadeOutDown");
	$(".from-down").animated("fadeInUp", "fadeOutDown");

	// $(".s_about_photo").animated("flipInX", "fadeOutDown");
	// $(".s_about_person").animated("fadeInRight", "fadeOutDown");



	function menuShow(){
	    if ($(window).width() >= '768'){
	    	$('.toggle_mnu').hide();
	        $('#main-menu').removeClass('menu-mini');
	        $('#main-menu').removeClass('hidden');
	        $('#main-menu').addClass('menu');
	        $('#main-menu').css('display', 'block');

	    }
	    if ($(window).width() <= '768') {
	    	$('.toggle_mnu').show();
	        $('#main-menu').removeClass('menu');
	        $('#main-menu').removeClass('hidden');
	        $('#main-menu').addClass('menu-mini');
	        $('#main-menu').css('display', 'none');
	    }
	}
	$(window).on('load resize',menuShow);
	menuShow();
	
	$('.toggle_mnu').click(function(){
		$('#main-menu').fadeToggle(200);
	});





	// Цели для Яндекс.Метрики и Google Analytics
	$(".count_element").on("click", (function() {
		ga("send", "event", "goal", "goal");
		yaCounterXXXXXXXX.reachGoal("goal");
		return true;
	}));

	// SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	// Аякс отправка форм
	// Документация: http://api.jquery.com/jquery.ajax/
	$("#form").submit(function() {
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: $(this).serialize()
		}).done(function() {
			alert("Спасибо за заявку!");
			setTimeout(function() {
				
				$("#form").trigger("reset");
			}, 1000);
		});
		return false;
	});

	// Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

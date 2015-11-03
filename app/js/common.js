
$('#formx').submit(function(e){
	e.preventDefault();
	var data = $('#formx').serialize();
	// $.post( "/send.php", function( data ) {
	//   $( ".result" ).html( data );
	// });
	$('.list-1').hide();
	$('.list-2').show();
});

$('.send-close').click(function(){
	$('.mfp-close').click();
});
$(document).ready(function() {


	$(".popup_content").magnificPopup({
		type:"inline",
		midClick: true
	});


// Отправка заявки на обратный звонок


$('.popup-with-form').magnificPopup({
		type: 'inline',
		preloader: false,
		focus: '#name',
		mainClass: 'my-mfp-zoom-in',

		// When elemened is focused, some mobile browsers in some cases zoom in
		// It looks not nice, so we disable it:
		callbacks: {
			beforeOpen: function() {
				$('.list-2').hide();
				$('#callback-form input').val('');
				$('.list-1').show();
				if($(window).width() < 700) {
					this.st.focus = false;
				} else {
					this.st.focus = '#name';
				}
			}
		}
	});






	// $('.popup-with-form').magnificPopup({
 //      type: 'iframe',
 //      preloader: false,
 //      focus: '#name',
 //      fixedContentPos: true,
	//    fixedBgPos: true,	

 //      // When elemened is focused, some mobile browsers in some cases zoom in
 //      // It looks not nice, so we disable it:

 //    });

	var menu_header = new Waypoint({
	  element: document.getElementById('splash-overlay'),
	  handler: function() {
	  	$('.menu-item-services').removeClass('active');
	  	$('.menu-item-about-us').removeClass('active');
	  	$('.menu-item-contacts').removeClass('active');
	  },
	  offset: -100
	});
	var menu_services = new Waypoint({
	  element: document.getElementById('services'),
	  handler: function(direction) {
	  	// console.log(direction);
	  	
	  	$('.menu-item-services').addClass('active');
	  	$('.menu-item-about-us').removeClass('active');
	  	$('.menu-item-contacts').removeClass('active');
	  },
	  offset: 90
	});

	var menu_abous_us = new Waypoint({
	  element: document.getElementById('about-us'),
	  handler: function(direction) {
	  	if(direction == 'up') {
	  		$('.menu-item-services').addClass('active');
	  		$('.menu-item-about-us').removeClass('active');
	  		$('.menu-item-contacts').removeClass('active');	
	  	}
	  	else {
		  	$('.menu-item-about-us').addClass('active');
		  	$('.menu-item-services').removeClass('active');
		  	$('.menu-item-contacts').removeClass('active');
	  	}
	  },
	  offset: 90
	});

	var menu_contacts = new Waypoint({
	  element: document.getElementById('contacts'),
	  handler: function(direction) {
	  	if(direction == 'up') {
			$('.menu-item-about-us').addClass('active');
		  	$('.menu-item-services').removeClass('active');
		  	$('.menu-item-contacts').removeClass('active');
	  	}
	  	else {
		  	$('.menu-item-contacts').addClass('active');
		  	$('.menu-item-about-us').removeClass('active');
		  	$('.menu-item-services').removeClass('active');
	  	}
	  },
	  offset: 90
	});

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
	$('#main-menu a').click(function(){
		if($('#main-menu').hasClass('menu-mini')) {
			$('#main-menu').css('display', 'none');
		}
		// console.log('test');
	});
	$(window).on('load resize',menuShow);
	menuShow();
	
	$('.toggle_mnu').click(function(e){
		$('#main-menu').fadeToggle(200);
		e.preventDefault();
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

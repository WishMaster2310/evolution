Array.max = function( array ){
    return Math.max.apply( Math, array );
};
 

// autoheight for b-promoproduct__content

function promoproductHeight ()  {
	var arr = [];

	$('.b-promoproduct__content').each(function() {
		resetPromoproductHeight ()
		var a = $(this).height();
		arr.push(a);
	});

	$('.b-promoproduct__content').height(Array.max(arr))

}

function resetPromoproductHeight () {
	$('.b-promoproduct__content').height('auto');
}

// small animations for icons

function advantagesFrictions ()  {
	setInterval(function() {

		var $that = $('.b-advantages__item').eq(Math.floor(Math.random() * 4));

		$that.addClass('i-animated');
		$('.b-advantages__item').not($that).removeClass('i-animated');
	}, 3000)
}


// animate functions for hero screenshots

function heroScreens () {
	var $el = $('.b-hero__screens');
	var $s1 = $el.find('.b-hero__screens-item_1');
	var $s2 = $el.find('.b-hero__screens-item_3');
	$.Velocity.hook($el, "translateY", "100%");
	$.Velocity.hook($s1, "translateX", "90px");
	$.Velocity.hook($s2, "translateX", "-90px");
	$el.css('display', 'block');

	$el.velocity({
		translateY: 0
	}, {
		duration: 1000,
		begin: function() {

			setTimeout(function() {
				$s1.velocity({
					translateX: 0
				}, 900)

				$s2.velocity({
					translateX: 0
				}, 900)
			}, 300)
		}
	})
};



function initCarousel ()  {
	var carousel = $('.b-slider');

	var timer;
	
	carousel.owlCarousel({
		items: 1,
		loop: true,
		autoplay: true
	});

	carousel
		.on('changed.owl.carousel', function(event) {
			$('.b-slider__menu-item').removeClass('active');
		    $('.b-slider__menu-item').eq(event.page.index).addClass('active');
		})

		.on('mouseenter', function() {
			carousel.trigger('stop.owl.autoplay');
			clearTimeout(timer);
		})

		.on('mouseleave', function() {

			timer = setTimeout(function() {
				carousel.trigger('play.owl.autoplay');
			}, 3000);
			
		});

	$('.b-slider__menu-item--link').on('click', function(e) {
		e.preventDefault();
		var slide = $(this).data('slide') - 1;
		$(this).closest('.b-slider__menu-item').addClass('active').siblings().removeClass('active');
		carousel.trigger('to.owl.carousel', [slide, 300]);
	});
}


function initFeedGallery () {
	var feedGallery = $('.b-feedGallery'); 
	var timer;

	feedGallery.owlCarousel({
		items: 1,
		margin: 20,
		dotsEach: true,
		loop: true,
		autoplay: true
	});

	feedGallery
		.on('mouseenter', function() {
			feedGallery.trigger('stop.owl.autoplay');
			clearTimeout(timer);
		})

		.on('mouseleave', function() {
			timer = setTimeout(function() {
				feedGallery.trigger('play.owl.autoplay');
			}, 3000);
		});
}


function initYaMap () {
	var mmpa;
	function init()
	{
	    mmap= new ymaps.Map('map',
	    {
	        center: [56.833171, 60.599073],
	        controls: ['zoomControl', 'fullscreenControl'],
	        zoom: 16
	    });

	    myPlacemark = new ymaps.Placemark([56.833171, 60.599073], {
            hintContent: 'Екатеринбург, 8 марта 12а'
        }, {
        	preset: 'islands#redIcon'
        });

         mmap.geoObjects.add(myPlacemark);
         mmap.behaviors.disable("scrollZoom");
	}

	ymaps.ready(init);
}

function initClientsGallery () {
	var clientsGallery = $('.b-clients');
	var timer;

	clientsGallery.owlCarousel({
		items: 4,
		slideBy: 4,
		margin: 50,
		autoplay: true,
		touchDrag: false,
		mouseDrag: false,
		loop: true,
		responsive : {
		    0 : {
		        items: 1,
				slideBy: 1,
				margin: 10
		    },
		    480 : {
		        items: 2,
				slideBy: 2,
				margin: 20
		    },
		    768 : {
		        items: 3,
				slideBy: 3,
				margin: 30
		    },
			1000 : {
		        items: 4,
				slideBy: 4,
				margin: 50
		    }
		}
	});

	clientsGallery
		.on('changed.owl.carousel', function(event) {
			var p = Math.floor(( (event.page.index + 1) / event.page.count) * 100) + '%';
			$('.b-clients__progress-bar').css('width', p);
		})
		.on('mouseenter', function() {
			clientsGallery.trigger('stop.owl.autoplay');
			clearTimeout(timer);
		})

		.on('mouseleave', function() {

			timer = setTimeout(function() {
				clientsGallery.trigger('play.owl.autoplay');
			}, 3000);

		});
}

$(document).ready(function() {
	

	setTimeout(function() {
		promoproductHeight ();
		heroScreens (); 
		advantagesFrictions ();

	}, 300);

	setTimeout(function() {
		initYaMap ()
	}, 1000);

	initCarousel ();
	initFeedGallery ();
	initClientsGallery ();



	$(window).on('resize', function() {

		if ($(window).width() >= 767) {
			setTimeout(function() {
				promoproductHeight ();
			}, 200)
		} else {
			resetPromoproductHeight ()
		}
	});

	$('.j-tel').mask("+ 7 (999) 999-99-99");

	$('.j-submit').on('click', function(e) {
		e.preventDefault();
		var form = $(this).closest('.b-form__data');
		var wrapper = $(this).closest('.b-form');
		var that = $(this);

		// TO DO: replace test route jsonstub.com && setRequestHeaders data

		if (form.find('.j-tel').val()) {
			$.ajax({
				type: 'POST',
			    url: 'http://jsonstub.com/formroute/',
			    contentType: 'application/json',
			    data: form.serialize(),
			    beforeSend: function (request) {
			        request.setRequestHeader('JsonStub-User-Key', 'e0564db0-786e-44a8-aa8a-b8de6fe78823');
			        request.setRequestHeader('JsonStub-Project-Key', 'dc78b345-4e21-4eaf-bf37-a6656dc93a4b');
			    }
			}).done(function() {
				wrapper.addClass('i-active');
				$(that).attr('disabled', true).addClass('i-disabled');
			}).fail(function() {
				alert('При отправке формы произошла ошибка \nПожалуйста, повторите попытку позже.')
			})
		} else {
			form.find('.j-tel').focus();
		}
	});


	$('.j-modal').on('click', function(e) {
		e.preventDefault();

		var target = $(this).data('target');
		$(target).arcticmodal();
	});

	$('.b-modal__close').on('click', function(e) {
		e.preventDefault();
		$.arcticmodal('close');
	});

	$('.j-menuToggle').on('click', function() {
		$('.b-sitemenu__wrapper').toggleClass('b-sitemenu__wrapper_active')
	});
});
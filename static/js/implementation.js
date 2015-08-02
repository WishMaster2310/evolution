
var isImplementAnimation = false;
function showImplementItem (item) {
    var counter = item.find('.j-counter');

    item.addClass('b-diagram_animated');

    setTimeout(function() {
        $(counter).prop('Counter',0).animate({
            Counter: $(counter).text()
        }, {
            duration: 1500,
            step: function (now) {
                $(counter).text(Math.ceil(now));
            }
        });
    }, 500)
}

function showImplements ()  {
    var i = 0, len = $('.b-diagram').length, interval;
     $('.b-diagram__wrapper').animate({'min-height': $('.b-diagram__wrapper').outerHeight() + 50}, 700);
    
    interval = setInterval(function() {
        showImplementItem ($('.b-diagram').eq(i));
        i = i + 1;

        if (i > len ) {
            clearInterval(interval);
           
            
        };
    }, 200)
}


$(document).ready(function() {

    $(window).on('scroll', function() {

        if ($(window).scrollTop() >= $('.b-diagram__section').offset().top - ($(window).height() - 200) && !isImplementAnimation) {
            showImplements ();
            isImplementAnimation = true;
        };
    });

    $('.b-diagram').on('mouseenter', function() {

        if (isImplementAnimation) {

            var t = $(this).find('.b-diagram__data-info');
            t.stop().slideDown(400)
        };
        
    }).on('mouseleave', function() {
        if (isImplementAnimation) {

            var t = $(this).find('.b-diagram__data-info');
            t.stop().slideUp(400)
        };
    })
});
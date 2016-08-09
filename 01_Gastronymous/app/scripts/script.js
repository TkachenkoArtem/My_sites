/*BACK-TO-TOP*/

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = function() {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };

    backToTop();
    $(window).on('scroll', function() {
        backToTop();
    });
    $('#back-to-top').on('click', function(e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

/*STICKYNAV*/

window.onscroll = changePos;

function changePos() {
    var nav = document.getElementById('nav');
    if (window.pageYOffset > 200) {
        nav.style.position = 'absolute';
        nav.style.top = pageYOffset + 'px';
    } else {
        nav.style.position = "";
        nav.style.top = "";
    }
}

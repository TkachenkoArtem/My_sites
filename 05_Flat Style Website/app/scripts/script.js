/*jshint esversion: 6 */

/*BACK-TO-TOP*/

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
        backToTop = () => {
            var scrollTop = $(window).scrollTop();
            if (scrollTop > scrollTrigger) {
                $('#back-to-top').addClass('show');
            } else {
                $('#back-to-top').removeClass('show');
            }
        };

    backToTop();
    $(window).on('scroll', () => {
        backToTop();
    });
    console.log(backToTop());
    $('#back-to-top').on('click', (e) => {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}

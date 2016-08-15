/*BACK-TO-TOP*/

(function() {
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
})();

/*SPINER MENU*/

(function() {
  var counter = 0;

  $('.fa-cog').click(function(e) {
    e.preventDefault();
    counter++;
    if ((counter % 2) === 0) {
      $('main div.main_menu div.main_menu__list').removeClass('no_hidden');
    } else {
      $('main div.main_menu div.main_menu__list').addClass('no_hidden');
      $('html,body').animate({
        scrollTop: $('main').position().top
      }, 700);
    }
  });
})();

/*BARS*/
(function() {

  function size() {
    if ($(window).width() < 767) {
      console.log($(window).width());
      $('nav.header_top__right').addClass('header_top__right--bar fa fa-bars');
      $('ul.bar').addClass('hidden');
    } else {
      $('nav.header_top__right').removeClass('header_top__right--bar fa fa-bars');
      $('nav.header_top__right').removeClass('fa-arrow-right');
      $('ul.bar').removeClass('hidden');
    }
  }

  $(window).resize(function() {
    size();
  });

  $(window).load(function() {
    size();
  });

  var counter = 0;

  $('nav').click(function(e) {
    e.preventDefault();
    console.log('!!!!!');

    counter++;
    if ((counter % 2) === 0) {
      $('ul.bar').removeClass('hidden');
      $('nav.header_top__right').removeClass('fa-bars');
      $('nav.header_top__right').addClass('fa-arrow-right');
    } else {
      $('ul.bar').addClass('hidden');
      $('nav.header_top__right').removeClass('fa-arrow-right');
      $('nav.header_top__right').addClass('fa-bars');
    }
  });

})();

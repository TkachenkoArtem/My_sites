/*jshint esversion: 6 */

/*TABS*/
function tabs() {
  var tabItem = $('.tabs a');
  var tabContent = $('.tabs__content');
  var defaultActiveTab = $('ul.tabs > li.tabs__active > a');
  var defaultActiveContent = $(defaultActiveTab.attr('href'));

  if (!defaultActiveTab || !defaultActiveTab.length) {
    defaultActiveTab = $('ul.tabs > li:first-child > a');
    defaultActiveTab.parent().addClass('tabs__active');
    defaultActiveContent = $(defaultActiveTab.attr('href'));
  }

  tabContent.hide();
  defaultActiveContent.show();

  tabItem.click(function() {
    tabItem.parent().removeClass('tabs__active');
    tabItem.parent().addClass('tabs__triangle');
    $(this).parent().addClass('tabs__active');
    $(this).parent().removeClass('tabs__triangle');

    var activeTab = $(this).attr('href');
    tabContent.hide();
    $(activeTab).show();
    return false;
  });

}

tabs();

/*SELECT*/

/*
Reference: http://jsfiddle.net/BB3JK/47/
*/

$('select').each(function() {
  var $this = $(this),
    numberOfOptions = $(this).children('option').length;

  $this.addClass('select__hidden');
  $this.wrap('<div class="select"></div>');
  $this.after('<div class="select__styled"></div>');

  var $styledSelect = $this.next('div.select__styled');
  $styledSelect.text($this.children('option').eq(0).text());

  var $list = $('<ul />', {
    'class': 'select__options'
  }).insertAfter($styledSelect);

  for (var i = 0; i < numberOfOptions; i++) {
    $('<li />', {
      text: $this.children('option').eq(i).text(),
      rel: $this.children('option').eq(i).val()
    }).appendTo($list);
  }

  var $listItems = $list.children('li');

  $styledSelect.click(function(e) {
    e.stopPropagation();
    $('div.select__styled--active').not(this).each(function() {
      $(this).removeClass('select__styled--active').next('ul.select__options').hide();
    });
    $(this).toggleClass('select__styled--active').next('ul.select__options').toggle();
  });

  $listItems.click(function(e) {
    e.stopPropagation();
    $styledSelect.text($(this).text()).removeClass('select__styled--active');
    $this.val($(this).attr('rel'));
    $list.hide();
    //console.log($this.val());
  });

  $(document).click(function() {
    $styledSelect.removeClass('select__styled--active');
    $list.hide();
  });

});

/*truncateText*/

(function($) {
  var truncate = function(el) {
    var text = el.text(),
      height = el.height(),
      clone = el.clone();

    clone.css({
      position: 'absolute',
      visibility: 'hidden',
      height: 'auto'
    });
    el.after(clone);

    var l = text.length - 1;
    for (; l >= 0 && clone.height() > height; --l) {
      clone.text(text.substring(0, l) + '...');
    }

    el.text(clone.text());
    clone.remove();
  };

  $.fn.truncateText = function() {
    return this.each(function() {
      truncate($(this));
    });
  };
}(jQuery));

$(function() {
  $('.article__text').truncateText();
});

/*SLIDER*/

$('.slick').slick({
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  // infinite: false,
  // edgeFriction: 0.3
});

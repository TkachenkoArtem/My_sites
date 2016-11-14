/*jshint esversion: 6 */

/*GO TO*/
$(document).ready(function(){
    $('.jsGoTo').click( function(){ // ловим клик по ссылке с классом jsGoTo
	var scroll_el = $(this).attr('href'); // возьмем содержимое атрибута href, должен быть селектором, т.е. например начинаться с # или .
        if ($(scroll_el).length !== 0) { // проверим существование элемента чтобы избежать ошибки
	    $('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 500); // анимируем скролинг к элементу scroll_el
        }
	    return false; // выключаем стандартное действие
    });
});

/*TOOLTIP*/
$(document).ready(function() {
  $("body").tooltip({
    selector: "[data-toggle='tooltip']",
    container: "body"
  });
});

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
    $(this).parent().addClass('tabs__active');

    var activeTab = $(this).attr('href');
    tabContent.hide();
    $(activeTab).show();
    return false;
  });

}

tabs();

/*CODEPEN*/
$( document ).ready(function() {
  document.getElementsByClassName || (document.getElementsByClassName = function(e) {
      var n, t, r, a = document,
        o = [];
      if (a.querySelectorAll) return a.querySelectorAll("." + e);
      if (a.evaluate)
        for (t = ".//*[contains(concat(' ', @class, ' '), ' " + e + " ')]", n = a.evaluate(t, a, null, 0, null); r = n.iterateNext();) o.push(r);
      else
        for (n = a.getElementsByTagName("*"), t = new RegExp("(^|\\s)" + e + "(\\s|$)"), r = 0; r < n.length; r++) t.test(n[r].className) && o.push(n[r]);
      return o
    }),
    function() {
      function e() {
        function e() {
          for (var e = document.getElementsByClassName("codepen"), u = e.length - 1; u > -1; u--) {
            var i = r(e[u]);
            if (i = a(i), i.user = n(i, e[u]), t(i)) {
              var c = o(i),
                s = l(i, c);
              d(e[u], s)
            }
          }
        }

        function n(e, n) {
          if ("string" == typeof e.user) return e.user;
          for (var t = 0, r = n.children.length; r > t; t++) {
            var a = n.children[t],
              o = a.href || "",
              u = o.match(/codepen\.(io|dev)\/(\w+)\/pen\//i);
            if (u) return u[2]
          }
          return "anon"
        }

        function t(e) {
          return e["slug-hash"]
        }

        function r(e) {
          for (var n = {}, t = e.attributes, r = 0, a = t.length; a > r; r++) {
            var o = t[r].name;
            0 === o.indexOf("data-") && (n[o.replace("data-", "")] = t[r].value)
          }
          return n
        }

        function a(e) {
          return e.href && (e["slug-hash"] = e.href), e.type && (e["default-tab"] = e.type), e.safe && (e.animations = "true" === e.safe ? "run" : "stop-after-5"), e
        }

        function o(e) {
          var n = u(e),
            t = e.user ? e.user : "anon",
            r = "?" + c(e),
            a = e.preview && "true" === e.preview ? "embed/preview" : "embed",
            o = [n, t, a, e["slug-hash"] + r].join("/");
          return o.replace(/\/\//g, "//")
        }

        function u(e) {
          return e.host ? i(e.host) : "file:" === document.location.protocol ? "http://codepen.io" : "//codepen.io"
        }

        function i(e) {
          return e.match(/^\/\//) || !e.match(/http:/) ? document.location.protocol + "//" + e : e
        }

        function c(e) {
          var n = "";
          for (var t in e) "" !== n && (n += "&"), n += t + "=" + encodeURIComponent(e[t]);
          return n
        }

        function l(e, n) {
          var t = {
              id: "cp_embed_" + e["slug-hash"].replace("/", "_"),
              src: n,
              scrolling: "no",
              frameborder: "0",
              height: s(e),
              allowTransparency: "true",
              allowfullscreen: "true",
              name: "CodePen Embed",
              title: "CodePen Embed",
              "class": "cp_embed_iframe " + (e["class"] ? e["class"] : ""),
              style: "width: " + m + "; overflow: hidden;"
            },
            r = "<iframe ";
          for (var a in t) r += a + '="' + t[a] + '" ';
          return r += "></iframe>"
        }

        function s(e) {
          return e.height ? e.height : 300
        }

        function d(e, n) {
          if (e.parentNode) {
            var t = document.createElement("div");
            t.innerHTML = n, e.parentNode.replaceChild(t, e)
          } else e.innerHTML = n
        }

        function f() {
          return 0;
          var e, n, t
        }
        var m = "100%";
        e(), f()
      }

      function n(e) {
        /in/.test(document.readyState) ? setTimeout("window.__cp_domReady(" + e + ")", 9) : e()
      }
      window.__cp_domReady = n, window.__CPEmbed = e, n(function() {
        new __CPEmbed
      })
    }();
});

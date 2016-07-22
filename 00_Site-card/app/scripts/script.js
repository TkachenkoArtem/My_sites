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

/*Onload*/
(function() {
    document.addEventListener("DOMContentLoaded", function() {
        document.getElementsByTagName('main')[0].innerHTML = '<p class="elegantshadow elegantshadow--main">Junior<br>Web-developer</p>';
    });
})();

/*loadHome*/
function loadHome() {
    document.getElementsByTagName('main')[0].innerHTML = '<p class="elegantshadow elegantshadow--main">Junior<br>Web-developer</p>';
}

/*loadAboutme*/
function loadAboutme() {
    document.getElementsByTagName('main')[0].innerHTML = '<p class="elegantshadow aboutme">Have practical skills with: <div class="aboutme__container"> <a href="http://atom.io/" target="_blank"> <img src="img/Atom-logo.png" alt="atom"></a> <a href="http://gulpjs.com/" target="_blank"> <img src="img/gulp-logo.png" alt="gulpjs"></a> <a href="http://codepen.io/" target="_blank"> <img src="img/codepen-logo.png" alt="codepen"></a> <a href="http://git-scm.com/" target="_blank"> <img src="img/git-logo.png" alt="git"></a> <a href="http://www.npmjs.com/" target="_blank"> <img src="img/npm-logo.png" alt="npm"></a> <a href="http://sass-lang.com/" target="_blank"> <img src="img/sass-logo.png" alt="sass"></a> <a href="http://github.com/" target="_blank"> <img src="img/githab-logo.png" alt="github"></a> <a href="http://www.w3schools.com/css/css3_intro.asp" target="_blank"> <img src="img/css3-logo.png" alt="css3"></a> <a href="http://www.w3schools.com/html/default.asp" target="_blank"> <img src="img/html5-logo.png" alt="html5"></a> <a href="http://www.w3schools.com/js/default.asp" target="_blank"> <img src="img/javascript-logo.png" alt="JS"></a> <a href="http://getbootstrap.com/" target="_blank"> <img src="img/bootstrap-logo.png" alt="bootstrap"></a> <a href="http://bower.io/" target="_blank"> <img src="img/bower-logo.png" alt="bower"></a> <a href="http://haml.info/" target="_blank"> <img src="img/haml-logo.png" alt="haml"></a> <a href="http://kenwheeler.github.io/slick/" target="_blank"> <img src="img/slick-logo.png" alt="slick"></a> <a href="http://necolas.github.io/normalize.css/" target="_blank"> <img src="img/normalizecss-logo.png" alt="normalize.css"></a> <a href="http://bourbon.io/docs/" target="_blank"> <img src="img/bourbon-logo.png" alt="bourbon"></a> <a href="http://fontawesome.io/" target="_blank"> <img src="img/fontawesome.png" alt="fontawesome"></a> </div></p><p class="elegantshadow aboutme">Have theoretical skills with: <div class="aboutme__container"> <a href="http://www.json.org/" target="_blank"> <img src="img/JSON-logo.png" alt="json"></a> <a href="http://www.w3schools.com/ajax/" target="_blank"> <img src="img/AJAX-logo.png" alt="ajax"></a> <a href="http://underscorejs.org/" target="_blank"> <img src="img/underscore-logo.png" alt="underscore.js"></a> <a href="http://www.w3schools.com/xml/" target="_blank"> <img src="img/XML-logo.png" alt="xml"></a> <a href="http://www.mongodb.com/" target="_blank"> <img src="img/MongoDB-logo.png" alt="mongodb"></a> <a href="http://www.adobe.com/products/photoshop-lightroom.html?promoid=KLXLX" target="_blank"> <img src="img/Lightroom-logo.png" alt="Lightroom"></a> <a href="http://www.adobe.com/products/photoshop.html?promoid=KLXLS" target="_blank"> <img src="img/AdobePhotoshop-logo.png" alt="Photoshop"></a> <a href="http://jade-lang.com/" target="_blank"> <img src="img/jade-logo.png" alt="jade"></a> <a href="http://wordpress.org/" target="_blank"> <img src="img/wordpress-logo.png" alt="wordpress"></a> <a href="http://www.autodesk.ru/products/autocad/overview" target="_blank"> <img src="img/autocad-logo.png" alt="autocad"></a> <a href="http://babeljs.io/" target="_blank"> <img src="img/babel-logo.png" alt="babel.js"></a> <a href="http://jquery.com/" target="_blank"> <img src="img/jquery-logo.png" alt="jquery"></a> </div></p><p class="elegantshadow aboutme">Now I learn: <div class="aboutme__container"> <a href="http://riotjs.com/" target="_blank"> <img src="img/riot-logo.png" alt="riotjs"></a> <a href="http://coffeescript.org/" target="_blank"> <img src="img/cs-logo.png" alt="coffescript"></a> <a href="http://nodejs.org/en/" target="_blank"> <img src="img/nodejs-logo.png" alt="nodejs"></a> <a href="http://backbonejs.org/" target="_blank"> <img src="img/BackboneJS_logo.png" alt="backbonejs"></a> </div></p>';
}

/*loadPortfolio*/
function loadPortfolio() {
    document.getElementsByTagName('main')[0].innerHTML = 'yjfgnfgnfgn';
}

/*loadContact*/
function loadContact() {
    document.getElementsByTagName('main')[0].innerHTML = '<div class="contacts"> <p class="elegantshadow">E-mail: <span class="contacts__link elegantshadow">igrfy87@gmail.com</span> </p><p class="elegantshadow">Skype: <span class="contacts__link elegantshadow">a.tkachenko177</span> </p><p class="elegantshadow">Viber: <span class="contacts__link elegantshadow">+380688891260</span> </p><a class="elegantshadow elegantshadow--contacts" href="http://codepen.io/Tkachenko/" target="_blank">Codepen: <span class="contacts__link elegantshadow">http://codepen.io/Tkachenko/</span> </a> <a class="elegantshadow elegantshadow--contacts" href="https://github.com/TkachenkoArtem/" target="_blank">Github: <span class="contacts__link elegantshadow">https://github.com/TkachenkoArtem/</span> </a></div>';
}

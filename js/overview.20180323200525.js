(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="ifmmpAcbedpsfipsot/dp/vl";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}
function em2(){var c="ifmmpAcbedpsf/dp/vl";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-97').attr('src', (dpi>1) ? 'images/rings-white-476.png' : 'images/rings-white-238.png');
$('.js-98').attr('src', (dpi>1) ? 'images/rings-white-476.png' : 'images/rings-white-238.png');
$('.js-99').attr('src', (dpi>1) ? 'images/bch-dnb-text-868.png' : 'images/bch-dnb-text-434.png');
$('.js-100').attr('src', (dpi>1) ? 'images/bch-dnb-text-868.png' : 'images/bch-dnb-text-434.png');
var a='data-src'; if($('.js-101 .slider-for .slide0').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide0').attr(a, (dpi>1) ? 'images/promo-outside-1474.jpg' : 'images/promo-outside-737.jpg');
$('.js-101 .slider-nav .slide0').attr('src', (dpi>1) ? 'images/thumb-promo-outside-254.jpg' : 'images/thumb-promo-outside-127.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide1').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide1').attr(a, (dpi>1) ? 'images/maker-group-1474.jpg' : 'images/maker-group-737.jpg');
$('.js-101 .slider-nav .slide1').attr('src', (dpi>1) ? 'images/thumb-maker-group-254.jpg' : 'images/thumb-maker-group-127.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide2').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide2').attr(a, (dpi>1) ? 'images/maker-barn-1474.jpg' : 'images/maker-barn-737.jpg');
$('.js-101 .slider-nav .slide2').attr('src', (dpi>1) ? 'images/thumb-maker-barn-254.jpg' : 'images/thumb-maker-barn-127.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide3').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide3').attr(a, (dpi>1) ? 'images/maker-dan-1474.jpg' : 'images/maker-dan-737.jpg');
$('.js-101 .slider-nav .slide3').attr('src', (dpi>1) ? 'images/thumb-maker-dan-254.jpg' : 'images/thumb-maker-dan-127.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide4').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide4').attr(a, (dpi>1) ? 'images/maker-si-1474.jpg' : 'images/maker-si-737.jpg');
$('.js-101 .slider-nav .slide4').attr('src', (dpi>1) ? 'images/thumb-maker-si-254.jpg' : 'images/thumb-maker-si-127.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide5').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide5').attr(a, (dpi>1) ? 'images/bch-junction-loud-1474.jpg' : 'images/bch-junction-loud-737.jpg');
$('.js-101 .slider-nav .slide5').attr('src', (dpi>1) ? 'images/thumb-bch-junction-loud-254.jpg' : 'images/thumb-bch-junction-loud-127.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide6').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide6').attr(a, 'images/9-737.jpg');
$('.js-101 .slider-nav .slide6').attr('src', (dpi>1) ? 'images/thumb-9-254.jpg' : 'images/thumb-9-127.jpg');}else{$('.js-97').attr('src', (dpi>1) ? 'images/rings-white-158.png' : 'images/rings-white-79.png');
$('.js-98').attr('src', (dpi>1) ? 'images/rings-white-200.png' : 'images/rings-white-100.png');
$('.js-99').attr('src', (dpi>1) ? 'images/bch-dnb-text-200.png' : 'images/bch-dnb-text-100.png');
$('.js-100').attr('src', (dpi>1) ? 'images/bch-dnb-text-290.png' : 'images/bch-dnb-text-145.png');
var a='data-src'; if($('.js-101 .slider-for .slide0').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide0').attr(a, (dpi>1) ? 'images/promo-outside-492.jpg' : 'images/promo-outside-246.jpg');
$('.js-101 .slider-nav .slide0').attr('src', (dpi>1) ? 'images/thumb-promo-outside-58.jpg' : 'images/thumb-promo-outside-29.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide1').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide1').attr(a, (dpi>1) ? 'images/maker-group-492.jpg' : 'images/maker-group-246.jpg');
$('.js-101 .slider-nav .slide1').attr('src', (dpi>1) ? 'images/thumb-maker-group-58.jpg' : 'images/thumb-maker-group-29.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide2').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide2').attr(a, (dpi>1) ? 'images/maker-barn-492.jpg' : 'images/maker-barn-246.jpg');
$('.js-101 .slider-nav .slide2').attr('src', (dpi>1) ? 'images/thumb-maker-barn-58.jpg' : 'images/thumb-maker-barn-29.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide3').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide3').attr(a, (dpi>1) ? 'images/maker-dan-492.jpg' : 'images/maker-dan-246.jpg');
$('.js-101 .slider-nav .slide3').attr('src', (dpi>1) ? 'images/thumb-maker-dan-58.jpg' : 'images/thumb-maker-dan-29.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide4').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide4').attr(a, (dpi>1) ? 'images/maker-si-492.jpg' : 'images/maker-si-246.jpg');
$('.js-101 .slider-nav .slide4').attr('src', (dpi>1) ? 'images/thumb-maker-si-58.jpg' : 'images/thumb-maker-si-29.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide5').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide5').attr(a, (dpi>1) ? 'images/bch-junction-loud-492.jpg' : 'images/bch-junction-loud-246.jpg');
$('.js-101 .slider-nav .slide5').attr('src', (dpi>1) ? 'images/thumb-bch-junction-loud-58.jpg' : 'images/thumb-bch-junction-loud-29.jpg');
var a='data-src'; if($('.js-101 .slider-for .slide6').hasAttr('src')) { a='src'; } $('.js-101 .slider-for .slide6').attr(a, (dpi>1) ? 'images/9-492.jpg' : 'images/9-246.jpg');
$('.js-101 .slider-nav .slide6').attr('src', (dpi>1) ? 'images/thumb-9-58.jpg' : 'images/thumb-9-29.jpg');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-6')[0]);
initMenu($('#menu-7')[0]);
initMenu($('#menu-8')[0]);
$('.js-101 .slider-for').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,arrows: false,fade: true,infinite: true,asNavFor: '.js-101 .slider-nav',});$('.js-101 .slider-nav').slick({slidesToShow: 5,slidesToScroll: 1,asNavFor: '.js-101 .slider-for',centerMode: true,focusOnSelect: true,dots: false,arrows: true,infinite: true,autoplay: true,pauseOnHover: true,autoplaySpeed: 2500});var wl = new woolite();
wl.init();
wl.addAnimation($('.js-99')[0], "0.90s", "0.50s", 1, 100);
wl.addAnimation($('.js-100')[0], "0.90s", "0.50s", 1, 100);
wl.addAnimation($('.js-102')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-103')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js-104')[0], "1.00s", "0.40s", 1, 100);
wl.addAnimation($('.js-105')[0], "1.00s", "0.60s", 1, 100);
wl.start();

});
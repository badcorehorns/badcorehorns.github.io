(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="ifmmpAcbedpsfipsot/dp/vl";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-25').attr('src', (dpi>1) ? 'images/sesh-title-1380.png' : 'images/sesh-title-690.png');
$('.js-26').attr('src', (dpi>1) ? 'images/12339519_1005743859490374_8614370666009245957_o-400-1.jpg' : 'images/12339519_1005743859490374_8614370666009245957_o-200-1.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/12308151_1005747119490048_4129148262109366153_o-400.jpg' : 'images/12308151_1005747119490048_4129148262109366153_o-200-1.jpg');
var a='data-src'; if($('.js-54 .slide0').hasAttr('src')) { a='src'; } $('.js-54 .slide0').attr(a, 'images/1-960.jpg');
var a='data-src'; if($('.js-54 .slide1').hasAttr('src')) { a='src'; } $('.js-54 .slide1').attr(a, 'images/2-960-1.jpg');
var a='data-src'; if($('.js-54 .slide2').hasAttr('src')) { a='src'; } $('.js-54 .slide2').attr(a, 'images/4-960-1.jpg');
var a='data-src'; if($('.js-54 .slide3').hasAttr('src')) { a='src'; } $('.js-54 .slide3').attr(a, (dpi>1) ? 'images/5-1920.jpg' : 'images/5-960-1.jpg');
var a='data-src'; if($('.js-54 .slide4').hasAttr('src')) { a='src'; } $('.js-54 .slide4').attr(a, 'images/7-960.jpg');
var a='data-src'; if($('.js-54 .slide5').hasAttr('src')) { a='src'; } $('.js-54 .slide5').attr(a, 'images/8-960-1.jpg');
var a='data-src'; if($('.js-54 .slide6').hasAttr('src')) { a='src'; } $('.js-54 .slide6').attr(a, 'images/10-960-1.jpg');
var a='data-src'; if($('.js-54 .slide7').hasAttr('src')) { a='src'; } $('.js-54 .slide7').attr(a, 'images/11-960.jpg');
var a='data-src'; if($('.js-54 .slide8').hasAttr('src')) { a='src'; } $('.js-54 .slide8').attr(a, 'images/12-960-1.jpg');
$('.js-55').attr('src', (dpi>1) ? 'images/link-mailb-160.png' : 'images/link-mailb-80.png');
$('.js-56').attr('src', (dpi>1) ? 'images/linkfbb-160.png' : 'images/linkfbb-80.png');
$('.js-57').attr('src', (dpi>1) ? 'images/linkigb-160.png' : 'images/linkigb-80.png');
$('.js-58').attr('src', (dpi>1) ? 'images/linktwb-160.png' : 'images/linktwb-80.png');}else{$('.js-25').attr('src', (dpi>1) ? 'images/sesh-title-548.png' : 'images/sesh-title-274.png');
$('.js-26').attr('src', (dpi>1) ? 'images/12339519_1005743859490374_8614370666009245957_o-134-1.jpg' : 'images/12339519_1005743859490374_8614370666009245957_o-67-1.jpg');
$('.js-27').attr('src', (dpi>1) ? 'images/12308151_1005747119490048_4129148262109366153_o-134-1.jpg' : 'images/12308151_1005747119490048_4129148262109366153_o-67-1.jpg');
var a='data-src'; if($('.js-54 .slide0').hasAttr('src')) { a='src'; } $('.js-54 .slide0').attr(a, (dpi>1) ? 'images/1-640.jpg' : 'images/1-320.jpg');
var a='data-src'; if($('.js-54 .slide1').hasAttr('src')) { a='src'; } $('.js-54 .slide1').attr(a, (dpi>1) ? 'images/2-640.jpg' : 'images/2-320.jpg');
var a='data-src'; if($('.js-54 .slide2').hasAttr('src')) { a='src'; } $('.js-54 .slide2').attr(a, (dpi>1) ? 'images/4-640.jpg' : 'images/4-320.jpg');
var a='data-src'; if($('.js-54 .slide3').hasAttr('src')) { a='src'; } $('.js-54 .slide3').attr(a, (dpi>1) ? 'images/5-640.jpg' : 'images/5-320.jpg');
var a='data-src'; if($('.js-54 .slide4').hasAttr('src')) { a='src'; } $('.js-54 .slide4').attr(a, 'images/7-320.jpg');
var a='data-src'; if($('.js-54 .slide5').hasAttr('src')) { a='src'; } $('.js-54 .slide5').attr(a, (dpi>1) ? 'images/8-640.jpg' : 'images/8-320.jpg');
var a='data-src'; if($('.js-54 .slide6').hasAttr('src')) { a='src'; } $('.js-54 .slide6').attr(a, (dpi>1) ? 'images/10-640.jpg' : 'images/10-320.jpg');
var a='data-src'; if($('.js-54 .slide7').hasAttr('src')) { a='src'; } $('.js-54 .slide7').attr(a, (dpi>1) ? 'images/11-640.jpg' : 'images/11-320.jpg');
var a='data-src'; if($('.js-54 .slide8').hasAttr('src')) { a='src'; } $('.js-54 .slide8').attr(a, (dpi>1) ? 'images/12-640.jpg' : 'images/12-320.jpg');
$('.js-55').attr('src', (dpi>1) ? 'images/link-mailb-52.png' : 'images/link-mailb-26.png');
$('.js-56').attr('src', (dpi>1) ? 'images/linkfbb-52.png' : 'images/linkfbb-26.png');
$('.js-57').attr('src', (dpi>1) ? 'images/linkigb-52.png' : 'images/linkigb-26.png');
$('.js-58').attr('src', (dpi>1) ? 'images/linktwb-52.png' : 'images/linktwb-26.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-1')[0]);
initMenu($('#menu-2')[0]);
$('.js-54 .slider').slick({lazyLoad: 'ondemand',slidesToShow: 1,slidesToScroll: 1,fade: true,slide: 'div',cssEase: 'linear',speed: 100,dots: true,arrows: false,infinite: true,autoplay: true,pauseOnHover: false,autoplaySpeed: 2500});var wl = new woolite();
wl.init();
wl.addAnimation($('.js-25')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-28')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-29')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-30')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-31')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-32')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-33')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-34')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-35')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-36')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-37')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-38')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-39')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-40')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-41')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-42')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-43')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-44')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-45')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-46')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-47')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-48')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-49')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-50')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-51')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-52')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-53')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-55')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-56')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js-57')[0], "1.00s", "0.40s", 1, 100);
wl.addAnimation($('.js-58')[0], "1.00s", "0.60s", 1, 100);
wl.start();

});
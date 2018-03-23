(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js').attr('src', (dpi>1) ? 'images/rings-black-1050.png' : 'images/rings-black-525.png');
$('.js-2').attr('src', (dpi>1) ? 'images/bch-sec-text-1468.png' : 'images/bch-sec-text-734.png');
$('.js-3').attr('src', (dpi>1) ? 'images/rings-black-1050-2.png' : 'images/rings-black-525-2.png');
$('.js-4').attr('src', (dpi>1) ? 'images/bch-sec-text-1468-2.png' : 'images/bch-sec-text-734-2.png');
$('.js-5').attr('src', (dpi>1) ? 'images/rings-black-1050-3.png' : 'images/rings-black-525-3.png');
$('.js-6').attr('src', (dpi>1) ? 'images/bch-sec-text-1468-3.png' : 'images/bch-sec-text-734-3.png');
$('.js-7').attr('src', (dpi>1) ? 'images/bch-dnb-text-1468.png' : 'images/bch-dnb-text-734.png');
$('.js-8').attr('src', (dpi>1) ? 'images/bch-dnb-text-1468-2.png' : 'images/bch-dnb-text-734-2.png');
$('.js-9').attr('src', (dpi>1) ? 'images/bch-dnb-text-1468-3.png' : 'images/bch-dnb-text-734-3.png');
$('.js-10').attr('src', (dpi>1) ? 'images/rings-white-1050.png' : 'images/rings-white-525.png');
$('.js-11').attr('src', (dpi>1) ? 'images/rings-white-1050-2.png' : 'images/rings-white-525-2.png');
$('.js-12').attr('src', (dpi>1) ? 'images/rings-white-1050-3.png' : 'images/rings-white-525-3.png');}else{$('.js').attr('src', (dpi>1) ? 'images/rings-black-200.png' : 'images/rings-black-100.png');
$('.js-2').attr('src', (dpi>1) ? 'images/bch-sec-text-200.png' : 'images/bch-sec-text-100.png');
$('.js-3').attr('src', (dpi>1) ? 'images/rings-black-200-2.png' : 'images/rings-black-100-2.png');
$('.js-4').attr('src', (dpi>1) ? 'images/bch-sec-text-200-2.png' : 'images/bch-sec-text-100-2.png');
$('.js-5').attr('src', (dpi>1) ? 'images/rings-black-350.png' : 'images/rings-black-175.png');
$('.js-6').attr('src', (dpi>1) ? 'images/bch-sec-text-488.png' : 'images/bch-sec-text-244.png');
$('.js-7').attr('src', (dpi>1) ? 'images/bch-dnb-text-490.png' : 'images/bch-dnb-text-245.png');
$('.js-8').attr('src', (dpi>1) ? 'images/bch-dnb-text-200.png' : 'images/bch-dnb-text-100.png');
$('.js-9').attr('src', (dpi>1) ? 'images/bch-dnb-text-200-2.png' : 'images/bch-dnb-text-100-2.png');
$('.js-10').attr('src', (dpi>1) ? 'images/rings-white-200.png' : 'images/rings-white-100.png');
$('.js-11').attr('src', (dpi>1) ? 'images/rings-white-200-2.png' : 'images/rings-white-100-2.png');
$('.js-12').attr('src', (dpi>1) ? 'images/rings-white-350.png' : 'images/rings-white-175.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-2')[0], "0.90s", "0.90s", 1, 100);
wl.addAnimation($('.js-4')[0], "0.90s", "0.90s", 1, 100);
wl.addAnimation($('.js-6')[0], "0.90s", "0.90s", 1, 100);
wl.addAnimation($('.js-7')[0], "0.90s", "1.40s", 1, 100);
wl.addAnimation($('.js-8')[0], "0.90s", "1.40s", 1, 100);
wl.addAnimation($('.js-9')[0], "0.90s", "1.40s", 1, 100);
wl.start();

});
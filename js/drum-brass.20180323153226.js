(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}

$(document).ready(function() {
r=function(){if(thresholdPassed()){dpi=window.devicePixelRatio;if($(window).width()>=960){$('.js-93').attr('src', 'images/mob-bkg-960.jpg');
$('.js-94').attr('src', (dpi>1) ? 'images/rings-1762.png' : 'images/rings-881.png');}else{$('.js-93').attr('src', (dpi>1) ? 'images/mob-bkg-200.jpg' : 'images/mob-bkg-100.jpg');
$('.js-94').attr('src', (dpi>1) ? 'images/rings-588.png' : 'images/rings-294.png');}}};
if(!window.HTMLPictureElement){$(window).resize(r);r();}
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-3')[0]);
initMenu($('#menu-4')[0]);
initMenu($('#menu-5')[0]);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-94')[0], "1.00s", "0.00s", 1, 100);
wl.start();

});
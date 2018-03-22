(function(d){var h=[];d.loadImages=function(a,e){"string"==typeof a&&(a=[a]);for(var f=a.length,g=0,b=0;b<f;b++){var c=document.createElement("img");c.onload=function(){g++;g==f&&d.isFunction(e)&&e()};c.src=a[b];h.push(c)}}})(window.jQuery);
$.fn.hasAttr = function(name) { var attr = $(this).attr(name); return typeof attr !== typeof undefined && attr !== false; };

var lwi=-1;function thresholdPassed(){var w=$(window).width();var p=false;var cw=0;if(w>=960){cw++;}if(lwi!=cw){p=true;}lwi=cw;return p;}
function em1(){var c="ifmmpAcbedpsf/dp/vl";var addr="mailto:";for(var i=0;i<c.length;i++)addr+=String.fromCharCode(c.charCodeAt(i)-1);window.location.href=addr;}

$(document).ready(function() {
(function(){$('a[href^="#"]').each(function(){$(this).click(function(){var t=this.hash.length>1?$('[name="'+this.hash.slice(1)+'"]').offset().top:0;return $("html, body").animate({scrollTop:t},400),!1})})})();
initMenu($('#menu-9')[0]);
initMenu($('#menu-10')[0]);
initMenu($('#menu-11')[0]);
var wl = new woolite();
wl.init();
wl.addAnimation($('.js-115')[0], "1.00s", "0.00s", 1, 100);
wl.addAnimation($('.js-116')[0], "1.00s", "0.20s", 1, 100);
wl.addAnimation($('.js-117')[0], "1.00s", "0.40s", 1, 100);
wl.addAnimation($('.js-118')[0], "1.00s", "0.60s", 1, 100);
wl.start();

});
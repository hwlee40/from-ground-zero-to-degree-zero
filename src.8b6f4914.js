parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"Focm":[function(require,module,exports) {
function s(){var s=(document.body.scrollTop||document.documentElement.scrollTop)/(document.documentElement.scrollHeight-document.documentElement.clientHeight)*100;document.getElementById("myBar").style.width=s+"%"}function t(){var s=$(window).scrollTop(),t=$("#resize1").offset().top-s;t>20?$("#resize1").css("font-size","230px"):t<=20&&$("#resize1").css("font-size","50px")}function e(){var s=$(window).scrollTop(),t=$("#resize2").offset().top-s;t>20?$("#resize2").css("font-size","230px"):t<=20&&$("#resize2").css("font-size","50px")}function o(){var s=$(window).scrollTop(),t=$("#resize3").offset().top-s;t>20?$("#resize3").css("font-size","230px"):t<=20&&$("#resize3").css("font-size","50px")}function a(){var s=$(window).scrollTop(),t=$("#resize4").offset().top-s;t>20?$("#resize4").css("font-size","230px"):t<=20&&$("#resize4").css("font-size","50px")}function i(){var s=$(window).scrollTop(),t=$("#resize5").offset().top-s;t>20?$("#resize5").css("font-size","230px"):t<=20&&$("#resize5").css("font-size","50px")}function n(){var s=$(window).scrollTop(),t=$("#shift1").offset().top-s;t>400?$("#shift1").removeClass("image_basic_container_translate"):t<=400&&$("#shift1").addClass("image_basic_container_translate")}function c(){var s=$(window).scrollTop(),t=$("#shift2").offset().top-s;t>400?$("#shift2").removeClass("image_basic_container_translate"):t<=400&&$("#shift2").addClass("image_basic_container_translate")}function r(){var s=$(window).scrollTop(),t=$("#shift3").offset().top-s;t>400?$("#shift3").removeClass("image_basic_container_translate"):t<=400&&$("#shift3").addClass("image_basic_container_translate")}function l(){var s=$(window).scrollTop(),t=$("#shift4").offset().top-s;t>400?$("#shift4").removeClass("image_basic_container_translate"):t<=400&&$("#shift4").addClass("image_basic_container_translate")}function f(){var s=$(window).scrollTop(),t=$("#shift5").offset().top-s;t>400?$("#shift5").removeClass("image_basic_container_translate"):t<=400&&$("#shift5").addClass("image_basic_container_translate")}function _(){var s=$(window).scrollTop(),t=$("#shift6").offset().top-s;t>400?$("#shift6").removeClass("image_basic_container_translate"):t<=400&&$("#shift6").addClass("image_basic_container_translate")}function m(){var s=$(window).scrollTop(),t=$("#shift7").offset().top-s;t>400?$("#shift7").removeClass("image_basic_container_translate"):t<=400&&$("#shift7").addClass("image_basic_container_translate")}function d(){var s=$(window).scrollTop(),t=$("#shift8").offset().top-s;t>400?$("#shift8").removeClass("image_basic_container_translate"):t<=400&&$("#shift8").addClass("image_basic_container_translate")}function p(){t(),e(),o(),a(),i()}function h(){n(),c(),r(),l(),f(),_(),m(),d()}window.onscroll=function(){s()},$("#essay1").click(function(){$("html, body").animate({scrollTop:$("#tag1").offset().top},500)}),$("#essay2").click(function(){$("html, body").animate({scrollTop:$("#tag2").offset().top},500)}),$("#essay3").click(function(){$("html, body").animate({scrollTop:$("#tag3").offset().top},500)}),$("#essay4").click(function(){$("html, body").animate({scrollTop:$("#tag4").offset().top},500)}),$("#essay5").click(function(){$("html, body").animate({scrollTop:$("#tag5").offset().top},500)}),$("#top").click(function(){$("html, body").animate({scrollTop:$("#body").offset().top},500)}),setInterval(function(){$(window).width()>1300?p():$(window).width()>900&&$(".essay_title").css("font-size","100px")},300),setInterval(function(){$(window).width()>1300?h():($("#shift1").removeClass("image_basic_container_translate"),$("#shift2").removeClass("image_basic_container_translate"),$("#shift3").removeClass("image_basic_container_translate"),$("#shift4").removeClass("image_basic_container_translate"),$("#shift5").removeClass("image_basic_container_translate"),$("#shift6").removeClass("image_basic_container_translate"),$("#shift7").removeClass("image_basic_container_translate"),$("#shift8").removeClass("image_basic_container_translate"))},50);
},{}]},{},["Focm"], null)
//# sourceMappingURL=src.8b6f4914.js.map
!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var o=function(){var e=document.getElementById("free_visit_form"),t=document.getElementById("callback_form"),n=function(n){var o=n.target;o.closest(".form-wrapper")&&!o.closest(".close_icon")||(e.style.display="none",t.style.display="none")};document.body.addEventListener("click",(function(n){var o=n.target;n.preventDefault(),o.closest(".open-popup")?e.style.display="block":o.closest(".callback-btn")&&(t.style.display="block")})),e.addEventListener("click",n),t.addEventListener("click",n)},r=function(){var e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");e.addEventListener("click",(function(){t.style.display="block",e.remove()})),t.addEventListener("click",(function(e){var n=e.target;(!n.closest(".form-wrapper")||n.closest(".close_icon")||n.closest(".close-btn"))&&(t.style.display="none")}))},l=function(){var e=document.querySelector(".main-slider").querySelectorAll(".slide"),t=0,n=function(){e[t].style.display="none",++t>=e.length&&(t=0),function(e,t){e[t].style.display="flex"}(e,t)};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(n,e)}(5e3)};(function(){var e=document.querySelector(".club-select").querySelector("ul");document.body.addEventListener("click",(function(t){var n=t.target;""===e.style.display&&n.closest(".clubs-list")?e.style.display="block":e.style.display=""}))})(),o();try{r()}catch(e){console.log("wops")}l()}]);
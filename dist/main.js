!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.getElementById("free_visit_form"),t=document.getElementById("callback_form"),n=document.getElementById("thanks"),r=document.querySelector(".callback-btn"),o=function(r){var o=r.target;(!o.closest(".form-wrapper")||o.closest(".close_icon")||o.closest(".close-btn"))&&(e.style.display="none",t.style.display="none",n.style.display="none")};document.body.addEventListener("click",(function(t){t.target.closest(".open-popup")&&(t.preventDefault(),e.style.display="block")})),r.addEventListener("click",(function(e){e.preventDefault(),t.style.display="block"})),e.addEventListener("click",o),t.addEventListener("click",o),n.addEventListener("click",o)},o=function(){var e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");e.addEventListener("click",(function(){t.style.display="block",e.remove()})),t.addEventListener("click",(function(e){var n=e.target;(!n.closest(".form-wrapper")||n.closest(".close_icon")||n.closest(".close-btn"))&&(t.style.display="none")}))},i=function(){var e=document.querySelector(".main-slider").querySelectorAll(".slide"),t=0,n=function(){e[t].style.display="none",++t>=e.length&&(t=0),function(e,t){e[t].style.display="flex"}(e,t)};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(n,e)}(5e3)};function l(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(){var e=document.createElement("div"),t=document.getElementById("thanks"),n=document.querySelector("#thanks p");e.style.cssText="\n        display: block;\n        position: relative;\n        z-index: 99999;\n        width: 30px;\n        height: 30px;\n        margin: auto;\n        background: url('http://hello-site.ru//main/images/preloads/tail-spin.svg') center center no-repeat;\n        background-size: 22px;\n    ";var r=document.createElement("div");r.style.cssText="font-size: 2rem; color: white; margin-top: 10px; margin-bottom: 10px";var o=function(e){var t,n,r=e.target;if(null!==r.closest("form")&&(t=r.closest("form").querySelector("button")),"name"===r.getAttribute("name")&&"Промокод"!==r.getAttribute("placeholder")){var o=r;o.value.match(/^[?!,.а-яА-ЯёЁ0-9\s]+$/)?(o.style.border="",t.removeAttribute("disabled")):(o.style.border="2px solid red",t.setAttribute("disabled","disabled"))}var i=function(){null!==r.closest("form")&&r.closest("form").querySelectorAll("input").forEach((function(e){"2px solid red"===e.style.border&&t.setAttribute("disabled","disabled")}))},l=function(){n.checked?t.removeAttribute("disabled"):t.setAttribute("disabled","disabled"),i()};null!==r.closest("form")&&r.closest("form").querySelectorAll("input").forEach((function(e){"checkbox"===e.getAttribute("type")&&"club-name"!==e.getAttribute("name")&&(n=e,l(),e.addEventListener("change",l))})),i()};document.body.addEventListener("keyup",o),document.body.addEventListener("focusout",o),document.body.addEventListener("submit",(function(o){o.preventDefault();var i=o.target;if(i.closest("form")){var a=i.closest("form");r.textContent="",a.appendChild(r),r.insertAdjacentElement("beforebegin",e);var c={};new FormData(a).forEach((function(e,t){e=e.trim(),c[t]=e})),function(e){return fetch("server.php",{method:"POST",cache:"default",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(c).then((function(o){if(e.remove(),200!==o.status)throw new Error("status networn not 200");t.style.display="block",n.textContent="Ваша заявка отправлена. \n        <br>\n        Мы свяжемся с вами в ближайшее время.\n        ",setTimeout((function(){r.textContent=""}),3e3)})).catch((function(){e.remove(),t.style.display="block",n.textContent="Ошибка",setTimeout((function(){r.textContent=""}),3e3)})),l(a.elements).forEach((function(e){"text"!==e.getAttribute("type")&&"tel"!==e.getAttribute("type")||(e.value="")}))}}))};function u(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,a=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){a=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(a)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var d=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll("input");function r(e){var n=e.keyCode,r=t,o=r.replace(/\D/g,""),i=this.value.replace(/\D/g,""),l=0,a=r.replace(/[_\d]/g,(function(e){return l<i.length?i.charAt(l++)||o.charAt(l):e}));-1!=(l=a.indexOf("_"))&&(a=a.slice(0,l));var c=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(c=new RegExp("^"+c+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=a),"blur"==e.type&&this.value.length<5&&(this.value="")}var o,i=u(n);try{for(i.s();!(o=i.n()).done;){var l=o.value;l.getAttribute("name")===e&&(l.addEventListener("input",r),l.addEventListener("focus",r),l.addEventListener("blur",r))}}catch(e){i.e(e)}finally{i.f()}};(function(){var e=document.querySelector(".club-select").querySelector("ul");document.body.addEventListener("click",(function(t){var n=t.target;""===e.style.display&&n.closest(".clubs-list")?e.style.display="block":e.style.display=""}))})(),r();try{o()}catch(e){}i(),d("phone"),c()}]);
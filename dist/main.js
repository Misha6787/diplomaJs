!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);var r=function(){var e=document.querySelector(".club-select").querySelector("ul");document.body.addEventListener("click",(function(t){var n=t.target;""===e.style.display&&n.closest(".clubs-list")?e.style.display="block":e.style.display=""}))},o=function(){var e=document.getElementById("free_visit_form"),t=document.getElementById("callback_form"),n=document.getElementById("thanks"),r=document.querySelector(".callback-btn"),o=function(r){var o=r.target;(!o.closest(".form-wrapper")||o.closest(".close_icon")||o.closest(".close-btn"))&&(e.style.display="none",t.style.display="none",n.style.display="none")};document.body.addEventListener("click",(function(t){t.target.closest(".open-popup")&&(t.preventDefault(),e.style.display="block")})),r.addEventListener("click",(function(e){e.preventDefault(),t.style.display="block"})),e.addEventListener("click",o),t.addEventListener("click",o),n.addEventListener("click",o)},i=function(){var e=document.querySelector(".fixed-gift"),t=document.getElementById("gift");e.addEventListener("click",(function(){t.style.display="block",e.remove()})),t.addEventListener("click",(function(e){var n=e.target;(!n.closest(".form-wrapper")||n.closest(".close_icon")||n.closest(".close-btn"))&&(t.style.display="none")}))},l=function(){var e=document.querySelector(".main-slider").querySelectorAll(".slide"),t=0,n=function(){e[t].style.display="none",++t>=e.length&&(t=0),function(e,t){e[t].style.display="flex"}(e,t)};!function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;setInterval(n,e)}(5e3)};function s(e){return function(e){if(Array.isArray(e))return a(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var c=function(){var e=document.createElement("div"),t=document.getElementById("thanks"),n=document.querySelector("#thanks p");e.style.cssText="\n        display: block;\n        position: relative;\n        z-index: 99999;\n        width: 30px;\n        height: 30px;\n        margin: auto;\n        background: url('http://hello-site.ru//main/images/preloads/tail-spin.svg') center center no-repeat;\n        background-size: 22px;\n    ";var r=document.createElement("div");r.style.cssText="font-size: 1.2rem; color: red; margin-top: 10px; margin-bottom: 10px";var o=document.createElement("div");o.style.cssText="font-size: 2rem; color: white; margin-top: 10px; margin-bottom: 10px";var i=function(e){var t,n,o=e.target;if(null!==o.closest("form")&&(t=o.closest("form").querySelector("button")),"name"===o.getAttribute("name")&&"Промокод"!==o.getAttribute("placeholder")){var i=o;i.value.match(/^[?!,.а-яА-ЯёЁ0-9\s]+$/)?(i.style.border="",t.removeAttribute("disabled")):(i.style.border="2px solid red",t.setAttribute("disabled","disabled"))}var l=function(){null!==o.closest("form")&&o.closest("form").querySelectorAll("input").forEach((function(e){"2px solid red"===e.style.border&&t.setAttribute("disabled","disabled")}))},s=function(){n.checked?(t.removeAttribute("disabled"),r.textContent=""):(t.setAttribute("disabled","disabled"),r.textContent="необходимо подтвердить согласие!",o.closest("form").appendChild(r)),l()};null!==o.closest("form")&&o.closest("form").querySelectorAll("input").forEach((function(e){"checkbox"===e.getAttribute("type")&&"club-name"!==e.getAttribute("name")&&(n=e,s(),e.addEventListener("change",s))})),l()};document.body.addEventListener("keyup",i),document.body.addEventListener("focusout",i),document.body.addEventListener("submit",(function(r){r.preventDefault();var i=r.target;if(i.closest("form")){var l=i.closest("form");o.textContent="",l.appendChild(o),o.insertAdjacentElement("beforebegin",e);var a={};new FormData(l).forEach((function(e,t){e=e.trim(),a[t]=e})),function(e){return fetch("server.php",{method:"POST",cache:"default",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)})}(a).then((function(r){if(e.remove(),200!==r.status)throw new Error("status networn not 200");t.style.display="block",n.textContent="Ваша заявка отправлена. \n        Мы свяжемся с вами в ближайшее время.\n        ",setTimeout((function(){o.textContent=""}),3e3)})).catch((function(){e.remove(),t.style.display="block",n.textContent="Ошибка",setTimeout((function(){o.textContent=""}),3e3)})),s(l.elements).forEach((function(e){"text"!==e.getAttribute("type")&&"tel"!==e.getAttribute("type")||(e.value="")}));try{var c=document.getElementById("price-total"),d=document.querySelector(".time").querySelectorAll("input"),u=c.textContent;d.forEach((function(e){e.checked&&(u=2999,u*=e.value,c.textContent=Math.floor(u))}))}catch(e){1}}}))};function d(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return u(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw i}}}}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var f=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"+7 (___) ___-__-__",n=document.querySelectorAll("input");function r(e){var n=e.keyCode,r=t,o=r.replace(/\D/g,""),i=this.value.replace(/\D/g,""),l=0,s=r.replace(/[_\d]/g,(function(e){return l<i.length?i.charAt(l++)||o.charAt(l):e}));-1!=(l=s.indexOf("_"))&&(s=s.slice(0,l));var a=r.substr(0,this.value.length).replace(/_+/g,(function(e){return"\\d{1,"+e.length+"}"})).replace(/[+()]/g,"\\$&");(!(a=new RegExp("^"+a+"$")).test(this.value)||this.value.length<5||n>47&&n<58)&&(this.value=s),"blur"==e.type&&this.value.length<5&&(this.value="")}var o,i=d(n);try{for(i.s();!(o=i.n()).done;){var l=o.value;l.getAttribute("name")===e&&(l.addEventListener("input",r),l.addEventListener("focus",r),l.addEventListener("blur",r))}}catch(e){i.e(e)}finally{i.f()}},m=function(){var e=document.querySelector(".time"),t=e.querySelectorAll("input"),n=document.getElementById("price-total"),r=document.querySelector(".price .input-text input"),o=n.textContent,i=n.textContent,l=function(){return n.textContent=Math.floor(o)},s=function(){"ТЕЛО2020"===r.value?o-=Math.floor(o/30):o=i,l()};r.addEventListener("input",s),e.addEventListener("change",(function(){t.forEach((function(e){e.checked&&(o=2999,o*=e.value,i=o,s(),l())}))}))};function p(e){return function(e){if(Array.isArray(e))return y(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||h(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function h(e,t){if(e){if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?y(e,t):void 0}}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function v(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var b=function(){function e(t){var n=t.main,r=t.wrap,o=t.next,i=t.prev,l=t.infinity,s=void 0!==l&&l,a=t.position,c=void 0===a?0:a,d=t.slidesToShow,u=void 0===d?3:d,f=t.responsive,m=void 0===f?[]:f;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),n&&r||console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"'),this.main=document.querySelector(n),this.wrap=document.querySelector(r),this.slides=document.querySelector(r).children,this.next=document.querySelector(o),this.prev=document.querySelector(i),this.slidesToShow=u,this.options={position:c,infinity:s,widthSlide:Math.ceil(100/this.slidesToShow),maxPosition:this.slides.length-this.slidesToShow},this.responsive=m}var t,n,r;return t=e,(n=[{key:"init",value:function(){this.addGloClass(),this.addStyle(),this.next&&this.prev||this.addArrow(),this.controlSlider(),this.responsive&&this.responseInit()}},{key:"addGloClass",value:function(){this.main.classList.add("glo-slider"),this.wrap.classList.add("glo-slider__wrap");var e,t=function(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=h(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,l=!0,s=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return l=e.done,e},e:function(e){s=!0,i=e},f:function(){try{l||null==n.return||n.return()}finally{if(s)throw i}}}}(this.slides);try{for(t.s();!(e=t.n()).done;)e.value.classList.add("glo-slider__item")}catch(e){t.e(e)}finally{t.f()}}},{key:"addStyle",value:function(){var e=document.getElementById("sliderCarousel-style");e||((e=document.createElement("style")).id="sliderCarousel-style"),e.textContent="\n            .glo-slider__wrap {\n                display: flex !important;\n                transition: transform 0.5s !important;\n                will-change: transform !important;\n            }\n            .glo-slider__item {\n                align-items: center;\n                justify-content: center;\n                flex: 0 0 ".concat(this.options.widthSlide,"% !important;\n                margin: auto 0 !important;\n            }\n        "),document.head.appendChild(e)}},{key:"controlSlider",value:function(){this.prev.addEventListener("click",this.prevSlider.bind(this)),this.next.addEventListener("click",this.nextSlider.bind(this))}},{key:"prevSlider",value:function(){(this.options.infinity||this.options.position>0)&&(--this.options.position,this.options.position<0&&(this.options.position=this.options.maxPosition),this.wrap.style.transform="\n                translateX(-".concat(this.options.position*this.options.widthSlide,"%)\n            "))}},{key:"nextSlider",value:function(){(this.options.infinity||this.options.position<this.options.maxPosition)&&(++this.options.position,this.options.position>this.options.maxPosition&&(this.options.position=0),this.wrap.style.transform="\n                translateX(-".concat(this.options.position*this.options.widthSlide,"%)\n            "))}},{key:"addArrow",value:function(){this.prev=document.createElement("div"),this.next=document.createElement("div"),this.prev.className="slider-arrow prev",this.next.className="slider-arrow next",this.prev.innerHTML="<span><",this.next.innerHTML="<span>>",this.main.insertAdjacentElement("afterend",this.prev),this.main.insertAdjacentElement("afterend",this.next)}},{key:"responseInit",value:function(){var e=this,t=this.slidesToShow,n=this.responsive.map((function(e){return e.breakpoint})),r=Math.max.apply(Math,p(n)),o=function(){var o=document.documentElement.clientWidth;if(o<r)for(var i=0;i<n.length;i++)o<n[i]&&(e.slidesToShow=e.responsive[i].slidesToShow,e.addStyleToAdapt());else e.slidesToShow=t,e.addStyleToAdapt()};o(),window.addEventListener("resize",o)}},{key:"addStyleToAdapt",value:function(){this.options.widthSlide=Math.floor(100/this.slidesToShow),this.addStyle()}}])&&v(t.prototype,n),r&&v(t,r),e}(),g=function(){var e=document.querySelector(".gallery-slider"),t=e.querySelectorAll(".slide");t.forEach((function(){var t=document.createElement("div");t.classList.add("slider-dots"),e.insertAdjacentElement("afterend",t)})),t[0].classList.add("slide-active");var n;(n=document.getElementById("photogallery-style"))||((n=document.createElement("style")).id="photogallery-style"),n.textContent="\n            .slider-dots-active {\n            }\n            #gallery .gallery-slider {\n                height: 400px !important;\n            }\n            #gallery .gallery-slider .slider-arrow.next {\n                right: 130px;\n            }\n            #gallery .gallery-slider .slider-arrow.prev {\n                left: 130px\n            }\n            #gallery .gallery-slider .slide {\n                position: absolute !important;\n                transition: 0.6s ease-out !important;\n                left: 50% !important;\n                width: 0% !important;\n            }\n            #gallery .gallery-slider .slide-active {\n                width: 100% !important;\n                left: 0% !important;\n                position: static !important;\n            }\n            @media(max-width:1024px) {\n                #gallery .gallery-slider .slider-arrow.next {\n                    right: 30px;\n                }\n                #gallery .gallery-slider .slider-arrow.prev {\n                    left: 30px\n                }\n            }\n            @media(max-width:420px) {\n                #gallery .gallery-slider {\n                    display: flex !important;\n                    height: 250px !important;\n                    align-items: center !important;\n                }\n            }\n        ",document.head.appendChild(n);var r,o;r=document.createElement("div"),o=document.createElement("div"),r.className="slider-arrow prev",o.className="slider-arrow next",r.innerHTML="<span><",o.innerHTML="<span>>",e.insertAdjacentElement("afterbegin",r),e.insertAdjacentElement("afterbegin",o);var i,l=document.querySelectorAll(".slider-dots"),s=0,a=function(e,t,n){return e[t].classList.remove(n)},c=function(e,t,n){return e[t].classList.add(n)},d=function(){a(t,s,"slide-active"),a(l,s,"slider-dots-active"),++s>=t.length&&(s=0),c(t,s,"slide-active"),c(l,s,"slider-dots-active")},u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;i=setInterval(d,e)};e.addEventListener("click",(function(e){e.preventDefault();var n=e.target;n.closest(".slider-arrow, .slider-dots")&&(a(t,s,"slide-active"),a(l,s,"slider-dots-active"),n.closest(".slider-arrow.next")?s++:n.closest(".slider-arrow.prev")?s--:n.matches(".slider-dots")&&l.forEach((function(e,t){e===n&&(s=t)})),s>=t.length&&(s=0),s<0&&(s=t.length-1),c(t,s,"slide-active"),c(l,s,"slider-dots-active"))})),e.addEventListener("mouseover",(function(e){(e.target.closest(".slider-arrow")||e.target.matches(".slider-dots"))&&clearInterval(i)})),e.addEventListener("mouseout",(function(e){(e.target.closest(".slider-arrow")||e.target.matches(".slider-dots"))&&u()})),u(3e3)},E=function(){var e=document.getElementById("totop");e.style.display="none";var t=0;e.addEventListener("click",(function(){event.preventDefault();var e=document.documentElement.scrollTop;t+=e;!function e(){var n=requestAnimationFrame(e);t>=0?(document.documentElement.scrollTop="".concat(t),t-=74):(document.documentElement.scrollTop=0,cancelAnimationFrame(n),t=0)}()})),window.addEventListener("scroll",(function(){document.documentElement.scrollTop>=250?e.style.display="block":e.style.display="none"}))},S=function(){var e=document.querySelector(".menu-button.hidden-large"),t=e.querySelector("img"),n=document.querySelector(".popup-menu.hidden-large"),r=document.querySelector(".hidden-small"),o=document.querySelector(".top-menu"),i=function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)};window.addEventListener("resize",(function(){i()<768?(e.style.display="block",r.style.display="none"):(e.style.display="none",r.style.display="flex")})),window.addEventListener("scroll",(function(){document.documentElement.scrollTop>190&&i()<768?o.style.position="fixed":o.style.position=""})),t.addEventListener("click",(function(){n.style.display="flex"})),n.addEventListener("click",(function(e){var t=e.target;(t.closest("img")||t.closest("a"))&&(n.style.display="none")}))},w=function(){var e=function(){return Math.max(document.body.scrollWidth,document.documentElement.scrollWidth,document.body.offsetWidth,document.documentElement.offsetWidth,document.body.clientWidth,document.documentElement.clientWidth)},t=document.querySelector(".hidden-small"),n=document.querySelector(".popup-menu.hidden-large"),r=0,o=function(t){var n=t.target;t.preventDefault();var o,i=document.documentElement.scrollTop;r+=i,e()<=320?n.closest('[href="#clubs"]')?o=720:n.closest('[href="#services"]')?o=1890:n.closest('[href="#cards"]')?o=2670:n.closest('[href="#gallery"]')?o=2290:n.closest('[href="#footer"]')&&(o=3640):e()<=360||e()<=375?n.closest('[href="#clubs"]')?o=680:n.closest('[href="#services"]')?o=1890:n.closest('[href="#cards"]')?o=2670:n.closest('[href="#gallery"]')?o=2290:n.closest('[href="#footer"]')&&(o=3620):e()<=430?n.closest('[href="#clubs"]')?o=620:n.closest('[href="#services"]')?o=1840:n.closest('[href="#cards"]')?o=2620:n.closest('[href="#gallery"]')?o=2250:n.closest('[href="#footer"]')&&(o=3620):e()<=768?n.closest('[href="#clubs"]')?o=720:n.closest('[href="#services"]')?o=1520:n.closest('[href="#cards"]')?o=2440:n.closest('[href="#gallery"]')?o=1870:n.closest('[href="#footer"]')&&(o=3205):e()<=1024?n.closest('[href="#clubs"]')?o=720:n.closest('[href="#services"]')?o=1200:n.closest('[href="#cards"]')?o=2520:n.closest('[href="#gallery"]')?o=1720:n.closest('[href="#footer"]')&&(o=3205):e()>1028&&(n.closest('[href="#clubs"]')?o=720:n.closest('[href="#services"]')?o=1620:n.closest('[href="#cards"]')?o=2570:n.closest('[href="#gallery"]')?o=2040:n.closest('[href="#footer"]')&&(o=3205));r<o?function e(){var t=requestAnimationFrame(e);r<o?(document.documentElement.scrollTop="".concat(r),r+=25):(document.documentElement.scrollTop=o,cancelAnimationFrame(t),r=0)}():function e(){var t=requestAnimationFrame(e);r>=o?(document.documentElement.scrollTop="".concat(r),r-=25):(document.documentElement.scrollTop=o,cancelAnimationFrame(t),r=0)}()};t.addEventListener("click",(function(e){o(e)})),n.addEventListener("click",(function(e){o(e)}))};r(),o();try{i()}catch(e){}l(),w(),E(),S(),new b({main:".services-slider",wrap:".services-slider",slidesToShow:4,infinity:!0,responsive:[{breakpoint:1024,slidesToShow:3},{breakpoint:768,slidesToShow:2},{breakpoint:576,slidesToShow:1}]}).init(),g(),f("phone");try{m()}catch(e){}c()}]);
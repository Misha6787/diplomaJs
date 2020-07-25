/* eslint-disable strict */
/* eslint-disable eol-last */
'use strict';

import chooseClub from './modules/chooseClub.js';
import openFreeVisitForm from './modules/openFreeVisitCallBackForms.js';
import openModalGift from './modules/openModalGift.js';
import mainSlider from './modules/mainSlider.js';
import sendForm from './modules/sendForm.js';
import maskPhone from './modules/maskPhone.js';
import calculate from './modules/calc.js';
import SliderCarousel from './modules/sliderCarousel.js';
import photogallery from './modules/photogallery.js';
import arrowScrool from './modules/arrowScrool.js';
import hamburger from './modules/hamburger.js';
import scrollToService from './modules/scrollToService.js';
let countError;

chooseClub();
openFreeVisitForm();
try {
    openModalGift();
} catch {
    countError + 1;
}
mainSlider();
scrollToService();
arrowScrool();
hamburger();
const carousel = new SliderCarousel({
    main: '.services-slider',
    wrap: '.services-slider',
    slidesToShow: 4,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3
    },
    {
        breakpoint: 768,
        slidesToShow: 2
    },
    {
        breakpoint: 576,
        slidesToShow: 1
    }]
});
carousel.init();
photogallery();
maskPhone('phone');
try {
    calculate();
} catch {
    countError + 1;
}
sendForm();

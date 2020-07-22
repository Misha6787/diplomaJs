/* eslint-disable strict */
'use strict';

const mainSlider = () => {
    const slider = document.querySelector('.main-slider'),
        slide = slider.querySelectorAll('.slide');

    let currentSlide = 0;

    const prevSlide = (elem, index) => elem[index].style.display = 'none';
    const nextSlide = (elem, index) => elem[index].style.display = 'flex';

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide);
        currentSlide++;
        if (currentSlide >= slide.length) {
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide);
    };
    const startSlide = (time = 3000) => {
        setInterval(autoPlaySlide, time);
    };
    startSlide(5000);
};

export default mainSlider;

/* eslint-disable strict */
'use strict';

const photogallery = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slides = gallerySlider.querySelectorAll('.slide');

    slides.forEach(() => {
        const dotItem = document.createElement('div');
        dotItem.classList.add('slider-dots');
        gallerySlider.insertAdjacentElement('afterend', dotItem);
    });
    slides[0].classList.add('photogallery_slide-active');

    const addStyle = () => {
        let style = document.getElementById('photogallery-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'photogallery-style';
        }
        style.textContent = `
            
        `;
        document.head.appendChild(style);
    };
    addStyle();
    const dot = document.querySelectorAll('.slider-dots');

    let currentSlide = 0,
        interval;
    const prevSlide = (elem, index, strClass) => elem[index].classList.remove(strClass);
    const nextSlide = (elem, index, strClass) => elem[index].classList.add(strClass);

    const autoPlaySlide = () => {
        prevSlide(slides, currentSlide, 'photogallery_slide-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'photogallery_slide-active');
        nextSlide(dot, currentSlide, 'dot-active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    gallerySlider.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        if (!target.matches('.portfolio-btn, .dot')) {
            return;
        }
        prevSlide(slides, currentSlide, 'photogallery_slide-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')) {
            currentSlide++;
        } else if (target.matches('#arrow-left')) {
            currentSlide--;
        } else if (target.matches('.dot')) {
            dot.forEach((elem, index) => {
                if (elem === target) {
                    currentSlide = index;
                }
            });
        }
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        }
        nextSlide(slides, currentSlide, 'photogallery_slide-active');
        nextSlide(dot, currentSlide, 'dot-active');
    });

    gallerySlider.addEventListener('mouseover', event => {
        if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
            stopSlide();
        }
    });
    gallerySlider.addEventListener('mouseout', event => {
        if (event.target.matches('.portfolio-btn') ||
            event.target.matches('.dot')) {
            startSlide();
        }
    });
    startSlide(1500);
};

export default photogallery;

/* eslint-disable strict */
'use strict';

const photogallery = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slides = gallerySlider.querySelectorAll('.slide');

    slides.forEach(() => {
        const dotItem = document.createElement('div');
        dotItem.classList.add('slider-dots');
        // dotItem.innerHTML = `<li>`;
        gallerySlider.insertAdjacentElement('afterend', dotItem);
    });
    slides[0].classList.add('slide-active');
    const addStyle = () => {
        let style = document.getElementById('photogallery-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'photogallery-style';
        }
        style.textContent = `
            .slider-dots-active {
            }
            #gallery .gallery-slider {
                height: 400px !important;
            }
            #gallery .gallery-slider .slider-arrow.next {
                right: 130px;
            }
            #gallery .gallery-slider .slider-arrow.prev {
                left: 130px
            }
            #gallery .gallery-slider .slide {
                position: absolute !important;
                transition: 0.6s ease-out !important;
                left: 50% !important;
                width: 0% !important;
            }
            #gallery .gallery-slider .slide-active {
                width: 100% !important;
                left: 0% !important;
                position: static !important;
            }
            @media(max-width:1024px) {
                #gallery .gallery-slider .slider-arrow.next {
                    right: 30px;
                }
                #gallery .gallery-slider .slider-arrow.prev {
                    left: 30px
                }
            }
            @media(max-width:420px) {
                #gallery .gallery-slider {
                    display: flex !important;
                    height: 250px !important;
                    align-items: center !important;
                }
            }
        `;
        document.head.appendChild(style);
    };
    addStyle();
    const addArrow = () => {
        const prev = document.createElement('div');
        const next = document.createElement('div');

        prev.className = 'slider-arrow prev';
        next.className = 'slider-arrow next';

        prev.innerHTML = `<span><`;
        next.innerHTML = `<span>>`;

        gallerySlider.insertAdjacentElement('afterbegin', prev);
        gallerySlider.insertAdjacentElement('afterbegin', next);
    };
    addArrow();
    const dot = document.querySelectorAll('.slider-dots');

    let currentSlide = 0,
        interval;
    const prevSlide = (elem, index, strClass) => elem[index].classList.remove(strClass);
    const nextSlide = (elem, index, strClass) => elem[index].classList.add(strClass);

    const autoPlaySlide = () => {
        prevSlide(slides, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'slider-dots-active');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'slider-dots-active');
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
        if (!target.closest('.slider-arrow, .slider-dots')) {
            return;
        }
        prevSlide(slides, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'slider-dots-active');

        if (target.closest('.slider-arrow.next')) {
            currentSlide++;
        } else if (target.closest('.slider-arrow.prev')) {
            currentSlide--;
        } else if (target.matches('.slider-dots')) {
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
        nextSlide(slides, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'slider-dots-active');
    });

    gallerySlider.addEventListener('mouseover', event => {
        if (event.target.closest('.slider-arrow') ||
            event.target.matches('.slider-dots')) {
            stopSlide();
        }
    });
    gallerySlider.addEventListener('mouseout', event => {
        if (event.target.closest('.slider-arrow') ||
            event.target.matches('.slider-dots')) {
            startSlide();
        }
    });
    startSlide(3000);
};

export default photogallery;

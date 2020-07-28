/* eslint-disable strict */
'use strict';

const photogallery = () => {
    const gallerySlider = document.querySelector('.gallery-slider'),
        slides = gallerySlider.querySelectorAll('.slide'),
        galleryBg = document.querySelector('.gallery-bg .wrapper');

    const dotBlock = document.createElement('div');
    dotBlock.classList.add('block-dots');
    gallerySlider.insertAdjacentElement('afterend', dotBlock);
    slides.forEach(() => {
        const dotItem = document.createElement('div');
        dotItem.classList.add('slider-dots');
        dotItem.innerHTML = `<li><button></button></li>`;
        dotBlock.insertAdjacentElement('afterbegin', dotItem);
    });
    slides[0].classList.add('slide-active');
    const addStyle = () => {
        let style = document.getElementById('photogallery-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'photogallery-style';
        }
        style.textContent = `
            .block-dots {
                bottom: 20px;
                width: 100%;
                margin: 20px auto 0;
                display: -webkit-box;
                display: -ms-flexbox;
                display: flex;
                -webkit-box-pack: center;
                -ms-flex-pack: center;
                justify-content: center;
                flex-direction: row-reverse !important;
                z-index: 99999;
            }
            .slider-dots li{
                list-style-type: none !important;
            }
            .slider-dots {
                position: relative !important;
                display: inline-block !important;
                position: absolute;
                bottom: 80px !important;
                left: 0 !important;
            }
            .slider-dots:last-child {
                margin-left: 0 !important;
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
    const dot = document.querySelectorAll('.slider-dots li');
    dot[0].classList.add('slick-active');

    let currentSlide = 0,
        interval;
    const prevSlide = (elem, index, strClass) => elem[index].classList.remove(strClass);
    const nextSlide = (elem, index, strClass) => elem[index].classList.add(strClass);

    const autoPlaySlide = () => {
        prevSlide(slides, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'slick-active');
        currentSlide++;
        if (currentSlide >= slides.length) {
            currentSlide = 0;
        }
        nextSlide(slides, currentSlide, 'slide-active');
        nextSlide(dot, currentSlide, 'slick-active');
    };
    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    const stopSlide = () => {
        clearInterval(interval);
    };
    galleryBg.addEventListener('click', event => {
        event.preventDefault();
        const target = event.target;
        if (!target.closest('.slider-arrow, .slider-dots')) {
            return;
        }
        prevSlide(slides, currentSlide, 'slide-active');
        prevSlide(dot, currentSlide, 'slick-active');

        if (target.closest('.slider-arrow.next')) {
            currentSlide++;
        } else if (target.closest('.slider-arrow.prev')) {
            currentSlide--;
        } else if (target.closest('.slider-dots li')) {
            dot.forEach((elem, index) => {
                if (elem.closest('li').children[0] === target) {
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
        nextSlide(dot, currentSlide, 'slick-active');
    });

    galleryBg.addEventListener('mouseover', event => {
        const target = event.target;
        if (target.closest('.slide') ||
            target.closest('.block-dots') ||
            target.closest('.slider-arrow')) {
            stopSlide();
        }
    });
    galleryBg.addEventListener('mouseout', event => {
        const target = event.target;
        if (target.closest('.slide') ||
            target.closest('.block-dots') ||
            target.closest('.slider-arrow')) {
            startSlide();
        }
    });
    startSlide(3000);
};

export default photogallery;

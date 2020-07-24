/* eslint-disable strict */
'use strict';

class SliderCarousel {
    constructor({
        main,
        wrap,
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 3,
        responsive = []
    }) {
        if (!main || !wrap) {
            console.warn('slider-carousel: Необходимо 2 свойства, "main" и "wrap"');
        }
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.ceil(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow
        };
        this.responsive = responsive;
    }
    init() {
        this.addGloClass();
        this.addStyle();
        if (this.next && this.prev) {
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }
        if (this.responsive) {
            this.responseInit();
        }
    }
    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides) {
            item.classList.add('glo-slider__item');
        }
    }
    addStyle() {
        let style = document.getElementById('sliderCarousel-style');
        if (!style) {
            style = document.createElement('style');
            style.id = 'sliderCarousel-style';
        }
        style.textContent = `
            .glo-slider__wrap {
                display: flex !important;
                transition: transform 0.5s !important;
                will-change: transform !important;
            }
            .glo-slider__item {
                align-items: center;
                justify-content: center;
                flex: 0 0 ${this.options.widthSlide}% !important;
                margin: auto 0 !important;
            }
        `;
        document.head.appendChild(style);
    }
    controlSlider() {
        this.prev.addEventListener('click', this.prevSlider.bind(this));
        this.next.addEventListener('click', this.nextSlider.bind(this));
    }
    prevSlider() {
        if (this.options.infinity || this.options.position > 0) {
            --this.options.position;
            if (this.options.position < 0) {
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `
                translateX(-${this.options.position * this.options.widthSlide}%)
            `;
        }
    }
    nextSlider() {
        if (this.options.infinity || this.options.position < this.options.maxPosition) {
            ++this.options.position;
            if (this.options.position > this.options.maxPosition) {
                this.options.position = 0;
            }
            this.wrap.style.transform = `
                translateX(-${this.options.position * this.options.widthSlide}%)
            `;
        }
    }
    addArrow() {
        this.prev = document.createElement('div');
        this.next = document.createElement('div');

        this.prev.className = 'slider-arrow prev';
        this.next.className = 'slider-arrow next';

        this.prev.innerHTML = `<span><`;
        this.next.innerHTML = `<span>>`;

        this.main.insertAdjacentElement('afterend', this.prev);
        this.main.insertAdjacentElement('afterend', this.next);


    }
    responseInit() {
        const slidesToShowDefault = this.slidesToShow;
        const allResponce = this.responsive.map(item => item.breakpoint);
        const maxResponce = Math.max(...allResponce);
        const checkResponce = () => {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponce) {
                for (let i = 0; i < allResponce.length; i++) {
                    if (widthWindow < allResponce[i]) {
                        this.slidesToShow = this.responsive[i].slidesToShow;
                        this.addStyleToAdapt();
                    }
                }
            } else {
                this.slidesToShow = slidesToShowDefault;
                this.addStyleToAdapt();
            }
        };
        checkResponce();

        window.addEventListener('resize', checkResponce);
    }
    addStyleToAdapt() {
        this.options.widthSlide = Math.floor(100 / this.slidesToShow);
        this.addStyle();
    }
}
export default SliderCarousel;

/* eslint-disable strict */
'use strict';

const showHamberger = () => {
    const hamburgerBlock = document.querySelector('.menu-button.hidden-large'),
        hamburger = hamburgerBlock.querySelector('img'),
        popupHamburgerMenu = document.querySelector('.popup-menu.hidden-large'),
        hiddenSmall = document.querySelector('.hidden-small'),
        topMenu = document.querySelector('.top-menu');
    const screenWidth = () => Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );
    const addHamburgerMenu = () => {
        if (screenWidth() < 768) {
            hamburgerBlock.style.display = 'block';
            hiddenSmall.style.display = 'none';
        } else {
            hamburgerBlock.style.display = 'none';
            hiddenSmall.style.display = 'flex';
        }
    };
    const fixedHamburger = () => {
        if (document.documentElement.scrollTop > 190 && screenWidth() < 768) {
            topMenu.style.position = 'fixed';
        } else {
            topMenu.style.position = '';
        }
    };
    const showHamburgerMenu = () => {
        popupHamburgerMenu.style.display = 'flex';
    };
    const clickButtonToMenu = event => {
        const target = event.target;
        if (target.closest('img') || target.closest('a')) {
            popupHamburgerMenu.style.display = 'none';
        }
    };
    window.addEventListener('resize', addHamburgerMenu);
    window.addEventListener('scroll', fixedHamburger);
    hamburger.addEventListener('click', showHamburgerMenu);
    popupHamburgerMenu.addEventListener('click', clickButtonToMenu);
};

export default showHamberger;

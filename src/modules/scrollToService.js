/* eslint-disable strict */
'use strict';

const scrollToService = () => {
    const screenWidth = () => Math.max(
        document.body.scrollWidth, document.documentElement.scrollWidth,
        document.body.offsetWidth, document.documentElement.offsetWidth,
        document.body.clientWidth, document.documentElement.clientWidth
    );
    const menu = document.querySelector('.hidden-small'),
        popupHamburgerMenu = document.querySelector('.popup-menu.hidden-large'),
        html = document.querySelector('html');
    let count = 0;
    const scroolinterval = event => {
        const target = event.target;
        event.preventDefault();
        const scroolPoint = document.documentElement.scrollTop;
        count += scroolPoint;
        let distanceToBlock;
        const selectedResolution = (param1, param2, param3, param4, param5) => {
            if (target.closest('[href="#clubs"]')) {
                distanceToBlock = param1;
            } else if (target.closest('[href="#services"]')) {
                distanceToBlock = param2;
            } else if (target.closest('[href="#cards"]')) {
                distanceToBlock = param3;
            } else if (target.closest('[href="#gallery"]')) {
                distanceToBlock = param4;
            } else if (target.closest('[href="#footer"]')) {
                distanceToBlock = param5;
            }
        };
        const selectedResolutionOtherSaits = (param1, param2, param3, param4, param5) => {
            if (target.closest('[href="#services"]')) {
                distanceToBlock = param1;
            } else if (target.closest('[href="#cards"]')) {
                distanceToBlock = param2;
            } else if (target.closest('[href="#gallery"]')) {
                distanceToBlock = param3;
            } else if (target.closest('[href="#footer"]')) {
                distanceToBlock = param4;
            } else if (target.closest('[href="#table"]')) {
                distanceToBlock = param5;
            }
        };
        if (html.id === '') {
            if (screenWidth() <= 320) {
                selectedResolution(720, 1890, 2670, 2290, 3640);
            } else if (screenWidth() <= 360 || screenWidth() <= 375) {
                selectedResolution(680, 1890, 2670, 2290, 3620);
            } else if (screenWidth() <= 430) {
                selectedResolution(620, 1840, 2620, 2250, 3620);
            } else if (screenWidth() <= 768) {
                selectedResolution(720, 1520, 2440, 1870, 3205);
            } else if (screenWidth() <= 1024) {
                selectedResolution(720, 1200, 2520, 1720, 3205);
            } else if (screenWidth() > 1028) {
                selectedResolution(720, 1620, 2570, 2040, 3205);
            }
        } else if (html.id === 'mozaika') {
            if (screenWidth() <= 320 || screenWidth() <= 360 || screenWidth() <= 375) {
                selectedResolutionOtherSaits(3800, 2420, 3355, 5125, 615);
            } else if (screenWidth() <= 430) {
                selectedResolutionOtherSaits(3750, 2380, 3355, 5125, 615);
            } else if (screenWidth() <= 768) {
                selectedResolutionOtherSaits(2640, 1555, 2100, 3360, 660);
            } else if (screenWidth() <= 1024) {
                selectedResolutionOtherSaits(2510, 1400, 1920, 2728, 660);
            } else if (screenWidth() > 1028) {
                selectedResolutionOtherSaits(2340, 1255, 1820, 3360, 660);
            }
        } else if (html.id === 'schelkovo') {
            if (screenWidth() <= 320 || screenWidth() <= 360 || screenWidth() <= 375) {
                selectedResolutionOtherSaits(4300, 2950, 3880, 5640, 670);
            } else if (screenWidth() <= 430) {
                selectedResolutionOtherSaits(4270, 2900, 3880, 5630, 615);
            } else if (screenWidth() <= 768) {
                selectedResolutionOtherSaits(2800, 1715, 2260, 3520, 660);
            } else if (screenWidth() <= 1024) {
                selectedResolutionOtherSaits(2670, 1560, 2080, 2890, 660);
            } else if (screenWidth() > 1028) {
                selectedResolutionOtherSaits(2500, 1415, 1980, 3520, 660);
            }
        }
        const animScrooToServiceDown = () => {
            const animScrool = requestAnimationFrame(animScrooToServiceDown);
            if (count < distanceToBlock) {
                document.documentElement.scrollTop = `${count}`;
                count += 25;
            } else {
                document.documentElement.scrollTop = distanceToBlock;
                cancelAnimationFrame(animScrool);
                count = 0;
            }
        };
        const animScrooToServiceUp = () => {
            const animScrool = requestAnimationFrame(animScrooToServiceUp);
            if (count >= distanceToBlock) {
                document.documentElement.scrollTop = `${count}`;
                count -= 25;
            } else {
                document.documentElement.scrollTop = distanceToBlock;
                cancelAnimationFrame(animScrool);
                count = 0;
            }
        };
        if (count < distanceToBlock) {
            animScrooToServiceDown();
        } else {
            animScrooToServiceUp();
        }
    };
    menu.addEventListener('click', event => {
        scroolinterval(event);
    });
    popupHamburgerMenu.addEventListener('click', event => {
        scroolinterval(event);
    });
};

export default scrollToService;

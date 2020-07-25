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
    console.log(html.id);
    let count = 0;
    const scroolinterval = event => {
        const target = event.target;
        event.preventDefault();
        const scroolPoint = document.documentElement.scrollTop;
        count += scroolPoint;
        let distanceToBlock;
        // if (html)
        if (screenWidth() <= 320) {
            if (target.closest('[href="#clubs"]')) {
                distanceToBlock = 720;
            } else if (target.closest('[href="#services"]')) {
                distanceToBlock = 1890;
            } else if (target.closest('[href="#cards"]')) {
                distanceToBlock = 2670;
            } else if (target.closest('[href="#gallery"]')) {
                distanceToBlock = 2290;
            } else if (target.closest('[href="#footer"]')) {
                distanceToBlock = 3640;
            }
        } else if (screenWidth() <= 360 || screenWidth() <= 375) {
            if (target.closest('[href="#clubs"]')) {
                distanceToBlock = 680;
            } else if (target.closest('[href="#services"]')) {
                distanceToBlock = 1890;
            } else if (target.closest('[href="#cards"]')) {
                distanceToBlock = 2670;
            } else if (target.closest('[href="#gallery"]')) {
                distanceToBlock = 2290;
            } else if (target.closest('[href="#footer"]')) {
                distanceToBlock = 3620;
            }
        } else if (screenWidth() <= 430) {
            if (target.closest('[href="#clubs"]')) {
                distanceToBlock = 620;
            } else if (target.closest('[href="#services"]')) {
                distanceToBlock = 1840;
            } else if (target.closest('[href="#cards"]')) {
                distanceToBlock = 2620;
            } else if (target.closest('[href="#gallery"]')) {
                distanceToBlock = 2250;
            } else if (target.closest('[href="#footer"]')) {
                distanceToBlock = 3620;
            }
        } else if (screenWidth() <= 768) {
            if (target.closest('[href="#clubs"]')) {
                distanceToBlock = 720;
            } else if (target.closest('[href="#services"]')) {
                distanceToBlock = 1520;
            } else if (target.closest('[href="#cards"]')) {
                distanceToBlock = 2440;
            } else if (target.closest('[href="#gallery"]')) {
                distanceToBlock = 1870;
            } else if (target.closest('[href="#footer"]')) {
                distanceToBlock = 3205;
            }
        } else if (screenWidth() <= 1024) {
            if (target.closest('[href="#clubs"]')) {
                distanceToBlock = 720;
            } else if (target.closest('[href="#services"]')) {
                distanceToBlock = 1200;
            } else if (target.closest('[href="#cards"]')) {
                distanceToBlock = 2520;
            } else if (target.closest('[href="#gallery"]')) {
                distanceToBlock = 1720;
            } else if (target.closest('[href="#footer"]')) {
                distanceToBlock = 3205;
            }
        } else if (screenWidth() > 1028) {
            if (target.closest('[href="#clubs"]')) {
                distanceToBlock = 720;
            } else if (target.closest('[href="#services"]')) {
                distanceToBlock = 1620;
            } else if (target.closest('[href="#cards"]')) {
                distanceToBlock = 2570;
            } else if (target.closest('[href="#gallery"]')) {
                distanceToBlock = 2040;
            } else if (target.closest('[href="#footer"]')) {
                distanceToBlock = 3205;
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

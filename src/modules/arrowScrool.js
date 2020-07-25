/* eslint-disable strict */
'use strict';

const addArrowToScroll = () => {
    const totop = document.getElementById('totop');
    totop.style.display = 'none';
    let count = 0;
    const addArrow = () => {
        if (document.documentElement.scrollTop >= 250) {
            totop.style.display = 'block';
        } else {
            totop.style.display = 'none';
        }
    };
    const scrollToStart = () => {
        event.preventDefault();
        const scroolPoint = document.documentElement.scrollTop;
        count += scroolPoint;
        const animScrooToService = () => {
            const animScrool = requestAnimationFrame(animScrooToService);
            if (count >= 0) {
                document.documentElement.scrollTop = `${count}`;
                count -= 74;
            } else {
                document.documentElement.scrollTop = 0;
                cancelAnimationFrame(animScrool);
                count = 0;
            }
        };
        animScrooToService();
    };
    totop.addEventListener('click', scrollToStart);
    window.addEventListener('scroll', addArrow);
};

export default addArrowToScroll;

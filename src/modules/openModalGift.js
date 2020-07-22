/* eslint-disable strict */
'use strict';

const openModalGift = () => {
    const fixedGift = document.querySelector('.fixed-gift'),
        gift = document.getElementById('gift');

    const openModal = () => {
        gift.style.display = 'block';
        fixedGift.remove();
    };
    const closeModal = event => {
        const target = event.target;
        if (!target.closest('.form-wrapper') || target.closest('.close_icon') || target.closest('.close-btn')) {
            gift.style.display = 'none';
        }
    };
    fixedGift.addEventListener('click', openModal);
    gift.addEventListener('click', closeModal);
};

export default openModalGift;

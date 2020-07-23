/* eslint-disable strict */
'use strict';
const openFreeVisitForm = () => {
    const freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form'),
        thanks = document.getElementById('thanks'),
        callbackBtn = document.querySelector('.callback-btn');

    const openModal = event => {
        const target = event.target;
        if (target.closest('.open-popup')) {
            event.preventDefault();
            freeVisitForm.style.display = 'block';
        }
    };
    const openCallBackModal = event => {
        event.preventDefault();
        callbackForm.style.display = 'block';
    };
    const closePopup = event => {
        const target = event.target;
        if (!target.closest('.form-wrapper') || target.closest('.close_icon') || target.closest('.close-btn')) {
            freeVisitForm.style.display = 'none';
            callbackForm.style.display = 'none';
            thanks.style.display = 'none';
        }
    };
    document.body.addEventListener('click', openModal);
    callbackBtn.addEventListener('click', openCallBackModal);
    freeVisitForm.addEventListener('click', closePopup);
    callbackForm.addEventListener('click', closePopup);
    thanks.addEventListener('click', closePopup);
};

export default openFreeVisitForm;

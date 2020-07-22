/* eslint-disable strict */
'use strict';
const openFreeVisitForm = () => {
    const freeVisitForm = document.getElementById('free_visit_form'),
        callbackForm = document.getElementById('callback_form');

    const openModal = event => {
        const target = event.target;
        event.preventDefault();
        if (target.closest('.open-popup')) {
            freeVisitForm.style.display = 'block';
        } else if (target.closest('.callback-btn')) {
            callbackForm.style.display = 'block';
        }
    };
    const closePopup = event => {
        const target = event.target;
        if (!target.closest('.form-wrapper') || target.closest('.close_icon')) {
            freeVisitForm.style.display = 'none';
            callbackForm.style.display = 'none';
        }
    };
    document.body.addEventListener('click', openModal);
    freeVisitForm.addEventListener('click', closePopup);
    callbackForm.addEventListener('click', closePopup);
};

export default openFreeVisitForm;

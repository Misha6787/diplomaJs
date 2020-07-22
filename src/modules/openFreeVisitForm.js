/* eslint-disable strict */
'use strict';
const openFreeVisitForm = () => {
    const openPopup = document.querySelector('.open-popup'),
        freeVisitForm = document.getElementById('free_visit_form');

    const openModal = () => {
        event.preventDefault();
        freeVisitForm.style.display = 'block';
    };
    const closePopup = event => {
        const target = event.target;
        if (!target.closest('.form-wrapper') || target.closest('.close_icon')) {
            freeVisitForm.style.display = 'none';
        }
    };
    openPopup.addEventListener('click', openModal);
    freeVisitForm.addEventListener('click', closePopup);
};


export default openFreeVisitForm;

/* eslint-disable strict */
'use strict';

const openCallbackForm = () => {
    const callbackForm = document.getElementById('callback_form');

    const openModal = event => {
        const target = event.target;
        if (target.closest('.callback-btn')) {
            callbackForm.style.display = 'block';
        }
    };
    const closeCallbackForm = event => {
        const target = event.target;
        if (!target.closest('.form-wrapper') || target.closest('.close_icon')) {
            callbackForm.style.display = 'none';
        }
    };
    document.body.addEventListener('click', openModal);
    callbackForm.addEventListener('click', closeCallbackForm);
};
export default openCallbackForm;

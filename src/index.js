/* eslint-disable strict */
/* eslint-disable eol-last */
'use strict';

import chooseClub from './modules/chooseClub.js';
import openFreeVisitForm from './modules/openFreeVisitCallBackForms.js';
import openModalGift from './modules/openModalGift.js';
import mainSlider from './modules/mainSlider.js';
import sendForm from './modules/sendForm.js';
import maskPhone from './modules/maskPhone.js';
let countError;

chooseClub();
openFreeVisitForm();
try {
    openModalGift();
} catch {
    countError + 1;
}
mainSlider();
maskPhone('phone');
sendForm();
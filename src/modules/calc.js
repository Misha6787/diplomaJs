/* eslint-disable strict */
'use strict';

const calculate = () => {
    const time = document.querySelector('.time'),
        tabs = time.querySelectorAll('input'),
        priceTotal = document.getElementById('price-total'),
        promoCode = document.querySelector('.price .input-text input');

    let total = priceTotal.textContent,
        totalPrev = priceTotal.textContent;

    const countTotal = () => priceTotal.textContent = Math.floor(total);
    const checkPromoCode = () => {
        promoCode.value === 'ТЕЛО2020' ? total -= Math.floor(total * 30 / 100) : total = totalPrev;
        countTotal();
    };
    const selectRadio = () => {
        tabs.forEach(item => {
            if (item.checked) {
                total = 2999 * item.value;
                totalPrev = total;
                checkPromoCode();
                countTotal();
            }
        });
    };
    promoCode.addEventListener('input', checkPromoCode);
    time.addEventListener('change', selectRadio);
};

export default calculate;

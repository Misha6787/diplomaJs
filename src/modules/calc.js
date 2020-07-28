/* eslint-disable strict */
'use strict';

const calculate = () => {
    const time = document.querySelector('.time'),
        tabs = time.querySelectorAll('input'),
        priceTotal = document.getElementById('price-total'),
        cardOrder = document.getElementById('card_order'),
        clubs = cardOrder.querySelectorAll('.club input'),
        promoCode = document.querySelector('.price .input-text input');
    let total = priceTotal.textContent,
        totalPrev = priceTotal.textContent;

    const countTotal = () => priceTotal.textContent = Math.floor(total);
    const checkPromoCode = () => {
        promoCode.value === 'ТЕЛО2020' ? total -= Math.floor(total * 30 / 100) : total = totalPrev;
        countTotal();
    };
    const selectRadio = () => {
        let clubPriceCount = 2999;
        clubs.forEach(item => {
            if (item.checked && item.value === 'mozaika') {
                clubPriceCount = 1999;
            } else if (item.checked && item.value === 'schelkovo') {
                clubPriceCount = 2999;
            }
        });
        tabs.forEach(item => {
            if (item.checked) {
                if (clubPriceCount === 2999) {
                    if (item.value === '6') {
                        total = 14990;
                    } else if (item.value === '9') {
                        total = 21990;
                    } else if (item.value === '12') {
                        total = 24990;
                    } else {
                        total = 2999;
                    }
                } else if (clubPriceCount === 1999) {
                    if (item.value === '6') {
                        total = 9900;
                    } else if (item.value === '9') {
                        total = 13900;
                    } else if (item.value === '12') {
                        total = 19900;
                    } else {
                        total = 1999;
                    }
                }
                totalPrev = total;
                checkPromoCode();
                countTotal();
            }
        });
    };
    promoCode.addEventListener('input', checkPromoCode);
    cardOrder.addEventListener('change', selectRadio);
};

export default calculate;

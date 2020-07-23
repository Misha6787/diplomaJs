/* eslint-disable strict */
'use strict';
const sendForm = () => {
    const loadMessage = document.createElement('div'),
        successMessage = `Ваша заявка отправлена. 
        <br>
        Мы свяжемся с вами в ближайшее время.
        `,
        errorMessage = 'Ошибка',
        thanks = document.getElementById('thanks'),
        textForm = document.querySelector('#thanks p');
    loadMessage.style.cssText = `
        display: block;
        position: relative;
        z-index: 99999;
        width: 30px;
        height: 30px;
        margin: auto;
        background: url('http://hello-site.ru//main/images/preloads/tail-spin.svg') center center no-repeat;
        background-size: 22px;
    `;

    const postData = body  =>
        fetch('server.php', {
            method: 'POST',
            cache: 'default',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    const textConfidetional = document.createElement('div');
    textConfidetional.style.cssText = 'font-size: 1.2rem; color: red; margin-top: 10px; margin-bottom: 10px';
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem; color: white; margin-top: 10px; margin-bottom: 10px';

    const validinput = event => {
        const target = event.target;
        let formBtn;
        if (target.closest('form') !== null) {
            formBtn = target.closest('form').querySelector('button');
        }
        if (target.getAttribute('name') === 'name' &&
            target.getAttribute('placeholder') !== 'Промокод') {
            const item = target;
            if (item.value.match(/^[?!,.а-яА-ЯёЁ0-9\s]+$/)) {
                item.style.border = '';
                formBtn.removeAttribute('disabled');
            } else {
                item.style.border = '2px solid red';
                formBtn.setAttribute('disabled', 'disabled');
            }
        }
        let inputs,
            inpCheckbox;

        const validation = () => {
            if (target.closest('form') !== null) {
                inputs = target.closest('form').querySelectorAll('input');
                inputs.forEach(item => {
                    if (item.style.border === '2px solid red') {
                        formBtn.setAttribute('disabled', 'disabled');
                    }
                });
            }
        };
        const validCheckBox = () => {
            if (inpCheckbox.checked) {
                formBtn.removeAttribute('disabled');
                textConfidetional.textContent = '';
            } else {
                formBtn.setAttribute('disabled', 'disabled');
                textConfidetional.textContent = 'необходимо подтвердить согласие!';
                target.closest('form').appendChild(textConfidetional);
            }
            validation();
        };
        if (target.closest('form') !== null) {
            inputs = target.closest('form').querySelectorAll('input');
            inputs.forEach(item => {
                if (item.getAttribute('type') === 'checkbox' &&
                item.getAttribute('name') !== 'club-name') {
                    inpCheckbox = item;
                    validCheckBox();
                    item.addEventListener('change', validCheckBox);
                }
            });
        }
        validation();
    };
    document.body.addEventListener('keyup', validinput);
    document.body.addEventListener('focusout', validinput);

    document.body.addEventListener('submit', event => {
        event.preventDefault();
        const target = event.target;
        if (target.closest('form')) {
            const form = target.closest('form');
            statusMessage.textContent = '';
            form.appendChild(statusMessage);
            statusMessage.insertAdjacentElement('beforebegin', loadMessage);
            const body = {};
            const formData = new FormData(form);
            formData.forEach((val, key) => {
                val = val.trim();
                body[key] = val;
            });
            postData(body)
                .then(response => {
                    loadMessage.remove();
                    if (response.status !== 200) {
                        throw new Error('status networn not 200');
                    }
                    thanks.style.display = 'block';
                    textForm.textContent = successMessage;
                    setTimeout(() => {
                        statusMessage.textContent = '';
                    }, 3000);
                })
                .catch(() => {
                    loadMessage.remove();
                    thanks.style.display = 'block';
                    textForm.textContent = errorMessage;
                    setTimeout(() => {
                        statusMessage.textContent = '';
                    }, 3000);
                });
            [...form.elements].forEach(item => {
                if (item.getAttribute('type') === 'text' || item.getAttribute('type') === 'tel') {
                    item.value = '';
                }
            });
        }
    });
};
export default sendForm;

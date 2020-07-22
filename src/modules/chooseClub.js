/* eslint-disable strict */
'use strict';

const chooseClub = () => {
    const chooseClubBtn = document.querySelector('.club-select'),
        clubsList = chooseClubBtn.querySelector('ul');

    const openClubsList = event => {
        const target = event.target;
        if (clubsList.style.display === '' && target.closest('.clubs-list')) {
            clubsList.style.display = 'block';
        } else {
            clubsList.style.display = '';
        }
    };
    document.body.addEventListener('click', openClubsList);
};

export default chooseClub;

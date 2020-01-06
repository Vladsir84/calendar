const popupStartTime = document.querySelector('.start-time');
const popupEndTime = document.querySelector('.end-time');

export const addButton = (event) => {
    if (event.target.classList.value === 'emptyCell') {
        console.log(popupStartTime.value)
        console.log(event.target.closest('.emptyRow').dataset.time + '');
        popupStartTime.value = event.target.closest('.emptyRow').dataset.time + '';
        popupEndTime.value = event.target.closest('.emptyRow').dataset.time + '';
    }
    const popup = document.querySelector(`.popup`);
    popup.classList.add('popup-switch');
};

const popupWindow = document.querySelector(`.calendar-visualization`);
const btnCreate = document.querySelector('.create-button');

popupWindow.addEventListener('click', addButton);
btnCreate.addEventListener('click', addButton);


document.querySelector('.one').value = '22:25';
const popupStartTime = document.querySelector('.start-time');
const popupEndTime = document.querySelector('.end-time');

export const addButton = (event) => {
    if (event.target.classList.value === 'emptyCell') {
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

let closeButton = document.querySelector('.close');
closeButton.onclick = function () {
    event.preventDefault();
    const popup = document.querySelector(`.popup`);
    popup.classList.remove('popup-switch');
}
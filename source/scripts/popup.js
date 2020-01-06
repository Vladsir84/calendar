export const addButton = (event) => {
    if (event.target.classList.value === 'emptyCell') {
        let startDate = document.querySelector('.start-date');
        let startTime = document.querySelector('.start-time');
        let endTime = document.querySelector('.end-time');
        let endDate = document.querySelector('.end-date');

        // вставляем время в попап
        startTime.value = event.target.closest('.emptyRow').dataset.time + '';
        endTime.value = event.target.closest('.emptyRow').dataset.time + '';

        // вставляем дату в попап
        let startMonth = '0'
        let startYear = '2020'
        let startDay = event.target.dataset.day
        startDate.value = `${startYear}-${startMonth}-${startDay}`;
        endDate.value = `${startYear}-${startMonth}-${startDay}`;
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
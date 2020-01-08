import { createTemporaryCell } from './temporary-cell.js';
import { calendarRendering } from './calendar-visualization.js';

export const addButton = (event) => {
    if (event.target.classList.value === 'emptyCell') {

        createTemporaryCell(event.target);

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

    // startDate.value = dateToString(startDate);
    // endDate.value = dateToString(endDate);
    // startTime.value = timeToString(startDate);
    // endTime.value = timeToString(endDate);

    const popup = document.querySelector(`.popup`);
    popup.classList.add('popup-switch');
};


export function dateToString(date) {
    const year = date.getFullYear();
    let month = date.getMonth() + 1;
    month = month < 10 ? '0' + month : month;
    let day = date.getDate();
    day = day < 10 ? '0' + day : day;

    return `${year}-${month}-${day}`;
};

export function timeToString(date) {
    let hour = date.getHours();
    hour = hour < 10 ? '0' + hour : hour;
    let minute = date.getMinutes();
    minute = minute < 10 ? '0' + minute : minute;

    return `${hour}:${minute}`;
}

const popupWindow = document.querySelector(`.calendar-visualization`);
const btnCreate = document.querySelector('.create-button');

popupWindow.addEventListener('click', addButton);
btnCreate.addEventListener('click', addButton);

let closeButton = document.querySelector('.close');
closeButton.onclick = function() {
    event.preventDefault();
    const popup = document.querySelector(`.popup`);
    popup.classList.remove('popup-switch');
    calendarRendering();
}

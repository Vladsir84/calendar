import { arrayOfDates } from './navigation.js';
let calendar_visualization = document.querySelector('.calendar-visualization');

export const emptyCellClick = event => {
    let dayNumber = event.target.dataset.number;
    let startTime = event.target.closest('.emptyRow').dataset.time.split(':')[0] - 1;
    let endTime = +event.target.closest('.emptyRow').dataset.time.split(':')[0];
    console.log(startTime);
    console.log(endTime);
    displayEvent(startTime, endTime, dayNumber);
};

calendar_visualization.addEventListener('click', emptyCellClick);

let eventPlace = document.querySelectorAll('.day');
let eventDay = document.querySelectorAll('.day-number');

export function displayEvent(starttime, endTime, text) {
    if (arrayOfDates[0].getMonth() === starttime.getMonth()) {
        let diff = ((endTime - starttime) / 1000 / 60);
        let activeEvent = document.createElement('div');
        for (let i = 0; i < 7; i++) {
            if (eventDay[i].innerHTML == endTime.getDate()) {
                eventPlace[i].append(activeEvent);
                activeEvent.classList.add('active_event');
                activeEvent.style.height = `${diff}px`;

                let timeParts = (starttime + '').split(' ')[4].split(':');
                let margin = +timeParts[0] * 60 + +timeParts[1];

                activeEvent.style.marginTop = `${margin + 100}px`;
                activeEvent.innerHTML += `${text}<br>`
                activeEvent.innerHTML += `${(starttime + '').split(' ')[4]} - ${(endTime + '').split(' ')[4]}`;
            }
        }
    }
};

let x = new Date('December 22, 1995 03:00:00');
let y = new Date('December 22, 1995 04:00:00');
displayEvent(x, y, 'Новое задание');

let x1 = new Date('December 24, 1995 00:05:00');
let y1 = new Date('December 24, 1995 01:54:00');
displayEvent(x1, y1, 'Новое задание');

let x2 = new Date('October 21, 1995 02:15:00');
let y2 = new Date('October 21, 1995 02:55:00');
displayEvent(x2, y2, 'Новое задание');
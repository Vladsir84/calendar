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
    starttime = new Date(starttime);
    endTime = new Date(endTime);
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

export function renderEvents(arrOfEvents) {
    for (let i = 0; i < arrOfEvents.length; i++) {
        displayEvent(arrOfEvents[i].startDate, arrOfEvents[i].endDate, name);
    }
};

// renderEvents(arrOfEvents);
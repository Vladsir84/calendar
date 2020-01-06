import { arrOfEvents } from './storage.js';

export function activeEventOnclick() {
    let activeEvents = document.querySelectorAll('.active_event')
    console.log((new Date() + '').split(' ')[4])
    for (let i = 0; i < activeEvents.length; i++) {
        console.log(activeEvents[i].innerHTML);
        activeEvents[i].addEventListener('click', function () {
            for (let j = 0; j < arrOfEvents.length; j++) {
                if ((activeEvents[i].innerHTML + '').includes(arrOfEvents[j].name) &&
                    (activeEvents[i].innerHTML + '').includes((arrOfEvents[j].startDate + '').split(' ')[4] + '')) {
                    editEvent(arrOfEvents[j]);
                }
            }
        })
    }
};

let editedEvent = {};

function editEvent(editedEvent) {
    const popup = document.querySelector(`.popup`);
    popup.classList.add('popup-switch');

    let name = document.querySelector('.input__name');
    console.log(name);
    let startDate = document.querySelector('.start-date');
    let startTime = document.querySelector('.start-time');
    let endTime = document.querySelector('.end-time');
    let endDate = document.querySelector('.end-date');
    let description = document.querySelector('.description-input ');

    name.value = editedEvent.name + '';
    console.log(new Date());

    let startMonth = (editedEvent.startDate.getMonth() + 1 < 9) ?
        `0${editedEvent.startDate.getMonth() + 1 + ''}` : `${editedEvent.startDate.getMonth() + 1}`;
    let startYear = (editedEvent.startDate + '').split(' ')[3];
    let startDay = (editedEvent.startDate + '').split(' ')[2];
    startDate.value = `${startYear}-${startMonth}-${startDay}`;

    startTime.value = (editedEvent.startDate + '').split(' ')[4].split(':').splice(0, 2).join(":");
    endTime.value = (editedEvent.endDate + '').split(' ')[4].split(':').splice(0, 2).join(':');

    let endMonth = (editedEvent.endDate.getMonth() + 1 < 9) ?
        `0${editedEvent.endDate.getMonth() + 1 + ''}` : `${editedEvent.endDate.getMonth() + 1}`;
    let endYear = (editedEvent.endDate + '').split(' ')[3];
    let endDay = (editedEvent.endDate + '').split(' ')[2];
    endDate.value = `${endYear}-${endMonth}-${endDay}`;

    console.log(arrOfEvents)
    description.value = editedEvent.description;
}

activeEventOnclick();
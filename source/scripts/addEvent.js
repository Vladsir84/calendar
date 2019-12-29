import { arrOfEvents } from './storage.js';

const btnSend = document.querySelector('.submit-button');
const btnClose = document.querySelector('.close');
const btnUpdateEvent = document.querySelector('.submit-button');


export const addEvents = (event) => {
    event.preventDefault();
    if (btnUpdateEvent.classList.contains("update")) {
        updateEvent(event);
        return;
    };

    let inputName = document.querySelector('.input__name');
    let inputStartDate = document.querySelector('.start-date');
    let inputStartTime = document.querySelector('.start-time');
    let inputEndDate = document.querySelector('.end-date');
    let inputEndTime = document.querySelector('.end-time');
    let inputDescription = document.querySelector('.description-input');
    let start = new Date(startDate.value + 'T' + startTime.value);
    let end = new Date(endDate.value + 'T' + endTime.value);

    // if (!errorDate(start.getTime(), end.getTime())) return;
    // if (!duration(start, end)) return;
    // if (!checkEvent()) return;

    if (inputStartTime.value > inputEndTime.value) {
        console.log(123);
        // arrOfEvents.push({
        //     id: arrOfEvents.length,
        //     name: inputName.value,
        //     newDate: new Date(),
        //     startDate: inputStartDate.value + 'T' + inputStartTime.value,
        //     endDate: inputStartDate.value + 'T' + '24:00',
        //     description: inputDescription.value,
        //     transfer: 'main',
        // });
        // arrOfEvents.push({
        //     id: arrOfEvents.length,
        //     name: inputName.value,
        //     newDate: new Date(),
        //     startDate: inputEndDate.value + 'T' + '00:00',
        //     endDate: inputEndDate.value + 'T' + inputEndTime.value,
        //     description: inputDescription.value,
        //     transfer: 'additional',
        // });
    } else {
        console.log(225);
        // arrOfEvents.push({
        //     id: arrOfEvents.length,
        //     name: inputName.value,
        //     newDate: new Date(),
        //     startDate: inputStartDate.value + 'T' + inputStartTime.value,
        //     endDate: inputEndDate.value + 'T' + inputEndTime.value,
        //     description: inputDescription.value,
        // });
    };
    // inputName.value = '';
    // inputDescription.value = '';
    // close(event)
    // renderEvents()
}

export const close = (event) => {
    event.preventDefault();
    const popup = document.querySelector(`.popup`);
    popup.classList.remove('popup-switch');
}

btnSend.addEventListener('click', addEvents);
btnClose.addEventListener('click', close);
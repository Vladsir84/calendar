import { arrOfEvents } from './storage.js'
import { renderEvents } from './slots-logic.js'

let popupForm = document.querySelector('.popup__form');
let saveButton = document.querySelector('.submit-button');

export function saveEvent() {
    event.preventDefault();
    const formData = [...new FormData(popupForm)];

    console.log(formData);

    let name = formData[0][1];
    let startDate = `${formData[1][1]}T${formData[2][1]}`;
    let endDate = `${formData[4][1]}T${formData[3][1]}`;
    let description = formData[5][1];

    createNewEvent(name, startDate, endDate, description);
    renderEvents(arrOfEvents);
    const popup = document.querySelector(`.popup`);
    popup.classList.remove('popup-switch');

    console.log(arrOfEvents);
}

function createNewEvent(name, startDate, endDate, description) {
    let newEvent = {
        id: arrOfEvents.length,
        name: name,
        startDate: new Date(startDate),
        endDate: new Date(endDate),
        description: description,
    }
    arrOfEvents.push(newEvent);
}

saveButton.addEventListener('click', saveEvent);
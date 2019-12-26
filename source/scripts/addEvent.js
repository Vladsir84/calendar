import { arrOfEvents } from './storage.js';

const btnSend = document.querySelector('.submit-button');
const btnClose = document.querySelector('.close');
const btnUpdateEvent = document.querySelector('.submit-button');


export const addEvents = (name, newDate, startDate, endDate) => {
    let Obj = {};
    Obj.name = name;
    Obj.newDate = newDate;
    Obj.startDate = startDate;
    Obj.endDate = endDate;
    arrOfEvents.push(Obj);
}
addEvents();

export const close = (event) => {
    event.preventDefault();
    const popup = document.querySelector(`.popup`);
    popup.classList.remove('popup-switch');
}

btnSend.addEventListener('click', addEvents);
btnClose.addEventListener('click', close);
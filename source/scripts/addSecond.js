import { arrOfEvents } from './storage.js';

export const addEvents = (name, newDate, startDate, endDate) => {
    let Obj = {};
    Obj.name = 1;
    Obj.newDate = 12;
    Obj.startDate = 1;
    Obj.endDate = 12;
    arrOfEvents.push(Obj)
}
addEvents();
console.log(arrOfEvents);
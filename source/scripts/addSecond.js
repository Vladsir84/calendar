import { arrOfEvents } from './storage.js';

export const addEvents = (name, newDate, startDate, endDate) => {
    let Obj = {};
    Obj.name = name;
    Obj.newDate = newDate;
    Obj.startDate = startDate;
    Obj.endDate = endDate;
    arrOfEvents.push(Obj)
}

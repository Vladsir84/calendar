import { calendarRendering } from './calendar-visualization.js'
import { arrOfEvents } from './storage.js'
import { renderEvents, renderLongEvent } from './slots-logic.js'
import { redLine } from './red-line.js'
import { activeEventOnclick } from './edit-event.js'

let dayNumbers = document.querySelectorAll('.day-number');
let dates = document.querySelector('.dates');

export let arrayOfDates = [];

export function createDates() {

    renderLongEvent(arrOfEvents);

    let currentDayOfWeek = (new Date()).getDay();

    for (let i = 0; i < 7; i++) {
        if (i < currentDayOfWeek) {
            let currentDate = new Date();
            let day = currentDate.getDate() - (i + 1);
            let previosDate = currentDate.setDate(day);
            arrayOfDates.unshift(new Date(previosDate));
        }
        if (currentDayOfWeek == i) {
            arrayOfDates.push(new Date());
        }
        if (i > currentDayOfWeek) {
            let currentDate = new Date();
            let day = currentDate.getDate() + (i - currentDate.getDay());
            let previosDate = currentDate.setDate(day);
            arrayOfDates.push(new Date(previosDate));
        }
    }
};

export function renderDates() {

    for (let i = 0; i < 7; i++) {
        let content = (arrayOfDates[i] + '').split(' ')[2];
        dayNumbers[i].innerHTML = content;
        if (arrayOfDates[i] == new Date() + '') {
            dayNumbers[i].classList.add('current-day');
        } else {
            dayNumbers[i].classList.remove('current-day');
        }
    }
    showCurrentMonthAndYear();
    let clear = document.querySelectorAll('.active_event')
    for (let i = 0; i < clear.length; i++) clear[i].remove();
    renderEvents(arrOfEvents);
    activeEventOnclick();
    redLine();
};

export function showCurrentMonthAndYear() {
    let arrOfMonth = [];
    let result = [];
    for (let i = 0; i < arrayOfDates.length; i++) {
        arrOfMonth.push((arrayOfDates[i] + '').split(' ')[1]);
    }

    for (let str of arrOfMonth) {
        if (!result.includes(str)) result.push(str);
    }

    if (result.length == 1) {
        result = `${result[0]}`;
    } else {
        result = `${result[0]} - ${result[1]}`;
    }

    let year = (arrayOfDates[0] + '').split(' ')[3];
    dates.innerHTML = `${result}  ${year}`;
};

createDates();
renderDates();

let arrow_button__next = document.querySelector('.arrow-button__next');
let arrow_button__prev = document.querySelector('.arrow-button__prev');

export function renderNextWeek() {
    for (let i = 0; i < 7; i++) {
        let nextDate = arrayOfDates[i].getDate() + 7;
        nextDate = new Date(arrayOfDates[i]).setDate(nextDate);
        arrayOfDates[i] = new Date(nextDate);
    }
    renderDates();
    calendarRendering();
    activeEventOnclick();

    let redLineElement = document.querySelector('.redLine');
    if (redLineElement !== null) redLineElement.remove('div');
    redLine();
};

export function renderPreviousWeek() {
    for (let i = 0; i < 7; i++) {
        let nextDate = arrayOfDates[i].getDate() - 7;
        nextDate = new Date(arrayOfDates[i]).setDate(nextDate);
        arrayOfDates[i] = new Date(nextDate);
    }
    renderDates();
    calendarRendering();
    activeEventOnclick();

    let redLineElement = document.querySelector('.redLine');
    if (redLineElement !== null) redLineElement.remove('div');
    redLine();
};

arrow_button__prev.addEventListener('click', renderPreviousWeek);
arrow_button__next.addEventListener('click', renderNextWeek);

let today_button = document.querySelector('.today-button');

export function today_button_function() {
    arrayOfDates = [];
    createDates();
    renderDates();
}

today_button.addEventListener('click', today_button_function);
import { calendarRendering } from './calendar-visualization.js';
import { createDates, renderDates, showCurrentMonthAndYear, renderNextWeek, renderPreviousWeek, today_button_function } from './navigation.js';
import { generateNumbersRange, getTimesBlocks, } from './main.js';
import { emptyCellClick } from './slots-logic.js';
import { addButton, timeElem, setTimer, renderTimeList, counter } from './popup.js';
import { arrOfEvents } from './storage.js';
import { close, addEvents } from './addEvent.js';
import { arrOfEvents } from './storage.js';

const inputName = document.querySelector(`.input__name`);
const startDates = document.querySelector(`.start-date`);
const endDates = document.querySelector(`.end-date`);
const startTime = document.querySelector('.start-time')
const endTime = document.querySelector('.end-time')
const description = document.querySelector('.description-input')
const btnUpdate = document.querySelector('.submit-button');

export const counter = (elem) => {
    let num = elem
    num < 10 ? num = `0${num}` : num;
    return num
}

export const addButton = (event) => {
    const popup = document.querySelector(`.popup`);
    popup.classList.add('popup-switch');
    if (event.target.classList.value === '.emptyCell') {
        btnUpdate.classList.remove("update")

        const getYear = event.target.dataset.yearNumber
        const getMonth = event.target.dataset.monthNumber
        const getDay = event.target.dataset.dateNumber
        const getTime = event.target.closest('.emptyRow').dataset.timeSet

        inputName.value = '';
        startDates.value = getYear + '-' + counter(getMonth) + "-" + counter(getDay);
        endDates.value = startDates.value
        startTime.value = `${counter(getTime-1)+':00'}`
        endTime.value = `${counter(getTime)+':00'}`
        description.value = ''

        return
    }

    if (event.target.classList.contains("add-event")) {

        let dateNow = new Date();
        inputName.value = '';
        startDates.value = dateNow.getFullYear() + '-' + counter(dateNow.getMonth()) + "-" + counter(dateNow.getDate());
        endDates.value = dateNow.getFullYear() + '-' + counter(dateNow.getMonth()) + "-" + counter(dateNow.getDate())
        startTime.value = `${counter(dateNow.getHours())+':00'}`
        endTime.value = `${counter(dateNow.getHours()+1)+':00'}`
        description.value = ''

    } else {
        btnUpdate.classList.add("update")

//         const getId = event.target.dataset.idNumber;
//         let eventObj = arrOfEvents.find(elem => elem.id == getId);
//         let startEventTime = new Date(arrOfEvents.startDate);
//         let endEventTime = new Date(arrOfEvents.endDate);
//         let year = startEventTime.getFullYear();
//         let months = counter(startEventTime.getMonth() + 1);
//         let day = counter(startEventTime.getDate());
//         let valueStartHour = counter(startEventTime.getHours());
//         let valueStartMin = counter(startEventTime.getMinutes());
//         let valueEndHour = counter(endEventTime.getHours());
//         let valueEndMin = counter(endEventTime.getMinutes());

//         inputName.value = eventObj.name;
//         startDates.value = year + '-' + months + '-' + day;
//         endDates.value = startDates.value
//         startTime.value = `${valueStartHour+':'+valueStartMin}`
//         endTime.value = `${valueEndHour+':'+valueEndMin}`
//         description.value = eventObj.description;

//         return selectedElem = eventObj, selectedId = getId;
    }
}

const timeListElemStart = document.querySelector('.start-time');
const timeListElemEnd = document.querySelector('.end-time');
const popupWindow = document.querySelector(`.calendar-visualization`);

const btnCreate = document.querySelector('.create-button');

popupWindow.addEventListener('click', addButton);
btnCreate.addEventListener('click', addButton);

export const setTimer = (from, to) => {
    const result = [];

    for (let i = from; i <= to; i++) {
        result.push(i);
    };
    return result;
}

export const timeElem = () => {
    let resultTime = [];

    setTimer(0, 23)
        .map(timeList => {
            let setTime = '';
            let setMin = 0;
            let cell = '00';
            for (let i = 0; i < 4; i++) {
                timeList < 10 ? setTime = `0${timeList}` : setTime = timeList;
                resultTime.push(
                    `<option 
            value="${setTime}:${cell}"
            data-block-number='${timeList}'>${setTime}:${cell}</option> `)
                setMin += 15;
                cell = setMin;
            };
        })

    return resultTime.join('');
}

let selectedId;
let selectedElem;

export const renderTimeList = () => {
    timeListElemStart.innerHTML = timeElem();
    timeListElemEnd.innerHTML = timeElem();
}

renderTimeList()

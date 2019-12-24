const inputName = document.querySelector(`.input__name`);
const startDate = document.querySelector(`.start-date`);
const endDate = document.querySelector(`.end-date`);
const startTime = document.querySelector('.start-time')
const endTime = document.querySelector('.end-time')
const description = document.querySelector('.description-input')
const btnUpdate = document.querySelector('.submit-button');


const selectDay = (event) => {
    const popup = document.querySelector(`.popup`);
    popup.classList.add('popup-on');
    if (event.target.classList.value === '.emptyCell') {
        btnUpdate.classList.remove("update")

        return
    }

}


const timeListElemStart = document.querySelector('.start-time');
const timeListElemEnd = document.querySelector('.end-time');
const popupWindow = document.querySelector(`.calendar-visualization`);


const btnCreate = document.querySelector('.create-button');

popupWindow.addEventListener('click', selectDay)
btnCreate.addEventListener('click', selectDay)

const TimeElem = () => {
    let resultTime = [];

    generateNumbersRange(0, 23)
        .map(timeList => {
            let setTime = '';
            let setMin = 0;
            let cell = '00';
            for (let i = 0; i < 6; i++) {
                timeList < 10 ? setTime = `0${timeList}` : setTime = timeList;
                resultTime.push(
                    `<option 
            value="${setTime}:${cell}"
            data-block-number='${timeList}'>${setTime}:${cell}</option> `)
                setMin += 10;
                cell = setMin;
            };
        })

    return resultTime.join('');
}

const renderTimeList = () => {
    timeListElemStart.innerHTML = TimeElem();
    timeListElemEnd.innerHTML = TimeElem();
}

renderTimeList()
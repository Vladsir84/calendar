export const addButton = (event) => {
    const popup = document.querySelector(`.popup`);
    popup.classList.add('popup-switch');
    if (event.target.classList.value === '.emptyCell') {
        btnUpdate.classList.remove("update")
        return
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

export const renderTimeList = () => {
    timeListElemStart.innerHTML = timeElem();
    timeListElemEnd.innerHTML = timeElem();
}

renderTimeList()

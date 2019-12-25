let calendar_visualization = document.querySelector('.calendar-visualization');

export const emptyCellClick = event => {
    let dayNumber = event.target.dataset.number;
    let startTime = event.target.closest('.emptyRow').dataset.time.split(':')[0] - 1;
    let endTime = +event.target.closest('.emptyRow').dataset.time.split(':')[0];
    console.log(startTime);
    console.log(endTime);
    displayEvent(startTime, endTime, dayNumber);
};

calendar_visualization.addEventListener('click', emptyCellClick);

function displayEvent(starttime, endTime, dayNumber, text) {
    let eventPlace = document.querySelector('.event-place')
    let activeEvent = document.createElement('div');
    activeEvent.classList.add('active_event');
    activeEvent.style.height = `${(endTime - starttime) * 50}px`;
    activeEvent.style.marginLeft = `${60 + dayNumber * 209}px`
    activeEvent.style.marginTop = `${starttime * 50}px`;

    eventPlace.append(activeEvent);
    activeEvent.innerHTML += `${text}<br>`
    activeEvent.innerHTML += `${(starttime < 10) ? '0' + starttime : starttime + ''}: 00 - ${(starttime < 10) ? '0' + (starttime + 1) : starttime + 1 + ''}: 00`;
};

let x = new Date('December 17, 1995 03:24:00');
let y = new Date('December 17, 1995 03:54:00');
displayEvent(x, y, 5, 'Новое задание');
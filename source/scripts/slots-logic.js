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
    let diff = ((endTime - starttime) / 1000 / 60);
    let eventPlace = document.querySelector('.event-place')
    let activeEvent = document.createElement('div');
    activeEvent.classList.add('active_event');
    activeEvent.style.height = `${diff}px`;
    activeEvent.style.marginLeft = `${60 + dayNumber * 208}px`
    activeEvent.style.marginTop = `${diff}px`;
    eventPlace.append(activeEvent);
    activeEvent.innerHTML += `${text}<br>`
    activeEvent.innerHTML += `${(starttime + '').split(' ')[4]} - ${(endTime + '').split(' ')[4]}`;
};

let x = new Date('December 17, 1995 03:24:00');
let y = new Date('December 17, 1995 04:54:00');
displayEvent(x, y, 5, 'Новое задание');

let x1 = new Date('December 17, 1995 00:05:00');
let y1 = new Date('December 17, 1995 01:54:00');
displayEvent(x1, y1, 3, 'Новое задание');
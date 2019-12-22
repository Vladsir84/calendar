let calendar_visualization = document.querySelector('.calendar-visualization');

const emptyCellClick = event => {
    let dayNumber = event.target.dataset.number;
    let monthName = event.target.dataset.month;
    let dayName = event.target.dataset.day;
    let time = +event.target.closest('.emptyRow').dataset.time;

    console.log(`${dayNumber} ${monthName}
    ${dayName} 2019.
    Время: ${(time < 10) ? '0' + time : time + ''}:00 - ${(time < 10) ? '0' + (time + 1) : time + 1 + ''}:00;
    `);

    event.target.classList.add('checked');
}

calendar_visualization.addEventListener('click', emptyCellClick);
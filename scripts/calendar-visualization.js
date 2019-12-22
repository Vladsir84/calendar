let calendar_visualization = document.querySelector('.calendar-visualization');

export function Days() {
    let emptyRow = '';
    for (let i = 0; i < 24; i++) {
        emptyRow += `<div class = "emptyRow" data-time="${i}">
            <div class="emptyCell" data-month ="Ноября" data-day="Пн" data-number="25"></div>
            <div class="emptyCell" data-month ="Ноября" data-day="Вт" data-number="26"></div>
            <div class="emptyCell" data-month ="Ноября" data-day="Ср" data-number="27"></div>
            <div class="emptyCell" data-month ="Ноября" data-day="Чт" data-number="28"></div>
            <div class="emptyCell" data-month ="Ноября" data-day="Пт" data-number="29"></div>
            <div class="emptyCell" data-month ="Ноября" data-day="Сб" data-number="30"></div>
            <div class="emptyCell" data-month ="Декабря" data-day="Вс" data-number="1"></div>
            </div>`;
    }
    calendar_visualization.innerHTML = emptyRow;
};

Days();


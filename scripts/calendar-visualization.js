let calendar_visualization = document.querySelector('.calendar-visualization');

export function Days() {
    let emptyRow = '';
    let dates = document.querySelector('.dates');
    let month = dates.textContent.split(' ')[0];
    let days = document.querySelectorAll('.day-number');
    let slotNumber = document.querySelectorAll('.emptyRow');

    for (let i = 0; i < 24; i++) {
        emptyRow += `<div class = "emptyRow" data-time="${i}">
            <div class="emptyCell" data-index="0" data-month = "${ month}" data-day="Sun" data-number="$"></div>
            <div class="emptyCell" data-index="1" data-month = "${ month}" data-day="Mon" data-number="$"></div>
            <div class="emptyCell" data-index="2" data-month = "${ month}" data-day="Tue" data-number="$"></div>
            <div class="emptyCell" data-index="3" data-month = "${ month}" data-day="Wed" data-number="$"></div>
            <div class="emptyCell" data-index="4" data-month = "${ month}" data-day="Th" data-number="$"></div>
            <div class="emptyCell" data-index="5" data-month = "${ month}" data-day="Fr" data-number="$"></div>
            <div class="emptyCell" data-index="6" data-month = "${ month}" data-day="Sat" data-number="$"></div>
            </div>`;
    }
    calendar_visualization.innerHTML = emptyRow;
};

Days();


let calendar_visualization = document.querySelector('.calendar-visualization');

export function Days() {
    let emptyRow = '';
    for (let i = 0; i < 24; i++) {
        emptyRow += `<div class = "emptyRow">
            <div class="emptyCell"></div>
            <div class="emptyCell"></div>
            <div class="emptyCell"></div>
            <div class="emptyCell"></div>
            <div class="emptyCell"></div>
            <div class="emptyCell"></div>
            <div class="emptyCell"></div>
            </div>`;
    }
    calendar_visualization.innerHTML = emptyRow;
};

Days();


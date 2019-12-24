export const visual = document.querySelector('.calendar-visualization');

export const calendarRendering = () => {

    for (let i = 1; i <= 24; i++) {
        const day = document.createElement('div');
        day.classList.add('emptyRow');
        visual.append(day);

        for (let j = 1; j <= 7; j++) {
            const hour = document.createElement('div');
            hour.classList.add('emptyCell');
            day.append(hour);
        }
    }
}

calendarRendering();
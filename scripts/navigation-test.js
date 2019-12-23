let dayNumbers = document.querySelectorAll('.day-number');

let arrayOfDates = [];

export function createDates() {
    let currentDayOfWeek = (new Date()).getDay();

    for (let i = 0; i < 7; i++) {
        if (i < currentDayOfWeek) {
            let currentDate = new Date();
            let day = currentDate.getDate() - (i + 1);
            let previosDate = currentDate.setDate(day);
            arrayOfDates.unshift(new Date(previosDate));
        }
        if (currentDayOfWeek == i) {
            arrayOfDates.push(new Date());
        }
        if (i > currentDayOfWeek) {
            let currentDate = new Date();
            let day = currentDate.getDate() + (i - 1);
            let previosDate = currentDate.setDate(day);
            arrayOfDates.push(new Date(previosDate));
        }
    }
}

export function renderDates() {
    for (let i = 0; i < 7; i++) {
        let content = (arrayOfDates[i] + '').split(' ')[2];
        dayNumbers[i].innerHTML = content;
        if (arrayOfDates[i] == new Date() + '') {
            dayNumbers[i].classList.add('current-day');
        }
    }
    dates.innerHTML = `${(new Date() + '').split(' ')[1]} ${(new Date()).getFullYear()}`;
}

createDates()
renderDates()

console.log(arrayOfDates);
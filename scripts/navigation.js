let dayNumbers = document.querySelectorAll('.day-number');

export function Days() {
    let current = (new Date()).getDate();
    let dayOfWeek = (new Date()).getDay();
    dayNumbers[dayOfWeek].innerHTML = current;
    dayNumbers[dayOfWeek].classList.add('current-day');

    let countRight = 6 - dayOfWeek; //6
    let countLeft = 6 - countRight; //0

    for (let i = 0; i < countLeft; i++) {
        let date = (new Date() + '').split(' ');
        date[2] = (+date[2] - i) + '';
        date = date.join(' ');
        console.log(date)
        dayNumbers[i].innerHTML = new Date(date).getDate();
    }

    for (let i = dayOfWeek + 1; i <= countRight; i++) {
        let date = (new Date() + '').split(' ');
        date[2] = (+date[2] + i) + '';
        date = date.join(' ');
        dayNumbers[i].innerHTML = new Date(date).getDate();
    }

    let dates = document.querySelector('.dates');
    dates.innerHTML = `${(new Date() + '').split(' ')[1]} ${(new Date()).getFullYear()}`;
}
Days();
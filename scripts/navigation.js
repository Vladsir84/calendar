let dayNumbers = document.querySelectorAll('.day-number');

export function Days() {
    let currentDate = new Date();
    let date = currentDate.getDate();
    let dayOfWeek = currentDate.getDay();

    let arrLeft = [];
    let arrRight = [];

    [...dayNumbers].forEach((elem, index) => {
        if (index < dayOfWeek) {
            arrLeft.push(elem);
        } else if (index > dayOfWeek) {
            arrRight.push(elem);
        }
        if (dayOfWeek === index) {
            elem.innerHTML = date;
            elem.classList.add('current-day');
        }
    });

    let dates = document.querySelector('.dates');
    // console.log(date)

    let daysAtTheLeft = date - (dayOfWeek + 1);
    let daysAtTheRight = date;
    // console.log(dayOfWeek)

    console.log(arrRight)

    arrLeft
        .forEach(x => x.innerHTML = ++daysAtTheLeft);
    arrRight
        .forEach(x => x.innerHTML = ++daysAtTheRight);

    dates.innerHTML = `${(new Date() + '').split(' ')[1]} ${(new Date()).getFullYear()}`;
};

Days();
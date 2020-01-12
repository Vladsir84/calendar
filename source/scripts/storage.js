export let arrOfEvents = [];

export function getFromLocalStorage() {
    arrOfEvents = localStorage.getItem('storage') ? JSON.parse(localStorage.getItem('storage')) : [];
};

export function savetoLocalStorage() {
    localStorage.setItem('storage', JSON.stringify(arrOfEvents));
};
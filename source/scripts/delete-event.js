import { arrOfEvents } from './storage.js'
import { renderDates } from './navigation.js'

export function deleteButtonOnclick(obj) {
    let deleteButton = document.querySelector('.delete-event');
    deleteButton.addEventListener('click', deleteEvent);
    function deleteEvent() {
        event.preventDefault();
        for (let i = 0; i < arrOfEvents.length; i++) {
            if (obj.id == arrOfEvents[i].id) {
                arrOfEvents.splice(i, 1);
                const popup = document.querySelector(`.popup`);
                popup.classList.remove('popup-switch');
                renderDates();
                return;
            }
        }
    }
}
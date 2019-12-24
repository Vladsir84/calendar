const addButton = (event) => {
    const popup = document.querySelector(`.popup`);
    popup.classList.add('popup-switch');
    if (event.target.classList.value === '.emptyCell') {
        btnUpdate.classList.remove("update")
       return
    }
}

const popupWindow = document.querySelector(`.calendar-visualization`);
const btnCreate = document.querySelector('.create-button');

btnCreate.addEventListener('click', addButton)

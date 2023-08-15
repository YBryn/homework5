"use strict";
let toggleButton = document.querySelector('#toggleButton');

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const dateNow = new Date();

    const day = dateNow.getDate();
    const month = dateNow.getMonth() + 1;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    
    const dates = `${formattedDay}-${formattedMonth}-${dateNow.getFullYear()}`;

    const hours = dateNow.getHours() < 10 ? `0${dateNow.getHours()}` : dateNow.getHours();   
    const minutes = dateNow.getMinutes() < 10 ? `0${dateNow.getMinutes()}` : dateNow.getMinutes();
    const seconds = dateNow.getSeconds() < 10 ? `0${dateNow.getSeconds()}` : dateNow.getSeconds();
    
    const date = `${hours}:${minutes}:${seconds}`;
    if (document.body.classList.contains('dark')) {
        toggleButton.textContent = 'Turn ON';
        document.querySelector('#lastTrnOffDate').textContent = `Last time OFF: ${dates} at ${date} sec`;
    } else {
        toggleButton.textContent = 'Turn OFF';
        document.querySelector('#lastTrnOnDate').textContent = `Last time ON: ${dates} at ${date} sec`;
    }
});

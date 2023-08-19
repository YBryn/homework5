"use strict";
let toggleButton = document.querySelector('#toggleButton');
const storedTheme = localStorage.getItem('theme');
const lastAction = localStorage.getItem('lastAction');

if (storedTheme) {
    document.body.classList.add(storedTheme);
}
if (lastAction) {
    document.querySelector(storedTheme === 'dark' ? '#lastTrnOffDate' : '#lastTrnOnDate').textContent = lastAction;
}

toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    const dateNow = new Date();
    const formatdDate = formatDate(dateNow);
    const formatdTime = formatTime(dateNow);
    const actionText = `Last time ${document.body.classList.contains('dark') ? 'OFF' : 'ON'}: ${formatdDate} at ${formatdTime} sec`;
    
    localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : '');
    localStorage.setItem('lastAction', actionText);
    
    document.querySelector('.container h2').textContent = actionText;
    toggleButton.textContent = document.body.classList.contains('dark') ? 'Turn ON' : 'Turn OFF';
});

window.addEventListener('beforeunload', () => {
    localStorage.removeItem('theme');
    localStorage.removeItem('lastAction');
});

function formatDate(date) {
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonth = month < 10 ? `0${month}` : month;
    return `${formattedDay}-${formattedMonth}-${date.getFullYear()}`;
}

function formatTime(date) {
    const hours = date.getHours() < 10 ? `0${date.getHours()}` : date.getHours();   
    const minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : date.getMinutes();
    const seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : date.getSeconds();
    return `${hours}:${minutes}:${seconds}`;
}

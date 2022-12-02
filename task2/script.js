const consoleLog = document.querySelector('#consoleLog');
consoleLog.addEventListener('click', () => {
    alert('служит для вывода информации в консоль');
})


const alert1 = document.querySelector('#alert');
alert1.addEventListener('click', () => {
    alert('служит для оповещения в диалоговом окне');
})


const prompt1 = document.querySelector('#prompt');
prompt1.addEventListener('click', () => {
    alert('служит для запроса ввода информации в диалогом окне');
})
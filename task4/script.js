const changelink = document.querySelector('#link');

changelink.addEventListener('click', (event) => {
    const newlink = prompt("Введите новый текст ссылки", '');
    changelink.textContent = newlink;
    event.preventDefault();
})

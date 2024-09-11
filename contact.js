document.querySelector('.icon-menu').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
});
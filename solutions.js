document.querySelector('.icon-menu').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
});

//Hiện ra thông tin
const stepLinks = document.querySelectorAll('.st-work-all-2 a');
const stepContents = document.querySelectorAll('.step-content');

stepLinks.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();

        const step = this.getAttribute('data-step');

        stepContents.forEach(content => {
            content.style.display = 'none';
            content.classList.remove('active');
        });

        document.querySelector(`.step-content[data-step="${step}"]`).style.display = 'block';
        document.querySelector(`.step-content[data-step="${step}"]`).classList.add('active');
    });
});
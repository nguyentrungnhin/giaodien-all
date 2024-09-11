//click hiện thanh menu
document.querySelector('.icon-menu').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active');
});

document.querySelector('.close-menu').addEventListener('click', function () {
    const menu = document.querySelector('.menu');
    menu.classList.remove('active');
});

//click icon quay
const icons = document.querySelectorAll('.density .icon-1');
const contents = document.querySelectorAll('.density-1');

icons.forEach((icon, index) => {
    icon.addEventListener('click', function (event) {
        event.preventDefault();

        contents.forEach((content, i) => {
            if (i !== index) {
                content.classList.remove('active');
                icons[i].classList.remove('rotate');
            }
        });

        contents[index].classList.toggle('active');
        icon.classList.toggle('rotate');
    });
});


//slider chuyển động
const slides = document.querySelectorAll('.alex');
const leftIcon = document.querySelector('.left-icon');
const rightIcon = document.querySelector('.right-icon');

let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = (i === index) ? 'block' : 'none';
    });
}

showSlide(currentIndex);

leftIcon.addEventListener('click', function (event) {
    event.preventDefault();
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    showSlide(currentIndex);
});

rightIcon.addEventListener('click', function (event) {
    event.preventDefault();
    currentIndex = (currentIndex < slides.length - 1) ? currentIndex + 1 : 0;
    showSlide(currentIndex);
});
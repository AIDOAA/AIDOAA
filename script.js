document.addEventListener("DOMContentLoaded", function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelector('.slides');
    const slideWidth = slides.firstElementChild.clientWidth;
    let currentSlide = 0;

    function nextSlide() {
        currentSlide++;
        if (currentSlide === slides.children.length) {
            currentSlide = 0;
        }
        updateSlide();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) {
            currentSlide = slides.children.length - 1;
        }
        updateSlide();
    }

    function updateSlide() {
        slides.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }

    document.getElementById('next').addEventListener('click', nextSlide);
    document.getElementById('prev').addEventListener('click', prevSlide);
});

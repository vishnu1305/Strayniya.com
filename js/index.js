//for past/upcoming slider
function slider(type) {
    const sliderIndicator = document.getElementById("sliderIndicator");
    if (sliderIndicator) {
        if (type === 'past') {
            sliderIndicator.style.transform = "translateX(-50%)";
            document.getElementById("p1").innerHTML = "Project 1 (Past)"
        } else if (type === 'upcoming') {
            sliderIndicator.style.transform = "translateX(50%)";
            document.getElementById("p1").innerHTML = "Project 1 (Upcoming)"
        }
    }
}


//for carousel slider
const carouselContainer = document.querySelector('.carousel-container');
const carouselSlides = document.querySelectorAll('.carousel-slide');
const slideWidth = carouselSlides[0].clientWidth;
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselSlides.length;
    updateSlide();
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselSlides.length) % carouselSlides.length;
    updateSlide();
}

function updateSlide() {
    const offset = -currentIndex * slideWidth;
    carouselContainer.style.transform = `translateX(${offset}px)`;
}

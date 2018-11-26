let currentSlide  = 1;
let slideAll = document.getElementById('wrapper-slides').children.length;
let slideWrapper = document.getElementById('wrapper-slides');
let containerSlider = document.getElementById('container-slider');
let translateWidth = 0;
let slideInterval = 2000;

function nextSlide() {
    if(currentSlide === slideAll || currentSlide <= 0 || currentSlide > slideAll) {
        slideWrapper.style.transform = 'translate(0, 0)';
        currentSlide = 1;
    } else {
        translateWidth = containerSlider.style.width + '*' + currentSlide;
        slideWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
    }
    currentSlide ++;
    console.log( currentSlide ++);
}


window.onload = ()=> {
    setInterval(nextSlide, slideInterval);
};

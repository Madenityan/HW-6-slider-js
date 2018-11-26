let currentSlide  = 0;
let slideAll = document.getElementById('wrapper-slides').children.length;
let slideWrapper = document.getElementById('wrapper-slides');
let containerSlider = document.getElementById('container-slider');
let translateWidth = 0;
let slideInterval = 3000;

// function nextSlide() {
//
//     if(currentSlide === slideAll || currentSlide <= 0 || currentSlide > slideAll) {
//         slideWrapper.style.transform = 'translate(0, 0)';
//         currentSlide = 1;
//     } else {
//         translateWidth = containerSlider.style.width + '*' + currentSlide;
//         slideWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
//     }
//     currentSlide ++;
//     console.log( currentSlide ++);
// }
// window.onload = ()=> {
//     setInterval(nextSlide, slideInterval);
// };

function show() {
    let img = document.getElementsByClassName('slides');

    for (let i = 0; i < img.length; i++) {
        img[i].style.display = 'none';
    }
    currentSlide ++;

    if (currentSlide > img.length) {
        currentSlide = 1
    }
    img[currentSlide -1].style.display = "block";
}

show();


function next() {



}


// window.onload = ()=> {
//     setInterval(show, slideInterval);
// };




















let currentSlide  = 0;
let slideAll = document.getElementById('wrapper-slides').children.length;
let slideWrapper = document.getElementById('wrapper-slides');
let containerSlider = document.getElementById('container-slider');
let translateWidth = 0;
let slideInterval = 3000;
let img = document.getElementsByClassName('slides');

function infinitySlide() {

    if (currentSlide >= slideAll || currentSlide <= 0) {
        slideWrapper.style.transform = 'translate(0, 0)';
        currentSlide = 1;
    } else {
        translateWidth = -containerSlider.offsetWidth * currentSlide;
        slideWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
        currentSlide ++;
    }
}
window.onload = ()=> {
    setInterval(infinitySlide, slideInterval);
};

// function show() {
//     for (let i = 0; i < img.length; i++) {
//         img[i].style.display = 'none';
//     }
//     currentSlide ++;
//
//     if (currentSlide > img.length) {
//         currentSlide = 1
//     }
//     img[currentSlide -1].style.display = "block";
// }
//
// function next() {
//     for (let i = 0; i < img.length; i++) {
//         img[i].style.display = 'none';
//     }
//     currentSlide ++;
//
//     if (currentSlide > img.length) {
//         currentSlide = 1
//     }
//     img[currentSlide -1].style.display = "block";
// }
//
// function prev() {
//     for (let i = 0; i < img.length; i++) {
//         img[i].style.display = 'none';
//     }
//     currentSlide ++;
//
//     if (currentSlide > img.length) {
//         currentSlide = 1
//     }
//     img[currentSlide -1].style.display = "block";
// }
//
//
// show();

// window.onload = ()=> {
//     setInterval(show, slideInterval);
// };




















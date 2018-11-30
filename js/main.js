let currentSlide  = 0;
let slideAll = document.getElementById('wrapper-slides').children.length;
let slideWrapper = document.getElementById('wrapper-slides');
let containerSlider = document.getElementById('container-slider');
let translateWidth = 0;
let slideInterval = 3000;
let btnIndex = 0;

function infinitySlide() {
    if (currentSlide >= slideAll || currentSlide <= 0) {
        slideWrapper.style.transform = 'translate(0, 0)';
        currentSlide = 1;
    } else {
        translateWidth = -containerSlider.offsetWidth * currentSlide;
        slideWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
        currentSlide++;
    }
}

function prev() {
    if (currentSlide === 1 || currentSlide > slideAll || currentSlide <= 0) {
        translateWidth = -containerSlider.offsetWidth * (slideAll - 1);
        slideWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
        currentSlide = slideAll;
    } else {
        translateWidth = -containerSlider.offsetWidth * (slideAll - 2);
        slideWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
        currentSlide--;
    }
}

function next() {
    if (currentSlide === slideAll || currentSlide <= 0 || currentSlide > slideAll) {
        slideWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
        currentSlide = 1;
    } else {
        translateWidth = -containerSlider.offsetWidth * (currentSlide);
        slideWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
        currentSlide++;
    }
}

function nav(event) {
    btnIndex = event.target;
    console.log(btnIndex);
    if (btnIndex + 1 !== currentSlide) {
        translateWidth = -containerSlider.offsetWidth * btnIndex;
        slideWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
        currentSlide = btnIndex + 1;
    }
}


window.onload = ()=> {
    // setInterval(infinitySlide, slideInterval);
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




















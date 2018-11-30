let currentSlide  = 0;
let slideAll = document.getElementById('wrapper-slides').children.length;
let slideWrapper = document.getElementById('wrapper-slides');
let containerSlider = document.getElementById('container-slider');
let translateWidth = 0;
let slideInterval = 3000;
let isStop = false;

function changeSlide() {
    translateWidth = -containerSlider.offsetWidth * (currentSlide - 1);
    slideWrapper.style.transform = 'translate(' + translateWidth + 'px, 0)';
}

function hoverSlide(){
    isStop = true;
}

function outSlide() {
    isStop = false;
}

function infinitySlide() {
    if (currentSlide >= slideAll || currentSlide <= 0) {
        currentSlide = 1;
    } else {
        currentSlide++;
    }

    if (isStop === true) {
        return false;
    }
    changeSlide();
}

function prev() {
    currentSlide--;
    if (currentSlide < 1) {
        currentSlide = slideAll;
    }

    changeSlide();
}

function next() {
    currentSlide++;
    if (currentSlide > slideAll) {
        currentSlide = 1;
    }

    changeSlide();
}

function nav(event) {
    let btnIndex = event.target.getAttribute('id');
    console.log(btnIndex);

    if (btnIndex !== currentSlide) {
        currentSlide = btnIndex;
    }

    changeSlide();
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




















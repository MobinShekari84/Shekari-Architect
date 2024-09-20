// ==============================================
// SlideShow
// ==============================================


// variable

const slideImages = [
    "../image/IMG_8691.JPEG",
    "../image/IMG_8239.JPEG",
    "../image/IMG_8238.JPEG",
    "../image/IMG_6274.JPEG",
];
let currentImage = 0;
let slideShowVar;

// function

function renderImage() {
    document.body.style.backgroundImage = `url("${slideImages[currentImage]}")`;
}

function nextImage() {
    currentImage = (currentImage + 1) % slideImages.length;
    renderImage();
}

function prevImage() {
    currentImage = (currentImage + slideImages.length - 1) % slideImages.length;
    renderImage();
}

function slideShowInitiliza() {
    document.body.style.transition = "all .2s";
    document.body.style.backgroundImage = `url(../image/white)`;
    setTimeout(renderImage, 300);
    setTimeout(() => document.body.style.transition = "all .5s", 1000);
}

function slideShowUpdate() {
    let nxt = document.querySelector('.nextButton');
    nxt.onclick = function() {
        nextImage();
        clearInterval(slideShowVar);
    }
    let prv = document.querySelector('.prevButton');
    prv.onclick = function() {
        prevImage();
        clearInterval(slideShowVar);
    }
}

function slideShow() {
    slideShowVar = setInterval(nextImage, 4000);  
}

// main

renderImage();
slideShowUpdate();
slideShow();

// ==============================================
// menuBarIcon
// ==============================================

//function

function menuBarIconUpdate() {
    let menuBarIcon = document.querySelector('.menuBarIcon');
    console.log("hi");
    menuBarIcon.onclick = function() {
        menuBarIcon.classList.toggle('XmenuBarIcon')
        console.log("hi");
    }
}

menuBarIconUpdate();
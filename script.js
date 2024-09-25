// ==============================================
// SlideShow
// ==============================================

let currentSlide = 0;
let slides = document.getElementsByClassName("slideShowImages");
let infBox = document.getElementsByClassName("infBox");
let dots = document.getElementsByClassName("dot");

function nextImage(i) {
    slides[currentSlide].classList.toggle("active");
    infBox[currentSlide].classList.toggle("active");
    dots[currentSlide].className = dots[currentSlide].className.replace(" activeDot", "");
    currentSlide = (currentSlide + i + slides.length) % slides.length;
    slides[currentSlide].classList.toggle("active");
    infBox[currentSlide].classList.toggle("active");
    dots[currentSlide].className += " activeDot";
}

function makeSlide(i) {
    slides[currentSlide].classList.toggle("active");
    infBox[currentSlide].classList.toggle("active");
    dots[currentSlide].className = dots[currentSlide].className.replace(" activeDot", "");
    currentSlide = i - 1;
    slides[currentSlide].classList.toggle("active");
    infBox[currentSlide].classList.toggle("active");
    dots[currentSlide].className += " activeDot";
}

function nextSlide() {
    let nxt = document.querySelector('.nextButton');
    nxt.onclick = function() {
        nextImage(1);
    }
}

function prevSlide() {
    let prv = document.querySelector('.prevButton');
    prv.onclick = function() {
        nextImage(-1);
    }
}

nextSlide();
prevSlide();

// ==============================================
// menuBarIcon
// ==============================================

//function

function menuBarIconUpdate() {
    let menuBarIcon = document.querySelector('.menuBarIcon');
    menuBarIcon.onclick = function() {
        menuBarIcon.classList.toggle('XmenuBarIcon')
        let dropDown = document.querySelector('.dorpDownContent');
        if (menuBarIcon.classList.contains('XmenuBarIcon')) {
            dropDown.classList.toggle('show');
        }
        else {
            dropDown.classList.toggle('show');
        }
    }
}

menuBarIconUpdate();

// ==============================================
// project
// ==============================================

function showRender () {
    console.log(this);
}   

let imgSrc;

let renders = document.querySelectorAll(".Render img").forEach((render) => {
    render.onclick = function() {
        imgSrc = render.getAttribute("src");
        imgSrc = imgSrc.replace('compressed', 'original');
        console.log(imgSrc);
        imgModal(imgSrc);
    }
});

let imgModal = (src) => {
    const modal = document.createElement("div");
    modal.setAttribute("class", "modal");
    document.querySelector("body").append(modal);
    const newImage = document.createElement("img");
    newImage.setAttribute("src", src);
    const closeBtn = document.createElement("div");
    closeBtn.setAttribute("class", "modalCloseButton");
    closeBtn.innerHTML += '<div class="bar1"></div>';
    closeBtn.innerHTML += '<div class="bar3"></div>';
    closeBtn.onclick = () => {
        // modal.style.animation = "zoomout 0.3s";
        modal.style.visibility = "hidden";
        modal.style.opacity = "0";
        setTimeout(() => {
            modal.remove();
        }, 1000);
    };
    const rightBtn = document.createElement("div");
    rightBtn.innerHTML += ""
    modal.append(newImage, closeBtn);
};
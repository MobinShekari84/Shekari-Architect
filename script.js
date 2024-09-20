// ==============================================
// SlideShow
// ==============================================

let currentSlide = 0;
let slides = document.getElementsByClassName("slideShowImages");
// let dots = document.getElementsByClassName("dot");

function nextImage(i) {
    slides[currentSlide].classList.toggle("active");
    //dots[currentSlide].className = dots[currentSlide].className.replace(" activeDot", "");
    currentSlide = (currentSlide + i + slides.length) % slides.length;
    slides[currentSlide].classList.toggle("active");
    // dots[currentSlide].className += " activeDot";
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

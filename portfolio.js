document.addEventListener('DOMContentLoaded', () => {
    const text = "HI WELCOME!!";
    const typewriter = document.getElementById('typewriter');
    let index = 0;
    let isSlidingOut = false;

    function type() {
        if (!isSlidingOut) {
            typewriter.textContent = text.substring(0, index);

            if (index < text.length) {
                index++;
                setTimeout(type, 300);
            } else if (index === text.length) {
                setTimeout(() => {
                    typewriter.style.animation = 'slideOut 2s forwards';
                    setTimeout(() => {
                        typewriter.style.animation = 'resetPosition 2s forwards';
                        index = 0;
                        isSlidingOut = false;
                        type();
                    }, 2000); // Duration of slideOut animation
                }, 1000); // Pause before sliding out
                isSlidingOut = true;
            }
        }
    }

    type();
});





/*document.addEventListener('DOMContentLoaded', () => {
    const text = "WELCOME";
    const typewriter = document.getElementById('typewriter');
    let index = 0;
    let isDeleting = false;

    function type() {
        typewriter.textContent = text.substring(0, index);

        if (!isDeleting && index < text.length) {
            index++;
            setTimeout(type, 300);
        } else if (isDeleting && index > 0) {
            index--;
            setTimeout(type, 200);
        } else if (!isDeleting && index === text.length) {
            isDeleting = true;
            setTimeout(type, 1000);  // Pause before deleting
        } else if (isDeleting && index === 0) {
            isDeleting = false;
            setTimeout(type, 500);  // Pause before re-typing
        }
    }

    type();
}); */

////////////////////////////////


/*let currentIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;
const slider = document.querySelector('.hero-slider');

function goToSlide(index) {
    slider.style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
    goToSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds

// Optional: Add swipe support for touch devices
let touchStartX = 0;

slider.addEventListener('touchstart', (event) => {
    touchStartX = event.touches[0].clientX;
});

slider.addEventListener('touchend', (event) => {
    const touchEndX = event.changedTouches[0].clientX;
    if (touchEndX < touchStartX) {
        nextSlide();
    } else if (touchEndX > touchStartX) {
        prevSlide();
    }
});

////////////////////////////////////////////////////

let currentIndex = 0;
const slides = document.querySelectorAll('.hero-slide');
const totalSlides = slides.length;

function goToSlide(index) {
    document.querySelector('.hero-slider').style.transform = `translateX(-${index * 100}%)`;
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    goToSlide(currentIndex);
}

setInterval(nextSlide, 5000); // Change slide every 5 seconds*/

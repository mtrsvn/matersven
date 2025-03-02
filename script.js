// First Slider (slider2)
let slider2 = document.querySelector('.slider2 .list2');
let items2 = document.querySelectorAll('.slider2 .list2 .item2');
let next2 = document.getElementById('next2');
let prev2 = document.getElementById('prev2');
let dots2 = document.querySelectorAll('.slider2 .dots2 li');
let lengthItems2 = items2.length - 1;
let active2 = 0;

next2.onclick = function() {
    active2 = active2 + 1 <= lengthItems2 ? active2 + 1 : 0;
    reloadSlider2();
};

prev2.onclick = function() {
    active2 = active2 - 1 >= 0 ? active2 - 1 : lengthItems2;
    reloadSlider2();
};

function reloadSlider2() {
    slider2.style.left = -items2[active2].offsetLeft + 'px';

    // Update active dot for slider2
    let lastActiveDot2 = document.querySelector('.slider2 .dots2 li.active');
    if (lastActiveDot2) {
        lastActiveDot2.classList.remove('active');
    }
    dots2[active2].classList.add('active');
}

// Dots navigation for slider2
dots2.forEach((li, key) => {
    li.addEventListener('click', () => {
        active2 = key;
        reloadSlider2();
    });
});

// Second Slider (slider)
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let image = document.querySelector('.image-wrapper img'); // Select the image
let h2Text = document.querySelector('.main h2'); // Select the h2 element
let logoText = document.querySelector('.logo a'); // Select the logo text
let body = document.body; // Select the body element
let lengthItems = items.length - 1;
let active = 0;

// Add CSS for fade effect
body.style.transition = "background-image 0.5s ease"; // Fade transition for background image

// Image click toggle function
image.onclick = function() {
    image.classList.add('click-animation');

    if (image.src.includes('image.png')) {
        image.src = 'img/alternatemater.png';
        h2Text.innerHTML = "Hello! 👋,<br>I'm mtrsvn";
        logoText.innerHTML = "mtrsvn";
        body.style.backgroundImage = "linear-gradient(135deg, #AB75D8 0%, #b78cdb 100%)";
    } else {
        image.src = 'img/image.png';
        h2Text.innerHTML = "Hello! 👋,<br>I'm matersven";
        logoText.innerHTML = "matersven";
        body.style.backgroundImage = "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)";
    }

    setTimeout(() => {
        image.classList.remove('click-animation');
    }, 500);
};

next.onclick = function() {
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
};

prev.onclick = function() {
    active = active - 1 >= 0 ? active - 1 : lengthItems;
    reloadSlider();
};

function scrollToPortfolio() {
    const portfolioSection = document.getElementById('portfolio');
    window.scrollTo({
        top: portfolioSection.offsetTop,
        behavior: 'smooth'
    });
}

function reloadSlider() {
    slider.style.left = -items[active].offsetLeft + 'px';
    scrollToPortfolio();

    // Update active dot for slider
    let lastActiveDot = document.querySelector('.slider .dots li.active');
    if (lastActiveDot) {
        lastActiveDot.classList.remove('active');
    }
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});

// Recalculate position on window resize for both sliders
window.onresize = function() {
    reloadSlider();
    reloadSlider2();
};

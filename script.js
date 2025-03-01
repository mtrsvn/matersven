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
    // Add animation class
    image.classList.add('click-animation');
    
    // Toggle between the images and change background gradient
    if (image.src.includes('image.png')) {
        image.src = 'img/alternatemater.png'; // Switch to the alternate image
        // Update text for h2 and logo
        h2Text.innerHTML = "Hello! 👋,<br>I'm mtrsvn";
        logoText.innerHTML = "mtrsvn";
        // Change the background gradient
        body.style.backgroundImage = "linear-gradient(135deg, #AB75D8 0%, #b78cdb 100%)";
    } else {
        image.src = 'img/image.png'; // Switch back to the original image
        // Reset text for h2 and logo
        h2Text.innerHTML = "Hello! 👋,<br>I'm matersven";
        logoText.innerHTML = "matersven";
        // Revert the background gradient
        body.style.backgroundImage = "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)";
    }

    // Remove the animation class after the animation is done (0.5s duration)
    setTimeout(() => {
        image.classList.remove('click-animation');
    }, 500);
};

next.onclick = function(){
    active = active + 1 <= lengthItems ? active + 1 : 0;
    reloadSlider();
};

prev.onclick = function(){
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

function reloadSlider(){
    slider.style.left = -items[active].offsetLeft + 'px';

    scrollToPortfolio();

    let last_active_dot = document.querySelector('.slider .dots li.active');
    last_active_dot.classList.remove('active');
    dots[active].classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', ()=> {
         active = key;
         reloadSlider();
    });
});

window.onresize = function(event) {
    reloadSlider();
};

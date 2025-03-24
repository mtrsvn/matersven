let slider2 = document.querySelector('.slider2 .list2');
let items2 = document.querySelectorAll('.slider2 .list2 .item2');
let next2 = document.getElementById('next2');
let prev2 = document.getElementById('prev2');
let dots2 = document.querySelectorAll('.slider2 .dots2 li');
let lengthItems2 = items2.length - 1;
let active2 = 0;

if (next2) {
    next2.addEventListener('click', () => {
        active2 = active2 + 1 <= lengthItems2 ? active2 + 1 : 0;
        reloadSlider2();
    });
}

if (prev2) {
    prev2.addEventListener('click', () => {
        active2 = active2 - 1 >= 0 ? active2 - 1 : lengthItems2;
        reloadSlider2();
    });
}

function reloadSlider2() {
    if (!slider2 || !items2[active2]) return;
    slider2.style.transform = `translateX(-${items2[active2].offsetLeft}px)`;
    
    document.querySelector('.slider2 .dots2 li.active')?.classList.remove('active');
    dots2[active2]?.classList.add('active');
}

dots2.forEach((li, key) => {
    li.addEventListener('click', () => {
        active2 = key;
        reloadSlider2();
    });
});

// Main Slider
let slider = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let next = document.getElementById('next');
let prev = document.getElementById('prev');
let dots = document.querySelectorAll('.slider .dots li');
let image = document.querySelector('.image-wrapper img');
let h2Text = document.querySelector('.main h2');
let logoText = document.querySelector('.logo a');
let body = document.body;
let lengthItems = items.length - 1;
let active = 0;

body.style.transition = "background-image 0.5s ease";

if (image) {
    image.addEventListener('click', () => {
        image.classList.add('click-animation');
        let pText = document.querySelector("p");
        
        if (image.src.includes('image.png')) {
            image.src = 'img/alternatemater.png';
            h2Text.innerHTML = "Hello! 👋,<br>I'm mtrsvn";
            logoText.innerHTML = "mtrsvn";
            body.style.backgroundImage = "linear-gradient(135deg, #AB75D8 0%, #b78cdb 100%)";
            pText.innerHTML = pText.innerHTML.replace(/matersven/g, "mtrsvn");
        } else {
            image.src = 'img/image.png';
            h2Text.innerHTML = "Hello! 👋,<br>I'm matersven";
            logoText.innerHTML = "matersven";
            body.style.backgroundImage = "linear-gradient(135deg, #8BC6EC 0%, #9599E2 100%)";
            pText.innerHTML = pText.innerHTML.replace(/mtrsvn/g, "matersven");
        }
        
        setTimeout(() => image.classList.remove('click-animation'), 500);
    });
}

if (next) {
    next.addEventListener('click', () => {
        active = active + 1 <= lengthItems ? active + 1 : 0;
        reloadSlider();
    });
}

if (prev) {
    prev.addEventListener('click', () => {
        active = active - 1 >= 0 ? active - 1 : lengthItems;
        reloadSlider();
    });
}

function scrollToPortfolio() {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
        window.scrollTo({ top: portfolioSection.offsetTop, behavior: 'smooth' });
    }
}

function reloadSlider() {
    if (!slider || !items[active]) return;
    slider.style.transform = `translateX(-${items[active].offsetLeft}px)`;
    
    document.querySelector('.slider .dots li.active')?.classList.remove('active');
    dots[active]?.classList.add('active');
}

dots.forEach((li, key) => {
    li.addEventListener('click', () => {
        active = key;
        reloadSlider();
    });
});

function hideCaption() {
    const caption = document.querySelector('.floating-caption');
    if (caption) {
        caption.classList.add('hide-animation');
        setTimeout(() => caption.style.display = 'none', 500);
    }
}

window.addEventListener('resize', () => {
    reloadSlider();
    reloadSlider2();
});

function hideCaption() {
    const caption = document.querySelector('.floating-caption');
    if (caption) {
        caption.classList.add('hide-animation');
        setTimeout(() => caption.style.display = 'none', 500);
    }
}

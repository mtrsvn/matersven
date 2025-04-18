window.addEventListener('load', () => {
    const loader = document.querySelector('.loader');
    const content = document.querySelector('.content');

    // Reveal content & hide loader
    const revealPage = () => {
      loader.style.display = 'none';
      content.style.display = 'block';
    };

    // Set a max timeout of 20 seconds
    const fallback = setTimeout(revealPage, 20000);

    // Wait until all images are loaded
    const images = document.images;
    let loadedImages = 0;

    if (images.length === 0) {
      clearTimeout(fallback);
      revealPage();
    }

    for (let i = 0; i < images.length; i++) {
      if (images[i].complete) {
        loadedImages++;
      } else {
        images[i].addEventListener('load', () => {
          loadedImages++;
          if (loadedImages === images.length) {
            clearTimeout(fallback);
            revealPage();
          }
        });
        images[i].addEventListener('error', () => {
          loadedImages++;
          if (loadedImages === images.length) {
            clearTimeout(fallback);
            revealPage();
          }
        });
      }
    }

    if (loadedImages === images.length) {
      clearTimeout(fallback);
      revealPage();
    }
  });

function hideCaption() {
    const caption = document.querySelector('.floating-caption');
    if (caption) {
        caption.classList.add('hide-animation');
        setTimeout(() => caption.style.display = 'none', 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const imagesContainer = document.querySelector('.carousel-images');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    const totalImages = dots.length;
    const intervalTime = 3000;

    function updateCarousel(index) {
        imagesContainer.style.transform = `translateX(-${index * 100}%)`;
        dots.forEach(dot => dot.classList.remove('active'));
        dots[index].classList.add('active');
    }

    function showPrevImage() {
        currentIndex = (currentIndex - 1 + totalImages) % totalImages;
        updateCarousel(currentIndex);
    }

    function showNextImage() {
        currentIndex = (currentIndex + 1) % totalImages;
        updateCarousel(currentIndex);
    }

    let autoSlide = setInterval(showNextImage, intervalTime);

    function resetAutoSlide() {
        clearInterval(autoSlide);
        autoSlide = setInterval(showNextImage, intervalTime);
    }

    prevBtn.addEventListener('click', () => {
        showPrevImage();
        resetAutoSlide();
    });

    nextBtn.addEventListener('click', () => {
        showNextImage();
        resetAutoSlide();
    });

    dots.forEach(dot => {
        dot.addEventListener('click', (e) => {
            currentIndex = parseInt(e.target.dataset.index);
            updateCarousel(currentIndex);
            resetAutoSlide();
        });
    });

    updateCarousel(currentIndex);
});

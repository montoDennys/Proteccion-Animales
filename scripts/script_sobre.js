document.addEventListener("DOMContentLoaded", () => {
    const sliderInn = document.querySelector(".slider-inn");
    const images = sliderInn.querySelectorAll("img");
    const totalImages = images.length;
    let currentIndex = 0;

    function moveSlider() {
        currentIndex = (currentIndex + 1) % totalImages; 
        const offset = currentIndex * -100; 
        sliderInn.style.transform = `translateX(${offset}%)`;
    }

    setInterval(moveSlider, 3000);
});

function abrirRed(url) {
    window.open(url, '_blank'); 
}

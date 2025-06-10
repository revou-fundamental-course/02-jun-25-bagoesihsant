window.onload = () => {

    // Slider Start
    
    let slideIndex = 0;
    let slides = document.querySelectorAll(".hero .slides .slide");
    let slideNavigatorDots = document.querySelectorAll(".hero .container .slide-navigator .dot");

    // Show Slides' Function
    function showSlide(index) {

        let slideCounter;
        let dotCounter;

        if (index > slides.length - 1) { slideIndex = 0; };
        if (index < 1) { slideIndex = slides.length - 1; };

        for (slideCounter = 0; slideCounter < slides.length; slideCounter++) {
            delete slides[slideCounter].dataset.active;
        }

        for (dotCounter = 0; dotCounter < slideNavigatorDots.length; dotCounter++) {
            slideNavigatorDots[dotCounter].classList.remove("active");
        }

        slides[slideIndex].dataset.active = true;
        slideNavigatorDots[slideIndex].classList.add("active");

    }

    function currentSlide(index) {
        showSlide(slideIndex = index);
    }

    showSlide();

    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 5000);

    slideNavigatorDots.forEach(dot => {

        let dotIndex = dot.dataset.index;
        dot.addEventListener("click", () => {
            currentSlide(dotIndex - 1);
        });

    });

}
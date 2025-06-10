window.onload = () => {

    // Slider Component(s)
    let slideIndex = 0;
    let slides = document.querySelectorAll(".hero .slides .slide");
    let slideNavigatorDots = document.querySelectorAll(".hero .container .slide-navigator .dot");

    // Scroll Component(s)
    let navLinks = document.querySelectorAll(".nav .container .menus .menu");
    let sections = document.querySelectorAll("section");

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

    // Show selected slide function
    function currentSlide(index) {
        showSlide(slideIndex = index);
    }

    // Change link state function
    function changeLinkState() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        navLinks.forEach(link => { link.classList.remove("active"); });

        if (window.scrollY - sections[index].offsetHeight < sections[index].offsetTop) {
            navLinks[index].classList.add("active");
        }
    }

    showSlide();
    changeLinkState();

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

    window.addEventListener("scroll", changeLinkState);

    

}
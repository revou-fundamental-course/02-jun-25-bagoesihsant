window.onload = () => {

    // Slider Component(s)
    let slideIndex = 0;
    let slides = document.querySelectorAll(".hero .slides .slide");
    let slideNavigatorDots = document.querySelectorAll(".hero .container .slide-navigator .dot");

    // Scroll Component(s)
    let navLinks = document.querySelectorAll(".nav .container .menus .menu");
    let sections = document.querySelectorAll("section");

    // Accordion Components
    let accordionsPanels = document.querySelectorAll(".accordion-panel");

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

    // Initial Function that run first
    showSlide();
    changeLinkState();

    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 5000);

    // Add click on slider dots'
    slideNavigatorDots.forEach(dot => {

        let dotIndex = dot.dataset.index;
        dot.addEventListener("click", () => {
            currentSlide(dotIndex - 1);
        });

    });

    // Add event listener to web when scrolling
    window.addEventListener("scroll", changeLinkState);

    // Add click on accordions' panels'
    accordionsPanels.forEach(panel => {

        // Get Accordion Panel Header and Icon
        let panelHeader = panel.querySelector(".accordion-header");
        let panelHeaderControl = panelHeader.querySelector(".panel-control");

        // Get Accordion Content Wrapper
        let panelContentWrapper = panel.querySelector(".accordion-content-wrapper");

        panel.addEventListener("click", () => {
            // Toggle Accordion Panel Header Active or not
            panelHeader.classList.toggle("active");

            // Rotate Accordion Panel Icon
            panelHeaderControl.classList.toggle("rotate-45-deg");

            // Toggle Accordion Panel Content Wrapper height
            panelContentWrapper.classList.toggle("expanded");

        });

    });

}
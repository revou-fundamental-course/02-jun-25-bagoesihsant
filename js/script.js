window.onload = () => {

    // Slider Component(s)
    let slideIndex = 0;
    let slides = document.querySelectorAll(".hero .slides .slide");
    let slideNavigatorDots = document.querySelectorAll(".hero .container .slide-navigator .dot");

    // Scroll Component(s)
    let navLinks = document.querySelectorAll(".nav .container .menus .menu");
    let sections = document.querySelectorAll("section");

    // Navigation Component(s)
    let hamburgerTrigger = document.querySelector(".hamburger-toggle");
    let dropdownMenuWrapper = document.querySelector(".nav .container .menus-small .menus-small-menus");

    let dropdownMenuHome = document.querySelector(".nav .container .menus-small .menus-small-menus .menu a[href='#home']");
    let dropdownMenuAbout = document.querySelector(".nav .container .menus-small .menus-small-menus .menu a[href='#about']");
    let dropdownMenuAchievement = document.querySelector(".nav .container .menus-small .menus-small-menus .menu a[href='#achievement']");
    let dropdownMenuContact = document.querySelector(".nav .container .menus-small .menus-small-menus .menu a[href='#contact']");

    // Accordion Components
    let accordionsPanels = document.querySelectorAll(".accordion-panel");

    // Message Us Components
    let responseBody = document.querySelector(".contact-response .response-body");
    let responseForm = document.querySelector("form#contact-form");
    let responseReset = document.querySelector("form#contact-form #reset");

    // Get All Form Response
    let formName = responseForm.querySelector("#form-name");
    let formMail = responseForm.querySelector("#form-email");
    let formPhone = responseForm.querySelector("#form-phone-num");
    let formMessage = responseForm.querySelector("#form-message");

    // Get All Form Error Response Text Container
    let formNameError = responseForm.querySelector(".form-name-error");
    let formMailError = responseForm.querySelector(".form-email-error");
    let formPhoneError = responseForm.querySelector(".form-phone-error");
    let formMessageError = responseForm.querySelector(".form-message-error");

    // Popup Modal
    let popupModal = document.querySelector("#popup");
    let popupModalClose = document.querySelector("#popup .popup-header .popup-header-close");
    let popupModalOpen = document.querySelector(".nav .container .login");
    let popupForm = document.querySelector("#popup #popup-form");
    let popupFormUsername = document.querySelector("#popup #popup-form #user-name");
    let popupFormError = document.querySelector("#popup #popup-form .form-user-name-error");

    // Hero Big Greeting
    let bigGreeting = document.querySelector("#home .container .greeting");

    // Regexes'
    const stringOnlyRegex = /^[a-zA-Z\s]+$/;
    const emailPatternRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    const numOnlyregex = /^\d+$/;

    // Constant(s)
    const bigGreetingOriginalText = bigGreeting.textContent;

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

    // Validate Form
    function validateFormUserName(value) {
        if (value === "") {
            popupFormError.textContent = "Value cannot be empty.";
            popupFormError.classList.add("fade-in");
            return false;
        }

        if (!stringOnlyRegex.test(value)) {
            popupFormError.textContent = "Value can only contain alphabet characters.";
            popupFormError.classList.add("fade-in");
            return false;
        }

        return true;
    }

    function validateFormNameInput(value) {
        if (value === "") {
            formNameError.textContent = "Value cannot be empty.";
            formNameError.classList.add("fade-in");
            return false;
        }

        if (!stringOnlyRegex.test(value)) {
            formNameError.textContent = "Value can only contain alphabet characters.";
            formNameError.classList.add("fade-in");
            return false;
        }
        
        return true;
    }

    function validateFormEmailInput(value) {
        if (value === "" ) {
            formMailError.textContent = "Value cannot be empty.";
            formMailError.classList.add("fade-in");
            return false;
        }

        if (!emailPatternRegex.test(value)) {
            formMailError.textContent = "Value email format is invalid.";
            formMailError.classList.add("fade-in");
            return false;
        }

        return true;
    }

    function validateFormPhoneInput(value) {
        if (value === "") {
            formPhoneError.textContent = "Value cannot be empty.";
            formPhoneError.classList.add("fade-in");
            return false;
        }

        if (!numOnlyregex.test(value)) {
            formPhoneError.textContent = "Value can only contain numeric characters.";
            formPhoneError.classList.add("fade-in");
            return false;
        }

        return true;
    }

    function validateFormMessageInput(value) {
        if (value === "") {
            formMessageError.textContent = "Value cannot be empty.";
            formMessageError.classList.add("fade-in");
            return false;
        }

        return true;
    }

    // Create Response Card
    function createResponse(name, email, phone, message) {

        let card = document.createElement("div");
        card.className = "response-card flex flex-col fade-in";

        // Card Time Section
        let cardTime = document.createElement("div");
        cardTime.className = "response-time grid col-2";
        
        let cardTimeLabel = document.createElement("strong");
        cardTimeLabel.textContent = "Submit Time";

        let cardTimeValue = document.createElement("p");
        cardTimeValue.textContent = Date();

        cardTime.appendChild(cardTimeLabel);
        cardTime.appendChild(cardTimeValue);

        // Card Name Section
        let cardName = document.createElement("div");
        cardName.className = "response-name grid col-2";

        let cardNameLabel = document.createElement("strong");
        cardNameLabel.textContent = "Name";

        let cardNameValue = document.createElement("p");
        cardNameValue.textContent = name;

        cardName.appendChild(cardNameLabel);
        cardName.appendChild(cardNameValue);

        // Card Email Section
        let cardMail = document.createElement("div");
        cardMail.className = "response-email grid col-2";

        let cardMailLabel = document.createElement("strong");
        cardMailLabel.textContent = "Email";

        let cardMailValue = document.createElement("p");
        cardMailValue.textContent = email;

        cardMail.appendChild(cardMailLabel);
        cardMail.appendChild(cardMailValue);

        // Card Phone Section
        let cardPhone = document.createElement("div");
        cardPhone.className = "response-phone-num grid col-2";

        let cardPhoneLabel = document.createElement("strong");
        cardPhoneLabel.textContent = "Phone";

        let cardPhoneValue = document.createElement("p");
        cardPhoneValue.textContent = phone;

        cardPhone.appendChild(cardPhoneLabel);
        cardPhone.appendChild(cardPhoneValue);

        // Card Message Section
        let cardMessage = document.createElement("div");
        cardMessage.className = "response-message flex flex-col";

        let cardMessageLabel = document.createElement("strong");
        cardMessageLabel.textContent = "Message";

        let cardMessageValue = document.createElement("p");
        cardMessageValue.textContent = message;

        cardMessage.appendChild(cardMessageLabel);
        cardMessage.appendChild(cardMessageValue);

        // Finalize Card
        card.appendChild(cardTime);
        card.appendChild(cardName);
        card.appendChild(cardMail);
        card.appendChild(cardPhone);
        card.appendChild(cardMessage);

        return card;
    }

    // Function clear form
    function clearForm(){
        formName.value = "";
        formNameError.textContent = "";
        formNameError.classList.remove("fade-in");

        formMail.value = "";
        formMailError.textContent = "";
        formMailError.classList.remove("fade-in");

        formPhone.value = "";
        formPhoneError.textContent = "";
        formPhoneError.classList.remove("fade-in");

        formMessage.value = "";
        formMessageError.textContent = "";
        formMessageError.classList.remove("fade-in");
    }

    function rewriteGreeting() {
        let insertPosition = bigGreeting.textContent.indexOf("di");
        let stringAwal = bigGreeting.textContent.slice(0, insertPosition);
        let stringAkhir = bigGreeting.textContent.slice(15);

        let finalString = stringAwal + sessionStorage.getItem("userName") + " " + stringAkhir;
        
        bigGreeting.textContent = finalString;
    }

    // Initial Function that run first
    showSlide();
    changeLinkState();

    setInterval(() => {
        slideIndex++;
        showSlide(slideIndex);
    }, 5000);

    setInterval(() => {
        if (sessionStorage.getItem("userName") === null) {
            popupModal.classList.toggle("show");
        }
    }, 10000);

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

    // Add event listener to form
    responseForm.addEventListener("submit", (event) => {

        // Prevent form from reloading the page when submit is pressed
        event.preventDefault();

        // Form Validation

        if (validateFormNameInput(formName.value)) {
            formNameError.textContent = "";
            formNameError.classList.remove("fade-in");
        }

        if (validateFormEmailInput(formMail.value)) {
            formMailError.textContent = "";
            formMailError.classList.remove("fade-in");
        }

        if (validateFormPhoneInput(formPhone.value)) {
            formPhoneError.textContent = "";
            formPhoneError.classList.remove("fade-in");
        }

        if (validateFormMessageInput(formMessage.value)) {
            formMessageError.textContent = "";
            formMessageError.classList.remove("fade-in");
        }

        if (
            !validateFormNameInput(formName.value) || !validateFormEmailInput(formMail.value) || 
            !validateFormPhoneInput(formPhone.value) || !validateFormMessageInput(formMessage.value)
        ) {
            return;
        }

        let outputCard = createResponse(
            formName.value, formMail.value, formPhone.value, formMessage.value
        );

        responseBody.appendChild(outputCard);

        outputCard.scrollIntoView();

        clearForm();
        
    });

    // Add Event Listener on reset button
    responseReset.addEventListener("click", () => {clearForm()});

    // Add Event Listener on Hamburger Menu
    hamburgerTrigger.addEventListener("click", () => {
        
        // Trigger the expand
        dropdownMenuWrapper.classList.toggle("expanded");

    });

    dropdownMenuHome.addEventListener("click", () => {

        dropdownMenuWrapper.classList.toggle("expanded");

    });

    dropdownMenuAbout.addEventListener("click", () => {

        dropdownMenuWrapper.classList.toggle("expanded");

    });

    dropdownMenuAchievement.addEventListener("click", () => {

        dropdownMenuWrapper.classList.toggle("expanded");

    });

    dropdownMenuContact.addEventListener("click", () => {

        dropdownMenuWrapper.classList.toggle("expanded");
        
    });

    // Add open logic to popup modal button
    popupModalOpen.addEventListener("click", () => {
        popupModal.classList.toggle("show");
    });

    // Add close logic to popup modal close button
    popupModalClose.addEventListener("click", () => {
        popupModal.classList.toggle("show");
    });

    // Add form submit logic to popup modal form
    popupForm.addEventListener("submit", (event) => {

        event.preventDefault();

        if (!validateFormUserName(popupFormUsername.value)) {
            popupFormError.textContent = "";
            popupFormError.classList.remove("fade-in");
            return;
        }

        // Apabila sukses login
        try {
            sessionStorage.setItem("userName", popupFormUsername.value);
        } catch (error) {
            console.log(error);
        }

        // Close popup
        popupModal.classList.toggle("show");

        // Rewrite Greeting
        rewriteGreeting();

    })

}
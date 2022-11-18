const slider = new Swiper(".swiper", {
    navigation: {
        nextEl: '.buttons__button-next',
        prevEl: '.buttons__button-previous',
        
    },

    pagination: {
        el: '.pagination__container',
        type: 'bullets',
        clickable: true,
        renderBullet: function (index, className) {
            return `<span class="dot swiper-pagination-bullet"></span>`;
          },
      },
});

let subscribeButton = document.querySelector("#submit-button");
let emailInput = document.querySelector("#email-input");

subscribeButton.addEventListener("click", function(evt){
    let emailInputValue = emailInput.value;

    if (validateEmail(emailInputValue)) {
        evt.preventDefault();
    }
});


function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
 

let upButton = document.querySelector(".button-up");
let buttonAppearValue = document.documentElement.clientHeight;
const appearClass = "button-up_visible";

window.addEventListener("resize", function() {
    buttonAppearValue = document.documentElement.clientHeight;
});

document.addEventListener("scroll", function () {
    let scrolledValue = window.scrollY;
    
    if (scrolledValue >= buttonAppearValue) {
        upButton.classList.add(appearClass);
    }
    else {
        upButton.classList.remove(appearClass);
    }
});

upButton.addEventListener("click", function() {
    scrollToTop();
});

function scrollToTop() {
    if (window.scrollY > 0) {
        scrollTo(0, 0);
    }
}


let buttons = document.querySelectorAll(".button");
let popUp = document.querySelector("#popup-sign-in");
const popUpAppearClass = "popup_visible";

if (buttons.length > 0) {
    buttons.forEach(button => {
        button.addEventListener("click", function(evt) {
            openPopUp();
            evt.preventDefault();
        });
    });
}

const popUpCloseClass = "popup__body";

popUp.addEventListener("click", function (evt) {
    
    if (evt.target.className === popUpCloseClass) {
        closePopUp(); 
    }
});


function openPopUp() {
    popUp.classList.add(popUpAppearClass);
}

function closePopUp() {
    popUp.classList.remove(popUpAppearClass);
}


let showCheckbox = document.getElementById("show-checkbox");
let passwordInputs = document.querySelectorAll('input[type="password"]');

showCheckbox.addEventListener("change", function () {
    
    if (showCheckbox.checked) {
        passwordInputs.forEach(input => {
            input.type = "text";
        });
    }
    else {
        passwordInputs.forEach(input => {
            input.type = "password";
        });
    }
});


function comparePasswords() {
    let firstPassword = passwordInputs[0].value;
    let secondPassword = passwordInputs[1].value;

    return firstPassword === secondPassword;
}

let signUpButton = document.getElementById("signup-button");
let warning = document.querySelector(".form-popup__warning");

signUpButton.addEventListener("click", function (evt) {
    if (!comparePasswords()) {
        warning.classList.add("form-popup__warning_visible");
    }
    else {
        warning.classList.remove("form-popup__warning_visible");
    }

    evt.preventDefault();
});





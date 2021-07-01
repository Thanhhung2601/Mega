const header_top = document.querySelector(".highlight-tt");
const optionsLeft = document.querySelector(".options-left");
const overlay = document.querySelector(".overlay");
const form_registration = document.querySelector(".form-registration");
const iconTimes = document.querySelector(".form-registration .times");
const iconRegistration = document.querySelector(".header .top .login-right .registration");
const iconScrollTop = document.querySelector(".ic-scroll-top");
window.addEventListener("scroll", () => {
    if (window.scrollY > 168) {
        header_top.classList.add("fixed");
        optionsLeft.classList.add("show-option-left");
    } else {
        header_top.classList.remove("fixed");
        optionsLeft.classList.remove("show-option-left");
    }
});
iconRegistration.addEventListener("click", (e) => {
    e.preventDefault();
    overlay.classList.add("active-overlay");
    form_registration.classList.add("active-form-registration");
});
iconTimes.addEventListener("click", () => {
    overlay.classList.remove("active-overlay");
    form_registration.classList.remove("active-form-registration");
})
iconScrollTop.addEventListener("click", () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: "smooth"
    });
})
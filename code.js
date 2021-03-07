//MENU BUTTON
const menuBtn = document.querySelector(".menuButton")
const bars = document.querySelectorAll(".menuButton__bar")
const navigation = document.querySelector(".header__navigation")
menuBtn.addEventListener('click', () => {
    navigation.classList.toggle("activeNavigation")
    menuBtn.classList.toggle("activeMenuButton")
    bars[0].classList.toggle("activeBar")
    bars[1].classList.toggle("activeBar")
    bars[2].classList.toggle("activeBar")
})
//FEATURES SLIDE
const slider = document.querySelector(".features__wrapSlider__slider");
const sliderLinks = document.querySelectorAll(".features__navigation__link");
const sliderItems = document.querySelectorAll(".features__wrapSlider__slider__item")
sliderLinks.forEach((item, index) => {
    item.addEventListener('click', () => {
        sliderLinks.forEach(i => {
            i.classList.remove("activeLink");
        })
        slider.style.transform = 'translateX(' + (-sliderItems[index].clientWidth * index) + 'px)';
        item.classList.add("activeLink");
    })
})
// FAQ
const questions = document.querySelectorAll('.FAQ__itemsWrap__item')
questions.forEach(item => {

    item.addEventListener("click", () => {
        const arrow = item.childNodes[1].childNodes[1]
        if (arrow.classList.contains("rotateArrow")) {
            arrow.style.transitionDelay = "0.4s"
        } else {
            arrow.style.transitionDelay = "0s"
        }
        arrow.classList.toggle("rotateArrow")

        item.childNodes[3].classList.toggle('activeAnswer')
    })
})
//SCROLL TO SECTION

function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, targetPosition - 100, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t * t + b;
        t -= 2;
        return -c / 2 * (t * t * t * t - 2) + b;
    };

    requestAnimationFrame(animation);
}
const navLinks = document.querySelectorAll(".header__navigation__link");
const footerLinks = document.querySelectorAll(".footer__navigation__link");

navLinks[0].addEventListener('click', () => {
    smoothScroll('.features', 1000)
})
navLinks[1].addEventListener('click', () => {
    smoothScroll('.FAQ', 1000)
})
navLinks[2].addEventListener('click', () => {
    smoothScroll('.contact', 1000)
})
footerLinks[0].addEventListener('click', () => {
    smoothScroll('.features', 1000)
})
footerLinks[1].addEventListener('click', () => {
    smoothScroll('.FAQ', 1000)
})
footerLinks[2].addEventListener('click', () => {
    smoothScroll('.contact', 1000)
})
//MENU BUTTON
const menuBtn = document.querySelector(".menuButton")
const bars = document.querySelectorAll(".menuButton__bar")
menuBtn.addEventListener('click', () => {
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
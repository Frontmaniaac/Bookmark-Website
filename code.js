//FEATURES SLIDE
const slider = document.querySelector(".features__wrapSlider__slider");
const sliderLinks = document.querySelectorAll(".features__navigation__link");
const sliderItems = document.querySelectorAll(".features__wrapSlider__slider__item")
sliderLinks.forEach((item, index) => {
    item.addEventListener('click', () => {
        sliderLinks.forEach(i => {
            i.classList.remove("activeLink");
        })

        console.log(-sliderItems[index].clientWidth * index);
        slider.style.transform = 'translateX(' + -sliderItems[index].clientWidth * index + 'px)';
        item.classList.add("activeLink");
    })
})
// FAQ
const questions = document.querySelectorAll('.FAQ__itemsWrap__item')
questions.forEach(item => {
    item.addEventListener("click", () => {
        item.childNodes[3].classList.toggle('activeAnswer')
    })
})
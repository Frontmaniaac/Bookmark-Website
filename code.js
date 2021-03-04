const questions = document.querySelectorAll('.FAQ__itemsWrap__item')
questions.forEach(item => {
    item.addEventListener("click", () => {
        item.childNodes[3].classList.toggle('activeAnswer')
    })
})
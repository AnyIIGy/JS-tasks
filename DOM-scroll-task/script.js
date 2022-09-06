const colors = ['', 'lightCyan', 'darkSkyBlue', 'aquamarine', 'electricBlue']
const sections = document.querySelectorAll('section')

window.addEventListener('scroll', () => {
    const scrollFromTop = window.pageYOffset

    for (let i = 0; sections.length > i; i++) {
        if (scrollFromTop < sections[i].offsetTop) {
            document.body.className = colors[i]
            break
        }
    }
})
//back to the top
const btn = document.querySelector(".btn")

btn.addEventListener("click", () => {
    window.scrollTo(0, 0);
})
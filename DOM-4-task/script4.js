// change nav stile on scroll
window.addEventListener('scroll', () => {
    document.querySelector("nav").classList.toggle('window-scrolled', window.scrollY > 0)
})
//click at sign in 
const signIn = document.querySelector("[data-signIn]") //sign in button
const modalWrap = document.querySelector("[data-in-modal]") //modal form

signIn.addEventListener("click", e => {
    e.preventDefault()
    modalWrap.classList.add("modal_wrapper-active")
})
// close modal 
window.addEventListener("click", e => {
    if (e.target === modalWrap) {
        modalWrap.style.display = "none"
    }else if (e.target === signIn) {
        modalWrap.style.display = "flex"
    }
})

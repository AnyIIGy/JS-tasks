//Tabs
const tabBtns = document.querySelectorAll(".tab_btn")
const tabBodys = document.querySelectorAll(".tab_body")

let temp = 0;

for (let i = 0; i < tabBtns.length; i++) {
    tabBtns[i].addEventListener("click", () => {
        tabBtns[temp].classList.remove("active_btn");
        tabBodys[temp].classList.remove("active_body");
        tabBtns[i].classList.add("active_btn");
        tabBodys[i].classList.add("active_body");
        temp = i;
    });
}
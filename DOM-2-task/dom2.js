//Task -> make a changes 

const title = document.title
document.title = "Hitman's wife's bodyguard";

//or

// const title = document.querySelector("title")
// title.innerHTML = "Hitman's wife's bodyguard";

const cover = document.querySelector("img");
cover.src = "images/bg2.jpg";

const advertising = document.querySelectorAll(".mp");
advertising.forEach(items => items.remove());
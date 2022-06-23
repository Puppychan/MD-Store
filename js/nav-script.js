let menuIcon = document.querySelector(".body-header-menuicon");
let header = document.querySelector(".body-header");
menuIcon.addEventListener("click", event => {
    header.classList.toggle("open");
})
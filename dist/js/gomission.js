const burgerBtn = document.querySelector(".burger__btn");
const burgerBtn2 = document.querySelector(".burger__btn__close");
const headerNav = document.querySelector(".header__nav");
burgerBtn.addEventListener("click" , ()=>{
    burgerBtn.classList.toggle("open");
    headerNav.classList.toggle("open");
}); 
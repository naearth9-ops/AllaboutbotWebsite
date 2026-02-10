// JS hamburger 
const hamburger = document.getElementById("hamburger");     
const menu = document.querySelector(".items-menu");

hamburger.addEventListener("click", () => {
            menu.classList.toggle("active");
        });
    
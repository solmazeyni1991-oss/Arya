const btn = document.getElementById("menuBtn");
const menu = document.querySelector("nav ul");

btn.addEventListener("click",()=>{
    menu.classList.toggle("active");
});

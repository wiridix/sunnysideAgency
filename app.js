const btn = document.getElementById("hamburger")
const nav = document.getElementById("nav");

btn.addEventListener("click", ()=>{
    console.log("click")
    nav.classList.toggle('navigator-active')
})
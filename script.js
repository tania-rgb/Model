const btn = document.querySelector(".btn")
const modal = document.querySelector(".modal")
const overlay = document.querySelector(".overlay")
const btnClose = document.querySelector(".close-modal-btn")

btn.addEventListener("click",function(){
    modal.classList.remove("hidden")
    overlay.classList.remove("hidden")
});
btnClose.addEventListener("click", function(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
})

overlay.addEventListener("click", function(){
    modal.classList.add("hidden")
    overlay.classList.add("hidden")
})
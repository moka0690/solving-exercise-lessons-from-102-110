function createPopup() {
    document.querySelector(".popup").style.display = 'block'
}
function closePopup() {
    document.querySelector(".popup").style.display = 'none';
}
document.querySelector(".closeBtn").addEventListener("click", closePopup)

window.addEventListener("load",() => {
    setTimeout(createPopup, 5000)
})

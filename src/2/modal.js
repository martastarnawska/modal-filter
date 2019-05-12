const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const modal = document.getElementById("modal");
const overlay = document.getElementById("overlay");

function init() {
    openBtn.addEventListener("click", openModal);
    closeBtn.addEventListener("click", closeModal);
}

function openModal() {
    modal.open = true;
    overlay.classList.add("overlay--displayed");
}

function closeModal() {
    modal.open = false;
    overlay.classList.remove("overlay--displayed");
}

init();
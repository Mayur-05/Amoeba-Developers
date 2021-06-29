const menuBtn = document.querySelector('.burger-container');
const navBtn = document.querySelector('.navigation');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
    if (!menuOpen) {
        menuBtn.classList.add('open');
        navBtn.classList.add('open');
        menuOpen = true;
    } else {
        menuBtn.classList.remove('open');
        navBtn.classList.remove('open');
        menuOpen = false;
    }
})
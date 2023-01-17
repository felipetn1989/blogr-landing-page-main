menuIcon,addEventListener("click", menuDisplay)

let menuTop = document.querySelector('.menu_top')

function menuDisplay () {
    if (window.getComputedStyle(menuTop).display == 'none') {
        menuTop.style.display = 'grid'
    } else {
        menuTop.style.display = 'none'
    }
}
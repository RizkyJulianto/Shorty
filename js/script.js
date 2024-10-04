// Show Menu NavigationBar
const navigasi = document.getElementById('navigation-links');

function showMenu() {
    navigasi.style.right = "0";
}

function closeMenu() {
    navigasi.style.right = "-250px";
}

// Navbar Scroll Background 

window.addEventListener('scroll' , function() {

    const navBar = document.getElementById('navigation-bar');
    const ScrollY = window.pageYOffset;
    if(ScrollY > 5) {
        navBar.classList.add('scroll-navbar');
    } else {
        navBar.classList.remove('scroll-navbar');
    }
})
let parallax1 = document.getElementById('parallax-1');
let parallax2 = document.getElementById('parallax-2');

window.addEventListener('resize', parallaxResize);
window.addEventListener('DOMContentLoaded', parallaxResize);

var w = window.innerWidth;

function parallaxResize(e) {
    if (w <= 670) {
        parallax1.style.height = '120px';
        parallax2.style.height = '120px';
    } else if (w >= 670) {
        parallax1.style.height = '300px';
        parallax2.style.height = '300px';
    }
}

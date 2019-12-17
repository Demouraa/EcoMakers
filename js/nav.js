let nav = document.querySelector('#header');

function mudar() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        nav.style.backgroundColor = 'rgba(30, 39, 46, 1.0)';
        nav.style.height = '80px'
    } else {
        nav.style.backgroundColor = 'rgba(30, 39, 46, 0.0)';
        nav.style.height = '120px'
    }
}

window.onscroll = function () { mudar() }
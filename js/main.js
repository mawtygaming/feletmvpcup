setTimeout(() => {
    document.body.classList.remove('loading')
}, 5000)


$(document).ready(function () {
    $('.image-slider').slick({
        autoplay: true,
        dots: false,
    });
});


var tabs = document.querySelectorAll('.tab')
function goToSlide(id) {
    const target = document.getElementById(id);
    const target_tab = document.getElementById(`tab-${id}`);
    target.parentNode.scrollLeft = target.offsetLeft;
    tabs.forEach(tab => {
        tab.classList.remove('active')
    });
    target_tab.classList.add('active')

}

var imgView = document.querySelector('.image-view')
var imgEl = document.querySelector('.image-view img')
function viewImage(filename) {
    console.log(imgView)
    imgView.classList.add('active')
    imgEl.src = `img/${filename}`
}

function closeImage() {
    imgView.classList.remove('active')
    imgEl.src = ""
}

var nav = document.querySelector('header nav')
function toggleMenu() {
    if (!nav.classList.contains('active')) {
        nav.classList.add('active')
    } else {
        nav.classList.remove('active')
    }
}
setTimeout(() => {
    document.body.classList.remove('loading')
}, 5000)


$(document).ready(function () {
    $('.banner-slider').slick({
        autoplay: true,
        autoplaySpeed: 60000,
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear'
    });
    $('.logo-slider').slick({
        slidesToShow: 2,
        // autoplay: true,
        autoplaySpeed: 5000,
        dots: false,
        infinite: true,
        speed: 500,
        cssEase: 'linear',
        arrows: false,
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

var body = document.body
function toggleMenu() {
    if (!body.classList.contains('sidebar-active')) {
        body.classList.add('sidebar-active')
    } else {
        body.classList.remove('sidebar-active')
    }
}

var dropdown = document.querySelector('.top .dropdown')
function toggleDropodown() {
    if (!dropdown.classList.contains('active')) {
        dropdown.classList.add('active')
    } else {
        dropdown.classList.remove('active')
    }
}
function hideDropodown() {
    dropdown.classList.remove('active')
}
setTimeout(() => {
    document.body.classList.remove('loading')
}, 5000)

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
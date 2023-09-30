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
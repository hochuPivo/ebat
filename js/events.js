var events = [...document.getElementsByClassName('event')];
events.forEach(function (el) {
    el.addEventListener('mouseover', hover(el));
    console.log(el);
})

function hover(el) {
    events.forEach(function (event) {
        if (event != el) {
            event.style.opacity = '0.5';
        }
        console.log(el, event);
    })
}

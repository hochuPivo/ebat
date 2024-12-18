var header = document.querySelector('header');
var button = document.getElementById('home');
var last_scroll = 0;
function scrolling() {
	if (window.pageYOffset > 10) {
		if (window.scrollY > last_scroll) {
			header.style.cssText = 'background: linear-gradient(rgba(256,256,256,0.98) 55%, rgba(0,0,0,0)); opacity: 1'
			button.style.cssText = 'opacity: 1; pointer-events: all; transition: 0.3s'
		}
		else {
			header.style.cssText = 'opacity: 0; transform: translateY(-65px)'
			button.style.cssText = 'opacity: 0; pointer-events: none'
		}
		last_scroll = window.scrollY;
	}
	else {
		header.style.cssText = 'background-color: rgba(0, 0, 0, 0); opacity: 1';
	}
}

function headerBehavior() {
	if (window.innerWidth > 900) {
		document.addEventListener('scroll', scrolling);
	}
	else {
		header.style.cssText = '';
		button.style.cssText = 'opacity: 1; pointer-events: all';
		document.removeEventListener('scroll', scrolling);
    }
}

headerBehavior();

window.addEventListener('resize', function () {
	headerBehavior();
});

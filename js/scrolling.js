const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors) {
	anchor.addEventListener('click', function (el) {
		el.preventDefault();
		let id = anchor.getAttribute('href').substr(1);

		document.getElementById(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

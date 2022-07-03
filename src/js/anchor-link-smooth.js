const smoothScrollAnchor = document.querySelectorAll("a[href^='#']")

smoothScrollAnchor.forEach(anchor => {
	const el = anchor

	el.addEventListener('click', function (e) {
		e.preventDefault()

		if (document.getElementById(this.getAttribute('href').replace('#', ''))) {
			document.querySelector(this.getAttribute('href')).scrollIntoView({
				behavior: 'smooth'
			})
		}
	})
})

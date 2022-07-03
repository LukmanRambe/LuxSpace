let data = {
	'full-name': '',
	'email-address': '',
	address: '',
	courier: '',
	payment: ''
}

const inputs = document.querySelectorAll('#shipping-details input[data-input]')
for (let index = 0; index < inputs.length; index++) {
	const input = inputs[index]
	input.addEventListener('change', function (event) {
		data[event.target.id] = event.target.value

		check()
	})
}

const options = document.querySelectorAll('#shipping-details button[data-name]')
for (let index = 0; index < options.length; index++) {
	const option = options[index]

	option.addEventListener('click', function () {
		const value = this.attributes['data-value'].value
		const name = this.attributes['data-name'].value

		data[name] = value

		check()
	})
}

function check() {
	const find = Object.values(data).filter(item => item === '')

	if (find.length === 0) {
		document.querySelector(
			"#shipping-details button[type='submit']"
		).disabled = false
	}
}

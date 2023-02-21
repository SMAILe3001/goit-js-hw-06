const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const mail = event.currentTarget.elements.email.value;
	const password = event.currentTarget.elements.password.value;

	const formData = {
		mail,
		password,
	};

	if (mail == false) {
		return alert("Поле Email не має бути пустим");
	} else if (password == false) {
		return alert("Поле Password не має бути пустим");
	}

	event.currentTarget.reset();

	console.table(formData);
}

const formEl = document.querySelector(".login-form");

formEl.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
	event.preventDefault();

	const mail = event.target.email.value.trim();
	const password = event.target.password.value;

	const formData = {
		mail,
		password,
	};

	if (!mail) {
		return alert("Поле Email не має бути пустим");
	} else if (!password) {
		return alert("Поле Password не має бути пустим");
	}

	event.currentTarget.reset();

	console.table(formData);
}

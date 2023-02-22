const textInput = document.querySelector("#validation-input");
const validationLength = Number(textInput.dataset.length);

textInput.addEventListener("blur", f => {
	textInput.classList = validationLength === f.currentTarget.value.length ? "valid" : "invalid";
});

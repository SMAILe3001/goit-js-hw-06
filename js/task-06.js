const textInput = document.querySelector("#validation-input");
const validationLength = textInput.dataset.length;

textInput.addEventListener("blur", f => {
	textInput.classList = validationLength == f.currentTarget.value.length ? "valid" : "invalid";
});

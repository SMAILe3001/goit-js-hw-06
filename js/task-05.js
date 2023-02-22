const refs = {
	nameOutputEl: document.querySelector("#name-output"),
	nameInputEl: document.querySelector("#name-input"),
};

refs.nameInputEl.addEventListener(
	"input",
	f => (refs.nameOutputEl.textContent = f.currentTarget.value.trim() ? f.currentTarget.value : "Anonymous"),
);

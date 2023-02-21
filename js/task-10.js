function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const ref = {
	buttomCreateEl: document.querySelector("[data-create]"),
	buttomDestroyEl: document.querySelector("[data-destroy]"),
	quantityGenerationEl: document.querySelector("#controls input"),
	boxesEl: document.querySelector("#boxes"),
	minBoxSizeEl: 30,
	step: 10,
};
let quantityGeneration;

ref.quantityGenerationEl.addEventListener("input", f => (quantityGeneration = f.currentTarget.value));

ref.buttomCreateEl.addEventListener("click", () => {
	createBoxes(quantityGeneration);
});

ref.buttomDestroyEl.addEventListener("click", destroyBoxes);

function createBoxes(i) {
	let newBoxEl = "";
	let minBoxSize = ref.minBoxSizeEl;

	for (; i > 0; i -= 1) {
		newBoxEl += `<div style="width: ${minBoxSize}px; height: ${minBoxSize}px; background-color: ${getRandomHexColor()}"></div>`;
		minBoxSize += ref.step;
	}

	ref.boxesEl.innerHTML = newBoxEl;
}

function destroyBoxes() {
	ref.boxesEl.innerHTML = "";
}

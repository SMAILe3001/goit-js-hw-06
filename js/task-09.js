function getRandomHexColor() {
	return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const bodyEl = document.body;
const btnColorEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

btnColorEl.addEventListener("click", colorChang);

function colorChang() {
	const randomColor = getRandomHexColor();
	bodyEl.style.background = randomColor;
	colorEl.textContent = randomColor;
}

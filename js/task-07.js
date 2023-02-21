const fontSizeRange = document.querySelector("#font-size-control");
const textEl = document.querySelector("#text");

textEl.style.fontSize = `${fontSizeRange.value}px`;
fontSizeRange.addEventListener("input", () => (textEl.style.fontSize = `${fontSizeRange.value}px`));

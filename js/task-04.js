const counterValue = document.querySelector("#value");
const actions = document.querySelectorAll("#counter button");

counterValue.textContent = 0;

actions[0].addEventListener("click", () => (counterValue.textContent -= 1));

actions[1].addEventListener(
  "click",
  () => (counterValue.textContent = Number(counterValue.textContent) + 1)
);

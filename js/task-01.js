const categoriesEl = document.querySelectorAll(".item");
const numberOfCategories = categoriesEl.length;
console.log(`Number of categories: ${numberOfCategories}`);

const category = categoriesEl.forEach((el) => {
  const category = el.firstElementChild.textContent;
  const elements = el.lastElementChild.children.length;
  console.log(`Category: ${category}`);
  console.log(`Elements: ${elements}`);
});

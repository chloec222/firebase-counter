// util function that wraps querySelector
const qs = selector => document.querySelector(selector);
// references to our count elements
const countSpan = qs(".counter__count");
const counterBtn = qs(".counter__btn");
// initialize state
let count = 0;
// update UI and state on button click
counterBtn.addEventListener("click", () => {
  count++;
  countSpan.textContent = count;
});

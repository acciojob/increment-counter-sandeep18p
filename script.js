const counterParagraph = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
let counterValue = 0;

counterParagraph.textContent = `${counterValue}`;

incrementBtn.addEventListener("click", function() {
    alert(`${
counterParagraph.textContent}`);
    counterValue++;
    counterParagraph.textContent = `${counterValue}`;
});
const counterParagraph = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
let counterValue = 0;

counterParagraph.textContent = `Counter: ${counterValue}`;

incrementBtn.addEventListener("click", function() {
    alert(`Un-incremented value: ${counterValue}`);
    counterValue++;
    counterParagraph.textContent = `Counter: ${counterValue}`;
});
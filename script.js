const counterParagraph = document.getElementById("counter1");
const incrementBtn = document.getElementById("incrementBtn");
let counter = 0;

counterParagraph.textContent = `${counter}`;

incrementBtn.addEventListener("click", function() {
    alert(`${counter}`);
    counter++;
    counterParagraph.textContent = `${counter}`;
});
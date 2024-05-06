const counterParagraph = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
let alertText = 0;

counterParagraph.textContent = `${alertText}`;

incrementBtn.addEventListener("click", function() {
    alert(`${alertText}`);
    alertText++;
    counterParagraph.textContent = `${alertText}`;
});
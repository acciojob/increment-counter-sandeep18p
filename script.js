const counterParagraph = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
let alertText = counterParagraph.textContent;



incrementBtn.addEventListener("click", function() {
    alert(`${alertText}`);
    alertText++;
    counterParagraph.textContent = `${alertText}`;
});
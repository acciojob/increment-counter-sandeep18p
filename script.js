//your JS code here. If required.
const counterElement = document.getElementById('counter');
    // Get the increment button
    const incrementButton = document.getElementById('incrementBtn');

    // Initialize counter value
    let counterValue = 0;

    // Function to increment counter value and update counter display
    function incrementCounter() {
		alert(counterValue)
        counterValue++;
        counterElement.textContent = counterValue;
    }

    // Add click event listener to the increment button
    incrementButton.addEventListener('click', incrementCounter);
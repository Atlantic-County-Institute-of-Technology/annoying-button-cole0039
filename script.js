const button = document.getElementById("button1");
const textBox = document.getElementById("textBox");
let clickCount = 0;
let moves = 0;

const inputField = document.getElementById("inputField");
const submitButton = document.getElementById("submitButton");


    textBox.textContent = "Type 'click' to unlock.";
    submitButton.disabled = false; // Enable submit button after clicking

    if (clickCount >= 5) {
        button.disabled = true; // Disable button after 5 clicks
    }

submitButton.addEventListener("click", function() {
    if (inputField.value.toLowerCase() === "click") {
        textBox.textContent = "Unlocked!";
        button.disabled = false; // Re-enable button
        inputField.value = ''; // Clear input field
        submitButton.disabled = true; // Disable submit button
        clickCount = 0; // Reset click count
    } else {
        textBox.textContent = "Wrong input! Try again.";
    }
});


let noise = new Audio('/assets/Click.mp3');
noise.playbackRate=3;

button.addEventListener("click", function() {
    clickCount++;
    
    if (clickCount === 1) {
        textBox.textContent = "Please stop.";
        noise.play();
        startMovingButton();
    } else if (clickCount === 5) {
        textBox.textContent = "You are starting to make me mad.";
        noise.play();
    } else if (clickCount === 10) {
        textBox.textContent = "Look this is getting absurd"
        button.disabled = false;
        noise.play();
    } else if (clickCount === 20) {
        button.classList.add("angry");
        textBox.textContent = "This is your last chance...";
        noise.play();
    }
});



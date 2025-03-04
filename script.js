const button = document.getElementById("button1");
const textBox = document.getElementById("textBox");
let clickCount = 0;
let moves = 0;

button.addEventListener("click", function() {
    clickCount++;
    
    if (clickCount === 1) {
        textBox.textContent = "Please stop.";
        startMovingButton();
    } else if (clickCount === 5) {
        textBox.textContent = "You are starting to make me mad.";
    } else if (clickCount === 10) {
        textBox.textContent = "Look this is getting absurd"
        button.disabled = false;
    } else if (clickCount === 20) {
        button.classList.add("angry");
        textBox.textContent = "This is your last chance...";
    }
});



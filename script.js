const button = document.getElementById("myButton");
const textBox = document.getElementById("textBox");
let clickCount = 0;
let moves = 0;

button.addEventListener("click", function() {
    clickCount++;
    textBox.style.display = "block";
    if (clickCount === 1) {
        textBox.textContent = "Please stop.";
        startMovingButton();
    } else if (clickCount === 2) {
        textBox.textContent = "You've clicked twice!";
        button.disabled = true;
    }
});

function startMovingButton() {
    const maxMoves = 5;
    const interval = setInterval(() => {
        if (moves < maxMoves) {
            const x = Math.random() * (window.innerWidth - button.offsetWidth);
            const y = Math.random() * (window.innerHeight - button.offsetHeight);
            button.style.left = x + 'px';   // Fixed to use proper string concatenation
            button.style.top = y + 'px';     // Fixed to use proper string concatenation
            moves++;
        } else {
            clearInterval(interval);
        }
    }, 1000);
}

button.style.position = 'absolute';
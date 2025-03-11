const button = document.getElementById("button1");
const textBox = document.getElementById("textBox");
let clickCount = 0;
/*sets the element id of button1 and textbox in js, and sets clickcount to 0*/
let noise = new Audio('/assets/Click.mp3');
noise.playbackRate=3;
/*This sets up the click noise*/
button.addEventListener("click", function() {
    clickCount++;
    textBox.style.display = "block";
/*This lets the script to be able to count if they clicked the button or not.*/

    if (clickCount === 1) {
        textBox.textContent = "Please stop.";
        noise.play();
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
    } else if (clickCount === 30) {
        button.classList.remove("angry");
        button.classList.add("angry2");
        textBox.textContent = "I'll just confuse you untill you stop!"
    } else if (clickCount === 35) {
        button.classList.remove("angry2");
        button.classList.add("mouseover")
        textBox.textContent = "Look"
    }
  });
/*These are all the else if's and classlist stuff that makes the button funtiional and lets it work on the website.*/
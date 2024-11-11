const slider = document.getElementById("slider");
const image = document.getElementById("image");
const text = document.getElementById("text");

// Array of text options
const textOptions = [
    "Far, far away.",
    "Moderate.",
    "Close!",
    "You love him."
];

slider.addEventListener("input", (event) => {

    const sliderValue = event.target.value;

    // Scale the image based on the slider value
    const newWidth = 120 + (sliderValue * 4);
    image.style.width = `${newWidth}px`;

    // Change text based on slider value range
    if (sliderValue < 25) {
        text.textContent = textOptions[0];
    } else if (sliderValue < 50) {
        text.textContent = textOptions[1];
    } else if (sliderValue < 75) {
        text.textContent = textOptions[2];
    } else {
        text.textContent = textOptions[3];
    }
});

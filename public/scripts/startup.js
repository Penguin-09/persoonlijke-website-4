/**
 * Slowly reveal all elements
 */
function triggerStartupElements() {
    const startupElements = document.querySelectorAll(".startup-element");

    startupElements.forEach((element) => {
        const delay = Math.floor(Math.random() * 3000);

        setTimeout(() => {
            element.classList.remove("opacity-0");
        }, delay);
    });
}

/**
 * Attach a sound effect to the document
 */
function attachSoundEffectToDocument() {
    const clickSound = new Audio("assets/sounds/click.wav");

    document.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
}

/**
 * Update the clock every second
 */
function updateClock() {
    const clockElement = document.getElementById("clock");

    let hour = new Date().getHours().toString().padStart(2, "0");
    const minute = new Date().getMinutes().toString().padStart(2, "0");

    let timeOfDay = "AM";
    if (hour > 12) {
        hour -= 12;
        timeOfDay = "PM";
    }

    clockElement.innerHTML = `${hour}:${minute} ${timeOfDay}`;
}

triggerStartupElements();
attachSoundEffectToDocument();
setInterval(updateClock, 5000);

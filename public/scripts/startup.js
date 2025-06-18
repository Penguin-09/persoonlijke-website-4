const clickSound = new Audio("assets/sounds/click.wav");
const startupSound = new Audio("assets/sounds/startup.wav");

/**
 * Slowly reveal all elements
 */
function triggerStartupElements() {
    // Remove loading screen
    document.getElementById("loading-screen").remove();

    // Play startup sound
    if (document.cookie.split("; ").find((row) => row.startsWith("audio=on"))) {
        startupSound.currentTime = 0;
        startupSound.play();
    }

    // Show main elements
    document.querySelectorAll(".hidden-on-start").forEach((element) => {
        element.classList.remove("hidden");
    });

    // Slowly load all elements on screen
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
    document.addEventListener("click", () => {
        if (
            document.cookie
                .split("; ")
                .find((row) => row.startsWith("audio=on"))
        ) {
            clickSound.currentTime = 0;
            clickSound.play();
        }
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

document
    .getElementById("start-button")
    .addEventListener("click", () => triggerStartupElements());

attachSoundEffectToDocument();
setInterval(updateClock, 5000);

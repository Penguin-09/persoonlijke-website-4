console.info("Startup script initialized");

/**
 * Slowly reveal all elements
 */
function triggerStartupElements() {
    const startupElements = document.querySelectorAll(".startup-element");

    startupElements.forEach((element) => {
        const delay = Math.floor(Math.random() * 2500);

        setTimeout(() => {
            element.classList.remove("opacity-0");
        }, delay);
    });

    console.info("All elements loaded");
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
setInterval(updateClock, 3000);

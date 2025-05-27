console.info("Window script initialized");

/**
 * Attach a sound effect to all buttons
 */
function attachSoundEffectToButtons() {
    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            clickSound.currentTime = 0;
            clickSound.play();
        });
    });
}

/**
 * Create a new window, fill it with content and append it to the desktop
 * @param {string} title The title that is displayed in the title bar
 * @param {string} content Everything that is displayed in the window
 * @param {boolean} startup If true, the window will be hidden at first and slowly revealed
 */
function createWindow(
    title = "Error",
    content = "Error",
    id = "error-window",
    startup = false,
    isError = false
) {
    const desktop = document.getElementById("desktop");

    // Hide element at first if it is a startup element
    if (startup) {
        opacity = "opacity-0";
    } else {
        opacity = "opacity-100";
    }

    const newElement = `
        <div
            class="border-3d m-3 gray-background ${opacity} startup-element"
            id="${id}"
        >
            <div class="flex items-center justify-between w-full title-bar">
                <p class="white-text pe-1">${title}</p>

                <button
                    class="flex justify-center items-center w-6 h-6 font-bold border-3d button-3d gray-background"
                    onclick="document.getElementById('${id}').remove()"
                >
                    X
                </button>
            </div>

            <div class="p-3">${content}</div>
        </div>
    `;

    desktop.insertAdjacentHTML("beforeend", newElement);

    // Attach click sounds to all buttons
    attachSoundEffectToButtons();

    // Play error sound if the window is an error
    if (isError) {
        errorSound.currentTime = 0;
        errorSound.play();
    }

    console.debug(`Window created: ${title}`);
}

const clickSound = new Audio("assets/sounds/click.wav");
const errorSound = new Audio("assets/sounds/error.wav");

const welcomeWindowID = "welcome-window";
const welcomeWindowContent = `
    <div class="flex flex-col w-full sm:w-md gap-2">
        <h1 class="font-bold text-2xl">
            Welcome to Son95!
        </h1>

        <div class="border-3d-reverse">
            Son95 is a recreation of the classic Windows 95 experience, reimagined as a personal portfolio. With Son95, you can discover information about me, my projects, and more.
        </div>

        <div class="w-full flex justify-end">
            <button
                class="px-1 border-3d button-3d"
                onclick="document.getElementById('${welcomeWindowID}').remove()"
            >
                Got it!
            </button>
        </div>
    </div>
`;

const errorWindowID = "error-window";
const errorWindowContent = `
    <div class="flex flex-col items-center gap-3">
        <div class="flex items-center justify-center">
            <img class="h-10 pe-3" src="assets/images/error.png" alt="Error icon">

            <p>There was en error opening the start menu. Sorry!</p>
        </div>

        <button
            class="w-fit px-1 border-3d button-3d"
            onclick="document.getElementById('${errorWindowID}').remove()"
        >
            OK
        </button>
    </div>
`;

createWindow("Welcome!", welcomeWindowContent, welcomeWindowID, true, false);

attachSoundEffectToButtons();

// Add event listeners
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    createWindow("Error", errorWindowContent, errorWindowID, false, true);
});

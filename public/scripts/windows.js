console.info("Window script initialized");

/**
 * Attach a sound effect to the document
 */
export function attachSoundEffectToDocument() {
    const clickSound = new Audio("assets/sounds/click.wav");

    document.addEventListener("click", () => {
        clickSound.currentTime = 0;
        clickSound.play();
    });
}

/**
 * Create a new window, fill it with content and append it to the desktop
 * @param {string} title The title that is displayed in the title bar
 * @param {string} content Everything that is displayed in the window
 * @param {boolean} startup If true, the window will be hidden at first and slowly revealed
 */
export function createWindow(
    title = "Error",
    content = "Error",
    id,
    startup = false,
    isError = false,
    hasPadding = true,
    pathToIcon = "assets/images/error.png"
) {
    const desktop = document.getElementById("desktop");
    let opacity = "opacity-100";

    // Hide element at first if it is a startup element
    if (startup) {
        opacity = "opacity-0";
    }

    // Add padding if specified
    if (hasPadding) {
        hasPadding = "p-3";
    }

    const newElement = `
        <div
            class="border-3d m-3 gray-background ${opacity} startup-element ${id} z-20"
        >
            <div class="flex items-center justify-between w-full title-bar">
                <p class="white-text pe-1">${title}</p>

                <button
                    class="flex justify-center items-center w-6 h-6 font-bold border-3d button-3d gray-background"
                    onclick="document.querySelectorAll('.${id}').forEach(element => element.remove());"
                >
                    X
                </button>
            </div>

            <div class="${hasPadding}">${content}</div>
        </div>
    `;

    desktop.innerHTML = newElement;

    // Play error sound if the window is an error
    if (isError) {
        const errorSound = new Audio("assets/sounds/error.wav");
        errorSound.currentTime = 0;
        errorSound.play();
    }

    // Add the window to the taskbar
    addWindowToTaskbar(title, id, pathToIcon);

    console.debug(`Window created: ${title}`);
}

/**
 * Add the window to the taskbar
 * @param {string} title The title of the window
 * @param {string} id The ID of the window
 * @param {string} pathToIcon The path to the icon of the window, defaults to an error icon
 */
function addWindowToTaskbar(
    title = "Error",
    id,
    pathToIcon = "assets/images/error.png"
) {
    const taskbar = document.getElementById("taskbar-apps");

    const taskbarItem = `
        <div class="flex border-3d-reverse p-1 ${id}">
            <img class="h-6 me-1" src="${pathToIcon}" alt="${title} icon">

            <p>${title}</p>
        </div>
    `;

    taskbar.innerHTML = taskbarItem;

    console.debug(`Added window to taskbar: ${title}`);
}

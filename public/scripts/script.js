import { createWindow, attachSoundEffectToButtons } from "./windows.js";

console.info("Main script initialized");

attachSoundEffectToButtons();

// Welcome window
let welcomeWindowID = `error-window${Math.floor(Math.random() * 1000)}`;
const welcomeWindowContent = `
    <div class="flex flex-col w-full sm:w-md gap-2">
        <h1 class="font-bold text-2xl">
            Welcome to Son95!
        </h1>

        <div class="border-3d-reverse beige-background p-1">
            Son95 is a recreation of the classic Windows 95 experience, reimagined as a personal portfolio. With Son95, you can discover information about me, my projects, and more.
        </div>

        <div class="w-full flex justify-end">
            <button
                class="px-1 border-3d button-3d"
                onclick="document.querySelectorAll('.${welcomeWindowID}').forEach(element => element.remove());"
            >
                Got it!
            </button>
        </div>
    </div>
`;

createWindow(
    "Welcome!",
    welcomeWindowContent,
    welcomeWindowID,
    true,
    false,
    "assets/images/executable.png"
);

const welcomeApp = document.getElementById("welcome-app");
welcomeApp.addEventListener("click", () => {
    welcomeWindowID = `error-window${Math.floor(Math.random() * 1000)}`;
    const welcomeWindowContent = `
        <div class="flex flex-col w-full sm:w-md gap-2">
            <h1 class="font-bold text-2xl">
                Welcome to Son95!
            </h1>

            <div class="border-3d-reverse beige-background p-1">
                Son95 is a recreation of the classic Windows 95 experience, reimagined as a personal portfolio. With Son95, you can discover information about me, my projects, and more.
            </div>

            <div class="w-full flex justify-end">
                <button
                    class="px-1 border-3d button-3d"
                    onclick="document.querySelectorAll('.${welcomeWindowID}').forEach(element => element.remove());"
                >
                    Got it!
                </button>
            </div>
        </div>
    `;

    createWindow(
        "Welcome!",
        welcomeWindowContent,
        welcomeWindowID,
        false,
        false,
        "assets/images/executable.png"
    );
});

// Error window
const startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    const errorWindowID = `error-window${Math.floor(Math.random() * 1000)}`;
    const errorWindowContent = `
        <div class="flex flex-col items-center gap-3">
            <div class="flex items-center justify-center">
                <img class="h-10 pe-3" src="assets/images/error.png" alt="Error icon">

                <p>The start menu isn't functional yet. Sorry!</p>
            </div>

            <button
                class="w-fit px-1 border-3d button-3d"
                onclick="document.querySelectorAll('.${errorWindowID}').forEach(element => element.remove());"
            >
                OK
            </button>
        </div>
    `;

    createWindow(
        "Error",
        errorWindowContent,
        errorWindowID,
        false,
        true,
        "assets/images/error.png"
    );
});

// About me
const aboutMeApp = document.getElementById("about-me-app");
aboutMeApp.addEventListener("click", () => {
    const aboutMeWindowID = `about-me-window${Math.floor(
        Math.random() * 1000
    )}`;
    const aboutMeWindowContent = `
        <div class="p-1 w-full sm:w-md border-3d-reverse bg-[#ffffff]">
            <p class="mb-4">-------------------<br>ABOUT ME<br>-------------------<br>Hi!, I'm Son, a full-stack web developer and student at Bit Academy.</p>
            <p>I have experience with many different technologies and programming languages, and I'm particularly interested in creating web applications. I was interested in computers and programming from a young age, attending programming courses and camps during most of my childhood vacations where I learned the fundamentals.</p>
        </div>
    `;

    createWindow(
        "Text Viewer",
        aboutMeWindowContent,
        aboutMeWindowID,
        false,
        false,
        "assets/images/text.png"
    );
});

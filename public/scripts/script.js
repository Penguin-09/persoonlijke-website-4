const allWindows = document.querySelectorAll(".app-window");

/**
 * Add event listeners to the app icons to show the corresponding windows.
 * @param {string} appID the ID of the app icon
 * @param {string} windowClass the class of the window to show
 */
function showWindow(appID, windowClass) {
    document.getElementById(appID).addEventListener("click", () => {
        closeAllWindows();

        document
            .getElementsByClassName(windowClass)[0]
            .classList.remove("hidden");
        document
            .getElementsByClassName(windowClass)[1]
            .classList.remove("hidden");
    });
}

/**
 * Close all open windows
 */
function closeAllWindows() {
    allWindows.forEach((window) => {
        window.classList.add("hidden");
    });
}

/**
 * Close all open Internet Explorer tabs
 */
function closeInternetExplorerTabs() {
    const allTabs = document.querySelectorAll(".project");

    allTabs.forEach((window) => {
        window.classList.add("hidden");
    });
}

// Add event listeners to all apps
showWindow("welcome-app", "welcome-exe");
showWindow("about-me-app", "about-me-txt");
showWindow("picture-of-me-app", "picture-of-me-png");
showWindow("cv-app", "cv-pdf");
showWindow("user-info-app", "user-settings");
showWindow("tech-stack-app", "file-explorer");
showWindow("projects-app", "internet-explorer");

// Add event listener to the favourites dropdown
document.getElementById("favourites").addEventListener("change", (event) => {
    const selectedValue = event.target.value;

    closeInternetExplorerTabs();

    document.getElementById(selectedValue).classList.remove("hidden");
});

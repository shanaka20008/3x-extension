// Function to change video speed when buttons are clicked
function changeSpeed(speed, buttonId) {
    chrome.storage.local.set({ selectedSpeed: speed });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: (speed) => {
                document.querySelectorAll("video").forEach(video => {
                    video.playbackRate = speed;
                });
            },
            args: [speed]
        });
    });

    updateActiveButton(buttonId);
}

// Function to highlight the active button
function updateActiveButton(activeId) {
    document.querySelectorAll("button").forEach(btn => btn.classList.remove("active"));
    if (activeId) document.getElementById(activeId).classList.add("active");
}

// Reset function - Sets speed back to 1x
function resetSpeed() {
    chrome.storage.local.set({ selectedSpeed: 1.0 });

    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.scripting.executeScript({
            target: { tabId: tabs[0].id },
            function: () => {
                document.querySelectorAll("video").forEach(video => {
                    video.playbackRate = 1.0;
                });
            }
        });
    });

    updateActiveButton("stopSpeed"); // Highlight reset button
}

// Load stored speed when popup opens
chrome.storage.local.get("selectedSpeed", (data) => {
    let savedSpeed = data.selectedSpeed || 1.0;
    updateActiveButton(savedSpeed === 2.5 ? "speed2.5" :
                       savedSpeed === 3.0 ? "speed3" :
                       savedSpeed === 4.0 ? "speed4" : "stopSpeed");
});

// Add event listeners for buttons
document.getElementById("speed2.5").addEventListener("click", () => changeSpeed(2.5, "speed2.5"));
document.getElementById("speed3").addEventListener("click", () => changeSpeed(3.0, "speed3"));
document.getElementById("speed4").addEventListener("click", () => changeSpeed(4.0, "speed4"));
document.getElementById("stopSpeed").addEventListener("click", resetSpeed);

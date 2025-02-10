document.addEventListener("DOMContentLoaded", function () {
    // Splash Screen Timer
    setTimeout(() => {
        // Fade out the splash screen
        document.getElementById("splash-screen").style.opacity = "0";
        setTimeout(() => {
            // Hide splash screen and show welcome screen after fade-out
            document.getElementById("splash-screen").style.display = "none";
            document.getElementById("welcome-screen").style.display = "flex";

            // Start typing animation for welcome text
            startTypingAnimation("typing-text", "Welcome!");
        }, 1000); // 1 second fade-out delay
    }, 3000); // 3 seconds before starting transition

    // Swipe Up Gesture Detection
    let touchStartY = 0;
    let touchEndY = 0;

    // Detect the swipe start position
    document.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
    });

    // Detect the swipe end position and check for swipe up
    document.addEventListener("touchend", (e) => {
        touchEndY = e.changedTouches[0].clientY;
        if (touchStartY - touchEndY > 50) { // If swipe-up gesture is detected
            document.getElementById("welcome-screen").style.display = "none"; // Hide welcome screen
            document.getElementById("main-page").style.display = "flex"; // Show main page
        }
    });
});

// Typing Animation Function
function startTypingAnimation(elementId, text) {
    let element = document.getElementById(elementId);
    let index = 0;

    function typeCharacter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index); // Add character to element
            index++;
            setTimeout(typeCharacter, 100); // Delay for each character
        }
    }

    element.innerHTML = ""; // Clear any existing text
    typeCharacter(); // Start typing effect
}

// Redirect Function for buttons
function redirectTo(url) {
    window.location.href = url; // Redirect to the specified URL
}
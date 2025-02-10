document.addEventListener("DOMContentLoaded", function () {
    // Splash Screen Timer
    setTimeout(() => {
        document.getElementById("splash-screen").style.opacity = "0"; // Fade out the splash screen
        setTimeout(() => {
            document.getElementById("splash-screen").style.display = "none"; // Hide splash screen
            document.getElementById("welcome-screen").style.display = "flex"; // Show welcome screen

            // Start typing animation for welcome text
            startTypingAnimation("typing-text", "Welcome!");
        }, 1000); // After 1 second delay, hide splash screen
    }, 3000); // Wait 3 seconds before starting transition

    // Swipe Up Gesture Detection
    let touchStartY = 0;
    let touchEndY = 0;

    document.addEventListener("touchstart", (e) => {
        touchStartY = e.touches[0].clientY;
    });

    document.addEventListener("touchend", (e) => {
        touchEndY = e.changedTouches[0].clientY;
        if (touchStartY - touchEndY > 50) { // Swiping Up
            document.getElementById("welcome-screen").style.display = "none";
            document.getElementById("main-page").style.display = "flex";
        }
    });
});

// Typing Animation Function
function startTypingAnimation(elementId, text) {
    let element = document.getElementById(elementId);
    let index = 0;

    function typeCharacter() {
        if (index < text.length) {
            element.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeCharacter, 100);
        }
    }

    element.innerHTML = ""; // Clear any existing text
    typeCharacter(); // Start the typing effect
}

// Redirect Function
function redirectTo(url) {
    window.location.href = url;
}}
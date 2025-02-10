// Remove Splash Screen After Load
window.onload = function() {
    setTimeout(() => {
        document.querySelector('.splash').classList.add('hidden');
        document.querySelector('.container').style.display = 'block';
    }, 2500);
};

// Button Redirects
function redirectTo(url) {
    window.location.href = url;
} Out
    setTimeout(() => {
        splashScreen.style.opacity = '0'; // Fade out
        setTimeout(() => {
            splashScreen.style.display = 'none';
            blackScreen.style.display = 'flex';

            // Typing Animation on Black Screen
            const text = "Welcome";
            let i = 0;
            function typeWriter() {
                if (i < text.length) {
                    welcomeText.textContent += text.charAt(i);
                    i++;
                    setTimeout(typeWriter, 100); // Adjust speed
                } else {
                    //Typing Complete
                }
            }
            typeWriter();

        }, 1000); // Delay after fade out
    }, 3000); // Adjust splash screen duration

    // Swipe Up Functionality
    let touchStartY = 0;

    blackScreen.addEventListener('touchstart', (e) => {
        touchStartY = e.touches[0].clientY;
    });

    blackScreen.addEventListener('touchend', (e) => {
        const touchEndY = e.changedTouches[0].clientY;
        const swipeDistance = touchStartY - touchEndY;

        if (swipeDistance > 50) { // Adjust sensitivity
            blackScreen.style.display = 'none';
            mainPage.style.display = 'block';
            // Add a class to trigger the fade-in effect
            setTimeout(() => {
                mainPage.classList.add('visible');
            }, 50); // Small delay to ensure display is block
        }
    });
});

info page");
    document.getElementById("main-page").style.display = "none";
    document.getElementById("info-page").style.display = "block";
}

function goToMainPage() {
    console.log("goToMainPage: Displaying main page");
    document.getElementById("info-page").style.display = "none";
    document.getElementById("main-page").style.display = "flex";
}
hiding welcome screen, showing main page"); // Debugging
                welcomeScreen.style.display = "none"; // Hide welcome screen
                mainPage.style.display = "flex"; // Show main page
            } else {
                console.error("Welcome screen or Main page element NOT found during swipe"); // Debugging
            }
        }
    });
});

// Typing Animation Function
function startTypingAnimation(elementId, text) {
    let element = document.getElementById(elementId);
    if (!element) {
        console.error("Typing animation element NOT found"); // Debugging
        return;
    }

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

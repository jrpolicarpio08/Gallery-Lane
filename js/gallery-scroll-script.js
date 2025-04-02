// document.addEventListener("DOMContentLoaded", function () {
//     const gameItems = document.querySelectorAll(".game-item");
//     const scrollUp = document.getElementById("scrollUp");
//     const scrollDown = document.getElementById("scrollDown");

//     let currentIndex = 0;
//     const imagesPerSet = 5;
//     const totalImages = gameItems.length;

//     function updateVisibility() {
//         gameItems.forEach((item, index) => {
//             if (index >= currentIndex && index < currentIndex + imagesPerSet) {
//                 item.classList.remove("hidden");
//             } else {
//                 item.classList.add("hidden");
//             }
//         });

//         // Explicitly control button states
//         scrollUp.disabled = currentIndex === 0;
//         scrollDown.disabled = currentIndex + imagesPerSet >= totalImages || currentIndex + imagesPerSet === 10; // <----- change the value when adding more games
//     }

//     scrollUp.addEventListener("click", function () {
//         if (currentIndex > 0) {
//             currentIndex -= imagesPerSet;
//             updateVisibility();
//         }
//     });

//     scrollDown.addEventListener("click", function () {
//         if (currentIndex + imagesPerSet < totalImages && currentIndex + imagesPerSet !== 10) { // <----- change the value when adding more games
//             currentIndex += imagesPerSet;
//             updateVisibility();
//         }
//     });

//     updateVisibility();
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const gameContainer = document.querySelector(".game-images");
//     const gameItems = Array.from(document.querySelectorAll(".game-item"));
//     const scrollUp = document.getElementById("scrollUp");
//     const scrollDown = document.getElementById("scrollDown");

//     let currentIndex = 0;
//     const imagesPerSet = 5;
//     const totalImages = gameItems.length;
//     let isAnimating = false; // Prevents multiple clicks during animation

//     function updateVisibility(direction) {
//         gameItems.forEach((item, index) => {
//             if (index >= currentIndex && index < currentIndex + imagesPerSet) {
//                 item.classList.remove("hidden", "animate__fadeOut");
//                 item.classList.add("animate__animated", direction === "down" ? "animate__fadeInUp" : "animate__fadeInDown");
//             } else {
//                 item.classList.remove("animate__fadeInUp", "animate__fadeInDown");
//                 item.classList.add("animate__animated", "animate__fadeOut");
    
//                 setTimeout(() => {
//                     item.classList.add("hidden"); // Hide after animation completes
//                 }, 500); // Match Animate.css duration
//             }
//         });
    
//         // Disable buttons properly
//         scrollUp.disabled = currentIndex === 0;
//         scrollDown.disabled = currentIndex + imagesPerSet >= totalImages || currentIndex + imagesPerSet === 10;
//     }
//     scrollUp.addEventListener("click", function () {
//         if (currentIndex > 0) {
//             currentIndex -= imagesPerSet;
//             updateVisibility("up");
//         }
//     });

//     scrollDown.addEventListener("click", function () {
//         if (currentIndex + imagesPerSet < totalImages && currentIndex + imagesPerSet !== 10) {
//             currentIndex += imagesPerSet;
//             updateVisibility("down");
//         }
//     });

//     updateVisibility();
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const gameItems = document.querySelectorAll(".game-item");
//     const scrollUp = document.getElementById("scrollUp");
//     const scrollDown = document.getElementById("scrollDown");

//     let currentIndex = 0;
//     const imagesPerSet = 5;
//     const totalImages = gameItems.length;

//     function updateVisibility(direction) {
//         let currentItems = Array.from(gameItems).slice(currentIndex, currentIndex + imagesPerSet);
//         let nextIndex = currentIndex + (direction === "down" ? imagesPerSet : -imagesPerSet);
//         let nextItems = Array.from(gameItems).slice(nextIndex, nextIndex + imagesPerSet);

//         // Step 1: Animate current items out
//         currentItems.forEach((item) => {
//             item.classList.add("animate__animated", direction === "down" ? "animate__fadeOutUp" : "animate__fadeOutDown");
//         });

//         setTimeout(() => {
//             // Step 2: Hide old items
//             currentItems.forEach((item) => item.classList.add("hidden"));

//             // Step 3: Show new items and animate them in
//             nextItems.forEach((item) => {
//                 item.classList.remove("hidden", "animate__fadeOutUp", "animate__fadeOutDown");
//                 item.classList.add("animate__animated", direction === "down" ? "animate__fadeInDown" : "animate__fadeInUp");
//             });

//             currentIndex = nextIndex;

//             // Disable buttons if at the start or end
//             scrollUp.disabled = currentIndex === 0;
//             scrollDown.disabled = currentIndex + imagesPerSet >= totalImages || currentIndex + imagesPerSet === 10;

//         }, 500); // Adjust delay to match Animate.css animation duration
//     }

//     scrollUp.addEventListener("click", function () {
//         if (currentIndex > 0) {
//             updateVisibility("up");
//         }
//     });

//     scrollDown.addEventListener("click", function () {
//         if (currentIndex + imagesPerSet < totalImages && currentIndex + imagesPerSet !== 10) {
//             updateVisibility("down");
//         }
//     });

//     updateVisibility(); // Ensure initial setup
// });

// document.addEventListener("DOMContentLoaded", function () {
//     const gameItems = document.querySelectorAll(".game-item");
//     const scrollUp = document.getElementById("scrollUp");
//     const scrollDown = document.getElementById("scrollDown");

//     let currentIndex = 0;
//     const imagesPerSet = 5;
//     const totalImages = gameItems.length;

//     function updateVisibility(direction) {
//         if (direction) {
//             let currentItems = Array.from(gameItems).slice(currentIndex, currentIndex + imagesPerSet);
//             let nextIndex = currentIndex + (direction === "down" ? imagesPerSet : -imagesPerSet);
//             let nextItems = Array.from(gameItems).slice(nextIndex, nextIndex + imagesPerSet);

//             // Step 1: Animate current items out
//             currentItems.forEach((item) => {
//                 item.classList.add("animate__animated", direction === "down" ? "animate__fadeOutUp" : "animate__fadeOutDown");
//             });

//             setTimeout(() => {
//                 // Step 2: Hide old items
//                 currentItems.forEach((item) => item.classList.add("hidden"));

//                 // Step 3: Show new items and animate them in
//                 nextItems.forEach((item) => {
//                     item.classList.remove("hidden", "animate__fadeOutUp", "animate__fadeOutDown");
//                     item.classList.add("animate__animated", direction === "down" ? "animate__fadeInUp" : "animate__fadeInDown");
//                 });

//                 currentIndex = nextIndex;

//                 // Disable buttons if at the start or end
//                 scrollUp.disabled = currentIndex === 0;
//                 scrollDown.disabled = currentIndex + imagesPerSet >= totalImages || currentIndex + imagesPerSet === 10;

//             }, 500); // Adjust delay to match Animate.css animation duration
//         } else {
//             // Initial setup: Show first set, hide the rest
//             gameItems.forEach((item, index) => {
//                 if (index < imagesPerSet) {
//                     item.classList.remove("hidden");
//                 } else {
//                     item.classList.add("hidden");
//                 }
//             });

//             // Ensure correct button state
//             scrollUp.disabled = currentIndex === 0;
//             scrollDown.disabled = imagesPerSet >= totalImages;
//         }
//     }

//     scrollUp.addEventListener("click", function () {
//         if (currentIndex > 0) {
//             updateVisibility("up");
//         }
//     });

//     scrollDown.addEventListener("click", function () {
//         if (currentIndex + imagesPerSet < totalImages && currentIndex + imagesPerSet !== 10) {
//             updateVisibility("down");
//         }
//     });

//     updateVisibility(); // Ensure correct initial setup
// });

document.addEventListener("DOMContentLoaded", function () {
    function setupScroll(sectionId) {
        const section = document.getElementById(sectionId);
        if (!section) return;

        const gameItems = section.querySelectorAll(".game-item");
        const scrollUp = section.querySelector(".scrollUp");
        const scrollDown = section.querySelector(".scrollDown");

        let currentIndex = 0;
        const imagesPerSet = 5;
        const totalImages = gameItems.length;

        function updateVisibility(direction) {
            if (direction) {
                let currentItems = Array.from(gameItems).slice(currentIndex, currentIndex + imagesPerSet);
                let nextIndex = currentIndex + (direction === "down" ? imagesPerSet : -imagesPerSet);
                let nextItems = Array.from(gameItems).slice(nextIndex, nextIndex + imagesPerSet);

                // Step 1: Animate current items out
                currentItems.forEach((item) => {
                    item.classList.add("animate__animated", direction === "down" ? "animate__fadeOutUp" : "animate__fadeOutDown");
                });

                setTimeout(() => {
                    // Step 2: Hide old items
                    currentItems.forEach((item) => item.classList.add("hidden"));

                    // Step 3: Show new items and animate them in
                    nextItems.forEach((item) => {
                        item.classList.remove("hidden", "animate__fadeOutUp", "animate__fadeOutDown");
                        item.classList.add("animate__animated", direction === "down" ? "animate__fadeInUp" : "animate__fadeInDown");
                    });

                    currentIndex = nextIndex;

                    // Disable buttons if at the start or end
                    scrollUp.disabled = currentIndex === 0;
                    scrollDown.disabled = currentIndex + imagesPerSet >= totalImages;

                }, 500); // Adjust delay to match Animate.css animation duration
            } else {
                // Initial setup: Show first set, hide the rest
                gameItems.forEach((item, index) => {
                    if (index < imagesPerSet) {
                        item.classList.remove("hidden");
                    } else {
                        item.classList.add("hidden");
                    }
                });

                // Ensure correct button state
                scrollUp.disabled = currentIndex === 0;
                scrollDown.disabled = imagesPerSet >= totalImages;
            }
        }

        scrollUp.addEventListener("click", function () {
            if (currentIndex > 0) {
                updateVisibility("up");
            }
        });

        scrollDown.addEventListener("click", function () {
            if (currentIndex + imagesPerSet < totalImages) {
                updateVisibility("down");
            }
        });

        updateVisibility(); // Ensure correct initial setup
    }

    // Automatically setup scroll sections by detecting them dynamically
    document.querySelectorAll(".scroll-section").forEach((section) => {
        setupScroll(section.id);
    });
});

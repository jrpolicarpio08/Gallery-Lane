// v1
// const sections = {
//     btn1: document.getElementById('game1'),
//     btn2: document.getElementById('game2'),
//     btn3: document.getElementById('game3'),
//   };
  
//   const buttons = {
//     btn1: document.getElementById('gamebtn1'),
//     btn2: document.getElementById('gamebtn2'),
//     btn3: document.getElementById('gamebtn3'),
//   };
  
//   // 🆕 Define animations per section
//   const animations = {
//     btn1: { show: 'animate__fadeIn', hide: 'animate__fadeOut' },
//     btn2: { show: 'animate__fadeIn', hide: 'animate__fadeOut' },
//     btn3: { show: 'animate__fadeInRight', hide: 'animate__fadeOutLeft' },
//   };
  
//   const animationDuration = 500; // ms, same as Animate.css speed
  
//   function toggleSection(targetId) {
//     Object.keys(sections).forEach((key) => {
//       const section = sections[key];
//       const isTarget = key === targetId;
//       const icon = buttons[key].querySelector('i');
//       const { show, hide } = animations[key];
  
//       if (isTarget) {
//         const isVisible = !section.classList.contains('hidden');
  
//         if (isVisible) {
//           section.classList.remove(show);
//           section.classList.add(hide);
  
//           setTimeout(() => {
//             section.classList.add('hidden', 'opacity-0');
//             section.classList.remove(hide);
//           }, animationDuration);
  
//           buttons[key].classList.remove('active');
//         } else {
//           section.classList.remove('hidden', 'opacity-0');
//           section.classList.add(show);
  
//           buttons[key].classList.add('active');
//         }
//       } else {
//         if (!section.classList.contains('hidden')) {
//           const otherAnim = animations[key];
//           section.classList.remove(otherAnim.show);
//           section.classList.add(otherAnim.hide);
  
//           setTimeout(() => {
//             section.classList.add('hidden', 'opacity-0');
//             section.classList.remove(otherAnim.hide);
//           }, animationDuration);
//         }
  
//         buttons[key].classList.remove('active');
//       }
//     });
//   }
  
//   // Event listeners
//   Object.keys(buttons).forEach((key) => {
//     buttons[key].addEventListener('click', () => toggleSection(key));
//   });
  
//   const modal = document.getElementById('exampleModalToggle');
//   modal.addEventListener('shown.bs.modal', () => {
//     toggleSection('gamebtn1');
//   });
// v1

// v2
// const sections = {
//   btn1: document.getElementById('game1'),
//   btn2: document.getElementById('game2'),
//   btn3: document.getElementById('game3'),
// };

// const buttons = {
//   btn1: document.getElementById('gamebtn1'),
//   btn2: document.getElementById('gamebtn2'),
//   btn3: document.getElementById('gamebtn3'),
// };

// // 🔥 Add references to the divs next to buttons
// const statusDivs = {
//   btn1: document.getElementById('status1'),
//   btn2: document.getElementById('status2'),
//   btn3: document.getElementById('status3'),
// };

// const animations = {
//   btn1: { show: 'animate__fadeIn', hide: 'animate__fadeOut' },
//   btn2: { show: 'animate__fadeIn', hide: 'animate__fadeOut' },
//   btn3: { show: 'animate__fadeInRight', hide: 'animate__fadeOutLeft' },
// };

// const animationDuration = 500;
// let activeSection = null;
// let activeButton = null;
// let activeStatusDiv = null; // Track active status div

// function toggleSection(targetId) {
//   const targetSection = sections[targetId];
//   const targetButton = buttons[targetId];
//   const targetStatusDiv = statusDivs[targetId]; // Get the associated div

//   if (activeSection === targetSection) return;

//   if (activeSection) {
//       const { hide } = animations[Object.keys(sections).find(key => sections[key] === activeSection)];
//       activeSection.classList.remove('animate__fadeIn', 'animate__fadeInRight');
//       activeSection.classList.add(hide);

//       setTimeout(() => {
//           activeSection.classList.add('hidden', 'opacity-0');
//           activeSection.classList.remove(hide);
//           showNewSection(targetId);
//       }, animationDuration);
//   } else {
//       showNewSection(targetId);
//   }

//   // Update active button
//   if (activeButton) {
//       activeButton.classList.remove('active');
//   }
//   targetButton.classList.add('active');
//   activeButton = targetButton;

//   // 🔥 Update status div color
//   if (activeStatusDiv) {
//       activeStatusDiv.classList.remove('tw-bg-green-500'); // Reset previous div color
//   }
//   targetStatusDiv.classList.add('tw-bg-green-500'); // Make new div green
//   activeStatusDiv = targetStatusDiv;
// }

// function showNewSection(targetId) {
//   const targetSection = sections[targetId];
//   const { show } = animations[targetId];

//   targetSection.classList.remove('hidden', 'opacity-0');
//   targetSection.classList.add(show);

//   activeSection = targetSection;
// }

// // 🔥 Auto-show the section with "active" button on page load
// document.addEventListener('DOMContentLoaded', () => {
//   let defaultButton = Object.keys(buttons).find(key => buttons[key].classList.contains('active'));

//   if (defaultButton) {
//       showNewSection(defaultButton);
//       activeButton = buttons[defaultButton];
//       activeStatusDiv = statusDivs[defaultButton];
//       activeStatusDiv.classList.add('tw-bg-green-500'); // Set green background on load
//   }
// });

// // Add event listeners
// Object.keys(buttons).forEach((key) => {
//   buttons[key].addEventListener('click', () => toggleSection(key));
// });
// v2

// v3
// const sections = {
//   btn1: document.getElementById('game1'),
//   btn2: document.getElementById('game2'),
//   btn3: document.getElementById('game3'),
// };

// const buttons = {
//   btn1: document.getElementById('gamebtn1'),
//   btn2: document.getElementById('gamebtn2'),
//   btn3: document.getElementById('gamebtn3'),
// };

// // 🔥 Select the status div INSIDE each button
// const statusDivs = {
//   btn1: document.querySelector('#gamebtn1 div'),
//   btn2: document.querySelector('#gamebtn2 div'),
//   btn3: document.querySelector('#gamebtn3 div'),
// };

// const animations = {
//   btn1: { show: 'animate__fadeIn', hide: 'animate__fadeOut' },
//   btn2: { show: 'animate__fadeIn', hide: 'animate__fadeOut' },
//   btn3: { show: 'animate__fadeInRight', hide: 'animate__fadeOutLeft' },
// };

// const animationDuration = 500;
// let activeSection = null;
// let activeButton = null;
// let activeStatusDiv = null; // Track the currently highlighted div

// function toggleSection(targetId) {
//   const targetSection = sections[targetId];
//   const targetButton = buttons[targetId];
//   const targetStatusDiv = statusDivs[targetId]; // Get the associated div

//   if (activeSection === targetSection) return;

//   if (activeSection) {
//       const { hide } = animations[Object.keys(sections).find(key => sections[key] === activeSection)];
//       activeSection.classList.remove('animate__fadeIn', 'animate__fadeInRight');
//       activeSection.classList.add(hide);

//       setTimeout(() => {
//           activeSection.classList.add('hidden', 'opacity-0');
//           activeSection.classList.remove(hide);
//           showNewSection(targetId);
//       }, animationDuration);
//   } else {
//       showNewSection(targetId);
//   }

//   // 🔥 Update active button
//   if (activeButton) {
//       activeButton.classList.remove('active');
//   }
//   targetButton.classList.add('active');
//   activeButton = targetButton;

//   // 🔥 Update status div color
//   if (activeStatusDiv) {
//       activeStatusDiv.style.backgroundColor = "gray"; // Reset previous div color
//   }
//   targetStatusDiv.style.backgroundColor = "green"; // Turn green
//   activeStatusDiv = targetStatusDiv;
// }

// function showNewSection(targetId) {
//   const targetSection = sections[targetId];
//   const { show } = animations[targetId];

//   targetSection.classList.remove('hidden', 'opacity-0');
//   targetSection.classList.add(show);

//   activeSection = targetSection;
// }

// // 🔥 Auto-show the section with "active" button on page load
// document.addEventListener('DOMContentLoaded', () => {
//   let defaultButton = Object.keys(buttons).find(key => buttons[key].classList.contains('active'));

//   if (defaultButton) {
//       showNewSection(defaultButton);
//       activeButton = buttons[defaultButton];
//       activeStatusDiv = statusDivs[defaultButton];

//       // Set initial color for active status div
//       activeStatusDiv.style.backgroundColor = "green";
//   }
// });

// // Add event listeners
// Object.keys(buttons).forEach((key) => {
//   buttons[key].addEventListener('click', () => toggleSection(key));
// });
// v3

// v4
// const sections = {
//   btn1: document.getElementById('game1'),
//   btn2: document.getElementById('game2'),
//   btn3: document.getElementById('game3'),
// };

// const buttons = {
//   btn1: document.getElementById('gamebtn1'),
//   btn2: document.getElementById('gamebtn2'),
//   btn3: document.getElementById('gamebtn3'),
// };

// // 🔥 Select the status div INSIDE each button
// const statusDivs = {
//   btn1: document.querySelector('#gamebtn1 div'),
//   btn2: document.querySelector('#gamebtn2 div'),
//   btn3: document.querySelector('#gamebtn3 div'),
// };

// const animations = {
//   btn1: { show: 'animate__fadeIn', hide: 'animate__fadeOut' },
//   btn2: { show: 'animate__fadeIn', hide: 'animate__fadeOut' },
//   btn3: { show: 'animate__fadeInRight', hide: 'animate__fadeOutLeft' },
// };

// const animationDuration = 500;
// let activeSection = null;
// let activeButton = null;

// function toggleSection(targetId) {
//   const targetSection = sections[targetId];
//   const targetButton = buttons[targetId];
//   const targetStatusDiv = statusDivs[targetId]; // Get the associated div

//   if (activeSection === targetSection) return;

//   if (activeSection) {
//       const { hide } = animations[Object.keys(sections).find(key => sections[key] === activeSection)];
//       activeSection.classList.remove('animate__fadeIn', 'animate__fadeInRight');
//       activeSection.classList.add(hide);

//       setTimeout(() => {
//           activeSection.classList.add('hidden', 'opacity-0');
//           activeSection.classList.remove(hide);
//           showNewSection(targetId);
//       }, animationDuration);
//   } else {
//       showNewSection(targetId);
//   }

//   // 🔥 Update active button
//   if (activeButton) {
//       activeButton.classList.remove('active');
//   }
//   targetButton.classList.add('active');
//   activeButton = targetButton;

// }

// function showNewSection(targetId) {
//   const targetSection = sections[targetId];
//   const { show } = animations[targetId];

//   targetSection.classList.remove('hidden', 'opacity-0');
//   targetSection.classList.add(show);

//   activeSection = targetSection;
// }

// // 🔥 Auto-show the section with "active" button on page load
// document.addEventListener('DOMContentLoaded', () => {
//   let defaultButton = Object.keys(buttons).find(key => buttons[key].classList.contains('active'));

//   if (defaultButton) {
//       showNewSection(defaultButton);
//       activeButton = buttons[defaultButton];
//   }
// });

// // Add event listeners
// Object.keys(buttons).forEach((key) => {
//   buttons[key].addEventListener('click', () => toggleSection(key));
// });
// v4

// v5
// document.addEventListener("DOMContentLoaded", function () {
//   const sections = {};
//   const buttons = {};
//   const animations = {};
//   const animationDuration = 500;
//   let activeSection = null;
//   let activeButton = null;

//   // 🔥 Automatically detect buttons and sections
//   document.querySelectorAll("[id^='gamebtn']").forEach((btn) => {
//       const btnId = btn.id;
//       const sectionId = btnId.replace("gamebtn", "game"); // Example: gamebtn1 -> game1

//       sections[btnId] = document.getElementById(sectionId);
//       buttons[btnId] = btn;

//       animations[btnId] = {
//           show: "animate__fadeIn",
//           hide: "animate__fadeOut"
//       };
//   });

//   function toggleSection(targetId) {
//       const targetSection = sections[targetId];
//       const targetButton = buttons[targetId];

//       if (activeSection === targetSection) return;

//       if (activeSection) {
//           const { hide } = animations[activeButton.id];

//           activeSection.classList.remove("animate__fadeIn");
//           activeSection.classList.add(hide);

//           setTimeout(() => {
//               activeSection.classList.add("hidden", "opacity-0");
//               activeSection.classList.remove(hide);
//               showNewSection(targetId);
//           }, animationDuration);
//       } else {
//           showNewSection(targetId);
//       }

//       // 🔥 Update active button styling
//       if (activeButton) {
//           activeButton.classList.remove("active");
//       }
//       targetButton.classList.add("active");
//       activeButton = targetButton;
//   }

//   function showNewSection(targetId) {
//       const targetSection = sections[targetId];
//       const { show } = animations[targetId];

//       targetSection.classList.remove("hidden", "opacity-0");
//       targetSection.classList.add(show);

//       activeSection = targetSection;
//   }

//   // 🔥 Auto-show the section with "active" button on page load
//   const defaultButton = Object.values(buttons).find((btn) => btn.classList.contains("active"));

//   if (defaultButton) {
//       showNewSection(defaultButton.id);
//       activeButton = defaultButton;
//   }

//   // 🔥 Attach event listeners to all buttons
//   Object.keys(buttons).forEach((key) => {
//       buttons[key].addEventListener("click", () => toggleSection(key));
//   });
// });
// v5

document.addEventListener("DOMContentLoaded", function () {
    const sections = {};
    const buttons = {};
    const animations = {};
    const animationDuration = 500;
    let activeSection = null;
    let activeButton = null;

    // Automatically detect buttons and sections
    document.querySelectorAll("[id^='gamebtn']").forEach((btn) => {
        const btnId = btn.id;
        const sectionId = btnId.replace("gamebtn", "game"); // Example: gamebtn1 -> game1

        sections[btnId] = document.getElementById(sectionId);
        buttons[btnId] = btn;

        animations[btnId] = {
            show: "animate__fadeIn",
            hide: "animate__fadeOut"
        };
    });

    function toggleSection(targetId) {
        const targetSection = sections[targetId];
        const targetButton = buttons[targetId];

        if (activeSection === targetSection) return;

        if (activeSection) {
            const { hide } = animations[activeButton.id];

            activeSection.classList.remove("animate__fadeIn");
            activeSection.classList.add(hide);

            setTimeout(() => {
                activeSection.classList.add("hidden", "opacity-0");
                activeSection.classList.remove(hide);
                showNewSection(targetId);
            }, animationDuration);
        } else {
            showNewSection(targetId);
        }

        // 🔥 Update active button styling
        if (activeButton) {
            activeButton.classList.remove("active");
            activeButton.querySelector("img").style.opacity = "1"; // Reset previous button image opacity
        }

        targetButton.classList.add("active");
        targetButton.querySelector("img").style.opacity = "0.5"; // Set opacity for active button
        activeButton = targetButton;
    }

    function showNewSection(targetId) {
        const targetSection = sections[targetId];
        const { show } = animations[targetId];

        targetSection.classList.remove("hidden", "opacity-0");
        targetSection.classList.add(show);

        activeSection = targetSection;
    }

    // Auto-show the section with "active" button on page load
    const defaultButton = Object.values(buttons).find((btn) => btn.classList.contains("active"));

    if (defaultButton) {
        showNewSection(defaultButton.id);
        activeButton = defaultButton;
        activeButton.querySelector("img").style.opacity = "0.5"; // Ensure the default button's image is faded
    }

    // Attach event listeners to all buttons
    Object.keys(buttons).forEach((key) => {
        buttons[key].addEventListener("click", () => toggleSection(key));
    });
});


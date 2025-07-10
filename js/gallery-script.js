// const sections = {
//   btn1: document.getElementById('game1section1'),
//   btn2: document.getElementById('game1section2'),
//   btn3: document.getElementById('game1section3'),
// };

// const buttons = {
//   btn1: document.getElementById('game1btn1'),
//   btn2: document.getElementById('game1btn2'),
//   btn3: document.getElementById('game1btn3'),
// };

// Object.keys(buttons).forEach(buttonId => {
//   const button = buttons[buttonId];
//   button.addEventListener('click', () => {
//     const section = sections[buttonId];
//     const isVisible = !section.classList.contains('hidden') && section.classList.contains('opacity-100');

//     // Clear all active states
//     Object.values(buttons).forEach(btn => btn.classList.remove('active'));

//     if (isVisible) {
//       // Fade out
//       section.classList.remove('opacity-100');
//       section.classList.add('opacity-0');

//       setTimeout(() => {
//         section.classList.add('hidden');
//       }, 300); // match the transition duration
//     } else {
//       // Hide all sections first
//       Object.values(sections).forEach(sec => {
//         sec.classList.remove('opacity-100');
//         sec.classList.add('opacity-0');
//         setTimeout(() => {
//           sec.classList.add('hidden');
//         }, 300);
//       });

//       // Show current
//       setTimeout(() => {
//         section.classList.remove('hidden');
//         section.classList.add('opacity-100');
//         section.classList.remove('opacity-0');
//       }, 310); // small delay to avoid conflict

//       // Set button active
//       button.classList.add('active');
//     }
//   });
// });

// const buttons = document.querySelectorAll('.game-section-btn');

// // Reference to shared section
// const section = document.getElementById('game1section1');

// // Elements to update
// const titleElems = section.querySelectorAll('.game-img-title');
// const dateElems = section.querySelectorAll('.game-img-date');
// const imageElem = section.querySelector('.game-img-container input');

// buttons.forEach(button => {
//   button.addEventListener('click', () => {
//     const img = button.dataset.img;
//     const title = button.dataset.title;
//     const date = button.dataset.date;

//     // Update content
//     titleElems.forEach(titleEl => titleEl.textContent = title);
//     dateElems.forEach(dateEl => dateEl.textContent = date);
//     imageElem.src = img;

//     // Show section if hidden (with fade effect)
//     if (section.classList.contains('hidden')) {
//       section.classList.remove('hidden', 'opacity-0');
//       section.classList.add('opacity-100');
//     } else {
//       // Re-trigger animation (optional)
//       section.classList.remove('animate__fadeIn');
//       void section.offsetWidth; // Trigger reflow
//       section.classList.add('animate__fadeIn');
//     }
//   });
// });

  // window.addEventListener('DOMContentLoaded', () => {
  //   const buttons = document.querySelectorAll('.game-section-btn');
  //   const section = document.getElementById('game1section1');
  //   const imageElem = section.querySelector('.game-img-container input');
  //   const titleElems = section.querySelectorAll('.game-img-title');
  //   const dateElems = section.querySelectorAll('.game-img-date');

  //   // Function to update content
  //   function updateDisplay(img, title, date) {
  //     imageElem.src = img;
  //     titleElems.forEach(el => el.textContent = title);
  //     dateElems.forEach(el => el.textContent = date);
  //   }

  //   // Attach event listeners to all buttons
  //   buttons.forEach(button => {
  //     button.addEventListener('click', () => {
  //       const img = button.dataset.img;
  //       const title = button.dataset.title;
  //       const date = button.dataset.date;
  //       updateDisplay(img, title, date);
  //     });
  //   });

  //   // ✅ Show the first image by default on page load
  //   if (buttons.length > 0) {
  //     const firstButton = buttons[0];
  //     const img = firstButton.dataset.img;
  //     const title = firstButton.dataset.title;
  //     const date = firstButton.dataset.date;
  //     updateDisplay(img, title, date);
  //   }
  // });

window.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.game-section-btn');
  const section = document.getElementById('game1section1');
  const imageElem = section.querySelector('.game-img-container input');
  const titleElems = section.querySelectorAll('.game-img-title');
  const dateElems = section.querySelectorAll('.game-img-date');

  // Store the currently active image src to prevent redundant reload
  let currentImg = '';

  // Function to re-trigger animation
  function resetAnimation(element, animationClass) {
    element.classList.remove(animationClass);
    void element.offsetWidth; // force reflow
    element.classList.add(animationClass);
  }

  // Update display function with active-image stopper
  function updateDisplay(img, title, date) {
    // Stop if the current image is already active
    if (img === currentImg) return;

    // Update image and content
    imageElem.src = img;
    titleElems.forEach(el => el.textContent = title);
    dateElems.forEach(el => el.textContent = date);
    currentImg = img;

    // Re-trigger animations
    resetAnimation(section.querySelector('.game-title-date-container'), 'animate__fadeInRight');
    resetAnimation(section.querySelector('.game-img-container'), 'animate__fadeIn');
    const mobileTitleDate = section.querySelector('.d-sm-block');
    if (mobileTitleDate) {
      resetAnimation(mobileTitleDate, 'animate__fadeInLeft');
    }
  }

  // Attach event listeners to all buttons
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const img = button.dataset.img;
      const title = button.dataset.title;
      const date = button.dataset.date;
      updateDisplay(img, title, date);
    });
  });

  // ✅ Set initial state on page load
  if (buttons.length > 0) {
    const firstButton = buttons[0];
    const img = firstButton.dataset.img;
    const title = firstButton.dataset.title;
    const date = firstButton.dataset.date;
    updateDisplay(img, title, date);
  }
});

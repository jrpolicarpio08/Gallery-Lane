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
  const allSections = document.querySelectorAll('.game-img-section');

  allSections.forEach(section => {
    const sectionId = section.id;
    const container = document.getElementById(sectionId)?.closest('.h-100');

    if (!container) return;

    const imageElem = section.querySelector('.game-img-container input');
    const titleElems = section.querySelectorAll('.game-img-title');
    const dateElems = section.querySelectorAll('.game-img-date');
    const buttons = container.querySelectorAll('.game-section-btn');

    let currentImg = '';

    // Re-trigger Animate.css
    function resetAnimation(element, animationClass) {
      if (!element) return;
      element.classList.remove(animationClass);
      void element.offsetWidth; // force reflow
      element.classList.add(animationClass);
    }

    function updateDisplay(img, title, date) {
      if (img === currentImg || !img) return;

      imageElem.src = img;
      titleElems.forEach(el => el.textContent = title);
      dateElems.forEach(el => el.textContent = date);
      currentImg = img;

      resetAnimation(section.querySelector('.game-title-date-container'), 'animate__fadeInRight');
      resetAnimation(section.querySelector('.game-img-container'), 'animate__fadeIn');
      resetAnimation(section.querySelector('.d-sm-block'), 'animate__fadeInLeft');
    }

    // Attach event listeners to all buttons in this section
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        const img = button.dataset.img;
        const title = button.dataset.title;
        const date = button.dataset.date;
        updateDisplay(img, title, date);
      });
    });

    // Initial load – apply the first button's data
    const firstValidBtn = [...buttons].find(btn => btn.dataset.img);
    if (firstValidBtn) {
      const img = firstValidBtn.dataset.img;
      const title = firstValidBtn.dataset.title;
      const date = firstValidBtn.dataset.date;

      // Trigger after layout paint
      requestAnimationFrame(() => {
        updateDisplay(img, title, date);
      });
    }
  });
});

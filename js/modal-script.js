// const sections = {
//   btn1: document.getElementById('section1'),
//   btn2: document.getElementById('section2'),
//   btn3: document.getElementById('section3'),
// };

// const buttons = {
//   btn1: document.getElementById('btn1'),
//   btn2: document.getElementById('btn2'),
//   btn3: document.getElementById('btn3'),
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

// // Default behavior when modal opens
// const modal = document.getElementById('exampleModalToggle');
// modal.addEventListener('shown.bs.modal', () => {
//   Object.values(sections).forEach(sec => {
//     sec.classList.add('hidden', 'opacity-0');
//     sec.classList.remove('opacity-100');
//   });
//   Object.values(buttons).forEach(btn => btn.classList.remove('active'));

//   const section = sections['btn1'];
//   section.classList.remove('hidden');
//   setTimeout(() => {
//     section.classList.add('opacity-100');
//     section.classList.remove('opacity-0');
//   }, 10);

//   buttons['btn1'].classList.add('active');
// });

document.addEventListener("DOMContentLoaded", function () {
  const toggleBtn = document.getElementById("toggleBtn");
  const section1 = document.getElementById("section1");
  const section2 = document.getElementById("section2");

  let showingSection1 = true;
  let isAnimating = false;

  // Reset all Animate.css classes
  function resetAnimationClasses(el) {
    el.classList.remove(
      "animate__animated",
      "animate__fadeInRight",
      "animate__fadeOutRight",
      "animate__fadeInDown",
      "animate__fadeOutUp",
      "animate__fadeOut"
    );
  }

  function animateTransition(outEl, outAnim, inEl, inAnim, callback) {
    resetAnimationClasses(outEl);
    outEl.classList.add("animate__animated", outAnim);

    inEl.classList.remove("hidden");
    resetAnimationClasses(inEl);
    inEl.classList.add("animate__animated", inAnim);

    // Wait for animation to end using 'animationend' event
    outEl.addEventListener(
      "animationend",
      () => {
        outEl.classList.add("hidden");
        resetAnimationClasses(outEl);
        resetAnimationClasses(inEl);
        if (callback) callback();
        isAnimating = false;
      },
      { once: true } // Only run once per animation
    );
  }

  toggleBtn.addEventListener("click", () => {
    if (isAnimating) return;
    isAnimating = true;

    if (showingSection1) {
      animateTransition(
        section1,
        "animate__fadeOut",
        section2,
        "animate__fadeInDown",
        () => (showingSection1 = false)
      );
    } else {
      animateTransition(
        section2,
        "animate__fadeOutUp",
        section1,
        "animate__fadeInRight",
        () => (showingSection1 = true)
      );
    }
  });
});
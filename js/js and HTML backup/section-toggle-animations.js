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
const sections = {
    btn1: document.getElementById('section1'),
    btn2: document.getElementById('section2'),
    btn3: document.getElementById('section3'),
  };
  
  const buttons = {
    btn1: document.getElementById('btn1'),
    btn2: document.getElementById('btn2'),
    btn3: document.getElementById('btn3'),
  };
  
  // 🆕 Define animations per section
  const animations = {
    btn1: { show: 'animate__fadeInRight', hide: 'animate__fadeOutRight' },
    btn2: { show: 'animate__fadeInDown', hide: 'animate__fadeOutUp' },
    btn3: { show: 'animate__fadeInRight', hide: 'animate__fadeOutLeft' },
  };
  
  const animationDuration = 500; // ms, same as Animate.css speed
  
  function toggleSection(targetId) {
    Object.keys(sections).forEach((key) => {
      const section = sections[key];
      const isTarget = key === targetId;
      const icon = buttons[key].querySelector('i');
      const { show, hide } = animations[key];
  
      if (isTarget) {
        const isVisible = !section.classList.contains('hidden');
  
        if (isVisible) {
          section.classList.remove(show);
          section.classList.add(hide);
  
          setTimeout(() => {
            section.classList.add('hidden', 'opacity-0');
            section.classList.remove(hide);
          }, animationDuration);
  
          buttons[key].classList.remove('active');
          icon.classList.remove('text-red-500');
        } else {
          section.classList.remove('hidden', 'opacity-0');
          section.classList.add(show);
  
          buttons[key].classList.add('active');
          icon.classList.add('text-red-500');
        }
      } else {
        if (!section.classList.contains('hidden')) {
          const otherAnim = animations[key];
          section.classList.remove(otherAnim.show);
          section.classList.add(otherAnim.hide);
  
          setTimeout(() => {
            section.classList.add('hidden', 'opacity-0');
            section.classList.remove(otherAnim.hide);
          }, animationDuration);
        }
  
        buttons[key].classList.remove('active');
        icon.classList.remove('text-red-500');
      }
    });
  }
  
  // Event listeners
  Object.keys(buttons).forEach((key) => {
    buttons[key].addEventListener('click', () => toggleSection(key));
  });
  
  const modal = document.getElementById('exampleModalToggle');
  modal.addEventListener('shown.bs.modal', () => {
    toggleSection('btn1');
  });
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

Object.keys(buttons).forEach(buttonId => {
  const button = buttons[buttonId];
  button.addEventListener('click', () => {
    const section = sections[buttonId];
    const isVisible = !section.classList.contains('hidden') && section.classList.contains('opacity-100');

    // Clear all active states
    Object.values(buttons).forEach(btn => btn.classList.remove('active'));

    if (isVisible) {
      // Fade out
      section.classList.remove('opacity-100');
      section.classList.add('opacity-0');

      setTimeout(() => {
        section.classList.add('hidden');
      }, 300); // match the transition duration
    } else {
      // Hide all sections first
      Object.values(sections).forEach(sec => {
        sec.classList.remove('opacity-100');
        sec.classList.add('opacity-0');
        setTimeout(() => {
          sec.classList.add('hidden');
        }, 300);
      });

      // Show current
      setTimeout(() => {
        section.classList.remove('hidden');
        section.classList.add('opacity-100');
        section.classList.remove('opacity-0');
      }, 310); // small delay to avoid conflict

      // Set button active
      button.classList.add('active');
    }
  });
});

// Default behavior when modal opens
const modal = document.getElementById('exampleModalToggle');
modal.addEventListener('shown.bs.modal', () => {
  Object.values(sections).forEach(sec => {
    sec.classList.add('hidden', 'opacity-0');
    sec.classList.remove('opacity-100');
  });
  Object.values(buttons).forEach(btn => btn.classList.remove('active'));

  const section = sections['btn1'];
  section.classList.remove('hidden');
  setTimeout(() => {
    section.classList.add('opacity-100');
    section.classList.remove('opacity-0');
  }, 10);

  buttons['btn1'].classList.add('active');
});
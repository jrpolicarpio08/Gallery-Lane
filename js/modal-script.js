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
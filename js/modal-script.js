document.addEventListener("DOMContentLoaded", function () {
  const toggleButtons = document.querySelectorAll(".modal-btn-title");

  toggleButtons.forEach((btn) => {
    const pairId = btn.getAttribute("data-toggle-pair");

    const section1 = document.querySelector(
      `[data-section="${pairId}"][data-section-index="1"]`
    );
    const section2 = document.querySelector(
      `[data-section="${pairId}"][data-section-index="2"]`
    );

    if (!section1 || !section2) return;

    let showingSection1 = true;
    let isAnimating = false;

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
      resetAnimationClasses(inEl);

      outEl.classList.add("animate__animated", outAnim);
      inEl.classList.remove("hidden");
      inEl.classList.add("animate__animated", inAnim);

      outEl.addEventListener(
        "animationend",
        () => {
          outEl.classList.add("hidden");
          resetAnimationClasses(outEl);
          resetAnimationClasses(inEl);
          isAnimating = false;
          if (callback) callback();
        },
        { once: true }
      );
    }

    // Make sure the button works on click
    btn.addEventListener("click", () => {
      if (isAnimating) return;
      isAnimating = true;

      if (showingSection1) {
        animateTransition(
          section1,
          "animate__fadeOutRight",
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

    // Initial setup
    section1.classList.remove("hidden");
    section2.classList.add("hidden");
  });
});


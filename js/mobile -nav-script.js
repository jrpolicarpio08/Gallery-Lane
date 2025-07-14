document.addEventListener('DOMContentLoaded', function () {
  const carousel = document.getElementById('carouselExampleIndicators');
  const nav = document.querySelector('.carousel-indicators');

  const ABOUT_SLIDE_INDEX = 3; // adjust if needed
  let delayTimeout = null;

  if (carousel) {
    carousel.addEventListener('slid.bs.carousel', function (event) {
      clearTimeout(delayTimeout);
      nav.classList.add('nav-transitioning'); // <- for smoothness

      if (event.to === ABOUT_SLIDE_INDEX) {
        delayTimeout = setTimeout(() => {
          nav.classList.add('white-nav');
          nav.classList.remove('nav-transitioning');
        }, 550); // match your about-section rise animation
      } else {
        nav.classList.remove('white-nav');
        nav.classList.remove('nav-transitioning');
      }
    });
  }
});

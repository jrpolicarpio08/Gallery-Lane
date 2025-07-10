
// document.addEventListener('DOMContentLoaded', () => {
//   const buttons = document.querySelectorAll('.game-section-btn');
//   const previewImg = document.querySelector('.game-img-container input[type="image"]');
//   const latestPhotoImg = document.querySelector('.latest-photo-container input[type="image"]');
//   const titleEls = document.querySelectorAll('.game-img-title');
//   const dateEls = document.querySelectorAll('.game-img-date');

//   // Modal elements
//   const modalImg = document.querySelector('#latestPhotoModal img');
//   const modalTitleEls = document.querySelectorAll('.modal-photo-title .font-bold, .modal-photo-details-title');
//   const modalDateEls = document.querySelectorAll('.modal-photo-title .font-semibold, .modal-photo-credits-date .font-semibold');
//   const modalInfoEls = document.querySelectorAll('.modal-photo-details-info-p');
//   const modalInfo2Els = document.querySelectorAll('.modal-photo-details-info-p2');
//   const modalModsContainers = document.querySelectorAll('.modal-photo-credits-mods .font-semibold');

//   // ✅ Helper: Update preview section
//   function updatePreview(button) {
//     const img = button.dataset.img;
//     const title = button.dataset.title;
//     const date = button.dataset.date;
//     const id = button.dataset.id;

//     if (previewImg) {
//       previewImg.src = img;
//       previewImg.setAttribute('data-id', id);
//       previewImg.setAttribute('data-title', title);
//       previewImg.setAttribute('data-date', date);
//       previewImg.setAttribute('data-img', img);
//     }

//     titleEls.forEach(el => el.textContent = title);
//     dateEls.forEach(el => el.textContent = date);
//   }

//   // ✅ Helper: Update Additional Info
//   function updateAdditionalInfo(extraData) {
//     const fieldMap = {
//       resolution: ['.fa-desktop', 'Resolution'],
//       settings: ['.fa-sliders', 'Settings'],
//       render: ['.fa-image', 'Render'],
//       game: ['.fa-gamepad', 'Game'],
//       server: ['.fa-server', 'Server'],
//     };

//     for (const key in fieldMap) {
//       const [iconClass, labelText] = fieldMap[key];
//       const value = extraData[key];

//       // Mobile
//       document.querySelectorAll(iconClass).forEach(icon => {
//         const parent = icon.parentElement;
//         if (icon.nextSibling && icon.nextSibling.nodeType === 3) {
//           icon.nextSibling.nodeValue = ` : ${value}`;
//         } else {
//           parent.appendChild(document.createTextNode(` : ${value}`));
//         }
//       });

//       // Desktop
//       document.querySelectorAll('.d-none.d-lg-block').forEach(span => {
//         if (span.textContent.trim().startsWith(labelText)) {
//           span.textContent = `${labelText} : ${value}`;
//         }
//       });
//     }
//   }

//   // ✅ Populate Modal
//   function populateModal(id, title, img) {
//     const extraData = modalData[id];
//     const dateModal = extraData?.date || '';

//     if (!id || !title || !dateModal) return;

//     if (modalImg) modalImg.src = img;
//     modalTitleEls.forEach(el => el.textContent = title);

//     modalDateEls.forEach((el, index) => {
//       if (index === 0) {
//         el.innerHTML = `<i class="fa-solid fa-calendar-days"></i> : ${dateModal}`;
//       } else {
//         el.textContent = dateModal;
//       }
//     });

//     if (extraData) {
//       modalInfoEls.forEach(el => el.textContent = extraData.info);
//       modalInfo2Els.forEach(el => el.textContent = extraData.info2);

//       modalModsContainers.forEach(container => {
//         container.innerHTML = '';
//         extraData.mods?.forEach(mod => {
//           const div = document.createElement('div');
//           div.textContent = mod;
//           container.appendChild(div);
//         });
//       });

//       updateAdditionalInfo(extraData);
//     }
//   }

//   // ✅ Load default preview
//   if (buttons.length > 0) {
//     updatePreview(buttons[0]);
//   }

//   // ✅ Button click → update preview
//   buttons.forEach(button => {
//     button.addEventListener('click', () => {
//       updatePreview(button);
//     });
//   });

//   // ✅ Preview image click → open modal
//   if (previewImg) {
//     previewImg.addEventListener('click', () => {
//       const id = previewImg.getAttribute('data-id');
//       const title = previewImg.getAttribute('data-title');
//       const img = previewImg.getAttribute('src');
//       populateModal(id, title, img);
//     });
//   }

//   // ✅ Latest photo container click → open modal
//   if (latestPhotoImg) {
//     latestPhotoImg.addEventListener('click', () => {
//       const id = latestPhotoImg.getAttribute('data-id');
//       const title = latestPhotoImg.getAttribute('data-title');
//       const img = latestPhotoImg.getAttribute('data-img') || latestPhotoImg.getAttribute('src');
//       populateModal(id, title, img);
//     });
//   }
// });

document.addEventListener('DOMContentLoaded', () => {
  const buttons = document.querySelectorAll('.game-section-btn');
  const latestPhotoImg = document.querySelector('.latest-photo-container input[type="image"]');

  // Modal elements
  const modalImg = document.querySelector('#latestPhotoModal img');
  const modalTitleEls = document.querySelectorAll('.modal-photo-title .font-bold, .modal-photo-details-title');
  const modalDateEls = document.querySelectorAll('.modal-photo-title .font-semibold, .modal-photo-credits-date .font-semibold');
  const modalInfoEls = document.querySelectorAll('.modal-photo-details-info-p');
  const modalInfo2Els = document.querySelectorAll('.modal-photo-details-info-p2');
  const modalModsContainers = document.querySelectorAll('.modal-photo-credits-mods .font-semibold');

  let currentPreviewData = null;

  // ✅ Utility: Get the currently active visible game section
  function getActiveGameSection() {
    const sections = document.querySelectorAll('.game-img-section');
    for (const section of sections) {
      if (!section.closest('[class*="hidden"]') && section.offsetParent !== null) {
        return section;
      }
    }
    return null;
  }

  // ✅ Update preview in the currently active section
  function updatePreview(button) {
    const img = button.dataset.img;
    const title = button.dataset.title;
    const date = button.dataset.date;
    const id = button.dataset.id;

    currentPreviewData = { id, title, img };

    const activeSection = getActiveGameSection();
    if (!activeSection) return;

    const previewImg = activeSection.querySelector('.game-img-container input[type="image"]');
    const titleEls = activeSection.querySelectorAll('.game-img-title');
    const dateEls = activeSection.querySelectorAll('.game-img-date');

    if (previewImg) {
      previewImg.src = img;
      previewImg.setAttribute('data-id', id);
      previewImg.setAttribute('data-title', title);
      previewImg.setAttribute('data-date', date);
      previewImg.setAttribute('data-img', img);
    }

    titleEls.forEach(el => el.textContent = title);
    dateEls.forEach(el => el.textContent = date);
  }

  function updateAdditionalInfo(extraData) {
    const fieldMap = {
      resolution: ['.fa-desktop', 'Resolution'],
      settings: ['.fa-sliders', 'Settings'],
      render: ['.fa-image', 'Render'],
      game: ['.fa-gamepad', 'Game'],
      server: ['.fa-server', 'Server'],
    };

    for (const key in fieldMap) {
      const [iconClass, labelText] = fieldMap[key];
      const value = extraData[key];

      document.querySelectorAll(iconClass).forEach(icon => {
        const parent = icon.parentElement;
        if (icon.nextSibling && icon.nextSibling.nodeType === 3) {
          icon.nextSibling.nodeValue = ` : ${value}`;
        } else {
          parent.appendChild(document.createTextNode(` : ${value}`));
        }
      });

      document.querySelectorAll('.d-none.d-lg-block').forEach(span => {
        if (span.textContent.trim().startsWith(labelText)) {
          span.textContent = `${labelText} : ${value}`;
        }
      });
    }
  }

  function populateModal(id, title, img) {
    const extraData = modalData[id];
    const dateModal = extraData?.date || '';

    if (!id || !title || !dateModal) return;

    if (modalImg) modalImg.src = img;
    modalTitleEls.forEach(el => el.textContent = title);

    modalDateEls.forEach((el, index) => {
      if (index === 0) {
        el.innerHTML = `<i class="fa-solid fa-calendar-days"></i> : ${dateModal}`;
      } else {
        el.textContent = dateModal;
      }
    });

    if (extraData) {
      modalInfoEls.forEach(el => el.textContent = extraData.info);
      modalInfo2Els.forEach(el => el.textContent = extraData.info2);

      modalModsContainers.forEach(container => {
        container.innerHTML = '';
        extraData.mods?.forEach(mod => {
          const div = document.createElement('div');
          div.textContent = mod;
          container.appendChild(div);
        });
      });

      updateAdditionalInfo(extraData);
    }
  }

  // ✅ Load default preview
  if (buttons.length > 0) {
    updatePreview(buttons[0]);
  }

  // ✅ Button click → update preview
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      updatePreview(button);
    });
  });

  // ✅ Preview image click → show modal with correct info
  document.querySelectorAll('.game-img-container input[type="image"]').forEach(img => {
    img.addEventListener('click', () => {
      if (currentPreviewData) {
        populateModal(currentPreviewData.id, currentPreviewData.title, currentPreviewData.img);
      }
    });
  });

  // ✅ Latest photo container click → open modal
  if (latestPhotoImg) {
    latestPhotoImg.addEventListener('click', () => {
      const id = latestPhotoImg.getAttribute('data-id');
      const title = latestPhotoImg.getAttribute('data-title');
      const img = latestPhotoImg.getAttribute('data-img') || latestPhotoImg.getAttribute('src');
      populateModal(id, title, img);
    });
  }

  // ✅ AUTO-LOAD FIRST IMAGE WHEN GAME SECTION BECOMES VISIBLE
  const allGameSections = document.querySelectorAll('[id^="game"]');

  const observer = new MutationObserver(() => {
    const visibleSection = Array.from(allGameSections).find(section =>
      !section.classList.contains('hidden') && section.offsetParent !== null
    );

    if (visibleSection) {
      const firstBtn = visibleSection.querySelector('.game-section-btn');
      if (firstBtn) {
        updatePreview(firstBtn);
      }
    }
  });

  allGameSections.forEach(section => {
    observer.observe(section, { attributes: true, attributeFilter: ['class'] });
  });
});

/**
 * Unimaginable Wedding Invitation — Interactive Gallery & Lightbox
 */

document.addEventListener('DOMContentLoaded', () => {
  // Category Filtering
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryItems = document.querySelectorAll('.gallery-item');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      galleryItems.forEach(item => {
        const cat = item.getAttribute('data-category');
        if (filter === 'all' || cat === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });

  // Lightbox Modal Functionality
  const lightbox = document.getElementById('gallery-lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const closeBtn = document.getElementById('lightbox-close');
  const prevBtn = document.getElementById('lightbox-prev');
  const nextBtn = document.getElementById('lightbox-next');

  if (!lightbox) return;

  let currentIndex = 0;
  const items = Array.from(galleryItems);

  function showImage(index) {
    if (index < 0) index = items.length - 1;
    if (index >= items.length) index = 0;
    currentIndex = index;

    const item = items[currentIndex];
    const imgSrc = item.getAttribute('data-src');
    const title = item.getAttribute('data-title');
    const caption = item.getAttribute('data-caption');

    lightboxImg.src = imgSrc;
    lightboxCaption.textContent = `${title} — ${caption}`;
  }

  items.forEach((item, index) => {
    item.addEventListener('click', () => {
      showImage(index);
      lightbox.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', () => lightbox.classList.remove('active'));
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showImage(currentIndex - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      showImage(currentIndex + 1);
    });
  }

  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
    }
  });

  // Keyboard navigation (Esc, Left, Right)
  window.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') lightbox.classList.remove('active');
    if (e.key === 'ArrowLeft') showImage(currentIndex - 1);
    if (e.key === 'ArrowRight') showImage(currentIndex + 1);
  });

  // Touch Swipe on Lightbox
  let touchStartX = 0;
  let touchEndX = 0;

  lightbox.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
  }, { passive: true });

  lightbox.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    if (touchStartX - touchEndX > 50) {
      showImage(currentIndex + 1); // Swipe left -> Next
    } else if (touchEndX - touchStartX > 50) {
      showImage(currentIndex - 1); // Swipe right -> Prev
    }
  }, { passive: true });
});

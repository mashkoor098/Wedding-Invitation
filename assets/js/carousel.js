/**
 * Islamic Royal Wedding — Aesthetic 3D Carousel & Gallery Slider
 * Features: Continuous auto-scrolling on page load without human touch, touch swipe,
 * smooth 3D depth, responsive dot indicators, and instant resumption after manual interaction.
 */

class RoyalWeddingCarousel {
  constructor(containerId = 'wedding-carousel') {
    this.container = document.getElementById(containerId);
    if (!this.container) return;

    this.stage = this.container.querySelector('.carousel-stage') || this.container;
    this.slides = Array.from(this.container.querySelectorAll('.carousel-slide'));
    this.prevBtn = document.getElementById('carousel-prev-btn') || this.container.querySelector('.carousel-prev');
    this.nextBtn = document.getElementById('carousel-next-btn') || this.container.querySelector('.carousel-next');
    this.dotsContainer = this.container.querySelector('.carousel-dots');

    this.currentIndex = 0;
    this.totalSlides = this.slides.length;
    this.autoPlayInterval = null;
    this.autoPlayDelay = 3200; // Auto-scroll interval (3.2 seconds)
    this.isDragging = false;
    this.startX = 0;

    this.init();
  }

  init() {
    if (this.totalSlides === 0) return;

    // Create Dot Indicators
    if (this.dotsContainer) {
      this.dotsContainer.innerHTML = '';
      this.slides.forEach((_, idx) => {
        const dot = document.createElement('button');
        dot.className = `carousel-dot ${idx === 0 ? 'active' : ''}`;
        dot.setAttribute('aria-label', `Go to slide ${idx + 1}`);
        dot.addEventListener('click', (e) => {
          e.stopPropagation();
          this.goToSlide(idx);
          this.resetAutoPlay();
        });
        this.dotsContainer.appendChild(dot);
      });
    }

    // Previous Button Listener (Left Arrow) -> moves to previous slide
    if (this.prevBtn) {
      this.prevBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.prevSlide();
        this.resetAutoPlay();
      });
    }

    // Next Button Listener (Right Arrow) -> moves to next slide
    if (this.nextBtn) {
      this.nextBtn.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        this.nextSlide();
        this.resetAutoPlay();
      });
    }

    // Touch & Swipe Support
    if (this.stage) {
      this.stage.addEventListener('touchstart', (e) => this.touchStart(e), { passive: true });
      this.stage.addEventListener('touchmove', (e) => this.touchMove(e), { passive: true });
      this.stage.addEventListener('touchend', () => this.touchEnd());

      // Click on inactive / side slide to bring it to center
      this.slides.forEach((slide, idx) => {
        slide.addEventListener('click', () => {
          if (idx !== this.currentIndex) {
            this.goToSlide(idx);
            this.resetAutoPlay();
          }
        });
      });
    }

    // Keyboard navigation when user is on the section
    window.addEventListener('keydown', (e) => {
      if (document.activeElement && this.container.contains(document.activeElement)) {
        if (e.key === 'ArrowLeft') {
          this.prevSlide();
          this.resetAutoPlay();
        } else if (e.key === 'ArrowRight') {
          this.nextSlide();
          this.resetAutoPlay();
        }
      }
    });

    // Handle tab visibility and window focus
    document.addEventListener('visibilitychange', () => {
      if (document.visibilityState === 'visible') {
        this.startAutoPlay();
      }
    });

    window.addEventListener('focus', () => {
      this.startAutoPlay();
    });

    // Initial render
    this.updateSlides();

    // Start auto-play immediately on load
    this.startAutoPlay();
  }

  updateSlides() {
    this.slides.forEach((slide, idx) => {
      slide.classList.remove('active', 'prev', 'next', 'hidden');
      if (idx === this.currentIndex) {
        slide.classList.add('active');
      } else if (idx === (this.currentIndex - 1 + this.totalSlides) % this.totalSlides) {
        slide.classList.add('prev');
      } else if (idx === (this.currentIndex + 1) % this.totalSlides) {
        slide.classList.add('next');
      } else {
        slide.classList.add('hidden');
      }
    });

    // Update Dots
    if (this.dotsContainer) {
      const dots = this.dotsContainer.querySelectorAll('.carousel-dot');
      dots.forEach((dot, idx) => {
        dot.classList.toggle('active', idx === this.currentIndex);
      });
    }
  }

  goToSlide(index) {
    this.currentIndex = (index + this.totalSlides) % this.totalSlides;
    this.updateSlides();
  }

  nextSlide() {
    this.goToSlide(this.currentIndex + 1);
  }

  prevSlide() {
    this.goToSlide(this.currentIndex - 1);
  }

  startAutoPlay() {
    this.stopAutoPlay();
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, this.autoPlayDelay);
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  touchStart(e) {
    this.isDragging = true;
    this.startX = e.touches[0].clientX;
  }

  touchMove(e) {
    if (!this.isDragging) return;
    const currentX = e.touches[0].clientX;
    const diff = currentX - this.startX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        this.prevSlide();
      } else {
        this.nextSlide();
      }
      this.isDragging = false;
      this.resetAutoPlay();
    }
  }

  touchEnd() {
    this.isDragging = false;
  }
}

// Auto-instantiate on DOM load
document.addEventListener('DOMContentLoaded', () => {
  window.weddingCarousel = new RoyalWeddingCarousel('wedding-carousel');
});

/**
 * Unimaginable Wedding Invitation — Cinematic Palace Entrance & Gate Experience
 */

document.addEventListener('DOMContentLoaded', () => {
  const entranceStage = document.getElementById('entrance-stage');
  const enterBtn = document.getElementById('btn-enter-wedding');
  const particlesContainer = document.getElementById('entrance-particles');

  // Spawn floating gold sparkles
  if (particlesContainer) {
    for (let i = 0; i < 30; i++) {
      const sparkle = document.createElement('div');
      sparkle.className = 'floating-sparkle';
      const size = Math.random() * 5 + 2;
      sparkle.style.width = size + 'px';
      sparkle.style.height = size + 'px';
      sparkle.style.left = (Math.random() * 100) + 'vw';
      sparkle.style.top = (Math.random() * 100) + 'vh';
      sparkle.style.animationDelay = (Math.random() * 5) + 's';
      sparkle.style.animationDuration = (Math.random() * 4 + 4) + 's';
      particlesContainer.appendChild(sparkle);
    }
  }

  // Handle Enter Button Click
  if (enterBtn && entranceStage) {
    enterBtn.addEventListener('click', () => {
      // 1. Trigger real background MP3 audio
      if (typeof window.playWeddingMusic === 'function') {
        window.playWeddingMusic();
      }

      // 2. Animate Gate Opening
      entranceStage.classList.add('gates-opening');

      // 3. Unlock Body Scroll
      document.body.classList.remove('entrance-active');

      // 4. Fade out entrance stage completely and re-initialize canvas
      setTimeout(() => {
        entranceStage.classList.add('opened');
        if (typeof showRoyalToast === 'function') {
          showRoyalToast(window.i18nDict?.door_open_toast || 'Parda utha to maloom hua, intezaar bhi kitna haseen hota hai ❤️');
        }
        if (typeof initAllScratchCards === 'function') {
          initAllScratchCards();
        }
        if (window.weddingCarousel && typeof window.weddingCarousel.startAutoPlay === 'function') {
          window.weddingCarousel.startAutoPlay();
        }
      }, 1800);
    });
  }
});

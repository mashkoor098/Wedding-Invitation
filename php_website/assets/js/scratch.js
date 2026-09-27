/**
 * Unimaginable Wedding Invitation — Canvas Scratch-To-Reveal Engine
 * High-performance, touch & mouse compatible, gold foil texture & sparkle burst
 */

class ScratchCard {
  constructor(options) {
    this.canvasId = options.canvasId;
    this.canvas = document.getElementById(options.canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d', { willReadFrequently: true });
    this.container = this.canvas.parentElement;
    this.brushRadius = options.brushRadius || 28;
    this.threshold = options.threshold || 38; // % scratched to auto-reveal
    this.onReveal = options.onReveal || null;
    
    this.isDrawing = false;
    this.isRevealed = false;
    this.lastPoint = null;
    this.scratchedPixels = 0;

    this.init();
  }

  init() {
    this.resize();
    this.drawFoil();
    this.bindEvents();
    
    window.addEventListener('resize', () => {
      if (!this.isRevealed) {
        this.resize();
        this.drawFoil();
      }
    });

    // Re-check size when entrance opens or user scrolls
    window.addEventListener('scroll', () => {
      if (!this.isRevealed && (this.canvas.width < 50 || this.canvas.height < 50)) {
        this.resize();
        this.drawFoil();
      }
    }, { passive: true, once: true });
  }

  resize() {
    if (!this.container) return;
    const rect = this.container.getBoundingClientRect();
    const w = Math.max(rect.width || this.container.clientWidth || 320, 200);
    const h = Math.max(rect.height || this.container.clientHeight || 240, 140);
    
    this.canvas.width = w;
    this.canvas.height = h;
  }

  drawFoil() {
    if (!this.ctx || this.isRevealed) return;
    const w = this.canvas.width;
    const h = this.canvas.height;
    if (w <= 0 || h <= 0) return;

    const ctx = this.ctx;

    // Rich Gold Foil Gradient Base
    const grad = ctx.createLinearGradient(0, 0, w, h);
    grad.addColorStop(0, '#BF953F');
    grad.addColorStop(0.25, '#FCF6BA');
    grad.addColorStop(0.5, '#B38728');
    grad.addColorStop(0.75, '#FBF5B7');
    grad.addColorStop(1, '#AA771C');

    ctx.globalCompositeOperation = 'source-over';
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);

    // Decorative Gold Filigree Border on Canvas
    ctx.strokeStyle = '#5E3E0C';
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, w - 20, h - 20);

    ctx.strokeStyle = '#FFF3B0';
    ctx.lineWidth = 1;
    ctx.setLineDash([4, 4]);
    ctx.strokeRect(15, 15, w - 30, h - 30);
    ctx.setLineDash([]);

    // Gold Shimmer Pattern Dots
    ctx.fillStyle = '#FFFFFF';
    for (let i = 0; i < 40; i++) {
      const x = Math.random() * w;
      const y = Math.random() * h;
      const r = Math.random() * 2 + 1;
      ctx.globalAlpha = Math.random() * 0.7 + 0.3;
      ctx.beginPath();
      ctx.arc(x, y, r, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.globalAlpha = 1.0;

    // Calligraphic instruction text on the foil
    ctx.fillStyle = '#2B140E';
    ctx.font = 'bold 15px "Montserrat", sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('✨ SCRATCH HERE ✨', w / 2, h / 2 - 10);
    
    ctx.font = '12px "Montserrat", sans-serif';
    ctx.fillStyle = '#4A2800';
    ctx.fillText('Rub with finger or mouse', w / 2, h / 2 + 16);
  }

  bindEvents() {
    // Pointer / Mouse events
    this.canvas.addEventListener('mousedown', (e) => this.startScratch(e));
    window.addEventListener('mousemove', (e) => this.scratch(e));
    window.addEventListener('mouseup', () => this.endScratch());

    // Touch events (smooth passive: false to prevent mobile window scrolling while scratching)
    this.canvas.addEventListener('touchstart', (e) => this.startScratch(e), { passive: false });
    window.addEventListener('touchmove', (e) => this.scratch(e), { passive: false });
    window.addEventListener('touchend', () => this.endScratch());
  }

  getPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    let clientX = e.clientX;
    let clientY = e.clientY;

    if (e.touches && e.touches.length > 0) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    }

    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  startScratch(e) {
    if (this.isRevealed) return;
    if (e.target === this.canvas) {
      if (e.cancelable) e.preventDefault();
      this.isDrawing = true;
      this.lastPoint = this.getPos(e);
      this.erasePoint(this.lastPoint.x, this.lastPoint.y);
    }
  }

  scratch(e) {
    if (!this.isDrawing || this.isRevealed) return;
    if (e.touches && e.cancelable) e.preventDefault();

    const currentPoint = this.getPos(e);
    this.eraseLine(this.lastPoint.x, this.lastPoint.y, currentPoint.x, currentPoint.y);
    this.lastPoint = currentPoint;
  }

  erasePoint(x, y) {
    if (!this.ctx || this.isRevealed) return;
    this.ctx.globalCompositeOperation = 'destination-out';
    this.ctx.beginPath();
    this.ctx.arc(x, y, this.brushRadius, 0, Math.PI * 2, false);
    this.ctx.fill();
    this.checkRevealProgress();
  }

  eraseLine(x1, y1, x2, y2) {
    if (!this.ctx || this.isRevealed) return;
    this.ctx.globalCompositeOperation = 'destination-out';
    this.ctx.lineWidth = this.brushRadius * 2;
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';
    this.ctx.beginPath();
    this.ctx.moveTo(x1, y1);
    this.ctx.lineTo(x2, y2);
    this.ctx.stroke();
    this.checkRevealProgress();
  }

  endScratch() {
    this.isDrawing = false;
  }

  checkRevealProgress() {
    if (this.isRevealed || !this.ctx) return;

    try {
      const w = this.canvas.width;
      const h = this.canvas.height;
      if (w <= 0 || h <= 0) return;

      const imgData = this.ctx.getImageData(0, 0, w, h);
      const pixels = imgData.data;
      let transparentCount = 0;
      const stride = 32; // check every 8th pixel for smooth 60fps performance
      const totalSampled = pixels.length / stride;

      for (let i = 3; i < pixels.length; i += stride) {
        if (pixels[i] === 0) {
          transparentCount++;
        }
      }

      const percentage = (transparentCount / totalSampled) * 100;

      if (percentage > this.threshold) {
        this.revealComplete();
      }
    } catch (err) {
      // In case of cross-origin or canvas security issue
      this.scratchedPixels++;
      if (this.scratchedPixels > 25) {
        this.revealComplete();
      }
    }
  }

  revealComplete() {
    if (this.isRevealed) return;
    this.isRevealed = true;
    this.isDrawing = false;
    this.canvas.classList.add('completed');
    
    // Trigger Sparkle Particle Burst
    createSparkleBurst(this.container);

    if (typeof this.onReveal === 'function') {
      this.onReveal();
    }
  }

  forceReveal() {
    this.revealComplete();
  }
}

// Sparkle Burst Particle Effect
function createSparkleBurst(container) {
  if (!container) return;
  const rect = container.getBoundingClientRect();
  for (let i = 0; i < 24; i++) {
    const sparkle = document.createElement('div');
    sparkle.className = 'floating-sparkle';
    sparkle.style.width = (Math.random() * 6 + 4) + 'px';
    sparkle.style.height = sparkle.style.width;
    sparkle.style.left = (Math.random() * (rect.width || 300)) + 'px';
    sparkle.style.top = (Math.random() * (rect.height || 200)) + 'px';
    sparkle.style.animation = `floatSparkle ${Math.random() * 1.5 + 0.8}s ease-out forwards`;
    container.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 2500);
  }
}

// Global initialization for all scratch cards on page
function initAllScratchCards() {
  window.scratchCards = window.scratchCards || {};

  // 1. Bride Name Scratch Card
  if (document.getElementById('canvas-scratch-bride') && !window.scratchCards['bride']) {
    window.scratchCards['bride'] = new ScratchCard({
      canvasId: 'canvas-scratch-bride',
      brushRadius: 28,
      threshold: 35,
      onReveal: () => {
        showRoyalToast(window.i18nDict?.scratch_revealed_toast || 'Kuch naam sirf pukaare nahi jaate, dil mein mohabbat se basaaye jaate hain ❤️');
      }
    });
  }

  // 2. Groom Name Scratch Card
  if (document.getElementById('canvas-scratch-groom') && !window.scratchCards['groom']) {
    window.scratchCards['groom'] = new ScratchCard({
      canvasId: 'canvas-scratch-groom',
      brushRadius: 28,
      threshold: 35,
      onReveal: () => {
        showRoyalToast(window.i18nDict?.scratch_revealed_toast || 'Kuch naam sirf pukaare nahi jaate, dil mein mohabbat se basaaye jaate hain ❤️');
      }
    });
  }

  // 3. Wedding Date Scratch Card
  if (document.getElementById('canvas-scratch-date') && !window.scratchCards['date']) {
    window.scratchCards['date'] = new ScratchCard({
      canvasId: 'canvas-scratch-date',
      brushRadius: 32,
      threshold: 35,
      onReveal: () => {
        showRoyalToast(window.i18nDict?.scratch_date_subtitle || 'Kuch tareekhein calendar mein nahi hoteen, woh seedha dil mein likhi jaati hain 🪔');
      }
    });
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initAllScratchCards();

  // Re-draw when entrance button is clicked
  const enterBtn = document.getElementById('btn-enter-wedding');
  if (enterBtn) {
    enterBtn.addEventListener('click', () => {
      setTimeout(() => {
        Object.values(window.scratchCards).forEach(card => {
          if (!card.isRevealed) {
            card.resize();
            card.drawFoil();
          }
        });
      }, 500);
    });
  }
});

// Toast notification helper
function showRoyalToast(message) {
  let toast = document.getElementById('royal-toast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'royal-toast';
    toast.className = 'royal-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3500);
}

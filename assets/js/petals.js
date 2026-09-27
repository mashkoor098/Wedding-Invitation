/**
 * Islamic Royal Wedding — Floating Jasmine & Rose Petals Animation Engine
 * Ultra-smooth, elegant, and romantic ambient celebration atmosphere
 */

class RoyalPetalsEngine {
  constructor() {
    this.canvas = document.createElement('canvas');
    this.canvas.id = 'petals-canvas';
    this.canvas.style.position = 'fixed';
    this.canvas.style.top = '0';
    this.canvas.style.left = '0';
    this.canvas.style.width = '100vw';
    this.canvas.style.height = '100vh';
    this.canvas.style.pointerEvents = 'none';
    this.canvas.style.zIndex = '4';
    this.ctx = this.canvas.getContext('2d');
    
    this.petals = [];
    this.maxPetals = 26; // lightweight performance
    this.mouse = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    this.init();
  }

  init() {
    document.body.appendChild(this.canvas);
    this.resize();

    window.addEventListener('resize', () => this.resize());
    window.addEventListener('mousemove', (e) => {
      this.mouse.x = e.clientX;
      this.mouse.y = e.clientY;
    }, { passive: true });

    // Initialize Petals
    for (let i = 0; i < this.maxPetals; i++) {
      this.petals.push(this.createPetal(true));
    }

    this.animate();
  }

  resize() {
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
  }

  createPetal(randomY = false) {
    const isRose = Math.random() > 0.4;
    return {
      x: Math.random() * this.canvas.width,
      y: randomY ? Math.random() * this.canvas.height : -20,
      size: Math.random() * 8 + 10,
      speedY: Math.random() * 1.2 + 0.8,
      speedX: Math.random() * 0.8 - 0.4,
      rotation: Math.random() * 360,
      rotSpeed: (Math.random() - 0.5) * 2,
      opacity: Math.random() * 0.5 + 0.35,
      isRose: isRose,
      sway: Math.random() * Math.PI * 2,
      swaySpeed: Math.random() * 0.02 + 0.01
    };
  }

  drawPetal(p) {
    this.ctx.save();
    this.ctx.translate(p.x, p.y);
    this.ctx.rotate((p.rotation * Math.PI) / 180);
    this.ctx.globalAlpha = p.opacity;

    // Organic Petal Shape
    this.ctx.beginPath();
    this.ctx.moveTo(0, 0);
    this.ctx.bezierCurveTo(-p.size / 2, -p.size / 2, -p.size / 2, p.size / 2, 0, p.size);
    this.ctx.bezierCurveTo(p.size / 2, p.size / 2, p.size / 2, -p.size / 2, 0, 0);

    if (p.isRose) {
      // Royal Crimson / Velvet Rose
      const grad = this.ctx.createLinearGradient(-p.size / 2, -p.size / 2, p.size / 2, p.size / 2);
      grad.addColorStop(0, '#C0392B');
      grad.addColorStop(0.6, '#8E1728');
      grad.addColorStop(1, '#58111A');
      this.ctx.fillStyle = grad;
    } else {
      // Ivory Jasmine Petal with soft gold tip
      const grad = this.ctx.createLinearGradient(-p.size / 2, -p.size / 2, p.size / 2, p.size / 2);
      grad.addColorStop(0, '#FFFDF8');
      grad.addColorStop(0.7, '#F7E7CE');
      grad.addColorStop(1, '#D4AF37');
      this.ctx.fillStyle = grad;
    }

    this.ctx.fill();
    this.ctx.restore();
  }

  animate() {
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    for (let i = 0; i < this.petals.length; i++) {
      const p = this.petals[i];
      p.sway += p.swaySpeed;
      p.x += Math.sin(p.sway) * 0.8 + p.speedX;
      p.y += p.speedY;
      p.rotation += p.rotSpeed;

      this.drawPetal(p);

      // Reset when out of viewport
      if (p.y > this.canvas.height + 20 || p.x < -30 || p.x > this.canvas.width + 30) {
        this.petals[i] = this.createPetal(false);
      }
    }

    requestAnimationFrame(() => this.animate());
  }
}

document.addEventListener('DOMContentLoaded', () => {
  // Start ambient petals
  if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    window.petalsEngine = new RoyalPetalsEngine();
  }
});

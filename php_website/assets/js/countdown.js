/**
 * Unimaginable Wedding Invitation — Real-Time Wedding Countdown Timer
 */

function initWeddingCountdown(targetDateStr) {
  const daysEl = document.getElementById('count-days');
  const hoursEl = document.getElementById('count-hours');
  const minutesEl = document.getElementById('count-minutes');
  const secondsEl = document.getElementById('count-seconds');
  const finishedEl = document.getElementById('countdown-finished');
  const gridEl = document.getElementById('countdown-grid');

  if (!daysEl || !hoursEl || !minutesEl || !secondsEl) return;

  const targetTime = new Date(targetDateStr).getTime();

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = targetTime - now;

    if (distance < 0) {
      if (gridEl) gridEl.style.display = 'none';
      if (finishedEl) finishedEl.style.display = 'block';
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    daysEl.textContent = String(days).padStart(2, '0');
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

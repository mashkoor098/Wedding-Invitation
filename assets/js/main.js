// Master Wedding Music Controller (Plays real music.mp3 file directly)
window.playWeddingMusic = function() {
  const audioEl = document.getElementById('wedding-audio');
  const audioText = document.getElementById('audio-status-text');
  
  if (!audioEl) return;

  // Ensure volume is comfortable
  audioEl.volume = 0.8;
  
  const playPromise = audioEl.play();
  if (playPromise !== undefined) {
    playPromise.then(() => {
      document.body.classList.add('audio-playing');
      if (audioText) {
        audioText.textContent = window.i18nDict?.music_playing || 'Music Playing';
      }
    }).catch(err => {
      console.log('Audio autoplay prevented or user gesture required:', err);
    });
  }
};

window.stopWeddingMusic = function() {
  const audioEl = document.getElementById('wedding-audio');
  const audioText = document.getElementById('audio-status-text');
  
  if (audioEl) {
    audioEl.pause();
  }
  document.body.classList.remove('audio-playing');
  if (audioText) {
    audioText.textContent = window.i18nDict?.music_muted || 'Music On';
  }
};

document.addEventListener('DOMContentLoaded', () => {
  // 1. Sticky & Scrolled Navbar
  const navbar = document.querySelector('.royal-navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar?.classList.add('scrolled');
    } else {
      navbar?.classList.remove('scrolled');
    }
  });

  // 2. Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-nav-toggle');
  const navLinks = document.getElementById('nav-links');

  if (mobileToggle && navLinks) {
    const iconHam = mobileToggle.querySelector('.icon-hamburger');
    const iconClose = mobileToggle.querySelector('.icon-close');

    mobileToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = navLinks.classList.toggle('mobile-open');
      if (iconHam && iconClose) {
        iconHam.style.display = isOpen ? 'none' : 'block';
        iconClose.style.display = isOpen ? 'block' : 'none';
      }
    });

    // Close mobile menu on link click
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('mobile-open');
        if (iconHam && iconClose) {
          iconHam.style.display = 'block';
          iconClose.style.display = 'none';
        }
      });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navLinks.contains(e.target) && !mobileToggle.contains(e.target)) {
        navLinks.classList.remove('mobile-open');
        if (iconHam && iconClose) {
          iconHam.style.display = 'block';
          iconClose.style.display = 'none';
        }
      }
    });
  }

  // 3. Audio Toggle Controller
  const audioBtn = document.getElementById('btn-audio-toggle');
  const audioEl = document.getElementById('wedding-audio');

  if (audioBtn) {
    audioBtn.addEventListener('click', () => {
      if (document.body.classList.contains('audio-playing')) {
        window.stopWeddingMusic();
      } else {
        window.playWeddingMusic();
      }
    });
  }

  // Listen to audio element events for state synchronization
  if (audioEl) {
    audioEl.addEventListener('play', () => {
      document.body.classList.add('audio-playing');
      const audioText = document.getElementById('audio-status-text');
      if (audioText) audioText.textContent = window.i18nDict?.music_playing || 'Music Playing';
    });
    audioEl.addEventListener('pause', () => {
      document.body.classList.remove('audio-playing');
      const audioText = document.getElementById('audio-status-text');
      if (audioText) audioText.textContent = window.i18nDict?.music_muted || 'Music On';
    });
  }

  // 4. Web Share API & Copy Link
  const shareBtnNative = document.getElementById('btn-share-native');
  const copyBtn = document.getElementById('btn-copy-link');

  if (shareBtnNative) {
    shareBtnNative.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: document.title,
            text: window.i18nDict?.hero_tagline || "You're invited to celebrate our wedding!",
            url: window.location.href,
          });
        } catch (err) {
          if (err.name !== 'AbortError') {
            console.warn('Share error:', err);
          }
        }
      } else {
        copyWeddingLink();
      }
    });
  }

  if (copyBtn) {
    copyBtn.addEventListener('click', () => {
      copyWeddingLink();
    });
  }

  function copyWeddingLink() {
    const urlToCopy = window.location.href;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(urlToCopy).then(() => {
        showRoyalToast(window.i18nDict?.link_copied_toast || 'Invitation link copied to clipboard! ✨');
      }).catch(() => {
        fallbackCopy(urlToCopy);
      });
    } else {
      fallbackCopy(urlToCopy);
    }
  }

  function fallbackCopy(text) {
    const temp = document.createElement('input');
    temp.value = text;
    document.body.appendChild(temp);
    temp.select();
    document.execCommand('copy');
    document.body.removeChild(temp);
    showRoyalToast(window.i18nDict?.link_copied_toast || 'Invitation link copied! ✨');
  }
});

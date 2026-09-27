/**
 * Islamic Royal Wedding — Cinematic Video Controller
 * Synchronizes video playback, background ambient audio muting, and custom controls
 */

document.addEventListener('DOMContentLoaded', () => {
  const video = document.getElementById('royal-wedding-video');
  const videoFrame = document.getElementById('royal-video-frame');
  const overlayPlay = document.getElementById('video-overlay-play');
  const playPauseBtn = document.getElementById('btn-video-playpause');
  const muteBtn = document.getElementById('btn-video-mute');
  const fullscreenBtn = document.getElementById('btn-video-fullscreen');
  const progressBar = document.getElementById('video-progress-bar');
  const progressFill = document.getElementById('video-progress-fill');
  const ambientAudio = document.getElementById('wedding-audio');

  if (!video) return;

  // Always keep muted as requested (user background music takes precedence)
  video.muted = true;

  function togglePlay(e) {
    if (e && e.target && (e.target.closest('#video-custom-controls') || e.target.closest('.video-ctrl-btn') || e.target.closest('.video-progress-bar'))) {
      return; // Do not toggle if clicking specific bottom control buttons
    }

    if (video.paused || video.ended) {
      video.muted = true;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.then(() => {
          if (overlayPlay) overlayPlay.classList.add('playing');
          if (playPauseBtn) playPauseBtn.textContent = '❚❚';
        }).catch(err => {
          console.warn('Direct video play failed, reloading and retrying muted:', err);
          video.load();
          video.muted = true;
          video.play().then(() => {
            if (overlayPlay) overlayPlay.classList.add('playing');
            if (playPauseBtn) playPauseBtn.textContent = '❚❚';
          }).catch(e2 => console.error('Retry error:', e2));
        });
      }
    } else {
      video.pause();
      if (overlayPlay) overlayPlay.classList.remove('playing');
      if (playPauseBtn) playPauseBtn.textContent = '▶';
    }
  }

  if (overlayPlay) {
    overlayPlay.addEventListener('click', togglePlay);
  }

  if (playPauseBtn) {
    playPauseBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      togglePlay();
    });
  }

  video.addEventListener('click', togglePlay);

  video.addEventListener('play', () => {
    if (overlayPlay) overlayPlay.classList.add('playing');
    if (playPauseBtn) playPauseBtn.textContent = '❚❚';
  });

  video.addEventListener('pause', () => {
    if (overlayPlay) overlayPlay.classList.remove('playing');
    if (playPauseBtn) playPauseBtn.textContent = '▶';
  });

  video.addEventListener('ended', () => {
    if (overlayPlay) overlayPlay.classList.remove('playing');
    if (playPauseBtn) playPauseBtn.textContent = '▶';
  });

  // Timeline Progress
  video.addEventListener('timeupdate', () => {
    if (video.duration && progressFill) {
      const pct = (video.currentTime / video.duration) * 100;
      progressFill.style.width = `${pct}%`;
    }
  });

  if (progressBar) {
    progressBar.addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = progressBar.getBoundingClientRect();
      const pos = (e.clientX - rect.left) / rect.width;
      if (video.duration) {
        video.currentTime = pos * video.duration;
      }
    });
  }

  // Mute / Unmute
  if (muteBtn) {
    muteBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      video.muted = !video.muted;
      muteBtn.textContent = video.muted ? '🔇' : '🔊';
      // If user explicitly unmuted video and background ambient audio is playing, pause ambient
      if (!video.muted && ambientAudio && !ambientAudio.paused) {
        ambientAudio.pause();
        document.body.classList.remove('audio-playing');
      }
    });
  }

  // Fullscreen
  if (fullscreenBtn) {
    fullscreenBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const frame = document.getElementById('royal-video-frame');
      if (!document.fullscreenElement) {
        if (frame && frame.requestFullscreen) {
          frame.requestFullscreen();
        } else if (video.webkitEnterFullscreen) {
          video.webkitEnterFullscreen();
        }
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    });
  }
});

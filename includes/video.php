<!-- Dedicated Royal Cinematic Wedding Video Section -->
<section id="video-section" class="section-wrapper video-section">
    <div class="container">
        <div class="section-header">
            <span class="section-badge" data-i18n="video_section_badge"><?= e(__('video_section_badge') ?? 'Cinematic Film') ?></span>
            <h2 class="section-title gold-gradient-text" data-i18n="video_section_title"><?= e(__('video_section_title') ?? 'Faizan & Ariba — Invitation Film') ?></h2>
            <p class="section-subtitle" data-i18n="video_section_subtitle"><?= e(__('video_section_subtitle') ?? 'Ek khoobsurat daastaan-e-ishq aur shahi tehzeeb ka manzar') ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <div class="royal-video-wrapper">
            <div class="royal-video-frame" id="royal-video-frame">
                <video id="royal-wedding-video" class="royal-video-element" muted playsinline loop preload="metadata" poster="assets/images/img4.jpg">
                    <source src="assets/videos/video1.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>

                <!-- Custom Overlay Play Button -->
                <div class="video-overlay-play" id="video-overlay-play" role="button" aria-label="Play Wedding Film">
                    <div class="play-pulse-ring"></div>
                    <div class="play-btn-circle">
                        <span class="play-icon">▶</span>
                    </div>
                    <span class="play-text" data-i18n="video_play_prompt">Play Wedding Film / Video Dekhein</span>
                </div>

                <!-- Custom Floating Video Controls Bar -->
                <div class="video-custom-controls" id="video-custom-controls">
                    <button type="button" id="btn-video-playpause" class="video-ctrl-btn" aria-label="Play/Pause">❚❚</button>
                    <div class="video-progress-bar" id="video-progress-bar">
                        <div class="video-progress-fill" id="video-progress-fill"></div>
                    </div>
                    <button type="button" id="btn-video-mute" class="video-ctrl-btn" aria-label="Mute/Unmute">🔇</button>
                    <button type="button" id="btn-video-fullscreen" class="video-ctrl-btn" aria-label="Fullscreen">⛶</button>
                </div>
            </div>

            <!-- Video Bottom Blessing Banner -->
            <div class="video-footer-quote">
                <p class="video-quote-text" data-i18n="video_quote">“Do Dilon Ka Milan, Khushiyon Ka Jashn, Aur Allah Ki Rehmat”</p>
                <span class="video-quote-author gold-gradient-text" data-i18n="video_quote_author">Faizan &amp; Ariba • 18 Jan 2027</span>
            </div>
        </div>
    </div>
</section>

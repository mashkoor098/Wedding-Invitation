<section id="scratch-section" class="section-wrapper scratch-section" aria-label="Scratch to Reveal">
    <!-- Inline SVG Definitions for Heart Clip Path & Gold Stroke (Matching organic heart) -->
    <svg width="0" height="0" style="position: absolute; width: 0; height: 0; overflow: hidden;" aria-hidden="true">
        <defs>
            <clipPath id="heart-clip" clipPathUnits="objectBoundingBox">
                <path d="M 0.50, 0.208 C 0.42, 0.11, 0.32, 0.088, 0.21, 0.115 C 0.08, 0.155, 0.058, 0.26, 0.058, 0.35 C 0.058, 0.54, 0.24, 0.72, 0.50, 0.91 C 0.76, 0.72, 0.942, 0.54, 0.942, 0.35 C 0.942, 0.26, 0.92, 0.155, 0.79, 0.115 C 0.68, 0.088, 0.58, 0.11, 0.50, 0.208 Z" />
            </clipPath>
            <linearGradient id="goldHeartStroke" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#FFECA8" />
                <stop offset="50%" stop-color="#D4AF37" />
                <stop offset="100%" stop-color="#8C6D23" />
            </linearGradient>
        </defs>
    </svg>

    <div class="container">
        <!-- Section Header -->
        <div class="section-header">
            <span class="section-badge"><?= e(t('scratch_names_title')) ?></span>
            <h2 class="section-title gold-gradient-text"><?= e(t('scratch_names_title')) ?></h2>
            <p class="section-subtitle"><?= e(t('scratch_names_subtitle')) ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <!-- Two Royal Card Scratch Boxes for Bride & Groom -->
        <div class="scratch-names-grid">
            <!-- 1. The Bride Heart Card -->
            <div class="scratch-card-box heart-card-box">
                <div class="scratch-card-header">
                    <span class="section-badge"><?= e(t('scratch_bride_label')) ?></span>
                </div>
                
                <div class="heart-scratch-wrapper">
                    <div class="heart-scratch-container" id="container-scratch-bride">
                        <div class="scratch-revealed-content heart-revealed-content">
                            <img src="<?= e($config['bride']['image']) ?>" alt="Bride" class="scratch-revealed-avatar">
                            <h3 class="scratch-revealed-name gold-gradient-text"><?= e($config['bride']['full_name']) ?></h3>
                        </div>
                        <canvas id="canvas-scratch-bride" class="scratch-canvas"></canvas>
                    </div>
                    <!-- Heart Filigree Border -->
                    <svg class="heart-svg-border" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 50, 20.8 C 42, 11, 32, 8.8, 21, 11.5 C 8, 15.5, 5.8, 26, 5.8, 35 C 5.8, 54, 24, 72, 50, 91 C 76, 72, 94.2, 54, 94.2, 35 C 94.2, 26, 92, 15.5, 79, 11.5 C 68, 8.8, 58, 11, 50, 20.8 Z" fill="none" stroke="url(#goldHeartStroke)" stroke-width="2.8" />
                    </svg>
                </div>

                <div class="scratch-footer-actions">
                    <span class="scratch-hint"><?= e(t('scratch_card_instruction')) ?></span>
                    <button type="button" class="scratch-tap-btn" onclick="window.scratchCards?.['bride']?.forceReveal()">
                        <?= e(t('scratch_tap_fallback')) ?>
                    </button>
                </div>
            </div>

            <!-- 2. The Groom Heart Card -->
            <div class="scratch-card-box heart-card-box">
                <div class="scratch-card-header">
                    <span class="section-badge"><?= e(t('scratch_groom_label')) ?></span>
                </div>
                
                <div class="heart-scratch-wrapper">
                    <div class="heart-scratch-container" id="container-scratch-groom">
                        <div class="scratch-revealed-content heart-revealed-content">
                            <img src="<?= e($config['groom']['image']) ?>" alt="Groom" class="scratch-revealed-avatar">
                            <h3 class="scratch-revealed-name gold-gradient-text"><?= e($config['groom']['full_name']) ?></h3>
                        </div>
                        <canvas id="canvas-scratch-groom" class="scratch-canvas"></canvas>
                    </div>
                    <!-- Heart Filigree Border -->
                    <svg class="heart-svg-border" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <path d="M 50, 20.8 C 42, 11, 32, 8.8, 21, 11.5 C 8, 15.5, 5.8, 26, 5.8, 35 C 5.8, 54, 24, 72, 50, 91 C 76, 72, 94.2, 54, 94.2, 35 C 94.2, 26, 92, 15.5, 79, 11.5 C 68, 8.8, 58, 11, 50, 20.8 Z" fill="none" stroke="url(#goldHeartStroke)" stroke-width="2.8" />
                    </svg>
                </div>

                <div class="scratch-footer-actions">
                    <span class="scratch-hint"><?= e(t('scratch_card_instruction')) ?></span>
                    <button type="button" class="scratch-tap-btn" onclick="window.scratchCards?.['groom']?.forceReveal()">
                        <?= e(t('scratch_tap_fallback')) ?>
                    </button>
                </div>
            </div>
        </div>

        <!-- 3. Scratch to Reveal Auspicious Wedding Date -->
        <div class="scratch-date-wrapper">
            <div class="scratch-card-box">
                <div class="scratch-card-header">
                    <span class="section-badge">⚜️ <?= e(t('scratch_date_title')) ?></span>
                    <p style="font-size: 0.95rem; color: var(--ivory-muted); margin-top: 6px;"><?= e(t('scratch_date_subtitle')) ?></p>
                </div>

                <div class="scratch-canvas-container scratch-date-container" id="container-scratch-date">
                    <div class="scratch-revealed-content">
                        <h3 class="scratch-date-revealed-title gold-gradient-text"><?= e(t('scratch_date_revealed_heading')) ?></h3>
                        <p class="scratch-revealed-sub"><?= e(t('scratch_date_revealed_sub')) ?></p>
                    </div>
                    <canvas id="canvas-scratch-date" class="scratch-canvas"></canvas>
                </div>

                <div class="scratch-footer-actions">
                    <span class="scratch-hint"><?= e(t('scratch_date_hint')) ?></span>
                    <button type="button" class="scratch-tap-btn" onclick="window.scratchCards?.['date']?.forceReveal()">
                        <?= e(t('scratch_tap_fallback')) ?>
                    </button>
                </div>
            </div>
        </div>
    </div>
</section>

<section id="countdown-section" class="section-wrapper" aria-label="Wedding Countdown">
    <div class="container">
        <div class="section-header">
            <span class="section-badge"><?= e(t('countdown_title')) ?></span>
            <h2 class="section-title gold-gradient-text"><?= e(t('countdown_title')) ?></h2>
            <p class="section-subtitle"><?= e(t('countdown_subtitle')) ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <div class="countdown-grid" id="countdown-grid">
            <!-- Days -->
            <div class="countdown-card">
                <div class="countdown-digit gold-gradient-text" id="count-days">00</div>
                <div class="countdown-label"><?= e(t('days')) ?></div>
            </div>

            <!-- Hours -->
            <div class="countdown-card">
                <div class="countdown-digit gold-gradient-text" id="count-hours">00</div>
                <div class="countdown-label"><?= e(t('hours')) ?></div>
            </div>

            <!-- Minutes -->
            <div class="countdown-card">
                <div class="countdown-digit gold-gradient-text" id="count-minutes">00</div>
                <div class="countdown-label"><?= e(t('minutes')) ?></div>
            </div>

            <!-- Seconds -->
            <div class="countdown-card">
                <div class="countdown-digit gold-gradient-text" id="count-seconds">00</div>
                <div class="countdown-label"><?= e(t('seconds')) ?></div>
            </div>
        </div>

        <!-- Finished Message (hidden until date passes) -->
        <div id="countdown-finished" style="display: none; text-align: center; margin-top: 30px;">
            <p class="font-editorial gold-gradient-text" style="font-size: 1.8rem;">
                <?= e(t('countdown_completed')) ?>
            </p>
        </div>
    </div>
</section>

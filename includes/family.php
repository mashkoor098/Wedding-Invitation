<section id="family-section" class="section-wrapper" aria-label="Family Blessings">
    <div class="container">
        <div class="section-header">
            <span class="section-badge"><?= e(t('family_section_title')) ?></span>
            <h2 class="section-title gold-gradient-text"><?= e(t('family_section_title')) ?></h2>
            <p class="section-subtitle"><?= e(t('family_section_subtitle')) ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <div class="family-grid">
            <!-- Bride's Family -->
            <div class="family-card">
                <span class="section-badge"><?= e(t('bride_side_title')) ?></span>
                <h3 class="family-side-title gold-gradient-text"><?= e($config['families']['bride']['parents']) ?></h3>
                <p class="family-quote"><?= e($config['families']['bride']['quote']) ?></p>
            </div>

            <!-- Groom's Family -->
            <div class="family-card">
                <span class="section-badge"><?= e(t('groom_side_title')) ?></span>
                <h3 class="family-side-title gold-gradient-text"><?= e($config['families']['groom']['parents']) ?></h3>
                <p class="family-quote"><?= e($config['families']['groom']['quote']) ?></p>
            </div>
        </div>
    </div>
</section>

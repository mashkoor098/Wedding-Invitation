<section id="hero" class="hero-section" aria-label="Hero Introduction">
    <div class="hero-arch-bg"></div>

    <div class="hero-content">
        <!-- Bismillah -->
        <p class="bismillah-header">بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</p>
        
        <!-- Quranic Verse -->
        <p class="quran-verse">
            <?= e(t('hero_quran_verse')) ?>
        </p>
        
        <p class="section-badge"><?= e(t('hero_getting_married')) ?></p>
        
        <h1 class="hero-couple-names gold-gradient-text gold-glow">
            <?= e($config['groom']['first_name']) ?> &amp; <?= e($config['bride']['first_name']) ?>
        </h1>

        <p class="hero-wedding-date">
            <?= e(t('hero_date_location')) ?>
        </p>

        <div class="hero-cta-group">
            <a href="#rsvp-section" class="btn-royal-primary">
                <span>💌</span>
                <span><?= e(t('hero_btn_rsvp')) ?></span>
            </a>
            <a href="#events-section" class="btn-royal-outline">
                <span>🪔</span>
                <span><?= e(t('hero_btn_events')) ?></span>
            </a>
        </div>

        <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
    </div>
</section>

<section id="couple-section" class="section-wrapper" aria-label="The Royal Couple">
    <div class="container">
        <div class="section-header">
            <span class="section-badge"><?= e(t('couple_section_title')) ?></span>
            <h2 class="section-title gold-gradient-text"><?= e(t('couple_section_title')) ?></h2>
            <p class="section-subtitle"><?= e(t('couple_section_subtitle')) ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <div class="couple-grid">
            <!-- The Groom -->
            <div class="couple-card">
                <div class="couple-photo-wrapper">
                    <img src="<?= e($config['groom']['image']) ?>" alt="<?= e($config['groom']['full_name']) ?>" class="couple-photo">
                </div>
                <span class="section-badge" style="margin-bottom: 8px;"><?= e(t('meet_groom')) ?></span>
                <h3 class="couple-name gold-gradient-text"><?= e($config['groom']['full_name']) ?></h3>
                <p class="couple-parents"><?= e($config['groom']['parents']) ?></p>
                <p class="couple-bio"><?= e($config['groom']['bio']) ?></p>
            </div>

            <!-- The Bride -->
            <div class="couple-card">
                <div class="couple-photo-wrapper">
                    <img src="<?= e($config['bride']['image']) ?>" alt="<?= e($config['bride']['full_name']) ?>" class="couple-photo">
                </div>
                <span class="section-badge" style="margin-bottom: 8px;"><?= e(t('meet_bride')) ?></span>
                <h3 class="couple-name gold-gradient-text"><?= e($config['bride']['full_name']) ?></h3>
                <p class="couple-parents"><?= e($config['bride']['parents']) ?></p>
                <p class="couple-bio"><?= e($config['bride']['bio']) ?></p>
            </div>
        </div>
    </div>
</section>

<section id="story-section" class="section-wrapper" aria-label="Our Love Story">
    <div class="container">
        <div class="section-header">
            <span class="section-badge"><?= e(t('story_section_title')) ?></span>
            <h2 class="section-title gold-gradient-text"><?= e(t('story_section_title')) ?></h2>
            <p class="section-subtitle"><?= e(t('story_section_subtitle')) ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <div class="timeline-wrapper">
            <div class="timeline-line"></div>

            <?php foreach ($config['story_milestones'] as $index => $milestone): ?>
            <div class="timeline-item">
                <div class="timeline-marker"></div>
                <div class="timeline-content">
                    <span class="timeline-year"><?= e($milestone['year']) ?></span>
                    <p class="timeline-season"><?= e($milestone['season']) ?></p>
                    
                    <img src="<?= e($milestone['image']) ?>" alt="<?= e(t($milestone['title_key'], $milestone['default_title'])) ?>" class="timeline-image">
                    
                    <h3 class="timeline-title gold-gradient-text"><?= e(t($milestone['title_key'], $milestone['default_title'])) ?></h3>
                    <p class="timeline-desc"><?= e(t($milestone['desc_key'], $milestone['default_desc'])) ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

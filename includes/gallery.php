<section id="gallery-section" class="section-wrapper" aria-label="Photo Gallery">
    <div class="container">
        <div class="section-header">
            <span class="section-badge"><?= e(t('gallery_section_title')) ?></span>
            <h2 class="section-title gold-gradient-text"><?= e(t('gallery_section_title')) ?></h2>
            <p class="section-subtitle"><?= e(t('gallery_section_subtitle')) ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <div class="gallery-grid">
            <?php foreach ($config['gallery'] as $index => $item): ?>
            <div class="gallery-item" data-src="<?= e($item['src']) ?>" data-title="<?= e($item['title']) ?>" data-caption="<?= e($item['caption']) ?>">
                <img src="<?= e($item['src']) ?>" alt="<?= e($item['title']) ?>" class="gallery-img" loading="lazy">
                <div class="gallery-overlay">
                    <h3 class="font-serif gold-gradient-text" style="font-size: 1.2rem;"><?= e($item['title']) ?></h3>
                    <p style="font-size: 0.9rem; color: var(--ivory-muted);"><?= e($item['caption']) ?></p>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

<!-- Lightbox Modal -->
<div id="gallery-lightbox" role="dialog" aria-modal="true" aria-label="Photo Lightbox">
    <button class="lightbox-close" id="lightbox-close" aria-label="Close Lightbox">✕</button>
    <button class="lightbox-btn lightbox-prev" id="lightbox-prev" aria-label="Previous Image">❮</button>
    <button class="lightbox-btn lightbox-next" id="lightbox-next" aria-label="Next Image">❯</button>
    <div class="lightbox-content">
        <img src="" alt="Zoomed Photo" id="lightbox-img" class="lightbox-img">
        <p id="lightbox-caption" class="lightbox-caption-text"></p>
    </div>
</div>

<section id="venue-section" class="section-wrapper" aria-label="Wedding Venue & Location">
    <div class="container">
        <div class="section-header">
            <span class="section-badge"><?= e(t('venue_section_title')) ?></span>
            <h2 class="section-title gold-gradient-text"><?= e(t('venue_section_title')) ?></h2>
            <p class="section-subtitle"><?= e(t('venue_section_subtitle')) ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <div class="venue-card">
            <!-- Left Info -->
            <div class="venue-details">
                <span class="section-badge">📍 Royal Destination</span>
                <h3 class="venue-title gold-gradient-text"><?= e($config['venue']['name']) ?></h3>
                <p class="venue-address"><?= e($config['venue']['address']) ?></p>

                <ul class="venue-transit-info">
                    <li>✈️ <strong>Airport:</strong> <?= e(t('airport_info')) ?></li>
                    <li>🚆 <strong>Railway:</strong> <?= e(t('railway_info')) ?></li>
                </ul>

                <a href="<?= e($config['venue']['google_maps_url']) ?>" target="_blank" rel="noopener noreferrer" class="btn-royal-primary">
                    <span>🗺️</span>
                    <span><?= e(t('get_directions_btn')) ?></span>
                </a>
            </div>

            <!-- Right Interactive Map Embed -->
            <div class="venue-map-frame">
                <iframe src="<?= e($config['venue']['google_maps_embed']) ?>" width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title="Venue Map"></iframe>
            </div>
        </div>
    </div>
</section>

<section id="events-section" class="section-wrapper" aria-label="Nikah & Walima Itinerary">
    <div class="container">
        <div class="section-header">
            <span class="section-badge"><?= e(t('events_section_title')) ?></span>
            <h2 class="section-title gold-gradient-text"><?= e(t('events_section_title')) ?></h2>
            <p class="section-subtitle"><?= e(t('events_section_subtitle')) ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <div class="events-grid">
            <?php foreach ($config['events'] as $event): ?>
            <div class="event-card">
                <div class="event-header">
                    <span class="event-date-badge"><?= e($event['display_date']) ?></span>
                    <span style="font-size: 1.3rem;">⚜️</span>
                </div>

                <h3 class="event-title gold-gradient-text">
                    <?= e(t($event['title_key'], $event['default_title'])) ?>
                </h3>

                <ul class="event-meta">
                    <li>
                        <strong><?= e(t('timing_label')) ?></strong>
                        <span><?= e($event['time']) ?></span>
                    </li>
                    <li>
                        <strong><?= e(t('venue_label')) ?></strong>
                        <span><?= e($event['venue']) ?></span>
                    </li>
                    <li>
                        <strong><?= e(t('dress_code_label')) ?></strong>
                        <span><?= e($event['dress_code']) ?></span>
                    </li>
                </ul>

                <p class="event-desc">
                    <?= e(t($event['description_key'], $event['default_desc'])) ?>
                </p>

                <div class="event-actions">
                    <a href="api/calendar.php?event=<?= e($event['id']) ?>" class="btn-event-action" title="Save Calendar Event">
                        📅 <?= e(t('add_to_calendar')) ?>
                    </a>
                    <a href="<?= e($event['maps_url']) ?>" target="_blank" rel="noopener noreferrer" class="btn-event-action" title="Open Map">
                        📍 <?= e(t('view_on_maps')) ?>
                    </a>
                </div>
            </div>
            <?php endforeach; ?>
        </div>
    </div>
</section>

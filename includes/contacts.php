<section id="contact-section" class="section-wrapper" aria-label="Contact & Hospitality">
    <div class="container">
        <div class="section-header">
            <span class="section-badge"><?= e(t('contact_section_title')) ?></span>
            <h2 class="section-title gold-gradient-text"><?= e(t('contact_section_title')) ?></h2>
            <p class="section-subtitle"><?= e(t('contact_section_subtitle')) ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <div class="contacts-grid">
            <!-- 1. Bride's Side Contact -->
            <div class="contact-box">
                <span class="section-badge">👰 <?= e(t('bride_side_title')) ?></span>
                <h3 class="contact-side-title gold-gradient-text"><?= e($config['bride_contact']['name']) ?></h3>
                <p class="contact-person-name"><?= e($config['bride_contact']['relation']) ?></p>
                
                <div class="contact-buttons-group">
                    <a href="tel:<?= e($config['bride_contact']['phone']) ?>" class="btn-contact-call">
                        📞 <?= e(t('btn_call')) ?>
                    </a>
                    <a href="https://wa.me/<?= e($config['bride_contact']['whatsapp']) ?>?text=<?= urlencode(t('whatsapp_prefill')) ?>" target="_blank" rel="noopener noreferrer" class="btn-contact-whatsapp">
                        💬 <?= e(t('btn_whatsapp')) ?>
                    </a>
                </div>
            </div>

            <!-- 2. Groom's Side Contact -->
            <div class="contact-box">
                <span class="section-badge">🤵 <?= e(t('groom_side_title')) ?></span>
                <h3 class="contact-side-title gold-gradient-text"><?= e($config['groom_contact']['name']) ?></h3>
                <p class="contact-person-name"><?= e($config['groom_contact']['relation']) ?></p>
                
                <div class="contact-buttons-group">
                    <a href="tel:<?= e($config['groom_contact']['phone']) ?>" class="btn-contact-call">
                        📞 <?= e(t('btn_call')) ?>
                    </a>
                    <a href="https://wa.me/<?= e($config['groom_contact']['whatsapp']) ?>?text=<?= urlencode(t('whatsapp_prefill')) ?>" target="_blank" rel="noopener noreferrer" class="btn-contact-whatsapp">
                        💬 <?= e(t('btn_whatsapp')) ?>
                    </a>
                </div>
            </div>
        </div>

        <!-- Share Invitation Controls -->
        <div style="text-align: center; margin-top: 50px;">
            <span class="section-badge"><?= e(t('share_section_title')) ?></span>
            <div style="display: flex; justify-content: center; gap: 16px; flex-wrap: wrap; margin-top: 15px;">
                <button type="button" id="btn-share-native" class="btn-royal-primary">
                    📤 <?= e(t('share_native_btn')) ?>
                </button>
                <a href="https://api.whatsapp.com/send?text=<?= urlencode(t('hero_tagline') . " " . $config['qr_url']) ?>" target="_blank" rel="noopener noreferrer" class="btn-contact-whatsapp">
                    💬 <?= e(t('share_whatsapp_btn')) ?>
                </a>
                <button type="button" id="btn-copy-link" class="btn-royal-outline">
                    📋 <?= e(t('share_copy_btn')) ?>
                </button>
            </div>
        </div>
    </div>
</section>

<section id="qr-section" class="section-wrapper" aria-label="Digital Invitation QR Code">
    <div class="container">
        <div class="qr-footer-card">
            <span class="section-badge">📱 <?= e(t('qr_section_title')) ?></span>
            <h2 class="section-title gold-gradient-text" style="font-size: 1.8rem; margin-top: 10px;">
                <?= e(t('qr_section_title')) ?>
            </h2>
            <p class="section-subtitle" style="font-size: 1rem; margin-bottom: 25px;">
                <?= e(t('qr_section_subtitle')) ?>
            </p>

            <!-- Decorative QR Frame with dynamically generated QR Code -->
            <div class="qr-frame" id="qrcode-container" title="Scan to open on smartphone">
                <!-- QR Code canvas generated via JavaScript -->
            </div>

            <p class="qr-instruction">
                📷 <?= e(t('qr_scan_instruction')) ?>
            </p>
        </div>
    </div>
</section>

<!-- Grand Royal Footer -->
<footer class="grand-footer">
    <div class="container">
        <img src="assets/images/royal-crest.svg" alt="Monogram" style="width: 70px; margin: 0 auto 20px;">
        
        <p class="footer-blessing">
            “<?= e(t('final_blessing')) ?>”
        </p>

        <p class="font-editorial" style="font-size: 1.1rem; color: var(--gold-bright); margin-bottom: 6px;">
            <?= e(t('with_love')) ?>
        </p>

        <h3 class="footer-family gold-gradient-text">
            <?= e(t('the_families')) ?>
        </h3>

        <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img" style="max-width: 200px; margin-bottom: 20px;">

        <p class="footer-copyright">
            <?= e(t('footer_copyright')) ?>
        </p>
    </div>
</footer>

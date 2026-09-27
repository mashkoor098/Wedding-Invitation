    <!-- Popup QR Modal Dialog -->
    <div id="qr-modal" class="qr-modal-overlay" role="dialog" aria-modal="true" aria-hidden="true">
        <div class="qr-modal-dialog">
            <button type="button" class="qr-modal-close" id="btn-close-qr-modal" aria-label="Close QR Modal">✕</button>
            <span class="section-badge">📱 Scan or Share</span>
            <h3 class="qr-modal-title gold-gradient-text" data-i18n="qr_modal_title">Digital Wedding Card QR</h3>
            <p class="qr-modal-sub" data-i18n="qr_modal_sub">Scan this QR code with any smartphone camera to open the invitation immediately.</p>
            
            <div class="qr-modal-frame" id="modal-qrcode-container"></div>
            
            <div class="qr-modal-actions">
                <button type="button" class="btn-royal-primary" id="btn-modal-copy-link" style="width: 100%;">
                    <span>🔗</span> <span data-i18n="share_copy_btn">Copy Invitation Link</span>
                </button>
            </div>
        </div>
    </div>

    <!-- Background Audio Player -->
    <audio id="wedding-audio" loop preload="auto">
        <source src="assets/music.mp3" type="audio/mpeg">
        <source src="assets/audio/music.mp3" type="audio/mpeg">
    </audio>

    <!-- Toast Container -->
    <div id="royal-toast" class="royal-toast" role="status" aria-live="polite"></div>

    <!-- Scripts -->
    <script src="assets/js/petals.js"></script>
    <script src="assets/js/main.js"></script>
    <script src="assets/js/entrance.js"></script>
    <script src="assets/js/scratch.js"></script>
    <script src="assets/js/carousel.js"></script>
    <script src="assets/js/video.js"></script>
    <script src="assets/js/countdown.js"></script>
    <script src="assets/js/gallery.js"></script>
    <script src="assets/js/i18n.js"></script>
    <script src="assets/js/rsvp.js"></script>

    <!-- Initialize Dynamic QR Codes, Modal & Live Countdown -->
    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const qrTarget = window.qrTargetUrl || window.location.href;

            // Section QR Code
            const qrContainer = document.getElementById('qrcode-container');
            if (qrContainer && typeof QRCode !== 'undefined') {
                new QRCode(qrContainer, {
                    text: qrTarget,
                    width: 175,
                    height: 175,
                    colorDark: "#081C15",
                    colorLight: "#FAF7F2",
                    correctLevel: QRCode.CorrectLevel.H
                });
            }

            // Modal QR Code
            const modalQrContainer = document.getElementById('modal-qrcode-container');
            if (modalQrContainer && typeof QRCode !== 'undefined') {
                new QRCode(modalQrContainer, {
                    text: qrTarget,
                    width: 190,
                    height: 190,
                    colorDark: "#081C15",
                    colorLight: "#FAF7F2",
                    correctLevel: QRCode.CorrectLevel.H
                });
            }

            // QR Modal Toggle Logic
            const qrModal = document.getElementById('qr-modal');
            const btnShowQr = document.getElementById('btn-show-qr');
            const btnCloseQrModal = document.getElementById('btn-close-qr-modal');
            const btnModalCopyLink = document.getElementById('btn-modal-copy-link');

            function openQrModal() {
                if (qrModal) {
                    qrModal.classList.add('active');
                    qrModal.setAttribute('aria-hidden', 'false');
                    document.body.style.overflow = 'hidden';
                }
            }

            function closeQrModal() {
                if (qrModal) {
                    qrModal.classList.remove('active');
                    qrModal.setAttribute('aria-hidden', 'true');
                    document.body.style.overflow = '';
                }
            }

            if (btnShowQr) {
                btnShowQr.addEventListener('click', (e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    openQrModal();
                });
            }

            if (btnCloseQrModal) {
                btnCloseQrModal.addEventListener('click', closeQrModal);
            }

            if (qrModal) {
                qrModal.addEventListener('click', (e) => {
                    if (e.target === qrModal) {
                        closeQrModal();
                    }
                });
            }

            document.addEventListener('keydown', (e) => {
                if (e.key === 'Escape' && qrModal && qrModal.classList.contains('active')) {
                    closeQrModal();
                }
            });

            if (btnModalCopyLink) {
                btnModalCopyLink.addEventListener('click', () => {
                    navigator.clipboard.writeText(qrTarget).then(() => {
                        if (typeof showRoyalToast === 'function') {
                            showRoyalToast('Invitation Link Copied! ✨');
                        }
                    });
                });
            }

            // Countdown Timer
            if (typeof initWeddingCountdown === 'function') {
                initWeddingCountdown(window.weddingDate || '2027-10-30T19:00:00');
            }
        });
    </script>
</body>
</html>

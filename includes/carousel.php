<!-- Aesthetic 3D Royal Moments Carousel -->
<section id="carousel-section" class="section-wrapper carousel-section">
    <div class="container">
        <div class="section-header">
            <span class="section-badge" data-i18n="carousel_badge"><?= e(t('carousel_badge')) ?></span>
            <h2 class="section-title gold-gradient-text" data-i18n="carousel_title"><?= e(t('carousel_title')) ?></h2>
            <p class="section-subtitle" data-i18n="carousel_subtitle"><?= e(t('carousel_subtitle')) ?></p>
            <img src="assets/images/royal-divider.svg" alt="Royal Divider" class="royal-divider-img">
        </div>

        <div class="royal-carousel-container" id="wedding-carousel">
            <!-- Left Arrow: Previous Slide -->
            <button type="button" class="carousel-btn carousel-prev" id="carousel-prev-btn" aria-label="Previous Slide">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>
            <!-- Right Arrow: Next Slide -->
            <button type="button" class="carousel-btn carousel-next" id="carousel-next-btn" aria-label="Next Slide">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>

            <div class="carousel-stage">
                <!-- Slide 1: Bride -->
                <div class="carousel-slide active" data-index="0">
                    <div class="carousel-slide-card">
                        <img src="assets/images/img1.jpg" alt="Ariba Deshmukh — The Royal Bride" class="carousel-slide-img" loading="lazy">
                        <div class="carousel-slide-info">
                            <span class="carousel-slide-tag" data-i18n="slide_bride_tag"><?= e(t('slide_bride_tag')) ?></span>
                            <h3 class="carousel-slide-title gold-gradient-text" data-i18n="bride_name"><?= e(t('bride_name')) ?></h3>
                            <p class="carousel-slide-sub" data-i18n="slide_bride_sub"><?= e(t('slide_bride_sub')) ?></p>
                        </div>
                    </div>
                </div>

                <!-- Slide 2: Groom -->
                <div class="carousel-slide next" data-index="1">
                    <div class="carousel-slide-card">
                        <img src="assets/images/img2.jpg" alt="Faizan Patel — The Royal Groom" class="carousel-slide-img" loading="lazy">
                        <div class="carousel-slide-info">
                            <span class="carousel-slide-tag" data-i18n="slide_groom_tag"><?= e(t('slide_groom_tag')) ?></span>
                            <h3 class="carousel-slide-title gold-gradient-text" data-i18n="groom_name"><?= e(t('groom_name')) ?></h3>
                            <p class="carousel-slide-sub" data-i18n="slide_groom_sub"><?= e(t('slide_groom_sub')) ?></p>
                        </div>
                    </div>
                </div>

                <!-- Slide 3: Eternal Grace -->
                <div class="carousel-slide hidden" data-index="2">
                    <div class="carousel-slide-card">
                        <img src="assets/images/img3.jpg" alt="Eternal Grace" class="carousel-slide-img" loading="lazy">
                        <div class="carousel-slide-info">
                            <span class="carousel-slide-tag" data-i18n="slide_moment_tag"><?= e(t('slide_moment_tag')) ?></span>
                            <h3 class="carousel-slide-title gold-gradient-text" data-i18n="slide_moment_3_title"><?= e(t('slide_moment_3_title')) ?></h3>
                            <p class="carousel-slide-sub" data-i18n="slide_moment_3_sub"><?= e(t('slide_moment_3_sub')) ?></p>
                        </div>
                    </div>
                </div>

                <!-- Slide 4: Sacred Nikah -->
                <div class="carousel-slide hidden" data-index="3">
                    <div class="carousel-slide-card">
                        <img src="assets/images/img4.jpg" alt="Sacred Nikah" class="carousel-slide-img" loading="lazy">
                        <div class="carousel-slide-info">
                            <span class="carousel-slide-tag" data-i18n="slide_nikah_tag"><?= e(t('slide_nikah_tag')) ?></span>
                            <h3 class="carousel-slide-title gold-gradient-text" data-i18n="slide_moment_4_title"><?= e(t('slide_moment_4_title')) ?></h3>
                            <p class="carousel-slide-sub" data-i18n="slide_moment_4_sub"><?= e(t('slide_moment_4_sub')) ?></p>
                        </div>
                    </div>
                </div>

                <!-- Slide 5: Celebration -->
                <div class="carousel-slide hidden" data-index="4">
                    <div class="carousel-slide-card">
                        <img src="assets/images/img5.jpg" alt="Celebration" class="carousel-slide-img" loading="lazy">
                        <div class="carousel-slide-info">
                            <span class="carousel-slide-tag" data-i18n="slide_celebration_tag"><?= e(t('slide_celebration_tag')) ?></span>
                            <h3 class="carousel-slide-title gold-gradient-text" data-i18n="slide_moment_5_title"><?= e(t('slide_moment_5_title')) ?></h3>
                            <p class="carousel-slide-sub" data-i18n="slide_moment_5_sub"><?= e(t('slide_moment_5_sub')) ?></p>
                        </div>
                    </div>
                </div>

                <!-- Slide 6: Together Forever -->
                <div class="carousel-slide prev" data-index="5">
                    <div class="carousel-slide-card">
                        <img src="assets/images/img6.jpg" alt="Together Forever" class="carousel-slide-img" loading="lazy">
                        <div class="carousel-slide-info">
                            <span class="carousel-slide-tag" data-i18n="slide_forever_tag"><?= e(t('slide_forever_tag')) ?></span>
                            <h3 class="carousel-slide-title gold-gradient-text" data-i18n="slide_moment_6_title"><?= e(t('slide_moment_6_title')) ?></h3>
                            <p class="carousel-slide-sub" data-i18n="slide_moment_6_sub"><?= e(t('slide_moment_6_sub')) ?></p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Dot Indicators -->
            <div class="carousel-dots"></div>
        </div>
    </div>
</section>

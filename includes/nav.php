<?php
$locales = get_available_locales();
$currentLocale = get_current_locale();
?>
<nav class="royal-navbar" aria-label="Main Navigation">
    <div class="nav-container">
        <!-- Brand / Monogram -->
        <a href="#hero" class="nav-brand" aria-label="Wedding Monogram">
            <img src="assets/images/royal-crest.svg" alt="Royal Monogram" class="nav-crest">
            <span class="nav-monogram gold-gradient-text"><?= e($config['monogram']) ?></span>
        </a>

        <!-- Navigation Links (Focused, uncluttered) -->
        <ul class="nav-links" id="nav-links">
            <li><a href="#hero" class="nav-link"><?= e(t('nav_home')) ?></a></li>
            <li><a href="#scratch-section" class="nav-link"><?= e(t('nav_couple')) ?></a></li>
            <li><a href="#events-section" class="nav-link"><?= e(t('nav_events')) ?></a></li>
            <li><a href="#family-section" class="nav-link"><?= e(t('nav_family')) ?></a></li>
            <li><a href="#gallery-section" class="nav-link"><?= e(t('nav_gallery')) ?></a></li>
            <li><a href="#venue-section" class="nav-link"><?= e(t('nav_venue')) ?></a></li>
            <li><a href="#rsvp-section" class="nav-link"><?= e(t('nav_rsvp')) ?></a></li>
            <li><a href="#contact-section" class="nav-link"><?= e(t('nav_contact')) ?></a></li>
        </ul>

        <!-- Right Side Controls (Audio, Language, Mobile Toggle) -->
        <div class="nav-controls">
            <!-- Show QR Code Button -->
            <button type="button" class="btn-nav-qr" id="btn-show-qr" aria-label="Show QR Code">
                <span>📱</span>
                <span data-i18n="nav_show_qr">Show QR</span>
            </button>

            <!-- Audio Toggle Button -->
            <button id="btn-audio-toggle" class="audio-toggle-btn" aria-label="Toggle Background Music" title="Background Music">
                <div class="audio-bars">
                    <span class="audio-bar"></span>
                    <span class="audio-bar"></span>
                    <span class="audio-bar"></span>
                    <span class="audio-bar"></span>
                </div>
                <span id="audio-status-text" class="d-none d-md-inline"><?= e(t('music_muted')) ?></span>
            </button>

            <!-- Language Switcher Dropdown in Navbar -->
            <div class="lang-dropdown-wrapper" id="lang-dropdown-wrapper">
                <button class="lang-toggle-btn" id="lang-toggle-btn" aria-expanded="false" aria-label="Select Language">
                    <span id="nav-current-flag"><?= e($locales[$currentLocale]['flag'] ?? '✨') ?></span>
                    <span id="nav-current-lang-name"><?= e($locales[$currentLocale]['native'] ?? 'Hinglish') ?></span>
                    <small>▼</small>
                </button>
                <ul class="lang-menu" id="lang-menu">
                    <li class="lang-menu-item active"><a href="javascript:void(0)" data-lang="hinglish"><span>✨ Hinglish</span></a></li>
                    <li class="lang-menu-item"><a href="javascript:void(0)" data-lang="urdu"><span>🌙 اردو (Urdu)</span></a></li>
                    <li class="lang-menu-item"><a href="javascript:void(0)" data-lang="english"><span>👑 English</span></a></li>
                    <li class="lang-menu-item"><a href="javascript:void(0)" data-lang="marathi"><span>🌸 मराठी (Marathi)</span></a></li>
                    <li class="lang-menu-item"><a href="javascript:void(0)" data-lang="hindi"><span>🪔 हिन्दी (Hindi)</span></a></li>
                    <li class="lang-menu-item"><a href="javascript:void(0)" data-lang="gujarati"><span>🏵️ ગુજરાતી (Gujarati)</span></a></li>
                    <li class="lang-menu-item"><a href="javascript:void(0)" data-lang="arabic"><span>⚜️ العربية (Arabic)</span></a></li>
                </ul>
            </div>

            <!-- Mobile Hamburger Toggle -->
            <button class="mobile-nav-toggle" id="mobile-nav-toggle" aria-label="Open Navigation Menu">
                ☰
            </button>
        </div>
    </div>
</nav>

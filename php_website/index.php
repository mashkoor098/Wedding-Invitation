<?php
/**
 * Islamic Royal Wedding Card — Master Digital Experience
 * Zaid & Ayesha • 18 January 2027
 */

// 1. Initialize Helpers and Configuration
require_once __DIR__ . '/includes/helpers.php';
$config = get_wedding_config();
$currentLocale = get_current_locale();

// 2. Include Modular Views
require_once __DIR__ . '/includes/header.php';
require_once __DIR__ . '/includes/nav.php';
require_once __DIR__ . '/includes/entrance.php';

echo '<main id="main-wedding-content">';
require_once __DIR__ . '/includes/hero.php';
require_once __DIR__ . '/includes/scratch_reveal.php';
require_once __DIR__ . '/includes/carousel.php';
require_once __DIR__ . '/includes/video.php';
require_once __DIR__ . '/includes/countdown.php';
require_once __DIR__ . '/includes/events.php';
require_once __DIR__ . '/includes/family.php';
require_once __DIR__ . '/includes/venue.php';
require_once __DIR__ . '/includes/rsvp.php';
require_once __DIR__ . '/includes/contacts.php';
require_once __DIR__ . '/includes/qr_footer.php';
echo '</main>';

require_once __DIR__ . '/includes/footer.php';

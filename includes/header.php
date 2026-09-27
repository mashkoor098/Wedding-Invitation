<?php
$currentLocale = get_current_locale();
$direction = get_text_direction();
$locales = get_available_locales();
?>
<!DOCTYPE html>
<html lang="<?= e($locales[$currentLocale]['lang_code'] ?? 'hi-Latn') ?>" dir="<?= e($direction) ?>">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?= e(t('entrance_couple')) ?> — <?= e(t('entrance_badge')) ?> | 18 Jan 2027</title>
    
    <!-- Meta SEO & Social Sharing -->
    <meta name="description" content="<?= e($config['seo']['description']) ?>">
    <meta name="theme-color" content="<?= e($config['seo']['theme_color']) ?>">
    
    <!-- Open Graph / WhatsApp Social Sharing Meta -->
    <meta property="og:type" content="website">
    <meta property="og:title" content="<?= e($config['groom']['first_name']) ?> &amp; <?= e($config['bride']['first_name']) ?> — Royal Wedding Celebration">
    <meta property="og:description" content="<?= e($config['seo']['description']) ?>">
    <meta property="og:image" content="<?= e($config['seo']['og_image']) ?>">
    <meta property="og:url" content="<?= e($config['qr_url']) ?>">

    <!-- Favicon & Touch Icons -->
    <link rel="icon" type="image/svg+xml" href="assets/images/royal-crest.svg">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@700;900&family=Cinzel:wght@500;600;700;800&family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Great+Vibes&family=Montserrat:wght@300;400;500;600;700&family=Noto+Nastaliq+Urdu:wght@400;700&family=Rozha+One&family=Amiri:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">

    <!-- Main Luxury CSS Stylesheet -->
    <link rel="stylesheet" href="assets/css/style.css">
    
    <!-- RTL Stylesheet for Urdu & Arabic -->
    <?php if ($direction === 'rtl'): ?>
    <link rel="stylesheet" href="assets/css/rtl.css">
    <?php endif; ?>

    <!-- Lightweight QR Code Library (CDN with fallback) -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/qrcodejs/1.0.0/qrcode.min.js"></script>

    <!-- Pass Localization Dictionary to JavaScript -->
    <script>
        window.currentLocale = "<?= e($currentLocale) ?>";
        window.currentDirection = "<?= e($direction) ?>";
        window.weddingDate = "<?= e($config['wedding_date']) ?>T<?= e($config['wedding_time']) ?>:00";
        window.qrTargetUrl = "<?= e($config['qr_url']) ?>";
        window.i18nDict = <?= json_encode(get_translations(), JSON_UNESCAPED_UNICODE) ?>;
    </script>
</head>
<body class="entrance-active">

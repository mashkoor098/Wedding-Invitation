<?php
/**
 * Helper Functions for Unimaginable Wedding Invitation
 */

if (session_status() === PHP_SESSION_NONE) {
    session_start();
}

/**
 * Load and cache master config
 */
function get_wedding_config() {
    static $config = null;
    if ($config === null) {
        $config = require __DIR__ . '/../config/wedding.php';
    }
    return $config;
}

/**
 * Get available languages list
 */
function get_available_locales() {
    return [
        'hinglish' => ['name' => 'Hinglish', 'native' => 'Hinglish', 'dir' => 'ltr', 'flag' => '✨'],
        'urdu'     => ['name' => 'Urdu',     'native' => 'اردو',     'dir' => 'rtl', 'flag' => '🌙'],
        'english'  => ['name' => 'English',  'native' => 'English',  'dir' => 'ltr', 'flag' => '👑'],
        'marathi'  => ['name' => 'Marathi',  'native' => 'मराठी',    'dir' => 'ltr', 'flag' => '🌸'],
        'hindi'    => ['name' => 'Hindi',    'native' => 'हिन्दी',   'dir' => 'ltr', 'flag' => '🪔'],
        'gujarati' => ['name' => 'Gujarati', 'native' => 'ગુજરાતી', 'dir' => 'ltr', 'flag' => '🏵️'],
        'arabic'   => ['name' => 'Arabic',   'native' => 'العربية',  'dir' => 'rtl', 'flag' => '⚜️'],
    ];
}

/**
 * Detect or set current locale
 */
function get_current_locale() {
    $available = get_available_locales();
    $locale = 'hinglish'; // Default

    // 1. Query parameter
    if (!empty($_GET['lang']) && array_key_exists(strtolower($_GET['lang']), $available)) {
        $locale = strtolower($_GET['lang']);
        $_SESSION['user_lang'] = $locale;
        setcookie('wedding_lang', $locale, time() + (86400 * 30), '/');
    }
    // 2. Session
    elseif (!empty($_SESSION['user_lang']) && array_key_exists($_SESSION['user_lang'], $available)) {
        $locale = $_SESSION['user_lang'];
    }
    // 3. Cookie
    elseif (!empty($_COOKIE['wedding_lang']) && array_key_exists($_COOKIE['wedding_lang'], $available)) {
        $locale = $_COOKIE['wedding_lang'];
    }

    return $locale;
}

/**
 * Load translations for current language
 */
function get_translations($locale = null) {
    static $translations = [];
    if ($locale === null) {
        $locale = get_current_locale();
    }

    if (!isset($translations[$locale])) {
        $filePath = __DIR__ . "/../locales/{$locale}.php";
        if (file_exists($filePath)) {
            $translations[$locale] = require $filePath;
        } else {
            $translations[$locale] = require __DIR__ . "/../locales/hinglish.php";
        }
    }

    return $translations[$locale];
}

/**
 * Translation helper function
 */
function t($key, $default = '') {
    $dict = get_translations();
    return $dict[$key] ?? ($default !== '' ? $default : $key);
}

/**
 * Get current text direction (ltr or rtl)
 */
function get_text_direction() {
    $dict = get_translations();
    return $dict['direction'] ?? 'ltr';
}

/**
 * HTML Escaping helper
 */
function e($string) {
    return htmlspecialchars((string)$string, ENT_QUOTES, 'UTF-8');
}

/**
 * CSRF Token Generator & Validator
 */
function csrf_token() {
    if (empty($_SESSION['csrf_token'])) {
        $_SESSION['csrf_token'] = bin2hex(random_bytes(32));
    }
    return $_SESSION['csrf_token'];
}

function verify_csrf_token($token) {
    return !empty($_SESSION['csrf_token']) && hash_equals($_SESSION['csrf_token'], (string)$token);
}

/**
 * Generate Google Calendar URL for an event
 */
function generate_google_calendar_url($title, $start_datetime, $end_datetime, $details, $location) {
    $base = 'https://calendar.google.com/calendar/render?action=TEMPLATE';
    $start = gmdate('Ymd\THis\Z', strtotime($start_datetime));
    $end = gmdate('Ymd\THis\Z', strtotime($end_datetime));
    
    return $base . '&text=' . urlencode($title)
        . '&dates=' . $start . '/' . $end
        . '&details=' . urlencode($details)
        . '&location=' . urlencode($location);
}

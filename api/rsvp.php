<?php
/**
 * RSVP Form API Handler
 * Safe server-side processing, CSRF check, rate limiting, and persistent storage
 */

header('Content-Type: application/json; charset=utf-8');
session_start();

require_once __DIR__ . '/../includes/helpers.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method Not Allowed']);
    exit;
}

// 1. Verify CSRF Token
$csrf_token = $_POST['csrf_token'] ?? '';
if (!verify_csrf_token($csrf_token)) {
    http_response_code(403);
    echo json_encode(['success' => false, 'message' => 'Security validation failed. Please refresh and try again.']);
    exit;
}

// 2. Simple Rate Limiting (Prevent spam flooding)
$currentTime = time();
if (!empty($_SESSION['last_rsvp_time']) && ($currentTime - $_SESSION['last_rsvp_time']) < 5) {
    http_response_code(429);
    echo json_encode(['success' => false, 'message' => 'Please wait a few seconds before submitting again.']);
    exit;
}
$_SESSION['last_rsvp_time'] = $currentTime;

// 3. Extract & Sanitize Inputs
$name = trim(filter_input(INPUT_POST, 'name', FILTER_SANITIZE_SPECIAL_CHARS));
$phone = trim(filter_input(INPUT_POST, 'phone', FILTER_SANITIZE_SPECIAL_CHARS));
$email = trim(filter_input(INPUT_POST, 'email', FILTER_SANITIZE_EMAIL));
$attending = trim(filter_input(INPUT_POST, 'attending', FILTER_SANITIZE_SPECIAL_CHARS));
$guests_count = intval($_POST['guests_count'] ?? 1);
$meal_pref = trim(filter_input(INPUT_POST, 'meal_pref', FILTER_SANITIZE_SPECIAL_CHARS));
$message = trim(filter_input(INPUT_POST, 'message', FILTER_SANITIZE_SPECIAL_CHARS));

// 4. Validate Required Fields
if (empty($name) || strlen($name) < 2) {
    echo json_encode(['success' => false, 'message' => 'Please enter your valid name.']);
    exit;
}

if (empty($phone) || strlen($phone) < 7) {
    echo json_encode(['success' => false, 'message' => 'Please provide a valid contact/WhatsApp number.']);
    exit;
}

if (!in_array($attending, ['yes', 'maybe', 'no'])) {
    $attending = 'yes';
}

if ($guests_count < 1) $guests_count = 1;
if ($guests_count > 20) $guests_count = 20;

// 5. Save RSVP Record to JSON storage
$rsvpDir = __DIR__ . '/../data';
if (!is_dir($rsvpDir)) {
    mkdir($rsvpDir, 0755, true);
}

$rsvpFile = $rsvpDir . '/rsvps.json';
$existing = [];

if (file_exists($rsvpFile)) {
    $content = file_get_contents($rsvpFile);
    $existing = json_decode($content, true) ?: [];
}

$newRecord = [
    'id' => uniqid('rsvp_', true),
    'name' => $name,
    'phone' => $phone,
    'email' => $email,
    'attending' => $attending,
    'guests_count' => $guests_count,
    'meal_pref' => $meal_pref,
    'message' => $message,
    'submitted_at' => date('Y-m-d H:i:s'),
    'ip' => $_SERVER['REMOTE_ADDR'] ?? 'Unknown'
];

$existing[] = $newRecord;
file_put_contents($rsvpFile, json_encode($existing, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE));

echo json_encode([
    'success' => true,
    'message' => 'Your RSVP has been saved successfully! Thank you for blessing us!'
]);

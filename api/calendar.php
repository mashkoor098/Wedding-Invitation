<?php
/**
 * Dynamic .ICS iCalendar Generator for Wedding Events
 */

require_once __DIR__ . '/../includes/helpers.php';
$config = get_wedding_config();

$eventId = $_GET['event'] ?? 'wedding';
$matchedEvent = null;

foreach ($config['events'] as $event) {
    if ($event['id'] === $eventId) {
        $matchedEvent = $event;
        break;
    }
}

if (!$matchedEvent) {
    $matchedEvent = $config['events'][3] ?? $config['events'][0]; // Wedding event
}

$title = $config['groom']['first_name'] . " & " . $config['bride']['first_name'] . " Wedding — " . $matchedEvent['default_title'];
$description = $matchedEvent['default_desc'] . " | Dress Code: " . $matchedEvent['dress_code'];
$location = $matchedEvent['venue'] . ", " . $config['venue']['city_state'];

$startDate = date('Ymd\THis', strtotime($matchedEvent['date'] . ' 18:00:00'));
$endDate = date('Ymd\THis', strtotime($matchedEvent['date'] . ' 23:00:00'));
$uid = uniqid() . "@faizan-ariba-wedding.com";

header('Content-Type: text/calendar; charset=utf-8');
header('Content-Disposition: attachment; filename="wedding-event-' . $eventId . '.ics"');

echo "BEGIN:VCALENDAR\r\n";
echo "VERSION:2.0\r\n";
echo "PRODID:-//Faizan & Ariba Wedding//EN\r\n";
echo "CALSCALE:GREGORIAN\r\n";
echo "METHOD:PUBLISH\r\n";
echo "BEGIN:VEVENT\r\n";
echo "UID:{$uid}\r\n";
echo "DTSTAMP:" . gmdate('Ymd\THis\Z') . "\r\n";
echo "DTSTART:{$startDate}\r\n";
echo "DTEND:{$endDate}\r\n";
echo "SUMMARY:{$title}\r\n";
echo "DESCRIPTION:{$description}\r\n";
echo "LOCATION:{$location}\r\n";
echo "STATUS:CONFIRMED\r\n";
echo "END:VEVENT\r\n";
echo "END:VCALENDAR\r\n";

<?php
declare(strict_types=1);

header('Content-Type: application/json; charset=utf-8');

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['message' => 'Method not allowed.']);
    exit;
}

function field(string $name, int $maxLength = 2000): string {
    $value = trim((string)($_POST[$name] ?? ''));
    $value = str_replace(["\r", "\n"], [' ', ' '], $value);
    return mb_substr($value, 0, $maxLength);
}

if (field('website', 200) !== '') {
    echo json_encode(['message' => 'Thank you. Your enquiry has been sent to our team.']);
    exit;
}

$fullName = field('fullName', 120);
$email = field('email', 160);
$phone = field('phone', 80);
$service = field('service', 180);
$message = trim((string)($_POST['message'] ?? ''));
$message = mb_substr($message, 0, 5000);

if ($fullName === '' || $email === '' || $service === '' || $message === '') {
    http_response_code(422);
    echo json_encode(['message' => 'Please complete your name, email, service and message.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    http_response_code(422);
    echo json_encode(['message' => 'Please enter a valid email address.']);
    exit;
}

$to = 'info@geosciencelab.co.zw';
$subject = 'Website enquiry - ' . $service;
$safeName = preg_replace('/[^a-zA-Z0-9 .,\'-]/', '', $fullName);
$body = implode("\n", [
    'New enquiry from the Geosciencelab website',
    '',
    'Name: ' . $fullName,
    'Email: ' . $email,
    'Phone: ' . ($phone !== '' ? $phone : 'Not provided'),
    'Service: ' . $service,
    '',
    'Message:',
    $message,
    '',
    'Submitted: ' . date('Y-m-d H:i:s')
]);

$headers = [
    'MIME-Version: 1.0',
    'Content-Type: text/plain; charset=UTF-8',
    'From: Geosciencelab Website <noreply@geosciencelab.co.zw>',
    'Reply-To: ' . $safeName . ' <' . $email . '>',
    'X-Mailer: PHP/' . phpversion()
];

$sent = mail($to, $subject, $body, implode("\r\n", $headers));

if (!$sent) {
    http_response_code(500);
    echo json_encode(['message' => 'The message could not be sent right now. Please call or WhatsApp us directly.']);
    exit;
}

echo json_encode(['message' => 'Thank you. Your enquiry has been sent to our team.']);

<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name    = strip_tags($_POST['name'] ?? '');
    $email   = strip_tags($_POST['email'] ?? '');
    $phone   = strip_tags($_POST['phone'] ?? '');
    $subject = strip_tags($_POST['subject'] ?? '');
    $message = strip_tags($_POST['message'] ?? '');

    $entry = "===== NEW MESSAGE =====\n";
    $entry .= "Name: $name\n";
    $entry .= "Email: $email\n";
    $entry .= "Phone: $phone\n";
    $entry .= "Subject: $subject\n";
    $entry .= "Message: $message\n";
    $entry .= "Date: " . date("Y-m-d H:i:s") . "\n";
    $entry .= "========================\n\n";

    file_put_contents('messages.txt', $entry, FILE_APPEND | LOCK_EX);
    echo json_encode(['status' => 'success']);
    exit;
}

echo json_encode(['status' => 'error']);

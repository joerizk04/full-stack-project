<?php
require 'db.php';
session_start();

header('Content-Type: application/json');

$data = json_decode(file_get_contents('php://input'), true);

$email = trim($data['email'] ?? '');
$password = trim($data['password'] ?? '');

if (empty($email) || empty($password)) {
    echo json_encode([
        'success' => false,
        'message' => 'Email and password are required.'
    ]);
    exit;
}

try {
    $stmt = $pdo->prepare("SELECT * FROM users WHERE email = ?");
    $stmt->execute([$email]);
    $user = $stmt->fetch(PDO::FETCH_ASSOC);

    if ($user && password_verify($password, $user['password'])) {
        session_regenerate_id(true);

        $_SESSION['user_email'] = $user['email'];

        echo json_encode([
            'success' => true,
            'message' => 'Login successful.'
        ]);
    } else {
        echo json_encode([
            'success' => false,
            'message' => 'Invalid email or password.'
        ]);
    }

} catch (PDOException $e) {
    echo json_encode([
        'success' => false,
        'message' => 'Database error: ' . $e->getMessage()
    ]);
}

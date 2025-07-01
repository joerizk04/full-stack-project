<?php
$host = 'localhost';
$db   = 'fullstack_project';
$user = 'root';
$pass = 'joE18012004';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
  PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
  PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (PDOException $e) {
    die(json_encode(['success' => false, 'message' => 'Connection failed: ' . $e->getMessage()]));
}
?>

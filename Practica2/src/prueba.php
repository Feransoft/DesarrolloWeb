<?php
$servername = "172.17.0.2";
$username = "dev";
$password = "123456";
$db = "myapp";

$envVars = [
    "DB_PORT_3306_TCP_PORT",
    "DB_PORT_3306_TCP_ADDR",
    "DB_ENV_MYSQL_USER",
    "DB_ENV_MYSQL_DATABASE",
    "DB_ENV_MYSQL_PASSWORD",
    "DB_ENV_MYSQL_ROOT_PASSWORD",
  ];
  
  foreach ($envVars as $envVar) {
    $envValue = getenv($envVar);
    echo nl2br("<b>{$envVar}</b>: {$envValue}\n");
  }
// Create connection
$conn = new mysqli($servername, $username, $password);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

echo "connection sucessfully";
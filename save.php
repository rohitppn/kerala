<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $lottery = $_POST['lottery'];
  $date = $_POST['date'];

  // Database connection
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "lottery";

  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  // Assuming you have a 'registration' table with appropriate columns
  $stmt = $conn->prepare("INSERT INTO `lottery-data` (name, phone, lottery, date) VALUES (?, ?, ?, ?)");
  $stmt->bind_param("ssss", $name, $phone, $lottery, $date);

  if ($stmt->execute()) {
    echo "Registration successful...";
  } else {
    echo "Error: " . $stmt->error;
  }

  $stmt->close();
  $conn->close();
} else {
  echo "Invalid request.";
}

<?php

function login()
{
  session_start();
  $_SESSION['logged_in'] = true;

  // You may want to set other session variables based on user data

  // Redirect to the desired page
  header('Location: http://megajackpotonline.com/lottry-finder.html');
  exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  $phone = $_POST['phone'];

  // Validate the phone number on the server-side
  if (!preg_match("/^[0-9]{10}$/", $phone)) {
    echo "Phone Number: " . $phone . "<br>";
    echo "Invalid phone number format.";
    exit;
  }

  // Database connection
  $servername = "localhost";
  $username = "root";
  $password = "";
  $dbname = "lottery";

  $conn = new mysqli($servername, $username, $password, $dbname);
  if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
  }

  $stmt = $conn->prepare("SELECT * FROM `lottery-data` WHERE phone = ?");
  $stmt->bind_param('s', $phone);

  $stmt->execute();

  if ($stmt->error) {
    echo "Error: " . $stmt->error;
  } else {
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
      echo "Login successful...";
      login();
    } else {
      echo "Phone Number does not exist!";
    }
  }

  $stmt->close();
  $conn->close();
} else {
  echo "Invalid request.";
}
?>
////////////////////////////////
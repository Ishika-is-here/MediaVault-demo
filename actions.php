<?php
session_start();
include 'db_connect.php';

// --- HANDLE LOGOUT (Check this BEFORE the POST check) ---
if (isset($_GET['action']) && $_GET['action'] == 'logout') {
    session_unset();
    session_destroy();
    echo "<script>alert('You have been logged out.'); window.location.href='index.php';</script>";
    exit();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $form_type = $_POST['form_type'];

    // --- HANDLE REGISTER ---
    if ($form_type == "register") {
        $user = mysqli_real_escape_string($conn, $_POST['username']);
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $phone = mysqli_real_escape_string($conn, $_POST['phone']);
        $pass = password_hash($_POST['password'], PASSWORD_DEFAULT); 

        $sql = "INSERT INTO users (username, email, phone, password) VALUES ('$user', '$email', '$phone', '$pass')";

        if ($conn->query($sql) === TRUE) {
            echo "<script>alert('Account created! Now you can Login.'); window.location.href='index.php';</script>";
        } else {
            echo "Error: " . $conn->error;
        }
    }

    // --- HANDLE LOGIN ---
    if ($form_type == "login") {
        $email = mysqli_real_escape_string($conn, $_POST['email']);
        $password = $_POST['password'];

        $sql = "SELECT * FROM users WHERE email = '$email'";
        $result = $conn->query($sql);

        if ($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            if (password_verify($password, $row['password'])) {
                
                // 2. SET THE SESSION DATA (This makes the Gatekeeper work!)
                $_SESSION['user_id'] = $row['id']; // Or $row['user_id'] based on your DB
                $_SESSION['username'] = $row['username'];

                echo "<script>alert('Welcome back, " . $_SESSION['username'] . "!'); window.location.href='index.php';</script>";
            } else {
                echo "<script>alert('Incorrect password!'); window.location.href='index.php';</script>";
            }
        } else {
            echo "<script>alert('No account found with that email!'); window.location.href='index.php';</script>";
        }
    }
}

// --- HANDLE FEEDBACK ---
if (isset($_POST['submit_feedback'])) {
    
    // 1. Get user_id if logged in, otherwise set to NULL
    $u_id = isset($_SESSION['user_id']) ? $_SESSION['user_id'] : "NULL";

    // 2. Clean data using your existing $conn
    $name    = mysqli_real_escape_string($conn, $_POST['user_name']);
    $email   = mysqli_real_escape_string($conn, $_POST['user_email']);
    
    $subject = mysqli_real_escape_string($conn, $_POST['feedback_subject']);
    if (empty($subject)) {
        $subject = "general";
    }
    
    $msg     = mysqli_real_escape_string($conn, $_POST['user_message']);

    // 4. The Clean SQL
    $sql = "INSERT INTO feedback (user_id, name, email, subject, message) 
            VALUES ($u_id, '$name', '$email', '$subject', '$msg')";

    if (mysqli_query($conn, $sql)) {
        echo "<script>alert('Message Sent!'); window.location.href='about.php';</script>";
    } else {
        echo "Error: " . mysqli_error($conn);
    }
}
$conn->close();
?>

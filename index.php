<?php
session_start();
// Check if the user is logged in
$isLoggedIn = isset($_SESSION['user_id']) ? 'true' : 'false';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    
    <title>Media Vault</title>
    <link rel="stylesheet" href="style.css">

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Audiowide&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;500&display=swap" rel="stylesheet">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />

</head>
<body>
<div class="header">
    <div class="container">   
        <div class="navbar">
            <a href="#">
                <img src="images/logo.png" width="150">
            </a>
            <nav>
                <ul>
                    <li><a href="index.html" class="active">Home</a></li>
                    
                    <li class="dropdown">
                        <a href="javascript:void(0)">Games<span class="arrow">&#9656;</span></a>
                        <ul class="dropdown-menu">
                            <li><a href="games.php#action">Action</a></li>
                            <li><a href="games.php#simulation">Simulation</a></li>
                            <li><a href="games.php#adventure">Adventure</a></li>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="javascript:void(0)">Movies<span class="arrow">&#9656;</span></a>
                        <ul class="dropdown-menu">
                            <li><a href="movie.php#horror">Horror</a></li>
                            <li><a href="movie.php#sci-fi">Sci-Fi</a></li>
                            <li><a href="movie.php#drama">Drama</a></li>
                        </ul>
                    </li>

                    <li class="dropdown">
                        <a href="javascript:void(0)">Books<span class="arrow">&#9656;</span></a>
                        <ul class="dropdown-menu">
                            <li><a href="book.php#fiction">Fiction</a></li>
                            <li><a href="book.php#classics">Classics</a></li>
                            <li><a href="book.php#mystery">Mystery</a></li>
                        </ul>
                    </li>

                    <li><a href="about.html">About & Contact</a></li>
                    <?php 
                    if ($isLoggedIn === 'true') { 
                        // Uses the variable you just created at the top!
                        echo '<li><a href="actions.php?action=logout" class="btn" onclick="return confirmLogout(event)">Logout</a></li>';
                    } else {
                        echo '<li><button class="btn">Login</button></li>';
                    }
                    ?>
                </ul>
            </nav>
        </div>

                <div class="row">
                    <div class="col-2">
                        <h1 class="audiowide-regular">Your next favorite story, <br>level, and scene—<br>All in one place</h1><br><br>
                        <p class="poppins-medium"> Looking to lose yourself in a gripping novel?
                            Or to conquer new worlds in the latest video games?
                            Or to maybe settle in for an unforgettable movie night?—we’ve curated a collection just for you...</p><br><br>
                        <a href="#Browse" class="btn2">Explore Now &#x2192</a>
                    </div>
                <div class="col-2">
                    <img src="images/image.png">
                </div> 
                </div>
            </div> 
    </div>   <br>
    <div class="faded-line">
        <span class="line-text" id="Browse">Browse Our Collection</span>
    </div><br><br>

    <div class="card-container">
        <div class="card">
            <img src="images/games.jpeg">
            <div class="overlay">
            <h2>Games</h2>
            <p>Video Games for All Consoles & PC</p>
            <a href="games.php"><button class="btn3">View Games</button></a>
            </div>
        </div>

        <div class="card">
            <img src="images/movies.jpeg">
            <div class="overlay">
            <h2>Movies</h2>
            <p>New Releases & Classic Hits</p>
            <a href="movie.php"><button class="btn3">View Movies</button></a>
            </div>
        </div>

        <div class="card">
            <img src="images/books.jpeg">
            <div class="overlay">
            <h2>Books</h2>
            <p>Best Sellers & Popular Reads</p>
            <a href="book.php"><button class="btn3">View Books</button></a>
            </div>
        </div>

    </div>
    <br><br>
    <div class="faded-line">
        <span class="line-text">Why Choose Us</span>
    </div>

    <div class="scroll-container">
        <div class="scroll-content">
            <div class="glass-box">
                <img src="images/img1.png">
                <p>Curated Collections</p>
            </div>
            <div class="glass-box">
                <img src="images/img2.png">
                <p>Easy Access</p>
            </div>
            <div class="glass-box">
                <img src="images/img3.png">
                <p>Affordable Rates</p>
            </div>
            <div class="glass-box">
                <img src="images/img4.png">
                <p>Huge Selection</p>
            </div>
        </div>
    </div>
</div>

<br><br><hr><br><br>

<footer>
    <div class="footer-container">
        <div class="footer-left">
        <a href="about.html#feedback-section">Contact Us</a>
        <a href="about.html#feedback-section">Feedback</a>
        <a href="/terms">Terms & Policy</a>
        </div>

        <div class="footer-right">
        <a href="#" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
        <a href="#" class="social-icon"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="#" class="social-icon"><i class="fa-brands fa-youtube"></i></a>
        <a href="#" class="social-icon"><i class="fa-brands fa-square-facebook"></i></a>
        </div>
  </div>
</footer>
<br><br><hr>

<div class="login-section">
    <div class="wrapper">
        <span class="icon-close"><i class="fa-solid fa-xmark"></i></span>
        
        <div class="form-box login">
            <h2>Login</h2>
            <form action="actions.php" method="POST">
                <input type="hidden" name="form_type" value="login"> <div class="input-box">
                    <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                    <input type="email" name="email" required> <label>Email</label>
                </div>
                <div class="input-box">
                    <span class="icon"><i class="fa-solid fa-lock"></i></span>
                    <input type="password" name="password" required> <label>Password</label>
                </div>
                <div class="remember-forgot">
                    <label><input type="checkbox">Remember me</label>
                    <a href="#">Forgot password?</a>
                </div>
                <button type="submit" class="btnlgn">Login</button>
                <div class="login-register">
                    <p>Don't have an account?
                    <a href="#" class="register-link">Register</a>
                    </p>
                </div>
            </form>
        </div>

        <div class="form-box register">
            <h2>Register</h2>
            <form action="actions.php" method="POST">
                <input type="hidden" name="form_type" value="register"> <div class="input-box">
                    <span class="icon"><i class="fa-solid fa-user"></i></span>
                    <input type="text" name="username" required> <label>Username</label>
                </div>
                
                <div class="input-box">
                    <span class="icon"><i class="fa-solid fa-envelope"></i></span>
                    <input type="email" name="email" required> <label>Email</label>
                </div>

                <div class="input-box">
                    <span class="icon"><i class="fa-solid fa-phone"></i></span>
                    <input type="text" id="phoneInput" name="phone" required maxlength="10" pattern="[0-9]{10}"> <label>Phone Number</label>
                </div>

                <div class="input-box">
                    <span class="icon"><i class="fa-solid fa-lock"></i></span>
                    <input type="password" name="password" required> <label>Password</label>
                </div>

                <div class="remember-forgot">
                    <label><input type="checkbox" required>agree to the terms & conditions</label>
                </div>

                <button type="submit" class="btnlgn">Register</button>

                <div class="login-register">
                    <p>Already have an account?
                        <a href="#" class="login-link">Login</a>
                    </p>
                </div>
            </form>
        </div>
    </div>
</div>



<script src="script.js"></script>


</body>
</html>

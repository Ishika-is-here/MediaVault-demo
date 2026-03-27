<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us - MediaVault</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" /> 
</head>

<body class="about-page">
    
<div class="header">
  <div class="container">
    <div class="navbar">
      <a href="#">
      <img src="images/logo.png" width="150">
      </a>
    <nav>
        <ul>
            <li><a href="index.php">Home</a></li>   
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

                    <li><a href="about.php" class="active">About & Contact</a></li>
                    <li><a href="#" class="btn">Login</a></li>
                </ul>
            </nav>
    </div>
  </div>
</div>

    <section class="about-hero">
        <h1>Welcome to MediaVault</h1>
        <p>Your ultimate digital sanctuary for stories, adventures, and cinematic journeys.</p>
    </section>

    <div class="about-page-wrapper">

        <section class="about-content">
            <h2>Our Mission</h2>
            <p>At MediaVault, we believe that every story deserves a home. Our mission is to create a vibrant community where gamers, movie buffs, and book lovers can discover, share, and celebrate their passions. We strive to provide a seamless experience that connects you with the best in entertainment, all in one place.</p>

            <h2>What We Offer</h2>
            <ul>
                <li><strong>Curated Collections:</strong> Handpicked selections of games, movies, and books to suit every taste.</li>
                <li><strong>Community Reviews:</strong> Honest feedback from fellow enthusiasts to help you make informed choices.</li>
                <li><strong>Exclusive Content:</strong> Access to behind-the-scenes insights, interviews, and special features.</li>
                <li><strong>User-Friendly Interface:</strong> A sleek and intuitive design that makes browsing a breeze.</li>
            </ul>

            <h2>Join Us</h2>
            <p>Whether you're looking for your next great read, an epic gaming adventure, or a must-watch movie night, MediaVault is here to guide you. Join our community today and unlock a world of entertainment at your fingertips!</p>
        </section>
</div>

<!-- contact us -->
<h2 class="contact-header">Contact Us</h2>

<section id="feedback-section" class="contact-section">
    <div class="contact-flex-container">
        
        <div class="contact-left">
            <h2>Get in Touch</h2>
            <p>Have a question or a suggestion? Reach out to us directly or use the form.</p>
            
            <div class="contact-details-list">
                <div class="detail-item">
                    <span class="icon">📧</span>
                    <div>
                        <h4>Email</h4>
                        <p>support@mediavault.com</p>
                    </div>
                </div>
                <div class="detail-item">
                    <span class="icon">📞</span>
                    <div>
                        <h4>Phone</h4>
                        <p>+1 (555) 123-4567</p>
                    </div>
                </div>
            </div>

            <div class="social-handles">
                <h4>Follow Us</h4>
                <div class="social-icons">
                    <a href="#" class="social-link">GitHub</a>
                    <a href="#" class="social-link">Instagram</a>
                    <a href="#" class="social-link">Twitter</a>
                </div>
            </div>
        </div>

        <div class="contact-right">
            <h3 class="form-title">Feedback</h3>
            <form action="actions.php" method="POST" class="feedback-form">
                <div class="form-group">
                    <label for="name">Name</label>
                    <input type="text" id="name" name="user_name" placeholder="Your Name" maxlength="50" required>
                </div>

                <div class="form-group">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="user_email" placeholder="Your Email" required>
                </div>

                <div class="form-group">
                    <label for="category">Subject</label>
                    <select id="category" name="feedback_subject">
                        <option value="general">General Feedback</option>
                        <option value="suggestion">New Feature Suggestion</option>
                        <option value="bug">Report a Bug</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="message">Message</label>
                    <textarea id="message" name="user_message" rows="4" placeholder="How can we help?" required></textarea>
                </div>

                <button type="submit" name="submit_feedback" class="submit-btn">Send Message</button>
            </form>
        </div>

    </div>
</section>
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
    
<script src="script.js"></script> </body>
</html>

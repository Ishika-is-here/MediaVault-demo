<?php
session_start();
// Check if the user is logged in
$isLoggedIn = isset($_SESSION['user_id']) ? 'true' : 'false';
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <title>MediaVault | Movies</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="style2.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css" />
</head>

<body class="movie-page">
<div class="header">
  <div class="container">
    <div class="navbar">
      <a href="index.php">
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
                        <a href="javascript:void(0)" class="active">Movies<span class="arrow">&#9656;</span></a>
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
                    <li><a href="about.php">About & Contact</a></li>
                    <li><div class="search-box">
                        <input type="search" class="search" placeholder="Search movies...">
                        <i class="fa-solid fa-magnifying-glass"></i></div>
                    </li>
                    <li><a href="#" class="icon-cart">
                        <i class="fa-solid fa-cart-shopping"></i>
                        <span id="cart-count">0</span></a>
                    </li>
                </ul>
            </nav>
    </div>
  </div>
</div>

<section class="shop-section">
    <div class="hero-header">
        <h1>ULTIMATE <span class="neon-text">MOVIE</span> STORE</h1>
        <p>Expand your horizon with our legendary collection</p>
    </div>
    <div class="glass-container">
        <h2 class="section-title">Featured Movies</h2>
        <div class="games-grid" id="gameGrid"></div>
    </div>
</section>

<div id="libraryOverlay" class="library-overlay">
    <div class="library-content">
        <div class="library-header">
            <h1><i class="fa-solid fa-layer-group"></i> My Library</h1>
            <button id="closeLibrary" class="cross-btn">&times;</button>
        </div>
        
        <div class="table-wrapper">
            <table class="library-table">
                <thead>
                    <tr>
                        <th>Items Added</th>
                        <th>Original Price</th>
                        <th>Discount (10%)</th>
                        <th>Total Paid</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody id="libraryTableBody">
                    </tbody>
            </table>
        </div>
        
        <div class="library-footer">
            <h3>Total Value: <span id="libraryGrandTotal">₹0.00</span></h3>
    
            <div class="cart-actions">
                <button id="clearCart" class="btn-clear" onclick="clearEntireLibrary()">
                    <i class="fa-solid fa-eraser"></i> Clear All
                </button>
                <button id="placeOrder" class="btn-order" onclick="processOrder()">
                    Place Order <i class="fa-solid fa-circle-check"></i>
                </button>
            </div>
        </div>
    </div>
</div>

<br><br><hr><br><br>

    <footer>
    <div class="footer-container">
        <div class="footer-left">
        <a href="about.php#feedback-section">Contact Us</a>
        <a href="about.php#feedback-section">Feedback</a>
        <a href="/terms">Terms & Policy</a>
        </div>

        <div class="footer-right">
        <a href="https://www.instagram.com/?hl=en" class="social-icon"><i class="fa-brands fa-instagram"></i></a>
        <a href="https://x.com" class="social-icon"><i class="fa-brands fa-x-twitter"></i></a>
        <a href="https://www.youtube.com" class="social-icon"><i class="fa-brands fa-youtube"></i></a>
        <a href="https://www.facebook.com" class="social-icon"><i class="fa-brands fa-square-facebook"></i></a>
        </div>
  </div>
</footer>
<br><br><hr>

<!-- Movie Preview Modal -->
<div id="movie-preview-modal" class="modal">
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <div class="preview-flex">
            <div class="preview-video">
                <iframe id="youtube-trailer" width="100%" height="315" 
                        src="" frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen style="display:none; border-radius: 8px;">
                </iframe>
                <img id="preview-image" src="" style="display:none; width:100%; border-radius: 8px;">
            </div>
            <div class="preview-details">
                <h2 id="preview-title">Movie Title</h2>
                <p id="preview-desc">Movie description goes here...</p>
            </div>
        </div>
    </div>
</div>
    
<script>
    // This takes the PHP result from the top and gives it to JavaScript
    var userLoggedIn = <?php echo $isLoggedIn; ?>;
</script>

<script src="script2.js" defer></script>
</body>
</html>

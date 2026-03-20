// ==========================================
// 1. DATA - Games, Books, & Movies
// ==========================================
const gamesList = [
    { id: 1, title: "The Last of Us", price: "₹59", img: "images/gameimg/g4.jpeg", category: "Adventure" },
    { id: 2, title: "Red Dead Redemption II", price: "₹49", img: "images/gameimg/g5.jpeg", category: "Adventure" },
    { id: 3, title: "Silent Hill", price: "₹39", img: "images/gameimg/g6.jpeg", category: "Adventure" },
    { id: 4, title: "Lords of The Fallen", price: "₹15", img: "images/gameimg/g7.jpeg", category: "Action" },
    { id: 5, title: "Roblox", price: "₹59", img: "images/gameimg/g8.jpeg", category: "Simulation" },
    { id: 6, title: "Sinking City", price: "₹49", img: "images/gameimg/g9.jpeg", category: "Action" },
    { id: 7, title: "Minecraft", price: "₹39", img: "images/gameimg/g10.jpeg", category: "Simulation" },
    { id: 8, title: "Amnesia", price: "₹15", img: "images/gameimg/g11.jpeg", category: "Horror" }
];

const booksList = [
    { id: 101, title: "Wuthering Heights", price: "₹59", img: "images/bookimg/1.jpg" }, 
    { id: 102, title: "Sherlock Holmes", price: "₹59", img: "images/bookimg/2.jpg" },
    { id: 103, title: "Anna Karenina", price: "₹59", img: "images/bookimg/3.jpg" }, 
    { id: 104, title: "House of Sky and Breath", price: "₹59", img: "images/bookimg/4.jpg" },
    { id: 105, title: "The Secret History", price: "₹59", img: "images/bookimg/5.jpg" },
    { id: 106, title: "1984", price: "₹59", img: "images/bookimg/6.jpg" },
    { id: 107, title: "Caraval", price: "₹59", img: "images/bookimg/7.jpg" }, 
    { id: 108, title: "Two Twisted Crowns", price: "₹59", img: "images/bookimg/8.jpg" }
];

const moviesList = [
    { id: 1001, title: "Fight Club", price: "₹59", img: "images/movieimg/m1.jpeg", videoFile: "trailers/fc.mp4",
        description: `Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.<br>
        <b>Cast:</b> Brad Pitt, Edward Norton, Helena Bonham Carter, Meat Loaf, Jared Leto.<br>
        <b>Director:</b> David Fincher.<br>
        <b>Genre:</b> Drama, Thriller.<br>
        <b>Release Year:</b> 1999.`}, 
    { id: 1002, title: "Interstellar", price: "₹59", img: "images/movieimg/m2.jpeg", videoFile: "trailers/interstellar.mp4", 
        description: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.<br>
        <b>Cast:</b> Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn.<br>
        <b>Director:</b> Christopher Nolan.<br>
        <b>Genre:</b> Adventure, Drama, Sci-Fi.<br>
        <b>Release Year:</b> 2014.`},
    { id: 1003, title: "Jumanji Next Level", price: "₹59", img: "images/movieimg/m3.jpeg", videoFile: "trailers/jumanji.mp4",
        description: `When Spencer goes missing, his group of friends return to Jumanji to travel unexplored territories and help him escape the world's most dangerous game.
        <b>Cast:</b> Dwayne Johnson, Jack Black, Kevin Hart, Karen Gillan, Awkwafina.<br>
        <b>Director:</b> Jake Kasdan.<br>
        <b>Genre:</b> Action, Adventure, Comedy.<br>
        <b>Release Year:</b> 2019.`,
        }, 
    { id: 1004, title: "Spiderman", price: "₹59", img: "images/movieimg/m4.jpeg", videoFile: "trailers/spider.mp4",
        description: `Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe.<br>
        <b>Cast:</b> Tom Holland, Zendaya, Mahershala Ali, Jon Favreau.<br>
        <b>Director:</b> Jon Watts.<br>
        <b>Genre:</b> Action, Adventure, Comedy.<br>
        <b>Release Year:</b> 2021.` },
    { id: 1005, title: "IT", price: "₹59", img: "images/movieimg/m5.jpeg", videoFile: "trailers/it.mp4",
        description: `Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.<br>
        <b>Cast:</b> Bill Skarsgård, Jaeden Martell, Finn Wolfhard, Jeremy Ray Taylor.<br>
        <b>Director:</b> Andy Muschietti.<br>
        <b>Genre:</b> Horror, Thriller.<br>
        <b>Release Year:</b> 2017.` },
    { id: 1006, title: "The Batman", price: "₹59", img: "images/movieimg/m6.jpeg", videoFile: "trailers/batman.mp4",
        description: `Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.<br>
        <b>Cast:</b> Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine.<br>
        <b>Director:</b> Matt Reeves.<br>
        <b>Genre:</b> Action, Crime, Drama.<br>
        <b>Release Year:</b> 2022.` },
    { id: 1007, title: "Pirates of the Caribbean", price: "₹59", img: "images/movieimg/m7.jpeg", videoFile: "trailers/pocs.mp4",
        description: `To break the curse of Flying Dutchman, Captain Jack Sparrow and Henry Turner embark on a mission to find the Trident of Poseidon. They also try to stop Captain Salazar who intends to rule the seas.<br>
        <b>Cast:</b> Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley.<br>
        <b>Director:</b> Joachim Rønning, Espen Sandberg.<br>
        <b>Genre:</b> Action, Adventure, Comedy.<br>
        <b>Release Year:</b> 2017.` }, 
    { id: 1008, title: "The Truman Show", price: "₹59", img: "images/movieimg/m8.jpeg", videoFile: "trailers/truman.mp4",
        description: `Executive producer Christof organises a reality show based on the life of an ordinary man, Truman Burbank. But Truman is unaware of the fact that every move of his life is being captured by cameras.<br>
        <b>Cast:</b> Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone.<br>
        <b>Director:</b> Peter Weir.<br>
        <b>Genre:</b> Drama.<br>
        <b>Release Year:</b> 1998.` }
];

// Load library from browser memory (localStorage)
let myLibrary = JSON.parse(localStorage.getItem('userLibrary')) || [];

// ==========================================
// 2. CORE FUNCTIONS
// ==========================================

function renderGrid(data) {
    const grid = document.getElementById('gameGrid');
    if (!grid) return;

    const isBookPage = document.body.classList.contains('book-page');
    const isMoviePage = document.body.classList.contains('movie-page');

    let displayList = data;
    if (!displayList) {
        if (isBookPage) displayList = booksList;
        else if (isMoviePage) displayList = moviesList;
        else displayList = gamesList;
    }

    // --- NEW: CATEGORY FILTERING ---
    // Get the hash (e.g., "#horror") and remove the "#" to get "horror"
    const currentHash = window.location.hash.substring(1).toLowerCase();

    // If there is a hash in the URL, filter the list to only show that genre
    if (currentHash) {
        displayList = displayList.filter(item => {
            // This assumes your objects have a 'category' or 'genre' property
            return item.category && item.category.toLowerCase() === currentHash;
        });
    }
    // -------------------------------

    let btnText = "Add to Cart";

    grid.innerHTML = displayList.map(item => {
        // If we are on the movies page, make the image clickable
        let imageClickAction = "";
        if (isMoviePage) {
            imageClickAction = `onclick="openPreview(${item.id})" style="cursor:pointer"`;
        }

        return `
            <div class="product-card">
                <img src="${item.img}" alt="${item.title}" ${imageClickAction}>
                
                <div class="product-info">
                    <h3>${item.title}</h3>
                    <span class="price">${item.price}</span>
                    <button class="buy-btn" onclick="addToCart(${item.id})">
                        ${btnText}
                    </button>
                </div>
            </div>
        `;
    }).join('');
}
window.addEventListener('hashchange', () => renderGrid());

function openPreview(movieId) {
    const movie = moviesList.find(m => m.id === movieId);
    if (!movie) return;

    // 1. Update the text
    document.getElementById('preview-title').innerHTML = movie.title;
    document.getElementById('preview-desc').innerHTML = movie.description;

    // 2. Load the video
    const videoPlayer = document.getElementById('preview-video');
    const videoSource = document.getElementById('video-source');
    
    if (movie.videoFile) {
        videoSource.src = movie.videoFile;
        videoPlayer.load();
    }

    // 3. Open the modal
    document.getElementById('movie-preview-modal').style.display = "block";
}

// Update your close function to STOP the video
function closePreview() {
    const modal = document.getElementById('movie-preview-modal');
    const videoPlayer = document.getElementById('preview-video');

    if (modal) modal.style.display = "none";
    
    if (videoPlayer) {
        videoPlayer.pause(); // Stops the video
        videoPlayer.currentTime = 0; // Resets it to the start
    }
}

// This "listens" for clicks anywhere on the page
document.addEventListener('click', function(event) {
    // If they clicked the 'X' button
    if (event.target.classList.contains('close-modal')) {
        closePreview();
    }
    
    // If they clicked the dark background OUTSIDE the modal
    if (event.target.id === 'movie-preview-modal') {
        closePreview();
    }
});

function addToCart(id) {
    // Search ALL lists for the item
    const item = [...gamesList, ...booksList, ...moviesList].find(i => i.id === id);
    
    if (item) {
        // We strip the ₹ to do math
        const originalPrice = parseFloat(item.price.replace('₹', '')) || 0;
        const discount = originalPrice * 0.10;
        const finalPrice = originalPrice - discount;

        myLibrary.push({
            uniqueId: Date.now() + Math.random(),
            title: item.title,
            price: originalPrice,
            discount: discount,
            total: finalPrice
        });

        saveAndRefresh();
        alert(`${item.title} added to your library!`);
    }
}

function removeFromLibrary(uniqueId) {
    myLibrary = myLibrary.filter(item => item.uniqueId !== uniqueId);
    saveAndRefresh();
}

function saveAndRefresh() {
    localStorage.setItem('userLibrary', JSON.stringify(myLibrary));
    renderLibraryTable();
    updateCartBadge();
}

function renderLibraryTable() {
    const tableBody = document.getElementById('libraryTableBody');
    const grandTotalSpan = document.getElementById('libraryGrandTotal');
    if (!tableBody) return;

    tableBody.innerHTML = myLibrary.map(item => `
        <tr>
            <td><strong>${item.title}</strong></td>
            <td>₹${item.price.toFixed(2)}</td>
            <td style="color: #ff4757;">-₹${item.discount.toFixed(2)}</td>
            <td>₹${item.total.toFixed(2)}</td>
            <td>
                <button class="remove-btn" onclick="removeFromLibrary(${item.uniqueId})">
                    <i class="fa-solid fa-trash"></i>
                </button>
            </td>
        </tr>
    `).join('');

    const totalVal = myLibrary.reduce((sum, item) => sum + item.total, 0);
    if (grandTotalSpan) {
        grandTotalSpan.innerText = `₹${totalVal.toFixed(2)}`;
    }
}

function updateCartBadge() {
    const badge = document.getElementById('cart-count');
    if (badge) {
        badge.innerText = myLibrary.length;
        badge.style.display = myLibrary.length > 0 ? 'flex' : 'none';
    }
}

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    renderGrid();
    renderLibraryTable();
    updateCartBadge();

    const searchInput = document.querySelector('.search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            const isBookPage = document.body.classList.contains('book-page');
            const isMoviePage = document.body.classList.contains('movie-page');
            
            let sourceList = gamesList;
            if (isBookPage) sourceList = booksList;
            if (isMoviePage) sourceList = moviesList;

            const filtered = sourceList.filter(item => item.title.toLowerCase().includes(val));
            renderGrid(filtered);
        });
    }

    const cartBtn = document.querySelector('.icon-cart');
    const overlay = document.getElementById('libraryOverlay');
    const closeBtn = document.getElementById('closeLibrary');

    if (cartBtn && overlay) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            overlay.style.display = 'flex';
        });
    }
    if (closeBtn && overlay) {
        closeBtn.addEventListener('click', () => {
            overlay.style.display = 'none';
        });
    }
});

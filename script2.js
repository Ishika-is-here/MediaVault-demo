// ==========================================
// 1. DATA - Games, Books, & Movies
// ==========================================
const gamesList = [
    { id: 1, title: "The Last of Us", price: "₹59", img: "images/gameimg/g4.jpeg", category: "Adventure",
        description: "In a post-apocalyptic world, Joel and Ellie must rely on each other to survive against infected creatures and hostile humans."},

    { id: 2, title: "Red Dead Redemption II", price: "₹49", img: "images/gameimg/g5.jpeg", category: "Adventure",
        description: "Arthur Morgan, an outlaw and member of the Van der Linde gang, navigates the decline of the Wild West while trying to survive against government forces and rival gangs."},

    { id: 3, title: "Silent Hill", price: "₹39", img: "images/gameimg/g6.jpeg", category: "Simulation",
        description: "In the eerie town of Silent Hill, Harry Mason searches for his missing daughter, encountering nightmarish creatures and unraveling dark secrets along the way."},

    { id: 4, title: "Lords of The Fallen", price: "₹15", img: "images/gameimg/g7.jpeg", category: "Action",
        description: "In a world where demons have invaded, Harkyn, a convicted criminal, is given a chance at redemption by battling through hordes of demonic enemies to save humanity."},

    { id: 5, title: "Roblox", price: "₹59", img: "images/gameimg/g8.jpeg", category: "Simulation",
        description: "Roblox is an online platform that allows users to create and play games created by other users, offering a wide variety of gaming experiences across different genres."},

    { id: 6, title: "Sinking City", price: "₹49", img: "images/gameimg/g9.jpeg", category: "Action",   
        description: "In the city of Oakmont, which is being flooded by supernatural forces, private investigator Charles Reed must uncover the truth behind the city's curse while battling otherworldly creatures and solving mysteries."},

    { id: 7, title: "Minecraft", price: "₹39", img: "images/gameimg/g10.jpeg", category: "Simulation", 
        description: "A sandbox game where players can build and explore block-based worlds." },

    { id: 8, title: "Amnesia", price: "₹15", img: "images/gameimg/g11.jpeg", category: "Simulation", 
        description: "A psychological horror game where players experience memory loss and confusion." },

    { id: 9, title: "Grand Theft Auto V", price: "₹15", img: "images/gameimg/g12.jpeg", category: "Action", 
        description: "An open-world action-adventure game set in the fictional city of Los Santos." },

    { id: 10, title: "Need for Speed", price: "₹15", img: "images/gameimg/g13.jpeg", category: "Action", 
        description: "A racing game focused on street racing and car customization." },

    { id: 11, title: "Zelda", price: "₹15", img: "images/gameimg/g14.jpeg", category: "Adventure", 
        description: "An action-adventure game featuring Link as he rescues Princess Zelda from the evil Ganon." },

    { id: 12, title: "Uncharted 4", price: "₹15", img: "images/gameimg/g15.jpeg", category: "Adventure", 
        description: "An action-adventure game following the adventures of treasure hunter Nathan Drake." }
];

const booksList = [
    { id: 101, title: "Wuthering Heights", author: "Emily Brontë", genre: "Classics", price: "₹59", img: "images/bookimg/1.jpg",
      description: "A tragic love story between Catherine and Heathcliff set on the Yorkshire moors." }, 

    { id: 102, title: "Sherlock Holmes", author: "Arthur Conan Doyle", genre: "Mystery", price: "₹59", img: "images/bookimg/2.jpg",
      description: "Follow the legendary detective Sherlock Holmes solving mysterious crimes." },

    { id: 103, title: "Anna Karenina", author: "Leo Tolstoy", genre: "Classics", price: "₹59", img: "images/bookimg/3.jpg",
      description: "A deep novel exploring love, betrayal, and Russian society." },

    { id: 104, title: "House of Sky and Breath", author: "Sarah J. Maas", genre: "Fiction", price: "₹59", img: "images/bookimg/4.jpg",
      description: "Fantasy novel full of magic, danger, and romance." },

    { id: 105, title: "The Secret History", author: "Donna Tartt", genre: "Fiction", price: "₹59", img: "images/bookimg/5.jpg",
      description: "A dark academia novel about obsession and murder." },

    { id: 106, title: "1984", author: "George Orwell", genre: "Classics", price: "₹59", img: "images/bookimg/6.jpg",
      description: "A dystopian novel about surveillance and totalitarian control." },

    { id: 107, title: "Caraval", author: "Stephanie Garber", genre: "Fiction", price: "₹59", img: "images/bookimg/7.jpg",
      description: "A magical competition where nothing is what it seems." },

    { id: 108, title: "Two Twisted Crowns", author: "Rachel Gillig", genre: "Fiction", price: "₹59", img: "images/bookimg/8.jpg",
      description: "A dark fantasy filled with cursed magic and secrets." },

    { id: 109, title: "Pride and Prejudice", author: "Jane Austen", genre: "Classics", price: "₹59", img: "images/bookimg/9.jpg",
      description: "A romantic novel of manners set in Georgian England." },

    { id: 110, title: "Murder on the Orient Express", author: "Agatha Christie", genre: "Mystery", price: "₹59", img: "images/bookimg/10.jpg",
      description: "A classic whodunit mystery featuring Hercule Poirot." },

    { id: 111, title: "The Girl with the Dragon Tattoo", author: "Stieg Larsson", genre: "Mystery", price: "₹59", img: "images/bookimg/11.jpg",
      description: "A journalist and hacker investigate a disappearance in this thriller." },

    { id: 112, title: "Gone Girl", author: "Gillian Flynn", genre: "Mystery", price: "₹59", img: "images/bookimg/12.jpg",
      description: "A psychological thriller about a missing wife and marital secrets." }
];

const moviesList = [
    { id: 1001, title: "Fight Club", price: "₹59", img: "images/movieimg/m1.jpeg", videoFile: "https://www.youtube.com/embed/O1nDozs-LxI?si=ojWB1rHSbPJnADMc",
        description: `Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.<br>
        <b>Cast:</b> Brad Pitt, Edward Norton, Helena Bonham Carter, Meat Loaf, Jared Leto.<br>
        <b>Director:</b> David Fincher.<br>
        <b>Genre:</b> Drama, Thriller.<br>
        <b>Release Year:</b> 1999.`, category: "Drama" }, 

    { id: 1002, title: "Interstellar", price: "₹59", img: "images/movieimg/m2.jpeg", videoFile: "https://www.youtube.com/embed/zSWdZVtXT7E?si=BCo_A12lhh0Y42Gc", 
        description: `When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.<br>
        <b>Cast:</b> Matthew McConaughey, Anne Hathaway, Jessica Chastain, Bill Irwin, Ellen Burstyn.<br>
        <b>Director:</b> Christopher Nolan.<br>
        <b>Genre:</b> Adventure, Drama, Sci-Fi.<br>
        <b>Release Year:</b> 2014.`, category: "Sci-Fi" },

    { id: 1003, title: "Jumanji Next Level", price: "₹59", img: "images/movieimg/m3.jpeg", videoFile: "https://www.youtube.com/embed/rBxcF-r9Ibs?si=17pA_7CKk8YAXusa",
        description: `When Spencer goes missing, his group of friends return to Jumanji to travel unexplored territories and help him escape the world's most dangerous game.
        <b>Cast:</b> Dwayne Johnson, Jack Black, Kevin Hart, Karen Gillan, Awkwafina.<br>
        <b>Director:</b> Jake Kasdan.<br>
        <b>Genre:</b> Action, Adventure, Comedy.<br>
        <b>Release Year:</b> 2019.`, category: "Drama" },

    { id: 1004, title: "Spiderman", price: "₹59", img: "images/movieimg/m4.jpeg", videoFile: "https://www.youtube.com/embed/DiTECkLZ8HM?si=2n3nvHppGBq3WMd5",
        description: `Spider-Man seeks the help of Doctor Strange to forget his exposed secret identity as Peter Parker. However, Strange's spell goes horribly wrong, leading to unwanted guests entering their universe.<br>
        <b>Cast:</b> Tom Holland, Zendaya, Mahershala Ali, Jon Favreau.<br>
        <b>Director:</b> Jon Watts.<br>
        <b>Genre:</b> Action, Adventure, Comedy.<br>
        <b>Release Year:</b> 2021.`, category: "Sci-Fi" },

    { id: 1005, title: "IT", price: "₹59", img: "images/movieimg/m5.jpeg", videoFile: "https://www.youtube.com/embed/FnCdOQsX5kc?si=KldZGKn_phYhPxs1",
        description: `Seven helpless and bullied children are forced to face their worst nightmares when Pennywise, a shape-shifting clown, reappears. The clown, an ancient evil torments children before feeding on them.<br>
        <b>Cast:</b> Bill Skarsgård, Jaeden Martell, Finn Wolfhard, Jeremy Ray Taylor.<br>
        <b>Director:</b> Andy Muschietti.<br>
        <b>Genre:</b> Horror, Thriller.<br>
        <b>Release Year:</b> 2017.`, category: "Horror" },

    { id: 1006, title: "The Batman", price: "₹59", img: "images/movieimg/m6.jpeg", videoFile: "https://www.youtube.com/embed/mqqft2x_Aa4?si=DEArUp5j7L2c_Rz3",
        description: `Batman is called to intervene when the mayor of Gotham City is murdered. Soon, his investigation leads him to uncover a web of corruption, linked to his own dark past.<br>
        <b>Cast:</b> Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine.<br>
        <b>Director:</b> Matt Reeves.<br>
        <b>Genre:</b> Action, Crime, Drama.<br>
        <b>Release Year:</b> 2022.`, category: "Sci-Fi" },

    { id: 1007, title: "Pirates of the Caribbean", price: "₹59", img: "images/movieimg/m7.jpeg", videoFile: "https://www.youtube.com/embed/KpFMVcZ4o7U?si=Rawe_h_GgV4BNYRP",
        description: `To break the curse of Flying Dutchman, Captain Jack Sparrow and Henry Turner embark on a mission to find the Trident of Poseidon. They also try to stop Captain Salazar who intends to rule the seas.<br>
        <b>Cast:</b> Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley.<br>
        <b>Director:</b> Joachim Rønning, Espen Sandberg.<br>
        <b>Genre:</b> Action, Adventure, Comedy.<br>
        <b>Release Year:</b> 2017.`, category: "Drama" },

    { id: 1008, title: "The Truman Show", price: "₹59", img: "images/movieimg/m8.jpeg", videoFile: "https://www.youtube.com/embed/dlnmQbPGuls?si=C31bM-96i5su1T9S",
        description: `Executive producer Christof organises a reality show based on the life of an ordinary man, Truman Burbank. But Truman is unaware of the fact that every move of his life is being captured by cameras.<br>
        <b>Cast:</b> Jim Carrey, Laura Linney, Noah Emmerich, Natascha McElhone.<br>
        <b>Director:</b> Peter Weir.<br>
        <b>Genre:</b> Drama.<br>
        <b>Release Year:</b> 1998.`, category: "Drama" },

    { id: 1009, title: "Midsommar", price: "₹59", img: "images/movieimg/m9.jpeg", videoFile: "https://www.youtube.com/embed/1Vnghdsjmd0?si=V5nxGnX4wXVguEuK",
        description: `Dani's psychological trauma affects her relationship with Christian, her lover. However, when they visit their friend's ancestral commune in an effort to mend things, it changes their lives forever.<br>
        <b>Cast:</b> Anya Taylor-Joy, Florence Pugh, David Jonsson, Vivi-Anne Hultén.<br>
        <b>Director:</b> Ari Aster.<br>
        <b>Genre:</b> Horror, Thriller.<br>
        <b>Release Year:</b> 2019.`, category: "Horror" },

    { id: 1010, title: "Dune", price: "₹59", img: "images/movieimg/m10.jpeg", videoFile: "https://www.youtube.com/embed/n9xhJrPXop4?si=OHWGAaDyBBlMoa4v",
        description: `Paul Atreides arrives on Arrakis after his father accepts the stewardship of the dangerous planet. However, chaos ensues after a betrayal as forces clash to control melange, a precious resource.<br>
        <b>Cast:</b> Timothée Chalamet, Zendaya, Rebecca Ferguson, Oscar Isaac.<br>
        <b>Director:</b> Denis Villeneuve.<br>
        <b>Genre:</b> Action, Adventure, Drama.<br>
        <b>Release Year:</b> 2021.`, category: "Sci-Fi" },

    { id: 1011, title: "Black Phone 2", price: "₹59", img: "images/movieimg/m11.jpeg", videoFile: "https://www.youtube.com/embed/v0kqkRZHqk4?si=awwxN0mWUf9Qf9uO",
        description: `As Finn, now 17, struggles with life after his captivity, his sister begins receiving calls in her dreams from the black phone and seeing disturbing visions<br>
        <b>Cast:</b> Mason Thames, Madeleine Yuna Voyles, Evan Jonigkeit.<br>
        <b>Director:</b> Scott Derrickson.<br>
        <b>Genre:</b> Horror, Thriller.<br>
        <b>Release Year:</b> 2025.`, category: "Horror" },

    { id: 1012, title: "The Conjuring", price: "₹59", img: "images/movieimg/m12.jpeg", videoFile: "https://www.youtube.com/embed/ejMMn0t58Lc?si=G5qFcJ0k_Ly93ubP",
        description: `Rod and Carolyn find their pet dog dead under mysterious circumstances and experience a spirit that harms their daughter Andrea. They finally call investigators who can help them get out of the mess.<br>
        <b>Cast:</b> Vera Farmiga, Patrick Wilson, Ron Livingston.<br>
        <b>Director:</b> James Wan.<br>
        <b>Genre:</b> Horror, Thriller.<br>
        <b>Release Year:</b> 2013.`, category: "Horror" }
];

// Load library from browser memory (localStorage)
let myLibrary = JSON.parse(localStorage.getItem('userLibrary')) || [];


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

    // --- CATEGORY/GENRE FILTERING ---
    const currentHash = window.location.hash.substring(1).toLowerCase();
    if (currentHash) {
        displayList = displayList.filter(item => {
            const itemType = item.category || item.genre;
            return itemType && itemType.toLowerCase() === currentHash;
        });
    }

    grid.innerHTML = displayList.map(item => {
        // Every image click now goes straight to openPreview
        let imageClickAction = `onclick="openPreview(${item.id})" style="cursor:pointer"`;

        return `
            <div class="product-card">
                <img src="${item.img}" alt="${item.title}" ${imageClickAction}>
                <div class="product-info">
                    <h3>${item.title}</h3>
                    <span class="price">${item.price}</span>
                    <button class="buy-btn" onclick="addToCart(${item.id})">
                        Add to Cart
                    </button>
                </div>
            </div>
        `;
    }).join('');
}

// Re-render when clicking dropdown links
window.addEventListener('hashchange', () => renderGrid());

function openPreview(itemId) {
    const item = [...moviesList, ...booksList, ...gamesList].find(i => i.id === itemId);
    if (!item) return;

    const modal = document.getElementById('movie-preview-modal');
    const titleEl = document.getElementById('preview-title');
    const descEl = document.getElementById('preview-desc');
    const ytFrame = document.getElementById('youtube-trailer'); // New Iframe
    const imageEl = document.getElementById('preview-image');

    titleEl.innerHTML = item.title;
    descEl.innerHTML = item.description || "Explore this title in MediaVault.";
    
    // Reset displays
    ytFrame.style.display = "none";
    imageEl.style.display = "none";
    ytFrame.src = ""; // Clear old video

    if (item.videoFile) {
        // MOVIES: Show YouTube Trailer
        ytFrame.style.display = "block";
        // Convert a regular YT link to an EMBED link if necessary
        let embedUrl = item.videoFile.replace("watch?v=", "embed/");
        ytFrame.src = embedUrl + "?autoplay=1"; // Add autoplay for better UX
    } else {
        // BOOKS & GAMES: Show Image
        imageEl.style.display = "block";
        imageEl.src = item.img;
    }

    modal.style.display = "block";
}

function closePreview() {
    const modal = document.getElementById('movie-preview-modal');
    const ytFrame = document.getElementById('youtube-trailer');

    if (modal) modal.style.display = "none";
    
    // IMPORTANT: Clear the src so the video stops playing in the background!
    if (ytFrame) ytFrame.src = ""; 
}

// Global click listener for closing modals
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('close-modal') || event.target.id === 'movie-preview-modal') {
        closePreview();
    }
});


function addToCart(id) {
    // Check the bridge variable we passed from PHP
    if (window.userLoggedIn === true) {
        
        // Find the item in your lists
        const item = [...gamesList, ...booksList, ...moviesList].find(i => i.id === id);
        
        if (item) {
            const originalPrice = parseFloat(item.price.replace(/[^\d.]/g, '')) || 0;
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
    } else {
        // Simple and clean: Alert then redirect
        alert("Please login first to add items to your MediaVault!");
        window.location.href = "index.php"; 
    }
}
// ... (Rest of your library functions: removeFromLibrary, saveAndRefresh, renderLibraryTable, updateCartBadge)

function removeFromLibrary(uniqueId) {
    myLibrary = myLibrary.filter(item => item.uniqueId != uniqueId);
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
                <button class="remove-btn" onclick="removeFromLibrary('${item.uniqueId}')">
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

// Function to wipe the whole library
function clearEntireLibrary() {
    if (confirm("Are you sure you want to remove everything from your library?")) {
        myLibrary = []; // Empty the array
        saveAndRefresh(); // This will update localStorage and the UI
    }
}

// Function to "Place Order"
function processOrder() {
    if (myLibrary.length === 0) {
        alert("Your library is empty! Add some games first.");
        return;
    }

    alert("Thank you for your order! Your items are now being processed.");
    
    myLibrary = [];
    saveAndRefresh();
    
    // CHANGE THIS LINE: Use display none instead of removing a class
    document.getElementById('libraryOverlay').style.display = 'none';
}

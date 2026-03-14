// ==========================================
// 1. DATA - Games, Books, & Movies
// ==========================================
const gamesList = [
    { id: 1, title: "The Last of Us", price: "₹59", img: "images/gameimg/g4.jpeg" },
    { id: 2, title: "Red Dead Redemption II", price: "₹49", img: "images/gameimg/g5.jpeg" },
    { id: 3, title: "Silent Hill", price: "₹39", img: "images/gameimg/g6.jpeg" },
    { id: 4, title: "Lords of The Fallen", price: "₹15", img: "images/gameimg/g7.jpeg" },
    { id: 5, title: "Roblox", price: "₹59", img: "images/gameimg/g8.jpeg" },
    { id: 6, title: "Sinking City", price: "₹49", img: "images/gameimg/g9.jpeg" },
    { id: 7, title: "Minecraft", price: "₹39", img: "images/gameimg/g10.jpeg" },
    { id: 8, title: "Amnesia", price: "₹15", img: "images/gameimg/g11.jpeg" }
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
    { id: 1001, title: "Fight Club", price: "₹59", img: "images/movieimg/m1.jpeg" }, 
    { id: 1002, title: "Interstellar", price: "₹59", img: "images/movieimg/m2.jpeg" },
    { id: 1003, title: "Jumanji Next Level", price: "₹59", img: "images/movieimg/m3.jpeg" }, 
    { id: 1004, title: "Spiderman", price: "₹59", img: "images/movieimg/m4.jpeg" },
    { id: 1005, title: "IT", price: "₹59", img: "images/movieimg/m5.jpeg" },
    { id: 1006, title: "Batman", price: "₹59", img: "images/movieimg/m6.jpeg" },
    { id: 1007, title: "Pirates of the Caribbean", price: "₹59", img: "images/movieimg/m7.jpeg" }, 
    { id: 1008, title: "The Truman Show", price: "₹59", img: "images/movieimg/m8.jpeg" }
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

    // Determine which list to use as default
    let displayList = data;
    if (!displayList) {
        if (isBookPage) displayList = booksList;
        else if (isMoviePage) displayList = moviesList;
        else displayList = gamesList;
    }

    // Determine button text
    let btnText = "Add to Cart";

    grid.innerHTML = displayList.map(item => `
        <div class="product-card">
            <img src="${item.img}" alt="${item.title}">
            <div class="product-info">
                <h3>${item.title}</h3>
                <span class="price">${item.price}</span>
                <button class="buy-btn" onclick="addToCart(${item.id})">
                    ${btnText}
                </button>
            </div>
        </div>
    `).join('');
}

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

// --- 1. DATA (Keep your games here) ---
const gamesList = [
    { id: 1, title: "The Last of Us", price: "$59", img: "images/gameimg/g4.jpeg" },
    { id: 2, title: "Red Dead Redemption II", price: "$49", img: "images/gameimg/g5.jpeg" },
    { id: 3, title: "Silent Hill", price: "$39", img: "images/gameimg/g6.jpeg" },
    { id: 4, title: "Lords of The Fallen", price: "$15", img: "images/gameimg/g7.jpeg" },
    { id: 5, title: "Roblox", price: "$59", img: "images/gameimg/g8.jpeg" },
    { id: 6, title: "Sinking City", price: "$49", img: "images/gameimg/g9.jpeg" },
    { id: 7, title: "Minecraft", price: "$39", img: "images/gameimg/g10.jpeg" },
    { id: 8, title: "Amnesia", price: "$15", img: "images/gameimg/g11.jpeg" }
];

let myLibrary = [];

// ==========================================
// 3. GLOBAL FUNCTIONS - (Buttons need these)
// ==========================================

// This function builds the grid of 4 games in a row
function displayGames(data = gamesList) {
    const gameGrid = document.getElementById('gameGrid');
    if (!gameGrid) return;

    gameGrid.innerHTML = data.map(game => `
        <div class="product-card" onmouseenter="changeBg('${game.img}')" onmouseleave="resetBg()">
            <img src="${game.img}" alt="${game.title}">
            <div class="product-info">
                <h3>${game.title}</h3>
                <span class="price">${game.price}</span>
                <button class="buy-btn" onclick="addToCart(${game.id})">Add to Cart</button>
            </div>
        </div>
    `).join('');
}

// This function adds a game to your library
function addToCart(gameId) {
    const game = gamesList.find(g => g.id === gameId);
    
    if (game) {
        const originalPrice = parseFloat(game.price.replace('$', ''));
        const discount = originalPrice * 0.10; // 10% Discount
        const finalPrice = originalPrice - discount;

        const newItem = {
            title: game.title,
            price: originalPrice,
            discount: discount,
            total: finalPrice
        };

        myLibrary.push(newItem);
        renderLibrary(); // Updates the hidden table
        updateCartCount();
        alert(`${game.title} added to your library!`);
    }
}

// This function updates the Library Table
function renderLibrary() {
    const tableBody = document.getElementById('libraryTableBody');
    const grandTotalSpan = document.getElementById('libraryGrandTotal');
    
    if (!tableBody) return;

    tableBody.innerHTML = myLibrary.map(item => `
        <tr>
            <td><strong>${item.title}</strong></td>
            <td>$${item.price.toFixed(2)}</td>
            <td style="color: #ff4757;">-$${item.discount.toFixed(2)}</td>
            <td style="font-weight: bold;">$${item.total.toFixed(2)}</td>
        </tr>
    `).join('');

    const totalVal = myLibrary.reduce((sum, item) => sum + item.total, 0);
    grandTotalSpan.innerText = `$${totalVal.toFixed(2)}`;
}

// ==========================================
// 4. INITIALIZATION - (Runs when page loads)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initial Grid Render
    displayGames();

    // 2. Search Logic
    const searchInput = document.querySelector('.search');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const value = e.target.value.toLowerCase();
            const filtered = gamesList.filter(game => game.title.toLowerCase().includes(value));
            displayGames(filtered);
        });
    }

    // 3. Library Overlay Logic (Open/Close)
    const cartBtn = document.querySelector('.icon-cart');
    const libraryOverlay = document.getElementById('libraryOverlay');
    const closeLibrary = document.getElementById('closeLibrary');

    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            libraryOverlay.style.display = 'flex';
        });
    }

    if (closeLibrary) {
        closeLibrary.addEventListener('click', () => {
            libraryOverlay.style.display = 'none';
        });
    }
});

function updateCartCount() {
    const countElement = document.getElementById('cart-count');
    if (countElement) {
        countElement.innerText = myLibrary.length;
        
        // Add a "bump" animation effect
        countElement.classList.add('bump');
        setTimeout(() => {
            countElement.classList.remove('bump');
        }, 300);
    }
}
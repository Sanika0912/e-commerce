const products = [
    { id: 1, name: "Product 1", price: 100, image: "https://via.placeholder.com/100" },
    { id: 2, name: "Product 2", price: 200, image: "https://via.placeholder.com/100" },
    { id: 3, name: "Product 3", price: 300, image: "https://via.placeholder.com/100" }
];

let cart = [];

// Display products
const productsContainer = document.getElementById('products');
products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.className = 'product-card';
    productCard.innerHTML = `
        <img src="${product.image}" alt="${product.name}">
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    productsContainer.appendChild(productCard);
});

// Add to Cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const cartBtn = document.getElementById('cart-btn');
    const cartItems = document.getElementById('cart-items');
    const cartModal = document.getElementById('cart-modal');
    
    cartBtn.innerText = `Cart (${cart.length})`;
    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.innerText = `${item.name} - $${item.price}`;
        cartItems.appendChild(cartItem);
    });
    
    if (cart.length > 0) {
        cartModal.style.display = 'flex';
    }
}

// Checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
    alert("Thank you for your purchase!");
    cart = [];
    updateCartUI();
});

// Close Cart Modal
document.getElementById('cart-btn').addEventListener('click', () => {
    const cartModal = document.getElementById('cart-modal');
    cartModal.style.display = cartModal.style.display === 'flex' ? 'none' : 'flex';
});

// js/ui.js
document.addEventListener('DOMContentLoaded', async () => {
    const products = await fetchProducts();
    displayProducts(products);

    document.getElementById('product-list').addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const product = products.find(item => item.id === productId);
            addToCart(product);
        }
    });

    document.getElementById('cart-items').addEventListener('change', (event) => {
        if (event.target.classList.contains('quantity-input')) {
            const productId = parseInt(event.target.getAttribute('data-id'));
            const newQuantity = parseInt(event.target.value);
            updateQuantity(productId, newQuantity);
        }
    });

    document.getElementById('clear-cart').addEventListener('click', clearCart);
});

function updateCartUI() {
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const cartCount = document.getElementById('cart-count');

    cartItems.innerHTML = '';
    cart.forEach(item => {
        const cartItem = `
            <div class="list-group-item d-flex justify-content-between align-items-center">
                <span>${item.name} ($${item.price.toFixed(2)})</span>
                <input type="number" min="1" value="${item.quantity}" data-id="${item.id}" class="form-control quantity-input w-25">
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${item.id})">Remove</button>
            </div>
        `;
        cartItems.insertAdjacentHTML('beforeend', cartItem);
    });

    cartTotal.textContent = calculateTotal();
    cartCount.textContent = cart.reduce((count, item) => count + item.quantity, 0);

    document.getElementById('cart-interface').style.display = cart.length > 0 ? 'block' : 'none';
}

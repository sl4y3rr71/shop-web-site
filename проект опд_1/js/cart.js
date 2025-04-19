
function updateCartDisplay() {
    const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
    const cartItemsContainer = document.querySelector('.cart-items');
    cartItemsContainer.innerHTML = '';

    cartItems.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}" style="width: 400px; height: auto;">

            <h3>${item.name}</h3>
            <p>Цена: ${item.price} руб.</p>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}


function clearCart() {
    localStorage.removeItem('cart');
    updateCartDisplay();
}


document.addEventListener('DOMContentLoaded', function() {
    updateCartDisplay();


    const clearCartBtn = document.querySelector('.clear-cart-btn');
    clearCartBtn.addEventListener('click', clearCart);
});

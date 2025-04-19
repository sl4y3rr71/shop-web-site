document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('show-register').addEventListener('click', function () {
        document.getElementById('auth-form').style.display = 'none';
        document.getElementById('register-form').style.display = 'block';
    });

    document.getElementById('show-login').addEventListener('click', function () {
        document.getElementById('register-form').style.display = 'none';
        document.getElementById('auth-form').style.display = 'block';
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".add-to-cart");
    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const name = this.dataset.name;
            const price = this.dataset.price;
            const image = this.dataset.image;

            const product = { name, price, image };
            addToCart(product);
            alert("Товар добавлен в корзину!");
        });
    });

    function addToCart(product) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(product);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
});


function showToast(message) {
    const toast = document.getElementById('toast');
    toast.textContent = message;
    toast.classList.add('show');

    setTimeout(() => {
        toast.classList.remove('show');
    }, 3000); 
}


addToCartButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        const product = products[index];
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        showToast(`Товар "${product.name}" добавлен в корзину!`);
    });
});






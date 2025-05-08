document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            name: "Maison Mihara Yasuhiro Puffer",
            category: "jackets",
            price: 54000,
            image: "image/jackets/jacket1_alt.jpg",
            description: "Унисекс огромный пуховик для любых сценариев использования.",
            sizes: ["S", "M", "L"]
        },
        {
            name: "Christian Dior Paris Puffer Jacket",
            category: "jackets",
            price: 125000,
            image: "image/jackets/jacket2_alt.jpg",
            description: "Незаменимая женская классика.",
            sizes: ["M", "L", "XL"]
        },
        {
            name: "Enfants Riches Deprimes Jacket",
            category: "jackets",
            price: 82000,
            image: "image/jackets/jacket3_alt.jpg",
            description: "Куртка анорак, бокси фит, крайне редкая модель.",
            sizes: ["M", "L", "XL"]
        },
        {
            name: "Enfants Riches Deprimes Overdose Puppy Hoodie",
            category: "hoodie",
            price: 180000,
            image: "image/hoodie/hoodie1_alt.jpg",
            description: "Айконик вещь от Enfants Riches Deprimes, из коллекции FW18, принт в стилистике бренда, имеет бокси фит.",
            sizes: ["M", "L", "XL"]
        },
        {
            name: "Balenciaga PS5 Crop Hoodie",
            category: "hoodie",
            price: 46500,
            image: "image/hoodie/hoodie2_alt.jpg",
            description: "Унисекс худи в идеальном состоянии. Мягкая ткань близка на ощуп к микрофибре.",
            sizes: ["M", "L", "XL"]
        },
        {
            name: "Balenciaga Cargo Transformer",
            category: "jeans",
            price: 37500,
            image: "image/jeans/jeans1_alt.jpg",
            description: "Унисекс джинсы, разбираемые на три составляющих.",
            sizes: ["28", "30", "32"]
        },
        {
            name: "Balenciaga Distressed Pants",
            category: "jeans",
            price: 65500,
            image: "image/jeans/jeans2_alt.jpg",
            description: "Унисекс джинсы с сумасшедшим кроем.",
            sizes: ["26", "28", "30"]
        },
        {
            name: "Vetements Tape Pants",
            category: "pants",
            price: 14500,
            image: "image/pants/pants1_alt.jpg",
            description: "Унисекс штаны из плотного хлопка.",
            sizes: ["46", "48", "50"]
        },
        {
            name: "Штаны 2",
            category: "pants",
            price: 0,
            image: "image/photo.jpg",
            description: "-",
            sizes: ["44", "46", "48"]
        },
        {
            name: "Balenciaga Oversize Sweatshirt",
            category: "sweaters",
            price: 27500,
            image: "image/sweaters/sweater1_alt.jpg",
            description: "Унисекс, плотный флисо-хлопковый свитшот.",
            sizes: ["S", "M", "L", "XL"]
        },
        {
            name: "Кофта 2",
            category: "sweaters",
            price: 0,
            image: "image/photo.jpg",
            description: "Кофта 2",
            sizes: ["M", "L", "XL"]
        },
        {
            name: "Balenciaga Crystal Logo Tee",
            category: "t-shirts",
            price: 24500,
            image: "image/t-shirts/t-shirts1_alt.jpg",
            description: "Позиция из крайне ограниченного тиража бренда.",
            sizes: ["S", "M", "L"]
        },
        {
            name: "Rick Owens Shied Sunglasses",
            category: "accessories",
            price: 38500,
            image: "image/accessories/accessories_alt.jpg",
            description: "Унисекс солнечные очки в неповторимом дизайне.",
            sizes: ["ONE SIZE"]
        }

    ];


    const productList = document.querySelector(".product-list");
    const categoryFilter = document.getElementById("category-filter");
    const priceMin = document.getElementById("price-min");
    const priceMax = document.getElementById("price-max");
    const applyFilters = document.getElementById("apply-filters");

    function renderProducts(filteredProducts) {
        productList.innerHTML = "";
        filteredProducts.forEach(product => {
            const productLink = document.createElement("a");
            productLink.href = `product.html?id=${encodeURIComponent(product.name)}`;
            productLink.className = "product-link";
            
            const productCard = document.createElement("div");
            productCard.className = "product-card";
            productCard.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Размеры: ${product.sizes.join(", ")}</p>
                <p class="price">${product.price} ₽</p>
            `;
            
            const addToCartBtn = document.createElement("button");
            addToCartBtn.className = "add-to-cart";
            addToCartBtn.textContent = "В корзину";
            addToCartBtn.dataset.name = product.name;
            addToCartBtn.dataset.price = product.price;
            addToCartBtn.dataset.image = product.image;
            
            productCard.appendChild(addToCartBtn);
            productLink.appendChild(productCard);

            productList.appendChild(productLink);

        });
    }

    function filterProducts() {
        const selectedCategory = categoryFilter.value;
        const minPrice = parseFloat(priceMin.value) || 0;
        const maxPrice = parseFloat(priceMax.value) || Infinity;

        const filteredProducts = products.filter(product => {
            return (selectedCategory === "all" || product.category === selectedCategory) &&
                   product.price >= minPrice &&
                   product.price <= maxPrice;
        });

        renderProducts(filteredProducts);
    }

    applyFilters.addEventListener("click", filterProducts);


    renderProducts(products);
});

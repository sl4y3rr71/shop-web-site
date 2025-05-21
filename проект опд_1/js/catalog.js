document.addEventListener("DOMContentLoaded", function() {
    const products = [
        {
            name: "Maison Mihara Yasuhiro Puffer",
            category: "jackets",
            price: 54000,
            image: "image/jackets/jacket1_alt.jpg",
            description: "Унисекс огромный пуховик для любых сценариев носки...",
            sizes: ["S", "M", "L"]
        },
        {
            name: "Christian Dior Paris Puffer Jacket",
            category: "jackets",
            price: 125000,
            image: "image/jackets/jacket2_alt.jpg",
            description: "Незаменимая женская классика...",
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
            name: "Enfants Riches Deprimes Cowboy",
            category: "shoes",
            price: 75000,
            image: "image/shoes/shoes2_alt.jpg",
            description: "Казаки от Enfants Riches Deprimes , в стиле вестерна....",
            sizes: ["43", "44", "45"]
        },
        {
            name: "Enfants Riches Deprimes Overdose Puppy Hoodie",
            category: "hoodie",
            price: 180000,
            image: "image/hoodie/hoodie1_alt.jpg",
            description: "Айконик вещь от Enfants Riches Deprimes..",
            sizes: ["M", "L", "XL"]
        },
        {
            name: "Balenciaga PS5 Crop Hoodie",
            category: "hoodie",
            price: 46500,
            image: "image/hoodie/hoodie2_alt.jpg",
            description: "Унисекс худи в идеальном состоянии...",
            sizes: ["M", "L", "XL"]
        },
        {
            name: "Gallery Dept x Art That Kills",
            category: "hoodie",
            price: 180000,
            image: "image/hoodie/hoodie3_alt.jpg",
            description: "Довольная редкая модель, капюшон с ворсом и studded...",
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
            name: "Balenciaga Monogram Oversize Viscose Pants",
            category: "pants",
            price: 41000,
            image: "image/pants/pants2_alt.jpg",
            description: "Унисекс наитончайшие штаны из вискозы.",
            sizes: ["24", "26", "28"]
        },
        {
            name: "Rick Owens Track Full Zip Pants",
            category: "pants",
            price: 42000,
            image: "image/pants/pants3_alt.jpg",
            description: "Унисекс штаны с большими молниями по внешнему шву...",
            sizes: ["24", "26", "28"]
        },
        {
            name: "Enfants Riches Deprimes Murder Trial Menendez",
            category: "pants",
            price: 160000,
            image: "image/pants/pants4_alt.jpg",
            description: "Культовая работа Генри Леви, за которой охотятся многие...",
            sizes: ["24", "26", "28"]
        },
        {
            name: "Balenciaga Metal Tee",
            category: "t-shirts",
            price: 44500,
            image: "image/t-shirts/t-shirts2_alt.jpg",
            description: "Унисекс футболка из нежного материала. Посадка, стандартная, не длинная но....",
            sizes: ["S", "M", "L"]
        },
        {
            name: "Saint Laurent Paris Punch",
            category: "shoes",
            price: 25000,
            image: "image/shoes/shoes_alt.jpg",
            description: "Довольно редкая пара, кеды очень легкие, не чувствуются на ногах....",
            sizes: ["42", "43", "44"]
        },
        {
            name: "Vetements Tape Pants",
            category: "pants",
            price: 14500,
            image: "image/pants/pants1_alt.jpg",
            description: "Унисекс штаны из плотного хлопка.Подойдут для всех сценарие носки...",
            sizes: ["26", "28", "30"]
        },
        {
            name: "Attachment Cargo",
            category: "jeans",
            price: 30000,
            image: "image/jeans/jeans3_alt.jpg",
            description: "Плотные карго штаны, от японского бренда Attachment, очень качественный материал...",
            sizes: ["26", "28", "30"]
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
            name: "Vetements Main Stream Turtlneck",
            category: "sweaters",
            price: 26500,
            image: "image/sweaters/sweater3_alt.jpg",
            description: "Унисекс, слегка обтягивающая водолазка.",
            sizes: ["M", "L", "XL"]
        },
        {
            name: "Givenchy I Feel Love Sweater",
            category: "sweaters",
            price: 36000,
            image: "image/sweaters/sweater2_alt.jpg",
            description: "Унисекс крупно-вязанный плотный свитер.",
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
            name: "Enfants Riches Deprimes Gun Girl Hoodie ",
            category: "hoodie",
            price: 190000,
            image: "image/hoodie/hoodie4_alt.jpg",
            description: "Очень редкий худи, меньше 30 штук на весь мир....",
            sizes: ["M", "L"]
        },
        {
            name: "Enfants Riches Deprimes “EGOISTE” Tee",
            category: "t-shirts",
            price: 190000,
            image: "image/t-shirts/t-shirts3_alt.jpg",
            description: "Очень редкая футболка, из самых первых коллекций...",
            sizes: ["M", "L"]
        },
        {
            name: "Enfants Riches Deprimes Jesus says, “NO”",
            category: "t-shirts",
            price: 90000,
            image: "image/t-shirts/t-shirts4_alt.jpg",
            description: "На футболке изображены, панки один из них держит...",
            sizes: ["M"]
        },
        {
            name: "Rick Owens Geobasket 2013",
            category: "shoes",
            price: 45000,
            image: "image/shoes/shoes3_alt.jpg",
            description: "Пара отличается от новых коллекций тем, что сделана из...",
            sizes: ["43", "44", "45"]
        }

    ];

    const productList = document.querySelector(".product-list");
    const categoryFilter = document.getElementById("category-filter");
    const priceMin = document.getElementById("price-min");
    const priceMax = document.getElementById("price-max");
    const applyFilters = document.getElementById("apply-filters");

    function renderProducts(filteredProducts, container = productList) {
        container.innerHTML = "";
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

            container.appendChild(productLink);

        });
    }

    function filterProducts() {
        const selectedCategory = categoryFilter ? categoryFilter.value : "all";
        const minPrice = priceMin ? parseFloat(priceMin.value) || 0 : 0;
        const maxPrice = priceMax ? parseFloat(priceMax.value) || Infinity : Infinity;

        const filteredProducts = products.filter(product => {
            return (selectedCategory === "all" || product.category === selectedCategory) &&
                   product.price >= minPrice &&
                   product.price <= maxPrice;
        });

        renderProducts(filteredProducts);
    }

    if (applyFilters) {
        applyFilters.addEventListener("click", filterProducts);
    }

    
    if (productList) {
        renderProducts(products);
    }

    
    const seasonHitsContainer = document.getElementById("season-hits");
    if (seasonHitsContainer) {
        function getRandomProducts(arr, count) {
            const shuffled = arr.slice().sort(() => 0.5 - Math.random());
            return shuffled.slice(0, count);
        }
        const randomProducts = getRandomProducts(products, 4);
        renderProducts(randomProducts, seasonHitsContainer);
    }
});

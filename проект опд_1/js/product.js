document.addEventListener("DOMContentLoaded", function() {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    
    const products = [
    {
            name: "Maison Mihara Yasuhiro Puffer",
            price: 54000,
            images: ["image/jackets/jacket1_alt.jpg","image/jackets/jacket1_alt2.jpg", "image/jackets/jacket1_alt3.jpg"],
            description: "Унисекс огромный пуховик для любых сценариев использования.Флагманская линейка бренда, цены в бутиках от 1.000€.Теплый уютный и максимально приятный!Подойдет на любой рост и вес, очень широкий!Отличительная особенность - большая, как будто игрушечная молния.",
            sizes: ["S", "M", "L"]
    
    },
    {
            name: "Christian Dior Paris Puffer Jacket",
            price: 125000,
            images: ["image/jackets/jacket2_alt.jpg", "image/jackets/jacket2_alt2.jpg","image/jackets/jacket2_alt3.jpg"],
            description: "Незаменимая женская классика. Уютный и теплый пуховик.",
            sizes: ["M", "L", "XL"]
    },
    {
            name: "Enfants Riches Deprimes Jacket",
            price: 82000,
            images: ["image/jackets/jacket3_alt.jpg","image/jackets/jacket3_alt2.jpg", "image/jackets/jacket3_alt3.jpg"],
            description: "Куртка анорак, бокси фит, крайне редкая модель.",
            sizes: ["S", "M", "XL"]
    },
    {
            name: "Enfants Riches Deprimes Overdose Puppy Hoodie",
            price: 180000,
            images: ["image/hoodie/hoodie1_alt.jpg","image/hoodie/hoodie1_alt2.jpg", "image/hoodie/hoodie1_alt3.jpg"],
            description: "Айконик вещь от Enfants Riches Deprimes, из коллекции FW18, принт в стилистике бренда, имеет бокси фит.",
            sizes: ["M", "L", "XL"]
    },
    {
        name: "Balenciaga Cargo Transformer",
        price: 37500,
        images: ["image/jeans/jeans1_alt.jpg", "image/jeans/jeans1_alt2.jpg", "image/jeans/jeans1_alt3.jpg", "image/jeans/jeans1_alt4.jpg"],
        description: "Унисекс джинсы, разбираемые на три составляющих.Полноценные брюки, длинные шорты, короткие шорты.Культовые джинсы, ведь удобнее этой конструкции врятли можно что-то придумать.Подходят под любые сценарии носки!",
        sizes: ["28", "30", "32"]
    },
    {
        name: "Balenciaga Distressed Pants",
        price: 65500,
        images: ["image/jeans/jeans2_alt.jpg", "image/jeans/jeans2_alt2.jpg", "image/jeans/jeans2_alt3.jpg", "image/jeans/jeans2_alt4.jpg"],   
        description: "Унисекс джинсы с сумасшедшим кроем.Посадка выделит вас из любой толпы, вы будете номер один в них.Мягкий, но плотный материал.Заводской Дистресс эффект.",
        sizes: ["26", "28", "30"]
    },
    {
        name: "Vetements Tape Pants",
        price: 14500,
        images: ["image/pants/pants1_alt.jpg", "image/pants/pants1_alt2.jpg", "image/pants/pants1_alt3.jpg", "image/pants/pants1_alt4.jpg"],
        description: "Унисекс штаны из плотного хлопка.Подойдут для всех сценариев носки.Уютные, тянутся, классно сидят.",
        sizes: ["46", "48", "50"]
    },
    {
        name: "Штаны 2",
        price: 0,
        images: ["image/photo.jpg"],
        description: "-",
        sizes: ["44", "46", "48"]
    },
    {
        name: "Balenciaga Oversize Sweatshirt",
        price: 27500,
        images: ["image/sweaters/sweater1_alt.jpg", "image/sweaters/sweater1_alt2.jpg", "image/sweaters/sweater1_alt3.jpg"],
        description: ["Унисекс, плотный флисо-хлопковый свитшот.Имеются подвязки на поясе и позволяют создавать любо длину,уютная кофта для любого сценария носки."],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        name: "Кофта 2",
        price: 0,
        images: ["image/photo.jpg"],
        description: "Кофта 2",
        sizes: ["M", "L", "XL"]
    },
    {
        name: "Balenciaga Crystal Logo Tee",
        price: 24500,
        images: ["image/t-shirts/t-shirts1_alt.jpg", "image/t-shirts/t-shirts1_alt2.jpg", "image/t-shirts/t-shirts1_alt3.jpg", "image/t-shirts/t-shirts1_alt4.jpg"],
        description: "Позиция из крайне ограниченного тиража бренда.Интегрированы искусственные кристаллы.Посадка легким оверсайзом.",
        sizes: ["S", "M", "L"]
    },
    {
        name: "Rick Owens Shied Sunglasses",
        price: 38500,
        images: ["image/accessories/accessories_alt.jpg", "image/accessories/accessories_alt2.jpg", "image/accessories/accessories_alt3.jpg", "image/accessories/accessories_alt4.jpg"],
        description: "Унисекс солнечные очки в неповторимом дизайне.Богатый комплект с большим чехлом.",
        sizes: ["ONE SIZE"]
    },
    {
        name: "Balenciaga PS5 Crop Hoodie",
        price: 46500,
        images: ["image/hoodie/hoodie2_alt.jpg", "image/hoodie/hoodie2_alt2.jpg","image/hoodie/hoodie2_alt3.jpg"],
        description: "Унисекс худи в идеальном состоянии. Мягкая ткань близка на ощуп к микрофибре.",
        sizes: ["M", "L", "XL"]
    },

 
    ];

    const product = products.find(p => p.name === productId);

    if (product) {
        document.getElementById("product-name").textContent = product.name;
        document.getElementById("product-price").textContent = `${product.price} ₽`;
        document.getElementById("product-description").textContent = product.description;
        let currentImageIndex = 0; 
        const productImageElement = document.getElementById("product-image");
        productImageElement.src = product.images[currentImageIndex]; 

       

        document.getElementById("next-image").addEventListener("click", function() {
            currentImageIndex = (currentImageIndex + 1) % product.images.length; 
            productImageElement.src = product.images[currentImageIndex];
        });



        document.getElementById("prev-image").addEventListener("click", function() {
            currentImageIndex = (currentImageIndex - 1 + product.images.length) % product.images.length; 
            productImageElement.src = product.images[currentImageIndex];
        });


        const sizeSelect = document.getElementById("size");
        product.sizes.forEach(size => {
            const option = document.createElement("option");
            option.value = size;
            option.textContent = size;
            sizeSelect.appendChild(option);
        });

        document.getElementById("add-to-cart-btn").addEventListener("click", function() {
            const selectedSize = sizeSelect.value;
            const cartItem = {
                name: product.name,
                price: product.price,
                image: product.images[currentImageIndex],

                size: selectedSize
            };
            addToCart(cartItem);
            alert("Товар добавлен в корзину!");
        });
        

        productImageElement.addEventListener("click", function() {
            const modalImage = document.createElement("img");
            modalImage.src = product.images[currentImageIndex];
            modalImage.style.width = "600px"; 
            modalImage.style.height = "auto"; 

            const modal = document.createElement("div");
            modal.style.position = "fixed";
            modal.style.top = "0";
            modal.style.left = "0";
            modal.style.width = "100%";
            modal.style.height = "100%";
            modal.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
            modal.style.display = "flex";
            modal.style.justifyContent = "center";
            modal.style.alignItems = "center";
            modal.style.zIndex = "1000";

            modal.appendChild(modalImage);
            document.body.appendChild(modal);

            modal.addEventListener("click", function() {
                document.body.removeChild(modal);
            });
        });
    } else {

        document.querySelector("main").innerHTML = "<h2>Товар не найден</h2>";
    }

    function addToCart(item) {
        let cart = JSON.parse(localStorage.getItem("cart")) || [];
        cart.push(item);
        localStorage.setItem("cart", JSON.stringify(cart));
    }
});

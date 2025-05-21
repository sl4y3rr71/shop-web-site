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
        sizes: ["26", "28", "30"]
    },
    {
        name: "Balenciaga Monogram Oversize Viscose Pants",
        price: 41000,
        images: ["image/pants/pants2_alt.jpg","image/pants/pants2_alt2.jpg","image/pants/pants2_alt3.jpg"],
        description: "Унисекс наитончайшие штаны из вискозы.Выглядят как пижама.Безумно красивые, эффектные штаны.Хоть бренд и заигрывает с домашней одеждой, но их можно, и даже нужно брать на выходы, притягивают много взглядов.Очень длинные, можно играться с обувью заправлять из или просто оставлять болтаться и создавать различные формы.Выполнены полностью из вискозы, а значит идеально продуваются и дышат, на теле не ощущаются вовсе! ",
        sizes: ["24", "26", "28"]
    },
    {
        name: "Rick Owens Track Full Zip Pants",
        price: 42000,
        images: ["image/pants/pants3_alt.jpg","image/pants/pants3_alt2.jpg","image/pants/pants3_alt3.jpg"],
        description: "Унисекс штаны с большими молниями по внешнему шву обоих штанин.Свободные, приятные, максимально уютные.Под любой сценарий носки.",
        sizes: ["24", "26", "28"]
    },
    {
        name: "Enfants Riches Deprimes Murder Trial Menendez",
        price: 160000,
        images: ["image/pants/pants4_alt.jpg","image/pants/pants4_alt2.jpg","image/pants/pants4_alt3.jpg"],
        description: "Культовая работа Генри Леви, за которой охотятся многие фанаты бренда, это история про двух истории двух братьев убийц: Эрику и Лайлу Менендес. “Эрик Менендес,  Лайл Менендес - американские убийцы, родные братья, которые 20 августа 1989 из корыстных побуждений совершили убийство своих родителей и скрывавшие убийство пол года, с целью унаследовать многомиллионное состояние своего отца",
        sizes: ["24", "26", "28"]
    },
    {
        name: "Balenciaga Oversize Sweatshirt",
        price: 27500,
        images: ["image/sweaters/sweater1_alt.jpg", "image/sweaters/sweater1_alt2.jpg", "image/sweaters/sweater1_alt3.jpg"],
        description: ["Унисекс, плотный флисо-хлопковый свитшот.Имеются подвязки на поясе и позволяют создавать любо длину,уютная кофта для любого сценария носки."],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        name: "Vetements Main Stream Turtlneck",
        price: 26500,
        images: ["image/sweaters/sweater3_alt.jpg","image/sweaters/sweater3_alt2.jpg","image/sweaters/sweater3_alt3.jpg"],
        description: "Унисекс, слегка обтягивающая водолазка.Идеальное состояние.Сильно тянется и подходит на любое телосложение.Лаконичный дизайн.На вороте принт с двух сторон..",
        sizes: ["M", "L", "XL"]
    },
    {
        name: "Givenchy I Feel Love Sweater",
        price: 36000,
        images: ["image/sweaters/sweater2_alt.jpg","image/sweaters/sweater2_alt2.jpg","image/sweaters/sweater2_alt3.jpg"],
        description: "Унисекс крупно-вязанный плотный свитер.Длина по спинке - 75 см.Ширина в подмышках - 52 см.",
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
        name: "Balenciaga PS5 Crop Hoodie",
        price: 46500,
        images: ["image/hoodie/hoodie2_alt.jpg", "image/hoodie/hoodie2_alt2.jpg","image/hoodie/hoodie2_alt3.jpg"],
        description: "Унисекс худи в идеальном состоянии. Мягкая ткань близка на ощуп к микрофибре.",
        sizes: ["M", "L", "XL"]
    },
    {
        name: "Gallery Dept x Art That Kills",
        price: 180000,
        images: ["image/hoodie/hoodie3_alt.jpg", "image/hoodie/hoodie3_alt2.jpg","image/hoodie/hoodie3_alt3.jpg"],
        description: "Довольная редкая модель, капюшон с ворсом и studded элементами, на локтях кожаные вставки, также на рукавах есть studded элементы",
        sizes: ["M", "L", "XL"]
    },
    {
        name: "Balenciaga Metal Tee",
        price: 44500,
        images: ["image/t-shirts/t-shirts2_alt.jpg", "image/t-shirts/t-shirts2_alt2.jpg", "image/t-shirts/t-shirts2_alt3.jpg"],
        description: "Унисекс футболка из нежного материала.Посадка, стандартная, не длинная но широкая, для любого телосложения.Небольшой эффект потрепанности с завода, выраженный в принте.Эксклюзив для РФ.",
        sizes: ["S", "M", "L"]
    },
    {
        name: "Saint Laurent Paris Punch",
        price: 44500,
        images: ["image/shoes/shoes_alt.jpg", "image/shoes/shoes_alt2.jpg", "image/shoes/shoes_alt3.jpg"],
        description: "Довольно редкая пара, кеды очень легкие, не чувствуются на ногах, идеальный вариант на весну/лето.",
        sizes: ["42", "43", "44"]
    },
    {
        name: "Enfants Riches Deprimes Cowboy",
        price: 75000,
        images: ["image/shoes/shoes2_alt.jpg", "image/shoes/shoes2_alt2.jpg", "image/shoes/shoes2_alt3.jpg"],
        description: "Казаки от Enfants Riches Deprimes , в стиле вестерна, эксклюзив для Mr.Porter, поставлена профилактика Vibram.",
        sizes: ["43", "44", "45"]
    },
    {
        name: "Enfants Riches Deprimes Gun Girl Hoodie ",
        price: 190000,
        images: ["image/hoodie/hoodie4_alt.jpg", "image/hoodie/hoodie4_alt2.jpg","image/hoodie/hoodie4_alt3.jpg"],
        description: "Очень редкий худи, меньше 30 штук на весь мир, есть в личном гардеробе у Генри Леви, можно считать граалем.",
        sizes: ["M", "L"]
    },
    {
        name: "Enfants Riches Deprimes “EGOISTE” Tee",
        price: 190000,
        images: ["image/t-shirts/t-shirts3_alt.jpg", "image/t-shirts/t-shirts3_alt2.jpg", "image/t-shirts/t-shirts3_alt3.jpg"],
        description: "Очень редкая футболка, из самых первых коллекций, была на Maxfielda, Максфилд это магазин где выставляются самые редкие вещи и происходит аукцион, считается святым граалем.",
        sizes: ["M", "L"]
    },
    {
        name: "Enfants Riches Deprimes Jesus says, “NO”",
        price: 90000,
        images: ["image/t-shirts/t-shirts4_alt.jpg", "image/t-shirts/t-shirts4_alt2.jpg", "image/t-shirts/t-shirts4_alt3.jpg"],
        description: "На футболке изображены, панки один из них держит святую библию, но она перевернута. Перевернутый крест используются в качестве антихристианского символа и символа сатанизма, на принте написано, что Иисус умер за наши грехи, начните молиться, бог сказал «нет», следуйте за ним, футболка довольна редкая.",
        sizes: ["M"]
    },
    {
        name: "Rick Owens Geobasket 2013",
        price: 45000,
        images: ["image/shoes/shoes3_alt.jpg", "image/shoes/shoes3_alt2.jpg", "image/shoes/shoes3_alt3.jpg"],
        description: "Пара отличается от новых коллекций тем, что сделана из более качественной кожи, стоит дорогая профилактика Vibram, подошва менялась так как паре 11 лет..",
        sizes: ["43","44","45"]
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

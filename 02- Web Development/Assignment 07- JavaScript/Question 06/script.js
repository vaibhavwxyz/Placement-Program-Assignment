const container = document.querySelector(".container");
const cartItemsContainer = document.querySelector(".cart-items");
const cart = [];

function renderCart() {
  cartItemsContainer.innerHTML = "";

  cart.forEach((item) => {
    const cartItem = document.createElement("div");
    cartItem.className = "cart-item";

    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    cartItem.appendChild(img);

    const info = document.createElement("div");
    const title = document.createElement("p");
    title.textContent = item.title;
    info.appendChild(title);

    const price = document.createElement("p");
    price.textContent = "$" + item.price;
    info.appendChild(price);

    const quantity = document.createElement("p");
    quantity.textContent = "Quantity: " + item.quantity;
    info.appendChild(quantity);

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove";
    removeBtn.addEventListener("click", () => {
      removeItemFromCart(item);
    });
    info.appendChild(removeBtn);

    cartItem.appendChild(info);
    cartItemsContainer.appendChild(cartItem);
  });
}

function removeItemFromCart(item) {
  const itemIndex = cart.findIndex((i) => i.id === item.id);
  if (itemIndex !== -1) {
    cart.splice(itemIndex, 1);
    renderCart();
  }
}

function addToCart(product) {
  const existingItem = cart.find((item) => item.id === product.id);
  if (existingItem) {
    existingItem.quantity++;
  } else {
    const newItem = {
      id: product.id,
      image: product.image,
      title: product.title,
      price: product.price,
      quantity: 1,
    };
    cart.push(newItem);
  }
  renderCart();
}

// Fetch product data from API
fetch("https://fakestoreapi.com/products")
  .then((response) => response.json())
  .then((products) => {
    // Iterate through each product
    products.forEach((product) => {
      // Create product card element
      const card = document.createElement("div");
      card.className = "product-card";

      // Set product image
      const img = document.createElement("img");
      img.src = product.image;
      img.alt = product.title;
      card.appendChild(img);

      // Set product title
      const title = document.createElement("h3");
      title.textContent = product.title;
      card.appendChild(title);

      // Set product price
      const price = document.createElement("p");
      price.textContent = "$" + product.price;
      card.appendChild(price);

      // Add to Cart button
      const addToCartBtn = document.createElement("button");
      addToCartBtn.textContent = "Add to Cart";
      addToCartBtn.addEventListener("click", () => {
        addToCart(product);
      });
      card.appendChild(addToCartBtn);

      // Append product card to container
      container.appendChild(card);
    });
  })
  .catch((error) => {
    console.log("Error fetching products:", error);
  });

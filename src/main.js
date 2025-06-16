import { images } from "./images";
const container = document.querySelector(".container");
const cart = document.querySelector("#cart");
const cartContainer = document.querySelector(".cart");

const shoppingCart = [];

const products = [
  {
    id: 1,
    name: "Soda Saborizada",
    description: "Soda",
    price: `$${19.99}`,
    img: images[0],
  },
  {
    id: 2,
    name: "Blue Alaska",
    description: "Bebida Alcoholica",
    price: `$${29.99}`,
    img: images[1],
  },
  {
    id: 3,
    name: "Mick Jagger",
    description: "Bebida Alcoholica",
    price: `$${39.99}`,
    img: images[2],
  },
];

const renderCart = () => {
  const cartBox = document.getElementById("cart-box");
  cartBox.innerHTML = "";

  shoppingCart.forEach((item) => {
    const cartItem = document.createElement("li");
    cartItem.classList = "cart-item";

    cartItem.innerHTML = `
      <div class="item">
        <h4>${item.product.name}</h4>
        <span>${item.product.price}</span>
        <span>${item.quantity}</span>
      </div>
      <img src="${item.product.img}" alt="${item.product.name}" />
      <button class="remove-item>R</button>
    `;
    cartBox.appendChild(cartItem);
  });
};

const addToCart = (itemId) => {
  const product = products.find((p) => p.id === itemId);
  const itemCart = shoppingCart.find((item) => item.product.id === itemId);

  if (itemCart) {
    itemCart.quantity += 1;
  } else {
    shoppingCart.push({
      product,
      quantity: 1,
    });
  }
  renderCart();
};

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList = "card";
  card.setAttribute("data-id", `${product.id}`);

  const addBtn = document.createElement("button");
  addBtn.innerText = "Add to Cart";
  addBtn.classList = "btn";
  addBtn.addEventListener("click", () => addToCart(product.id));

  card.innerHTML = `
    <img src="${product.img}" alt="${product.name}"
    <div class="card-desc">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <span>${product.price}</span>
    </div>
  `;
  card.appendChild(addBtn);
  container.appendChild(card);
});

cart.addEventListener("click", () => {
  cartContainer.classList.toggle("hide");
});

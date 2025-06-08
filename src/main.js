import { images } from "./images";
const container = document.querySelector(".container");
const cart = document.querySelector("#cart");
const cartContainer = document.querySelector(".cart");

const cartContent = []

const products = [
  { id: 1, name: "Soda Saborizada", description: "Soda", price: `$${19.99}`, img: images[0] },
  { id: 2, name: "Blue Alaska", description: "Bebida Alcoholica", price: `$${29.99}`, img: images[1] },
  { id: 3, name: "Mick Jagger", description: "Bebida Alcoholica", price: `$${39.99}`, img: images[2] },
]

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");
  card.setAttribute("data-id", product.id);

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;
  img.id = product.id;

  const cardDesc = document.createElement("div");
  cardDesc.classList.add("card-desc");

  const title = document.createElement("h2");
  title.textContent = product.name;

  const desc = document.createElement("p");
  desc.textContent = product.description;

  const price = document.createElement("span");
  price.textContent = product.price;

  const button = document.createElement("button");
  button.classList.add("btn");
  button.textContent = "Agregar al carrito";

  card.appendChild(img);
  card.appendChild(cardDesc);
  cardDesc.appendChild(title);
  cardDesc.appendChild(desc)
  cardDesc.appendChild(price);
  card.appendChild(button);

  container.appendChild(card);
})

const buttons = document.querySelectorAll(".btn");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const elem = parseInt(e.target.parentElement.dataset.id);
    const cartItem = products.map(item => {
      if (item.id === elem) {
        console.log({ ...item })
        return { ...item }
      }
      return null;
    })
    console.log(cartItem)
  })
})


cart.addEventListener("click", () => {
  cartContainer.classList.toggle("hide");
})

cartContent.forEach((item) => {
  console.log(item)
})

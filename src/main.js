import { images } from "./images";
const container = document.querySelector(".container");

const products = [
  { id: 1, name: "Soda Saborizada", description: "Soda", price: `$${19.99}`, img: images[0] },
  { id: 2, name: "Blue Alaska", description: "Bebida Alcoholica", price: `$${29.99}`, img: images[1] },
  { id: 3, name: "Mick Jagger", description: "Bebida Alcoholica", price: `$${39.99}`, img: images[2] },
]

products.forEach((product) => {
  const card = document.createElement("div");
  card.classList.add("card");

  const img = document.createElement("img");
  img.src = product.img;
  img.alt = product.name;

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
  card.appendChild(title);
  card.appendChild(desc);
  card.appendChild(price);
  card.appendChild(button);

  container.appendChild(card);
})



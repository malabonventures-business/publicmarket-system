import { db } from "./firebase.js";
import { collection, addDoc, serverTimestamp }
from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

let cart = [];
let total = 0;

window.addToCart = function () {
  const name = document.getElementById("product").value;
  const price = Number(document.getElementById("price").value);

  if (!name || !price) return alert("Missing fields");

  cart.push({ name, price });
  total += price;

  renderCart();
};

function renderCart() {
  const list = document.getElementById("cart");
  list.innerHTML = "";

  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - ₱${item.price}`;
    list.appendChild(li);
  });

  document.getElementById("total").textContent = total;
}

window.checkout = async function () {
  if (cart.length === 0) return alert("Cart empty");

  await addDoc(collection(db, "sales"), {
    items: cart,
    total,
    createdAt: serverTimestamp()
  });

  alert("Sale saved!");
  cart = [];
  total = 0;
  renderCart();
};

const cart = document.querySelector(".header__basket-logo");

cart.addEventListener("click", () => {
  if (cartList.style.display == "none") {
    cartList.style.display = "block";
  } else if (cartList.style.display !== "none") {
    cartList.style.display = "none";
  }
});

function renderCardProduct(card) {
  // ul
  const cartElement = document.createElement("li"); // li - элемент
  cartElement.innerHTML = `
  <article class="header__basket-product cart-product">
  <img
    src="${card.image}"
    alt="MacBook"
    class="cart-product__photo"
  />
  <div class="cart-product__text">
    <h3 class="cart-product__description">
      ${card.name}
    </h3>
    <span class="cart-product__price">${card.price}</span>
  </div>
  <button class="cart-product__delete">X</button>
</article>
`;

  cartList.append(cartElement);
}

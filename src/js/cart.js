const cart = document.querySelector(".header__basket-logo"); // button cart
const cartList = document.querySelector(".header__basket-list"); // ul
const cartDelete = document.querySelector(".cart-product__delete"); // button delete card from cart
const cartProducts = [];
console.log(cartProducts);

cartList.addEventListener("click", (event) => {
  if (event.target.dataset.id) {
    const ID = event.target.dataset.id;
    for (let cartProduct of cartProducts) {
      if (cartProduct.id == ID) {
        let li = document.getElementById(`${ID}`);
        li.remove();
        cartProducts.forEach(function (el, i) {
          if (el.id == ID) cartProducts.splice(i, 1);
        });
      }
    }
  }
});

cart.addEventListener("click", () => (cartList.style.display = "block"));

function renderCartProduct(card) {
  const cartElement = document.createElement("li"); // li
  cartElement.setAttribute("id", `${card.id}`);
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
    <button class="cart-product__delete" data-id=${card.id}>X</button>
    </article>
    `;
  cartProducts.push(cartElement);
  cartList.append(cartElement);
}

const clearCart = document.querySelector(".header__basket-button"); // delete all cart list
clearCart.addEventListener("click", () => {
  (cartList.innerHTML = "") & (cartList.style.display = "none");
  cartProducts.length = 0;
});

productCards.addEventListener("click", (event) => {
  if (event.target.dataset.id) {
    const ID = event.target.dataset.id;
    if (products == null) {
      console.log("ничего нет");
    } else
      for (let card of products) {
        if (ID == card.id) {
          renderCartProduct(card);
        }
      }
  }
}); // закидывание в корзину карточки

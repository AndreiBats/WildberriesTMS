const cart = document.querySelector(".header__basket-logo"); // button cart
const cartList = document.querySelector(".header__basket-list"); // ul
const cartDelete = document.querySelector(".cart-product__delete"); // button delete card from cart
const fullPrice = document.querySelector(".header__basket-bottom"); // fullprice of product
const clearCart = document.querySelector(".header__basket-button"); // delete all cart list
const cartSum = document.querySelector(".header__basket-bottom");
const cartProducts = [];

function FP() {
  let prices = Object.values(localStorage);
  if (Object.values(localStorage) !== null) {
    for (let price of prices) {
      let sum = 0;
      let cost = +JSON.parse(price).price;
      sum += cost;
      console.log(sum);
      fullPrice.append(sum);
    }
  }
}
FP();

function lS() {
  let values = Object.values(localStorage);
  if (Object.values(localStorage) !== null) {
    for (let value of values) {
      renderCartProduct(JSON.parse(value));
    }
  }
}
lS();

cartList.addEventListener("click", (event) => {
  if (event.target.dataset.id) {
    const ID = event.target.dataset.id;

    let keys = Object.keys(localStorage);
    for (let key of keys) {
      if (key === ID) {
        localStorage.removeItem(`${ID}`);
      }
    }

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
}); // удаление из корзины 1 элемента

cart.addEventListener("click", () => {
  cartList.classList.toggle("header__basket-list");
  cartSum.classList.toggle("header__basket-bottom");
  clearCart.classList.toggle("header__basket-button");
});

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
  cartProducts.push(card);
  cartList.append(cartElement);
}

clearCart.addEventListener("click", () => {
  cartList.innerHTML = "";
  cartProducts.length = 0;
  localStorage.clear();
});

productCards.addEventListener("click", (event) => {
  if (event.target.dataset.id) {
    const ID = event.target.dataset.id;
    if (products == null) {
      console.log("ничего нет");
    } else
      for (let card of products) {
        if (ID == card.id) {
          let localCard = JSON.stringify(card);
          localStorage.setItem(`${ID}`, localCard);
          renderCartProduct(card);
        }
      }
  }
}); // добавление в корзину карточки

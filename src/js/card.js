function renderCard(cards) {
  const PRODUCT_ID = "product__cards";
  const productCards = document.getElementById(PRODUCT_ID);

  for (const card of cards) {
    const cardElement = document.createElement("div");
    cardElement.classList.add("product__card");
    cardElement.innerHTML = `
  <div class="product__card__image">
    <img src="${card.image}" alt="photo">
  </div>
  <div class="product__card__info">
    <h3 class="product__card__title">Наименование: ${card.name}</h3>
    <p class="product__card__previous">Цена со скидкой: ${card.previousPrice}</p>
    <p class="product__card__price">Цена: ${card.price}</p>
  </div>
  <div class="product__info-plus">
      <button class="button"><i class="fa-solid fa-square-plus add-cart" id="${card.id}"></i></button>
    </div>
  `;

    productCards.append(cardElement);
  }
}

let productCards = document.querySelector(".product__cards");

function renderCardProduct(card) {
  const cartList = document.querySelector(".header__basket-list"); // ul
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

const cartList = document.querySelector(".header__basket-list");
const clearCart = document.querySelector(".header__basket-button");

clearCart.addEventListener("click", () => (cartList = ""));

productCards.addEventListener("click", (event) => {
  if (event.target.id) {
    const ID = event.target.id;
    fetchOneCard(ID).then((json) => renderCardProduct(json));
  }
});

function fetchOneCard(id) {
  return fetch(`https://62b5dfa342c6473c4b3c12c2.mockapi.io/card/${id}`)
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
}

function fetchCards() {
  return fetch("https://62b5dfa342c6473c4b3c12c2.mockapi.io/card")
    .then((response) => {
      return response.json();
    })
    .then((json) => {
      return json;
    });
}

fetchCards().then((json) => {
  renderCard(json);
});
